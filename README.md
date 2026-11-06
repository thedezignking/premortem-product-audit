# Premortem Product Audit

A detailed product audit skill for people building with coding agents. Use it to examine whether an idea or product solves a meaningful customer problem, delivers its promised outcome, and gives a buyer enough reason to adopt, pay and keep using it.

The audit starts with a concrete imagined failure, works backward through plausible causes, and checks those causes against evidence. Imagined failure is an investigation technique, not a prediction. The skill can conclude that the direction is supported and identify what to preserve.

**Source of truth:** [Product_Audit_Skill_Specification.md](Product_Audit_Skill_Specification.md). The implementation follows that specification; installation documentation adds platform-specific packaging information.

## Contents

- [What the skill covers](#what-the-skill-covers)
- [Quick global installation](#quick-global-installation)
- [Manual global installation](#manual-global-installation)
- [Project-only installation](#project-only-installation)
- [Activation and example prompts](#activation-and-example-prompts)
- [Verify your installation](#verify-your-installation)
- [Updates and removal](#updates-and-removal)
- [Troubleshooting](#troubleshooting)
- [Other agents and chat use](#other-agents-and-chat-use)
- [Package structure and maintenance](#package-structure-and-maintenance)

## What the skill covers

| Mode | Use it for | Main decision |
| --- | --- | --- |
| Idea | A concept, proposal, prototype thesis or planned business | What must be validated before committing more build effort? |
| Existing product | An MVP or live product, with whatever code, workflow and commercial evidence is available | Where does the connection between promise, delivered value and commercial results break? |
| Feature or roadmap | A proposed feature, backlog or development priority | Does the work remove an evidenced obstacle to the intended outcome? |

Across these modes, the audit considers market, problem, alternatives, solution fit, delivered value, willingness to pay, build direction, product experience, positioning/acquisition, pricing/economics, and retention/expansion. It goes deeper where the next decision depends on the answer.

An audit produces a conditional verdict, product thesis, evidence coverage, supported strengths, prioritized findings, the best-supported explanation of the gap, next actions and decision gates. Major findings include a failure mechanism, evidence status, counterevidence, customer/commercial consequences and a correction or test.

The skill works from a written idea alone, but its conclusions will be provisional. For existing products, useful inputs include a repository, a demo, screenshots, customer observations, payment/renewal records, support evidence and a roadmap. Share only material you are authorized to use. Credentials and raw customer personal information are not needed for a normal audit.

Invoking the skill requests an audit and recommendations. It does not by itself request product changes, customer outreach, production writes or publication. If you also request implementation, the agent should follow that explicit scope and its normal permissions.

## Quick global installation

“Global” means available across projects for your current user in that environment. It does not mean installed for every OS user, cloud session, remote development machine, container or WSL distribution.

Clone this repository, then open a terminal in the folder containing this README and `skills/`:

```sh
git clone https://github.com/thedezignking/premortem-product-audit.git
cd premortem-product-audit
```

The commands below use that local copy. You can also download the repository as a ZIP from GitHub, or unpack [`dist/premortem-product-audit-source.zip`](dist/premortem-product-audit-source.zip), and run the commands from the unpacked folder.

The optional [Vercel Skills CLI](https://github.com/vercel-labs/skills) supports multiple agents and currently requires Node.js 22.20 or later. It is a separate third-party installer. Manual installation below does not need Node.js, Python or a package manager.

First preview the available skill:

```sh
npx skills add . --list
```

Then install globally:

```sh
npx skills add . --global --skill premortem-product-audit
```

Or install globally for the three named agents:

```sh
npx skills add . --global --skill premortem-product-audit --agent codex claude-code opencode
```

Or target just one:

```sh
npx skills add . --global --skill premortem-product-audit --agent claude-code
```

Review the installer's target paths and prompts. If symlinks are unavailable, add `--copy`. On Windows, use `npx.cmd` if PowerShell blocks the `npx.ps1` launcher. These options and local-directory sources are documented in the [Skills CLI reference](https://github.com/vercel-labs/skills/blob/main/docs/commands.md).

Start a fresh agent session after installation, then run the verification below. These are documented installation commands; see [validation results](tests/VALIDATION.md) for what was actually exercised in this package.

## Manual global installation

Copy the **whole** `skills/premortem-product-audit` folder, including its references. Do not copy only `SKILL.md`, and do not copy the repository root into a skill directory.

### Choose a destination

| Agent | Global skill directory | Explicit invocation |
| --- | --- | --- |
| Codex | `~/.agents/skills/premortem-product-audit/` | `$premortem-product-audit` |
| Claude Code | `~/.claude/skills/premortem-product-audit/` | `/premortem-product-audit` |
| OpenCode | `~/.config/opencode/skills/premortem-product-audit/` | Ask it to load `premortem-product-audit` using its skill tool |

These locations and invocation mechanisms follow [OpenAI's skill documentation](https://learn.chatgpt.com/docs/build-skills), [Claude Code's skill documentation](https://code.claude.com/docs/en/skills), and [OpenCode's skill documentation](https://opencode.ai/docs/skills/). Paths were checked on **6 November 2026**. OpenCode also reads `~/.agents/skills` and `~/.claude/skills`, so an existing installation there may already be available; avoid creating an unnecessary third copy.

The `~` above is the home directory of the user running the agent. Windows PowerShell examples use `$HOME` only to read that location. If the agent runs inside WSL, SSH or a container, install in that environment's home directory. Customized configurations and managed installations can change discovery; check the host's settings when these defaults do not apply.

### macOS / Linux / WSL: Bash or Zsh

Run from the source repository root. Choose **one** `audit_parent` line for the agent you want:

```sh
# Codex; also discoverable by OpenCode
audit_parent="$HOME/.agents/skills"

# Claude Code: use this instead
# audit_parent="$HOME/.claude/skills"

# OpenCode only: use this instead
# audit_parent="${XDG_CONFIG_HOME:-$HOME/.config}/opencode/skills"

audit_source="$PWD/skills/premortem-product-audit"
audit_target="$audit_parent/premortem-product-audit"

if [ ! -f "$audit_source/SKILL.md" ]; then
  printf '%s\n' 'Source not found. Run from the folder containing README.md and skills/.'
elif [ -e "$audit_target" ] || [ -L "$audit_target" ]; then
  printf '%s\n' "Already exists: $audit_target. Follow the update instructions."
else
  mkdir -p "$audit_parent" &&
    cp -R "$audit_source" "$audit_target" &&
    printf '%s\n' "Installed: $audit_target"
fi
```

If your OpenCode configuration directory is customized, set `audit_parent` to that actual directory's `skills` child.

### Windows: PowerShell

Run from the source repository root. Choose **one** `$auditParent` line:

```powershell
# Codex; also discoverable by OpenCode
$auditParent = Join-Path $HOME '.agents/skills'

# Claude Code: use this instead
# $auditParent = Join-Path $HOME '.claude/skills'

# OpenCode only: use this instead, or use your configured config directory
# $auditParent = Join-Path $HOME '.config/opencode/skills'

$auditSource = Join-Path (Get-Location).Path 'skills/premortem-product-audit'
$auditTarget = Join-Path $auditParent 'premortem-product-audit'

if (-not (Test-Path -LiteralPath (Join-Path $auditSource 'SKILL.md') -PathType Leaf)) {
    throw 'Source not found. Run from the folder containing README.md and skills/.'
}
if (Get-Item -LiteralPath $auditTarget -Force -ErrorAction SilentlyContinue) {
    throw "Already exists: $auditTarget. Follow the update instructions."
}
New-Item -ItemType Directory -Path $auditParent -Force -ErrorAction Stop | Out-Null
Copy-Item -LiteralPath $auditSource -Destination $auditTarget -Recurse -ErrorAction Stop
Write-Output "Installed: $auditTarget"
```

The resulting layout must be:

```text
<chosen skill directory>/
└── premortem-product-audit/
    ├── SKILL.md
    ├── agents/openai.yaml
    └── references/
        ├── audit-lenses.md
        ├── evidence-and-tests.md
        ├── repository-audit.md
        ├── report-template.md
        └── worked-example.md
```

The `agents/openai.yaml` file supplies Codex metadata; the portable instructions live in `SKILL.md` and `references/`. Other hosts do not need to interpret the Codex metadata.

## Project-only installation

Use project scope when a team should receive the skill with a repository, or when you do not want it available in unrelated projects.

With the optional installer, run from the target project and pass the source repository's absolute path, omitting `--global`:

```sh
npx skills add "/absolute/path/to/this/repository" --skill premortem-product-audit --agent codex
```

For a manual install, copy the skill folder into the target project's `.agents/skills/` for Codex, `.claude/skills/` for Claude Code, or `.opencode/skills/` for OpenCode. Keep the folder name `premortem-product-audit`. Commit that project copy only if sharing it with the team is intended. Prefer one installation scope for each host to avoid confusion about which copy is loaded.

## Activation and example prompts

The skill's YAML description contains the product-audit use cases and related wording. Supporting hosts can select it when the prompt matches. Automatic selection is a model/host decision, not a guaranteed keyword hook. A global installation makes the skill discoverable; it does not force an audit into every coding request.

### Natural prompts

```text
Do a premortem on this MVP before I launch.
```

```text
Is this product idea worth building? Challenge the customer problem,
willingness to pay and assumptions before I spend another month on it.
```

```text
Audit this repository against what the landing page promises.
Find where the core workflow fails to deliver customer value.
```

```text
Users sign up but do not pay. Audit the product and commercial reasons,
using the evidence I have rather than assuming we need more features.
```

```text
Premortem this roadmap. Which work addresses our actual customer problem,
and which should we defer before the next revenue milestone?
```

### Explicit invocation

In Codex:

```text
Use $premortem-product-audit to audit this MVP before launch.
Our target is independent recruiters; the promised outcome is a usable
candidate shortlist. Inspect the core workflow and explain what evidence
is still needed to assess willingness to pay.
```

In Claude Code:

```text
/premortem-product-audit Audit this product against its promise and our next paid-customer milestone.
```

In OpenCode:

```text
Load the premortem-product-audit skill and use it to audit this product.
Focus on the customer outcome, build direction and willingness to pay.
```

A definition request, ordinary bug fix, narrow code/security/accessibility review or launch-copy request should not start a full product audit on its own.

### Give the audit a decision

For more useful results, add the stage, target customer, buyer, promised outcome, current workaround, price, milestone and available evidence. Provide what you have; missing data should become a stated uncertainty, not invented validation.

```text
Use the premortem-product-audit skill.
We have an MVP for independent design studios that creates client proposals.
The studio owner buys it. We plan to charge $49/month.
We have 12 demos and 2 paid pilots, but no renewals yet.
Our decision is whether to add team features or first improve first-proposal completion.
Inspect this repository and the attached pilot notes. Give a detailed audit,
prioritized findings and decision gates. Return the report here.
```

The report format is detailed by default. Ask for a quick audit when needed; the agent should compress the presentation while retaining evidence limits and actionable findings.

## Verify your installation

1. Start a fresh agent session in a different project to check global scope.
2. Check the host's available skills. In Codex CLI/IDE, inspect `/skills` or the `$` selector; in Claude Code, try the slash command; in OpenCode, ask it to list available skills.
3. Invoke the skill explicitly with a small idea. Confirm the agent loads `SKILL.md` and the appropriate references if the host exposes tool activity.
4. In another fresh session, try: “Do a premortem on this MVP before I launch.” Confirm the actual skill loads, rather than relying only on similar wording in the response.
5. Check that the answer distinguishes observations from claims, treats failure as hypothetical, preserves supported strengths and proposes a decision-relevant test.

If using the optional installer, `npx skills list --global` also shows registered global installations. Files appearing on disk, being listed by an installer, and being selected by a model are different checks. See [behavioral scenarios](tests/scenarios.md) for a fuller evaluation suite.

## Updates and removal

For a manual update, download the new source, then move the existing **individual skill folder** to a backup location outside all skill discovery directories. Copy the new complete folder into the original destination and verify it. Keep any personal edits in the backup and reapply them deliberately. Do not merge a new release over old references, because removed files can remain active.

For rollback, move the new individual folder out of discovery, restore the saved folder and start a fresh session. For manual removal, move just `premortem-product-audit` out of discovery, or send that individual folder to the OS trash. Do not delete `.agents`, `.claude`, `.config` or the parent `skills` directory.

If you used the optional installer, manage that installation with its commands, such as `npx skills remove premortem-product-audit --global`. For local-source installs, update your local source and rerun the original `add` command; review the replacement prompt. For published remote-source installs, consult the installer's update support. Do not mix installer-managed links with manual copies without first checking the target.

## Troubleshooting

| Symptom | What to check |
| --- | --- |
| Skill not listed | Exact filename `SKILL.md`, exact folder name, valid frontmatter and the correct host/user/environment. The path must end in `premortem-product-audit/SKILL.md`. |
| Listed but not selected | Try explicit invocation. Check skill permissions, description visibility and context limits. Keep the use-case words near the start of the description. |
| Activates for unrelated work | Restore the packaged description or narrow a local customization. Avoid descriptions such as “use for every product or coding task.” |
| References cannot be read | Copy the full skill folder. Resolve links relative to that folder, not the audited product repository. |
| Two versions appear | Inspect project and global locations, plus shared directories read by multiple hosts. Keep one intended version; do not assume hosts merge them. |
| Windows install command fails | Use the PowerShell block in PowerShell, not the POSIX block. Quote paths with spaces. Use manual copy if installer symlinks fail. |
| Works locally but not remotely | Install in the environment where the agent actually runs. Local global folders are not automatically cloud/account uploads. |
| Audit sounds certain despite no data | Ask it to apply the evidence labels, list inspection limits and revisit the conditional verdict. Use the test cases to check a modified skill. |
| A report becomes an implementation | Restate the requested scope. Audit mode itself authorizes diagnosis and recommendations, not automatic product edits. |

For Claude Code, keep automatic invocation enabled; adding `disable-model-invocation: true` disables it. This package omits that opt-out. For Codex, `agents/openai.yaml` explicitly allows implicit invocation. OpenCode must have its skill tool and permission for this skill enabled. See the host documentation linked above for managed-policy restrictions.

## Other agents and chat use

The skill uses the portable [Agent Skills format](https://agentskills.io/specification): a named folder with YAML metadata in `SKILL.md` and relative supporting files. For another compatible agent, consult its documented skill directory and install the whole folder. The [Skills CLI agent list](https://github.com/vercel-labs/skills/blob/main/docs/agents.md) can help select an installer target. Support for the file format does not prove that every host implements the same activation, tool permissions or UI.

For an assistant without native skills, provide `SKILL.md` and the relevant reference files as conversation context and ask it to apply them. For a chat upload feature that accepts skill packages, follow that product's upload instructions. A local global install is not an account-level chat installation, and manually supplying instructions does not create automatic activation in future conversations.

No proprietary integration, browser, subagent system or executable audit script is required. Tools improve inspection when available; their absence limits the evidence, not the ability to produce a provisional audit.

## Package structure and maintenance

```text
README.md                              Installation and usage guide
Product_Audit_Skill_Specification.md    Authoritative product requirements
skills/premortem-product-audit/
  SKILL.md                            Shared method, modes and output contract
  agents/openai.yaml                  Codex UI and implicit invocation policy
  references/audit-lenses.md          Detailed full-cycle investigation
  references/evidence-and-tests.md    Evidence handling and validation design
  references/repository-audit.md      Inspecting build direction and workflows
  references/report-template.md       Detailed reporting structure
  references/worked-example.md        Example showing calibrated findings
tests/scenarios.md                    Behavioral and activation test cases
tests/VALIDATION.md                   Executed checks and their limitations
tests/check-package.mjs               Repeatable package/manual-install checks
```

Keep the source specification unchanged unless its requirements are intentionally revised. When editing the skill, map changes back to it, run the behavioral cases that could be affected, and check all relative links. Do not add project-specific business assumptions to the reusable skill.

Run `node tests/check-package.mjs` to check metadata, local file links and the manual install snippets against temporary destinations. Node.js is needed for this maintainer check, not for using the skill. The check does not install globally or perform live host activation tests.

The human installation guide stays outside the installed skill so it does not consume audit context. Detailed references are routed by need rather than all loaded for every request.

### Publishing for other people

The local install commands work before publication. To distribute publicly, choose a repository or download location and a license, then publish the package. Replace the local `.` source in the installer command with that real repository URL or `owner/repository`; retain `--global --skill premortem-product-audit` and the intended agents. Test that exact public command before advertising it. No public repository, registry entry or license grant is asserted by this source package.
