# Full-cycle investigation guide

Use this guide to generate and investigate causal explanations, not to fill a generic startup checklist. In a full audit, screen every area; go deep where evidence and the next decision warrant it. Mark unknown and nonapplicable areas explicitly. For a focused audit, use the relevant areas and the dependencies that could change the conclusion.

## 1. Intended market and buying roles

Identify the specific people or organizations, the situation in which the problem occurs, and the relevant constraints. Separate user, beneficiary, buyer, budget holder, approver and implementation owner. A user who loves the workflow may be unable to buy; the buyer may care about a different outcome.

Inspect customer descriptions, interview recruitment, actual accounts, sales records and lost deals. Look for meaningful segment differences in urgency, job frequency, budget, existing tools and implementation burden. “Small businesses” or “creators” may conceal several incompatible jobs.

**Failure mechanism:** The team optimizes for enthusiastic users outside the reachable buying segment, so interest does not become a funded purchase.

**Discriminating evidence:** Do actual buyers in the intended segment describe a recent triggering event and a funded way to respond? Are paying users representative or exceptional? What differs between purchasers and nonpurchasers?

**Possible next test:** Observe the same job and present the same bounded offer to a narrowly defined segment. Compare meaningful commitments and blockers. Narrowing is justified by evidence of a coherent need, not by choosing a convenient demographic label.

## 2. Problem, trigger and consequence

Reconstruct what happens today: the last concrete occurrence, who handled it, how often it occurs, what it costs or prevents, and what triggered action. Separate inconvenience from costly delay, error, risk or missed opportunity. Respect nonfinancial value when that is the actual buying reason.

Inspect recent workflow examples, support requests, workarounds, lost time, observed errors and accounts of abandoned attempts. Quantify consequences only when inputs are supplied or assumptions are labeled.

**Failure mechanism:** The product addresses something people acknowledge but rarely prioritize, so adoption effort exceeds urgency.

**Counterevidence to seek:** Existing expenditure, repeated manual effort, deadlines, active searches for solutions, or costly consequences. No purchase is not proof that the problem is absent: budget, authority and timing can intervene.

**Possible next test:** Examine the last occurrence with the affected person and the buyer. Ask for the actual steps and consequence, then test a specific offer when the trigger recurs.

## 3. Alternatives and switching

Include spreadsheets, general-purpose AI, manual service, outsourcing, an incumbent tool, an internal system and doing nothing. Understand why each is acceptable. “No direct competitor” is not equivalent to “no alternative.”

Inspect current workflows, tool use, migration requirements, contracts, integrations, collaboration needs and buyer objections. Verify external feature/pricing claims when possible and record the date and source.

**Failure mechanism:** The product offers a local improvement but switching, retraining, migration or organizational risk exceeds the benefit.

**Counterevidence to seek:** Actual switching, rejected incumbent options, time saved after full integration cost, or a situation where the current approach cannot serve the job.

**Possible next test:** Run the new and current workflow on a comparable real task. Include setup, correction, handoff and exit costs; do not compare only the fastest demo step.

## 4. Solution fit and mechanism

Ask how the proposed intervention changes the cause of the problem. Identify the assumptions connecting a feature to an outcome. Check whether it fits the user's skills, available data, devices, workflow, permissions and organizational constraints.

Inspect product requirements, workflow maps, demos and task attempts. Separate an attractive output from an outcome someone can use. For example, generating a shortlist is not a hiring decision if essential context, review or handoff remains impossible.

**Failure mechanism:** The product automates an easy visible step while the real bottleneck remains elsewhere.

**Counterevidence to seek:** Successful complete tasks, reduced rework, downstream acceptance and users repeatedly choosing the new workflow.

**Possible next test:** Deliver the complete outcome manually or through a thin workflow before expanding automation. Observe where effort is actually spent.

## 5. Delivered value and first outcome

Define an observable value event in the customer's terms. A login, generated document or dashboard visit is not automatically that event. Compare total effort, money, risk and time to the current alternative.

Inspect task completion, time to a usable outcome, errors avoided, useful output accepted by a downstream participant and realized benefit. Include setup and founder assistance. Distinguish novelty from repeated utility.

**Failure mechanism:** Users complete visible product interactions but fail to reach a useful outcome, or the outcome costs too much effort to obtain.

**Counterevidence to seek:** Customers independently complete and use the result, explain the benefit through recent behavior, and return at the natural job frequency.

**Possible next test:** Observe a representative user completing the whole job with minimal coaching. Record assistance, failed steps and whether the result is actually used. A demonstration by the founder does not answer the same question.

## 6. Willingness to pay

Assess this separately from problem existence and free product value. Identify who can approve spending, why now, where the budget comes from and what alternative expenditure the purchase replaces.

Inspect actual offers, purchases, paid pilots, deposits, refunds, renewals, rejected offers and budget discussions. Qualify relationship, price, discounts, bundled services, procurement conditions and founder labor. A discounted pilot sold to a friend is useful evidence with limits, not proof of broad demand.

**Failure mechanism:** The people receiving value lack the authority, incentive, budget or urgency to fund the proposed offer.

**Counterevidence to seek:** Independent buyers purchase at intended terms, obtain the outcome and renew or expand under a sustainable delivery model.

**Possible next test:** Present a concrete offer to eligible buyers with clear scope, price and terms. Record commitments and objections. Do not count compliments or free signups as a passed payment test. Recommend the test; contacting buyers or taking money requires user authorization.

## 7. Build direction and scope

Connect roadmap items, implementation and recent development effort to the core job and current milestone. Ask which observed obstacle each item removes. Look for unrelated capabilities, duplicated workflows, unfinished critical paths and premature breadth.

Inspect roadmap rationale, backlog, release history, relevant code and customer evidence. Use [repository-audit.md](repository-audit.md) for implementation tracing. Technical choices belong in the audit when they materially affect outcomes, delivery cost, reliability, customer requirements or the ability to change direction.

**Failure mechanism:** The team ships substantial work without relieving the constraint that prevents value or purchase.

**Counterevidence to seek:** Release changes correspond to improved completed outcomes or remove a confirmed prerequisite for real buyers. Some infrastructure work is necessary even when customers do not request it explicitly.

**Possible next test:** Map the next few items to the outcome, evidence and dependency they serve. Compare a minimal fix or manual intervention with the proposed build. Defer work with weak linkage until its premise is tested.

## 8. Product experience, reliability and trust

Trace discovery, onboarding, essential setup, first useful outcome, repeat use and recovery. Consider permissions, data correctness, accessibility and error handling where they affect the intended audience's ability to complete the job.

Inspect screens, task recordings, errors, support cases, observed attempts and appropriately scoped tests. A warning in code is not automatically an observed production incident. A technical failure should be connected to the user's task, lost trust or delivery burden.

For AI products, examine representative input/output quality, task-specific failure modes, uncertainty communication, human review, latency, cost and recovery. A fluent answer is not evidence of correctness. Establish who notices a bad output and what happens next.

**Failure mechanism:** Setup or unreliable results consume the benefit, force founder rescue or make the product unsafe to rely on for its promised job.

**Counterevidence to seek:** Independent successful usage, correction paths, acceptable error impact and evidence that assistance declines with onboarding maturity.

**Possible next test:** Observe the disputed step, reproduce an evidenced failure in an appropriate environment and retest the complete outcome after a targeted correction.

## 9. Positioning and acquisition

Ask whether the intended buyer recognizes the relevant situation, outcome and reason to act. Identify where that buyer can be reached and the time, effort and cost of turning a reachable prospect into a customer.

Inspect website claims, offers, channels, funnel definitions, sales objections and actual buying journeys. Separate reach, qualified interest, activation and purchase. Low traffic can prevent meaningful inference about the later funnel. Weak purchase can reflect buyer mismatch or procurement delay even when users receive value.

**Failure mechanism:** A useful product reaches the wrong people, promises the wrong outcome or cannot reach buyers economically.

**Counterevidence to seek:** Qualified inbound demand, repeatable channel results, observed recognition of the offer and deals moving through a realistic sales cycle.

**Possible next test:** Test one defined segment, offer and channel with a bounded budget or effort. Measure the next meaningful commitment, not impressions alone. Do not prescribe a new channel as proven without evidence.

## 10. Pricing and delivery economics

Compare the unit of value and buying preference with the charging model. Examine whether episodic usage fits a subscription, whether procurement allows the offer, and whether price captures enough value to support delivery.

Inspect price actually collected, refunds, payment fees, variable infrastructure/model costs, support, implementation effort and recurring manual work. Include founder labor as a stated estimate when it is not yet costed; do not silently treat it as free. Separate revenue from cash collection and margin from profit.

**Failure mechanism:** Customers buy, but the realized price cannot cover the service they consume, or the charging model conflicts with the way value occurs.

**Counterevidence to seek:** Actual contribution economics at representative usage, bounded onboarding cost, declining assistance and repeatable delivery.

**Possible next test:** Measure a small set of real deliveries and construct a transparent unit calculation. Test packaging or scope with real buyers. Do not invent lifetime value from immature retention or extrapolate a low-volume cost estimate without qualification.

## 11. Retention and expansion

Define the natural opportunity to receive value again. Use mature, eligible cohorts and an interval appropriate to the job. Renewal is observable only once the renewal opportunity has occurred. An annual tax tool need not have daily activity to be useful.

Inspect cohort outcomes, repeat jobs, renewal eligibility, cancellations, refunds, account closures and expansions. Separate customer counts, seats and revenue. Identify whether churn reflects a weak outcome, changed need, closure, buyer turnover, procurement or a superior alternative.

**Failure mechanism:** The first outcome does not recur, the product cannot fit into ongoing work, or the initial purchase depended on an unsustainable delivery arrangement.

**Counterevidence to seek:** Repeat successful outcomes, independent renewals at intended terms, and expansion connected to realized value. Preserve these signals rather than treating every premortem as a negative verdict.

**Possible next test:** Follow an eligible cohort through its next real job or renewal, and examine cancellations against achieved outcomes and delivery conditions. Short-term proxies cannot establish long-term renewal by themselves.

## Connect the areas before recommending work

An onboarding complaint, low paid conversion and weak retention may share one cause or have different causes. Check the sequence and affected population. Present the leading explanation and what would distinguish it from the strongest alternative. End with the smallest action that improves the next decision, not one action per lens.
