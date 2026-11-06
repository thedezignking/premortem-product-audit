# Validation record

Date: 6 November 2026. Source of truth: [Product_Audit_Skill_Specification.md](../Product_Audit_Skill_Specification.md).

This record distinguishes document review, simulated behavior, package checks and real host testing. It does not claim that this skill has been published or installed in a user's global agent configuration.

## Specification coverage

| Specification | Implementation |
| --- | --- |
| 1. Purpose | SKILL.md purpose, governing question and product thesis |
| 2. Premortem foundation | SKILL.md hypothetical failure and evidence confrontation |
| 3. Full-cycle scope | All 11 areas in references/audit-lenses.md and report coverage |
| 4. Three audit modes | SKILL.md mode table and mode-specific investigation |
| 5. How products are built | Four-layer comparison and references/repository-audit.md |
| 6. Intake and collection | SKILL.md decision/evidence boundary and targeted questions |
| 7. Evidence discipline | Evidence labels and references/evidence-and-tests.md |
| 8. Seven-step workflow | Thesis, failure, tracing, evidence, priorities, tests and verdict |
| 9. Major findings | Seven-field contract in SKILL.md and references/report-template.md |
| 10. Final output | Conditional verdict followed by all seven required report components |
| 11. Portability and scope | Relative references, no required proprietary tools, audit action boundary, README |
| 12. Quality criteria | Reusable cases in scenarios.md; executed subset documented below |

An independent read-only review inspected the specification, README, core skill and five references. It found no material omissions or contradictions. It identified a missing link target for this validation record during construction; this file resolves that issue.

## Baseline before writing the skill

A separate agent received the raw prompts for cases A, B and C from [scenarios.md](scenarios.md), without the skill, specification or acceptance criteria. These were model simulations, not real businesses.

The baseline already handled several essential judgments well: it did not equate a waitlist with payment, identified the invoicing handoff gap, and rejected a retention crisis inferred from quarterly usage. The following shortcomings against the specification informed the skill:

| Case | Observed behavior | Gap addressed |
| --- | --- | --- |
| A: proposal-builder idea | Recommended “Recruit ten freelance designers” and a provisional payment gate; listed several risks | Major risks lacked individual counterevidence; the test had a sample but no concrete elapsed-time/effort boundary; thesis and evidence coverage were not explicit |
| B: invoicing excerpt | Correctly qualified the leading conversion explanation as a hypothesis and prioritized the core path | Major technical findings did not consistently carry individual alternative explanations or bounded action plans |
| C: maintenance product | Said “Four support emails are concrete evidence that some users found setup confusing” despite receiving only a founder summary | Risk of treating an uninspected reported artifact as verified evidence; evidence labels and test boundaries were inconsistent |

These are targeted deficiencies, not a claim that the baseline was generally incapable of product analysis.

## Skill-loaded behavioral checks

A fresh agent received the same raw A/B/C prompts, the path to the skill and permission to read its routed references. It did not receive the baseline outputs, grading criteria or source specification. It produced actual audit responses rather than a restatement of the instructions.

| Case | Result | Evidence from the response |
| --- | --- | --- |
| A | Pass for the case's material criteria | Described the idea as “plausible but commercially unvalidated”; marked all traction information reported; preserved the waitlist as a recruitment pool; included alternatives, two-week test boundaries and explicitly provisional purchase/value gates |
| B | Pass for the case's material criteria | Limited the blocker to the supplied excerpt, traced the handoff, preserved draft creation, refused a cohort-free conversion rate, included alternative/manual paths and separate technical/customer/commercial gates |
| C | Pass for the case's material criteria | Preserved reported full-price payment and renewal evidence; treated setup complaints as reported; rejected DAU as a sufficient quarterly-retention measure; proposed bounded acquisition/setup investigations before redesign |

The skill-loaded agent read SKILL.md, audit-lenses.md, evidence-and-tests.md, repository-audit.md and report-template.md. The worked example was available but not loaded in that run.

Limits: one baseline batch and one skill-loaded batch; the three scenarios within each batch shared a context. This does not establish statistical reliability across models or automatic selection in an installed client. The remaining behavioral cases D–J are reusable regression cases and were not executed in this initial batch.

## Discovery simulation

An independent reviewer assessed the six positive and six negative prompts in cases K/L against the frontmatter description. All twelve matched the expected semantic decision. Positives covered premortems, build-worthiness, promise/outcome gaps, paid conversion, roadmap challenges and commercial risk. Negatives covered a type error, security review, launch copy, a definition, responsive styling and button accessibility.

This was a semantic review using the description, not a live host or competing-skill routing test. Prompt-related automatic activation remains host/model dependent.

## Package and installation checks

Run `node tests/check-package.mjs` from the source repository with Node.js available. The check uses built-in modules and no network. It validates this package's restricted frontmatter shape and metadata, resolves local Markdown file links, and executes the README's manual-install snippets against temporary destinations. It compares every installed file by SHA-256, verifies existing destinations remain unchanged, and checks missing-source handling. It removes only the temporary test directory it created.

Executed successfully on Windows with Node.js v24.13.1:

```text
PASS metadata: 473-character description; implicit invocation enabled
PASS 11 local file links
PASS PowerShell instructions: complete copy, existing-target preservation, missing-source refusal
PASS Bash instructions: complete copy, existing-target preservation, missing-source refusal
Package checks passed. Host discovery and model behavior require separate evaluation.
```

The PowerShell commands ran in Windows PowerShell; the POSIX commands ran in Git Bash, not native Linux/macOS or Zsh. The first Bash test failed because the test harness supplied a Windows temporary path to the shell without conversion. The harness was corrected to use Git Bash's `cygpath`; the documented installation snippet was unchanged, and the rerun passed. Temporary copies were removed after each run; global skill directories were not modified.

The bundled skill-creator Python validator was attempted, but its Python environment lacked `PyYAML` (`ModuleNotFoundError: No module named 'yaml'`). The dependency-free package checker validates the actual metadata shape used here; it is not a general YAML parser or official Agent Skills conformance suite.

## Installation documentation sources

The authoring agent fetched and read the following primary documentation on 6 November 2026:

- [OpenAI: Build skills](https://learn.chatgpt.com/docs/build-skills) — user/project discovery, description-based selection and explicit invocation.
- [Claude Code: Skills](https://code.claude.com/docs/en/skills) — personal/project paths, invocation and automatic-selection opt-out.
- [OpenCode: Agent Skills](https://opencode.ai/docs/skills/) — native/shared locations, metadata constraints and native skill loading.
- [Agent Skills specification](https://agentskills.io/specification) — portable folder/frontmatter format and supporting resources.
- [Vercel Skills CLI](https://github.com/vercel-labs/skills) and [command reference](https://github.com/vercel-labs/skills/blob/main/docs/commands.md) — local sources, global installation, agent targeting, copy mode and runtime requirement.

The optional `npx skills` installation was documented from these sources, not executed. No real global installation, live Claude Code/OpenCode/Codex discovery test, Linux/macOS native test, cloud upload or public-source install was performed. Use the README verification procedure before asserting a specific host/version is tested.
