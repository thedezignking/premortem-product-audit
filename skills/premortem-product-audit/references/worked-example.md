# Worked example: a useful draft is not yet an invoice outcome

This is a fictional teaching example. Its product, counts, source identifiers and provisional test limits are not evidence or benchmarks for another audit. It illustrates two major findings from a compact report, not a completed full-cycle audit.

## Supplied material

- A supplied code excerpt shows `createInvoice` saving a draft, a Send handler changing only local state to `sent`, and a payment link pointing to `#`.
- A supplied landing-page excerpt promises “send invoices and get paid in minutes.”
- The founder reports 40 free accounts and two paying pilots. No periods, cohorts, pilot terms or runtime access are supplied.

## Verdict

**The implementation excerpt shows a core-workflow blocker; commercial viability remains unresolved.** Preserve draft creation and verify a complete invoice-to-payment path before expanding the dashboard. The evidence supports a gap in the supplied path, not a conclusion that every deployed path is broken or that the defects explain every nonpurchase.

**Premortem:** Assume the MVP misses its next paid-customer milestone. No target or deadline was supplied, so the scenario is provisional.

**Thesis:** For businesses sending client invoices, the product aims to turn billing information into a delivered invoice and usable payment path. The intended business segment, actual buyer and economic benefit are not yet specified.

## Evidence boundary

| ID | Status | What it establishes | Limit |
| --- | --- | --- | --- |
| E1 | Observed | The supplied excerpt saves a draft, changes local state on Send and has a placeholder payment link | The complete repository and runtime were not inspected |
| E2 | Observed | The supplied marketing text promises delivery and payment | A promise does not establish delivered value |
| E3 | Reported | Founder states 40 free accounts and two paying pilots | Cohorts, terms, assistance, payments and renewals are unverified |

The traced path reaches draft creation, but the excerpt does not implement recipient delivery or a usable payment handoff. User experience, alternative paths and commercial causes are unknown.

**What holds up:** Draft creation is implemented in the excerpt and may be retained. The reported paying pilots warrant investigation as positive evidence of commitment; they do not yet establish repeatable self-service demand.

## F1. The inspected path cannot complete the promised delivery/payment handoff

**Type and priority:** Evidenced blocker within the supplied implementation path. It precedes new dashboard work because delivery and payment access are prerequisites of the promise.

**Failure mechanism:** A user can see a sent status without a demonstrated delivery operation, then reach a nonfunctional payment link. If this path represents the live experience, recipients cannot complete the intended handoff and users lose value and trust.

**Evidence:** E1 and E2 are Observed artifacts. The effect on live conversion is Inferred, not measured.

**Counterevidence / alternative:** E3 reports two paid pilots. They may use manual delivery, another path or a narrower paid service. The excerpt may omit a working integration. Inspecting those paths could narrow or overturn the claim about the product as a whole.

**Consequence:** The customer may fail to deliver the invoice or collect payment, while support absorbs manual intervention and the purchase promise becomes difficult to sustain.

**Correction / test:** First inspect the actual delivery/payment path and pilot operating process. Provisional boundary: one engineering day of targeted investigation. If the gap is confirmed, scope a minimal complete path; do not assume it can be repaired within that same day. Verify it using an authorized isolated recipient and payment sandbox, including persistence and a failed-send recovery case.

**Decision condition:** Defer peripheral dashboard expansion while the chosen core path cannot demonstrate accurate delivery and payment status. After technical verification, observe representative customer completion before asserting realized value. If another working path exists, revise the finding to the specific affected flow and retest its relevance to conversion.

## F2. The current counts do not establish the cause of weak paid conversion

**Type and priority:** Validation gap. It matters after or alongside path verification because the next commercial investment depends on the buyer and offer, not only implementation.

**Failure mechanism:** The team could repair a real defect yet keep addressing people who lack urgency, authority or willingness to purchase at the intended terms.

**Evidence:** E3 is Reported. Eligibility, observation periods, actual outcomes and reasons for buying or declining are Unknown. Do not divide two by forty and call it a verified conversion rate.

**Counterevidence / alternative:** The pilots may already show meaningful value and willingness to pay. Conversely, technical defects may be the primary obstacle. The available evidence cannot distinguish these explanations.

**Consequence:** More work may leave purchase behavior unchanged or hide unsustainable founder assistance.

**Test:** Review the two pilots' actual offer and delivery conditions, then observe eligible prospects using the complete workflow and receiving a concrete offer. Provisional boundary: two weeks and at most five eligible prospect sessions. Recruitment and outreach remain recommended actions requiring authorization.

**Decision condition:** Before starting, agree a provisional minimum commitment criterion tied to the team's next investment. Continue only with the evidence that criterion actually supports. If buyers obtain the outcome but decline the offer, investigate price, budget, urgency and alternatives. If eligible prospects cannot be recruited within the boundary, record an inconclusive payment test and investigate reachability; do not declare no demand.

## Decision sequence

Keep the useful draft capability. Verify whether the missing handoffs are real in the intended path. Correct confirmed blockers and establish technical completion. Then examine customer outcomes and the actual buying decision. Neither a working workflow nor the two reported pilots alone proves broad demand or renewal.
