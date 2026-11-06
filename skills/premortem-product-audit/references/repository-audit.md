# Auditing implementation and build direction

## Establish the inspection boundary

Use authorized repository access and legitimate project instructions. Inspect before executing. A product audit is not automatically a security audit, architecture rewrite, dependency upgrade or request to fix every issue.

Identify what is available: code only, a supplied excerpt, screenshots, a local demo, production observations, tests, logs or customer evidence. Record the version/commit when useful and available. Preserve user changes. Do not read credentials or unrelated personal data to compensate for missing product evidence.

In chat, apply the same method to supplied artifacts and flag where a full path cannot be traced. Reading a code snippet supplied by a user is direct inspection of that snippet; it is not proof that the repository or deployed product was inspected.

## Start from the promise

Inspect the README, landing-page copy, product brief or relevant requirements. Reconstruct who should receive what outcome and what the product implies about speed, effort, reliability and payment.

Find the implementation relevant to that promise. Favor targeted searches and small reads over dumping the entire repository. Inspect the roadmap or backlog if build priorities are part of the request.

## Choose a representative core workflow

Select the path most central to promised value. State the choice and relevant actor. If the product has distinct sides or roles, include the handoff needed for the core outcome rather than treating one side's dashboard as completion.

Trace:

1. **Entry and intent:** How the right user discovers or starts the job.
2. **Identity and access:** Whether the necessary actors can enter the right context.
3. **Required inputs:** Setup, imports, permissions, integrations and data readiness.
4. **Core action:** What the user actually does and what processes it.
5. **Persistence:** Whether the result survives reload and is available to the correct actors.
6. **Handoff:** What another person or system must receive or approve.
7. **Outcome:** The useful result outside the interface, such as an invoice actually delivered or a decision ready to use.
8. **Recovery and recurrence:** What happens on failure, correction and the next real use.

For each important step, record artifact, observed implementation, inferred effect and unobserved runtime/customer behavior. Follow evidence far enough to distinguish a real implementation from mocks, placeholder links, local-only state or absent integrations.

## Inspect the failure paths that affect value

Look for relevant empty/error states, retry behavior, persistence, permission boundaries and output correctness. Trace server-side handling when the promise depends on it; a button or form alone is insufficient.

Consider whether failures leave users uncertain about what happened, silently lose work, display misleading status or require founder rescue. Connect each concern to the job and business consequence. Do not turn a style disagreement into a product finding.

For AI-dependent paths, inspect the task definition, representative input, output validation, review/correction, fallback and usage cost where available. A model call and polished response display do not establish task quality. Do not invent measured accuracy, latency or cost from code alone.

## Inspect how the team allocates effort

Compare the backlog and recent work against the core outcome and current milestone. Identify whether unfinished dependencies block value while peripheral features expand. Ask whether a proposed technical change removes a measured constraint or merely matches a preferred stack.

Recognize legitimate supporting work: reliability, permissions, data integrity, accessibility and maintainability can be essential to customer requirements and sustainable delivery. Explain the concrete dependency rather than treating all nonvisible work as waste.

If delivery uses manual operations, determine what the team actually does, how frequently, with what expertise, and at what cost. Assisted pilots can be useful evidence; they do not prove unassisted self-service or scalable economics.

## Execution and verification

Run relevant diagnostics or an isolated local workflow only when available, appropriate and within authorization. Inspect script definitions and environment assumptions first. Do not start migrations, reset data, send real invoices, trigger billable calls or contact customers merely to complete a product audit.

Prefer a nonmutating or isolated verification of the disputed path. If useful runtime evidence requires additional authority, finish the available inspection and state the exact unresolved question and required access. Do not silently turn production into a test environment.

Record separately:

- Source inspection and the exact component/path it establishes.
- Test execution, command, environment and result.
- Runtime observation and what task actually completed.
- Customer observation and whether the user reached value.
- Commercial evidence and the offer/delivery conditions involved.

Passing tests establish the tested behavior within that environment. Failing tests may reflect a setup issue; diagnose before labeling a product defect. Neither passing tests nor static inspection establishes demand or willingness to pay.

## Useful trace format

| Step | Source / inspected behavior | Limit or missing evidence | Customer consequence if the gap holds |
| --- | --- | --- | --- |
| Start job | Cite the actual entry point | Audience and intent may be unknown | State the relevant friction, not a generic risk |
| Perform action | Cite handler/service/storage behavior | Runtime and downstream dependencies | Explain how completion can fail |
| Receive outcome | Cite delivery/handoff/confirmation | Customer acceptance and actual use | Connect to lost value or trust |
| Repeat/recover | Cite persistence/retry/edit behavior | Real recurrence and operating burden | Connect to renewal or support cost |

For a detailed audit, include this trace or its equivalent. For a concise audit, summarize the most consequential broken connection and cite its source.

## Convert technical evidence into a finding

Use a causal statement: “The inspected send handler updates local UI state without a delivery operation; users on this path can see ‘sent’ without evidence of recipient delivery; this can prevent the promised invoice outcome and damage trust.”

Then qualify it: “Runtime behavior and other delivery paths were not inspected. A separate service or manual pilot process could change the scope of this conclusion.”

Recommend a bounded correction or verification and a decision condition. Do not claim that fixing the handler will resolve all paid-conversion problems. Buyer, segment, price, urgency and other workflow failures remain separate questions.

## If the code is the only evidence

Deliver a useful implementation assessment and a provisional product thesis. State explicitly that market need, usability, live reliability and payment remain unvalidated unless separate evidence supports them. Prioritize which customer/commercial test should follow a complete workflow, and what existing implementation can be preserved.
