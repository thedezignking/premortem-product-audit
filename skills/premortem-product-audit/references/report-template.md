# Detailed audit report

Use this as a reporting contract, adapting headings and depth to the request. Replace prompts with real analysis; omit empty boilerplate. Keep the verdict prominent and findings prioritized. Do not invent data to fill the structure.

## Verdict and decision

State what the evidence currently supports, the decision recommended now, confidence and its limits, and what would change the conclusion. Distinguish the recommendation from a prediction of future success.

Examples of verdict language:

- Direction supported, execution bottleneck identified.
- Plausible but commercially unvalidated.
- Segment or value proposition needs revision.
- Insufficient evidence to decide; a specific next test is available.

Record the mode, current stage, milestone, timeframe if supplied, and hypothetical failure. If the scenario or timeframe is provisional, label it.

## Product thesis

> For [specific audience], [problem in context] causes [consequence]. The product aims to deliver [outcome] through [mechanism]. [Buyer] would pay because [economic or personal value].

Mark unknowns. Explain the current alternative and the user/buyer distinction where they affect the decision.

For an existing product, compare the promise, implementation, experience and commercial result. Summarize the representative workflow traced and where the evidence stops.

## Evidence coverage

List inspected sources with stable identifiers and distinguish reported claims. Include source, status, scope and limits. Explain tool/access limitations and missing evidence that could change the verdict.

For a full audit, account for market, problem, alternatives, solution fit, delivered value, willingness to pay, build direction, experience, positioning/acquisition, pricing/economics and retention/expansion. Mark each inspected, unknown or not applicable; do not promote an unknown into a negative conclusion. A compact table is sufficient.

## What holds up

Identify the strongest supported elements worth preserving. Explain what supports each and its limits. Where evidence is entirely sparse, distinguish a coherent hypothesis from an established strength. Do not invent praise to balance the report.

## Prioritized findings

Use the following structure for each **major** finding. Give it an identifier so actions and tests can refer back to it.

### F1. Specific plain-language finding

- **Type and priority rationale:** Evidenced blocker, material risk, validation gap or lower-priority improvement; explain why it outranks the next concern.
- **Failure mechanism:** The condition/choice, its effect on behavior or delivery, and how it could cause the missed milestone.
- **Evidence and status:** Source identifiers plus Observed, Reported, Inferred or Unknown. Separate the fact from the causal interpretation.
- **Counterevidence / alternative:** The strongest contrary evidence or competing explanation. If none was available, say so and identify what could overturn the finding.
- **Customer and commercial consequence:** The practical effect on value, adoption, payment, renewal or sustainable delivery.
- **Correction or test:** The smallest useful next action, target, observable result and time/resource limit where appropriate.
- **Decision condition:** What result justifies continuing, changing, narrowing, deferring or stopping. Label the threshold user-supplied or provisional and allow inconclusive results when appropriate.

Combine these fields into prose if that reads more naturally; do not drop them. Avoid long lists of minor issues that obscure the leading decisions.

## Why it is not there yet

Explain the best-supported connection between the present state and the missed or at-risk outcome. Connect related findings without counting the same mechanism several times. State the strongest unresolved alternative and the observation that would distinguish it.

If no current gap has been established, say that the premortem identified future risks or validation needs; do not imply that the product is presently failing.

## Next actions

Order actions by the decision they unlock and any actual dependencies. Include keep, fix, test, defer, narrow or stop as appropriate. Do not require one of every category.

| Order | Action | Finding / rationale | Output needed | Boundary or dependency |
| --- | --- | --- | --- | --- |
| 1 | Concrete action | F1 or supported strength | Observable evidence or correction | User constraint or labeled provisional limit |

Assign owners only when known, or suggest a role without claiming someone accepted it. Recommended outreach, product changes and experiments have not been executed merely because they appear in the report.

## Decision gates

| Next commitment | Evidence needed | Continue if | Change / stop / inconclusive if |
| --- | --- | --- | --- |
| Concrete use of time, money or scope | Defined source, target and observation | Labeled decision criterion | Alternative result and next action |

Do not call a small test proof of a large market. Distinguish technical completion, customer value, willingness to pay and retention gates. Close with the few evidence requests most likely to change the assessment, if any.
