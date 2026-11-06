# Evidence, prioritization and validation design

## Evidence ledger

For a detailed audit, give important sources short identifiers such as E1 and E2. Use enough detail that the user can locate and challenge them.

| Field | Record |
| --- | --- |
| Source | File/path and line or section, supplied excerpt, data export, interview/date or URL/access date |
| Status | Observed, Reported, Inferred or Unknown |
| Scope | Population, segment, period, version/environment and sample when known |
| What it establishes | The narrow claim the source can support |
| What it does not establish | Missing context, bias, an uninspected layer or unresolved causal link |

Use real source locations. Never invent line numbers, citations or interview records. For supplied material without a stable file, identify it as the user's statement or supplied excerpt. Quote sparingly and protect confidential details.

An inspected sales export can establish what the export records; it does not establish that every payment settled or that the sample represents the market. A customer statement can establish a reported experience but may need behavioral corroboration. Preserve these limits rather than labeling everything seen in a document simply “observed.”

## What different signals support

| Signal | Reasonable inference | Still unresolved |
| --- | --- | --- |
| Compliment or stated intent | Someone expressed interest | Actual priority, switching, outcome and payment |
| Waitlist or signup | Someone accepted a low-cost entry action | Activation, repeated value and purchase |
| Active use | A defined activity occurred | Whether it achieved the promised outcome |
| Completed real task | Some value may have been delivered in that context | Recurrence, willingness to pay and delivery economics |
| Paid pilot | A buyer committed under stated terms | Repeatability, full-price demand and unsupervised delivery |
| Renewal | An eligible buyer recommitted under stated conditions | Broader market demand and sustainable margins |
| Expansion | An account increased commitment | Whether incentives, discounts or bundled services explain it |

Do not treat this table as an unconditional ranking. A large distorted dataset can be less useful for the specific question than a small directly observed task. Match evidence to the claim being made.

## Denominators, timing and cohorts

Before quoting a conversion or retention rate, establish what entered the denominator, when, whether the event was possible, and whether the numerator is from the same population and window.

- Separate people, organizations, accounts, seats and transactions.
- Separate free users, trial-eligible users, activated accounts, offered buyers and paying customers.
- Identify trial length, payment timing and renewal eligibility.
- Use mature cohorts for recurrence; account for natural task frequency.
- Distinguish an observed zero from “not measured,” “not yet eligible” and “not supplied.”

For example, “2 paying pilots and 40 free accounts” does not automatically establish a 5% free-to-paid conversion rate. It may describe different groups or periods. Explain what additional definition would make the calculation meaningful.

If arithmetic is useful, show the formula, units, inputs and assumptions. Use a provisional scenario or range for unknown inputs, not fabricated precision. Do not invent conversion benchmarks, market size or a numerical probability that the product will fail.

## Competing explanations

Write the suspected mechanism before deciding on a correction. Identify the strongest plausible rival explanation, evidence that would distinguish them, and what is currently unavailable.

Example: Users stop during data import. Possible causes include a broken parser, confusing mapping, missing permissions, data unavailable at trial time, or low urgency. A screenshot of a long form supports setup burden as a hypothesis. An observed parser error supports a narrower implementation failure. Neither alone establishes the main cause of all abandoned trials.

Use counterevidence actively. Paying customers, successful self-service outcomes or renewals may weaken a broad failure claim while leaving a specific segment risk intact. No supplied counterevidence means “not available,” not “there is none.”

## Calibrating severity and confidence

Explain the potential consequence and confidence separately. Prioritize by how much the finding could change the next commitment, how directly the evidence bears on it, how urgent the commitment is, and how cheaply the uncertainty can be reduced.

| Finding type | Appropriate response |
| --- | --- |
| Evidenced blocker | Correct or bypass the demonstrated failure, then verify the affected outcome. Retain scope limits. |
| Material risk | Investigate or mitigate the credible mechanism in proportion to consequence and uncertainty. |
| Validation gap | Design a discriminating test before making the commitment dependent on that assumption. |
| Lower-priority improvement | Defer behind better-supported constraints unless it is a dependency. |

Do not multiply arbitrary scores into an apparently objective ranking. If the user supplies a scoring framework, explain its assumptions and keep evidence limits visible.

## Design a test that changes a decision

State these elements for each leading experiment:

1. **Assumption or mechanism:** The uncertain claim and the strongest alternative.
2. **Target:** The segment, buyer, workflow, artifact or eligible cohort to inspect.
3. **Action:** What is observed, offered, changed or measured.
4. **Observable result:** A usable customer outcome or commitment, with a denominator/window where appropriate.
5. **Boundary:** Time, cost, operator effort or a concrete completion limit appropriate to the test.
6. **Decision condition:** What supports continuing, changing, narrowing, stopping or collecting more evidence.
7. **Threshold provenance:** User-supplied, evidence-derived or explicitly provisional.

A finite sample is useful but may still take months to recruit. Include an elapsed-time or effort boundary when availability is uncertain. Set criteria before the test, not after seeing a favorable result. Provisional criteria are planning choices, not universal benchmarks or proof of product-market fit.

Offer an inconclusive branch when recruitment fails, the task does not recur or the observation window is too short. An inconclusive test may reveal a reachability or timing issue; it does not automatically falsify demand.

## Choose the smallest credible test

| Uncertainty | Candidate test | Avoid substituting |
| --- | --- | --- |
| Is the problem important? | Observe a recent real occurrence and its consequence | A leading “would this be useful?” survey |
| Does the mechanism help? | Deliver the full outcome manually or through a narrow prototype | More interface polish |
| Can users reach value? | Observe representative task completion and required assistance | Founder-led demonstrations alone |
| Will the buyer pay? | Present a concrete offer with actual scope, terms and price | Waitlist growth or free usage |
| Does value recur? | Follow eligible users through another natural job cycle | Daily activity for a quarterly job |
| Is the channel viable? | Bound a segment/offer/channel test and measure qualified commitments | Impressions or traffic without audience context |
| Can delivery sustain itself? | Measure variable cost, support and manual effort on real deliveries | Revenue alone or a speculative lifetime value |
| Is a feature worthwhile? | Test the mechanism with a smaller intervention and compare outcome | Feature votes without the underlying job |

These are recommendations. The skill does not itself authorize sending offers, enrolling customers or processing payments.

## Corrections and validation are different

For an evidenced invoice-send defect, a technical gate might require an authorized test message to reach the intended recipient with accurate persistent status and failure recovery. That validates the repaired path. A later customer gate asks whether eligible users independently complete the job and receive value. A commercial gate asks whether a buyer purchases at stated terms. Do not merge these into a single “validated” label.

Use a similar separation for AI workflows: verify representative output quality and failure handling, observe whether reviewed output is useful in the real task, and assess whether the resulting benefit justifies total effort and price.

## External research and absent tools

Use primary sources for current competitor functionality, pricing and product claims where possible. Record what each source says, its date/access date and why it bears on the user's decision. Vendor statements are not independent evidence of customer outcomes. Treat contradictory or stale information as a limit.

If browsing, analytics, runtime or customer access is unavailable, state which claims remain unverified and proceed with the evidence available. Recommend the one or two evidence requests most likely to change the ranking. Do not fabricate research or turn lack of access into proof of failure.
