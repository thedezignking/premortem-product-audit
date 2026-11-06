// Package and documented manual-install checks; no network or global writes.
// Run: node tests/check-package.mjs
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, mkdtempSync, realpathSync, rmSync } from 'node:fs';
import { resolve, dirname, join, relative, basename, sep } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const skill = join(root, 'skills', 'premortem-product-audit');
const read = (path) => readFileSync(path, 'utf8');
const source = read(join(skill, 'SKILL.md'));
const readme = read(join(root, 'README.md'));
const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
assert.ok(match, 'Missing frontmatter delimiters');
// Validate this package's deliberately restricted YAML shape, not arbitrary YAML.
assert.match(match[1], /^name: premortem-product-audit\r?$/m);
const descLine = match[1].match(/^description: (".*")\r?$/m);
assert.ok(descLine, 'Description must be a quoted scalar');
const description = JSON.parse(descLine[1]);
assert.ok(description.length > 0 && description.length <= 1024);
assert.ok(basename(skill).length <= 64);
assert.match(basename(skill), /^[a-z0-9]+(-[a-z0-9]+)*$/);
assert.match(match[1], /^metadata:\r?\n  version: "[0-9]+\.[0-9]+\.[0-9]+"\r?$/m);
assert.doesNotMatch(source, /\[TODO:|disable-model-invocation: true/);
const ui = read(join(skill, 'agents', 'openai.yaml'));
assert.match(ui, /allow_implicit_invocation: true/);
assert.ok(ui.includes('$premortem-product-audit'));
console.log(`PASS metadata: ${description.length}-character description; implicit invocation enabled`);

function files(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((item) => {
    const path = join(directory, item.name);
    assert.ok(!item.isSymbolicLink(), `Unexpected symlink: ${path}`);
    return item.isDirectory() ? files(path) : [path];
  });
}

let linkCount = 0;
for (const path of [join(root, 'README.md'), ...files(skill), ...files(join(root, 'tests'))]) {
  if (!path.endsWith('.md')) continue;
  for (const link of read(path).matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    const target = link[1].replace(/^<|>$/g, '').split('#')[0];
    if (!target || /^[a-z]+:\/\//i.test(target)) continue;
    const destination = resolve(dirname(path), decodeURIComponent(target));
    assert.ok(existsSync(destination), `Broken link in ${relative(root, path)}: ${target}`);
    const rel = relative(root, destination);
    assert.ok(rel !== '..' && !rel.startsWith(`..${sep}`), `Nonportable link: ${target}`);
    linkCount++;
  }
}
console.log(`PASS ${linkCount} local file links`);

const fingerprint = (directory) => Object.fromEntries(files(directory).map((path) => [
  relative(directory, path), createHash('sha256').update(readFileSync(path)).digest('hex'),
]));
const expected = fingerprint(skill);
const blocks = [...readme.matchAll(/```(sh|powershell)\r?\n([\s\S]*?)```/g)];
const tempRoot = realpathSync(tmpdir());
const scratch = mkdtempSync(join(tempRoot, 'premortem-install-check-'));

function run(shell, args, cwd = root) {
  const result = spawnSync(shell, args, { cwd, encoding: 'utf8', timeout: 20000, windowsHide: true });
  if (result.error) throw result.error;
  return result;
}

try {
  if (process.platform === 'win32') {
    const ps = join(process.env.SystemRoot || 'C:/Windows', 'System32', 'WindowsPowerShell', 'v1.0', 'powershell.exe');
    const block = blocks.find(([_, lang, body]) => lang === 'powershell' && body.includes('$auditSource'));
    assert.ok(block, 'PowerShell manual-install block missing');
    const parent = join(scratch, 'powershell', 'skills');
    const script = block[2].replace("$auditParent = Join-Path $HOME '.agents/skills'", `$auditParent = '${parent.replaceAll("'", "''")}'`);
    const args = ['-NoProfile', '-NonInteractive', '-Command', script];
    const first = run(ps, args);
    assert.equal(first.status, 0, first.stderr);
    assert.deepEqual(fingerprint(join(parent, 'premortem-product-audit')), expected);
    const repeat = run(ps, args);
    assert.notEqual(repeat.status, 0, 'Existing install should be refused');
    assert.match(repeat.stderr, /Already exists/);
    assert.deepEqual(fingerprint(join(parent, 'premortem-product-audit')), expected);
    const missing = run(ps, args, scratch);
    assert.notEqual(missing.status, 0);
    assert.match(missing.stderr, /Source not found/);
    console.log('PASS PowerShell instructions: complete copy, existing-target preservation, missing-source refusal');
  } else {
    console.log('SKIP PowerShell execution: not running on Windows');
  }

  const bash = process.platform === 'win32' ? 'C:/Program Files/Git/bin/bash.exe' : '/bin/bash';
  if (existsSync(bash)) {
    const block = blocks.find(([_, lang, body]) => lang === 'sh' && body.includes('audit_source='));
    assert.ok(block, 'POSIX manual-install block missing');
    const parent = join(scratch, 'bash', 'skills');
    let shellParent = parent;
    if (process.platform === 'win32') {
      const converted = run(bash, ['-c', 'cygpath -u "$1"', 'bash', parent]);
      assert.equal(converted.status, 0, converted.stderr);
      shellParent = converted.stdout.trim();
    }
    const quoted = shellParent.replaceAll("'", "'\\''");
    const script = block[2].replace('audit_parent="$HOME/.agents/skills"', `audit_parent='${quoted}'`);
    const first = run(bash, ['-c', script]);
    assert.equal(first.status, 0, first.stderr);
    assert.deepEqual(fingerprint(join(parent, 'premortem-product-audit')), expected);
    const repeat = run(bash, ['-c', script]);
    assert.match(repeat.stdout, /Already exists/);
    assert.deepEqual(fingerprint(join(parent, 'premortem-product-audit')), expected);
    const missing = run(bash, ['-c', script], scratch);
    assert.match(missing.stdout, /Source not found/);
    console.log('PASS Bash instructions: complete copy, existing-target preservation, missing-source refusal');
  } else {
    console.log('SKIP Bash execution: shell unavailable');
  }
} finally {
  // Only remove the exact directory created above, after resolving its location.
  const actual = realpathSync(scratch);
  assert.equal(dirname(actual), tempRoot);
  assert.ok(basename(actual).startsWith('premortem-install-check-'));
  rmSync(actual, { recursive: true });
}
console.log('Package checks passed. Host discovery and model behavior require separate evaluation.');
