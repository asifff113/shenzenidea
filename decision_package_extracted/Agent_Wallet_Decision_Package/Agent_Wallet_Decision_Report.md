# Agent Wallet: research synthesis and provisional selection

**2026 Shenzhen International FinTech Competition · Topic F · Research cutoff: 13 October 2026**

**Decision status: provisional. No wallet implementation, experiment, transaction or customer interview was performed for this synthesis.** Source documentation establishes that capabilities are described; it does not establish that the proposed integration works. All finalists are CONDITIONAL PASS. None is approved for final implementation selection.

## 1. Executive decision memo

**Provisionally prefer HYBRID-001, ObligationLock: an autonomous accounts-payable wallet that can pay only independently authorized obligations while preserving funds committed to other obligations.** Its value proposition is a narrow financial invariant: an invoice is evidence to reconcile, not authority to spend. A valid vendor address and a daily cap are insufficient when a compromised agent can invent invoices to that vendor.

The most credible first customer is a small treasury whose counterparties already accept the same onchain asset. That gives blockchain a concrete role: independently enforceable shared payment state and settlement. For an ordinary SME paying only bank accounts, an ERP and payment API may solve the problem better. The project must demonstrate that its chosen customers need the chain, not merely that a transfer hash can be produced.

The proposal is an integration hypothesis, not a new wallet primitive. Broad claims of “first safe agent wallet,” “first intent-bound transaction,” “first AI escrow,” or “first autonomous invoice payment” do not survive review. Existing research and products materially overlap. PACE is direct prior art for execution binding [S003]; Cleared and Request weaken invoice-settlement novelty [S016,S035]; a recent e-invoice preprint is an additional threat to uniqueness claims [S018]. These findings reduce the innovation estimate and make an explicit baseline comparison mandatory.

**Runner-up: HYBRID-002, ServiceMeter with failure stop.** It purchases a narrow digital service within a global job budget, verifies an objective result, and stops further spending after failure. Existing signed receipts and idempotency must be enabled in the baseline; simply adding them is not a contribution. The potential contribution is measured reduction in wasted spending after delivery failure while retaining useful task completion.

**Contingency: IDEA-001, bounded invoice payout.** Drop reserve optimization and novel contract logic if they cannot be verified promptly. Keep independently authorized payment terms, one-use execution, aggregate limits, owner recovery and truthful receipt status. It is less differentiated but leads the conservative and strict-security scenarios. If it cannot enforce the one-use mandate through every reachable signing path, it is also a no-go.

Three facts govern the decision. First, generic wallet controls are already widely documented. Second, several reports rely on unsupported security assumptions: maximum loss is not necessarily a daily cap; a hash does not prove a valid financial obligation; MPC does not make an authorized payment financially correct. Third, documentation can conceal a practical blocker: Circle's current spending-policy guide explicitly excludes testnet wallets [S007]. A testnet design cannot assume those controls exist there.

**Strongest argument against ObligationLock:** it may be conventional purchase-order matching and reserve accounting repackaged as an agent wallet, with a new enforcement contract adding risk. If existing systems already enforce the same invariant, or users value simple capped payments equally, the extra complexity is not justified. The recommendation changes to the contingency or runner-up under the falsification conditions in Section 18.

## 2. Source audit, completeness and evidence discipline

All supplied text within the 14 anonymous report boundaries was read before ranking. Report IDs preserve document order and carry no inference about authors or originating systems. Repeated citations were consolidated into external source IDs, not counted as independent corroboration. No report was ranked by style, confidence, length or popularity of its preferred concept.

The input contains 14 report containers, but not 14 complete research reports. The original DOCX SHA-256 is `15d768c66095b62ea5ebf324caa5ac486a5809316607125b0b6d0d63364108f4`. Source anchors refer to extracted paragraph/table blocks, not Word page numbers. The evidence bundle includes the complete anchored text, source table rows, supplied URLs, a named-entity occurrence register and the concept crosswalk. This preserves the original material even where normalization is debatable.

| Report | Source anchors | Coverage and distinctive contribution retained |
|---|---|---|
| R001 | L00001–L00494 | Supplied report read; obligation graph, liquidity reserve, narrow authority, outcome buying and data provenance. |
| R002 | L00495–L00959 | Supplied report read; fast/slow execution lanes, module-version incident, bounded-loss attack harness. |
| R003 | L00960–L01849 | Supplied report read; original-payer refunds, loss certificate, two-sided work bond, policy compiler. |
| R004 | L01850–L02036 | Outline read; explicitly omits full concept detail. Self-funding compute and recovery variants retained. |
| R005 | L02037–L03218 | Supplied report read; inheritance, carbon credits, green bonds, factoring, audit and policy proposals. |
| R006 | L03219–L03224 | All supplied long paragraphs read; formatting is damaged and fragments are missing. Demurrage, bounty proof, dynamic streams, royalties and ad-fraud preserved. C16 absent; C17 only partly recoverable. |
| R007 | L03225–L03242 | Summary only; referenced canvas absent. AEGIS composite retained without inventing its missing catalogue. |
| R008 | L03243–L03469 | All supplied text read; claims ten concepts but supplies five identifiable concepts. Logistics/payment and claims workflows retained. |
| R009 | L03470–L03839 | Supplied report read; MPCGuard, just-in-time liquidity, contract-audit component, prediction markets. |
| R010 | L03840–L04280 | Supplied report read; PACE prior art, cross-backend policy conformance, repayment waterfall, conservative counterparty fallback. |
| R011 | L04281–L04686 | Supplied report read; privacy bridge, tax harvesting, symmetric bonds and memory-scanner ideas. Unsupported “locally tested” language not inherited. |
| R012 | L04687–L04986 | Supplied report read; policy drift, receipt reconciliation, combined invoice/compute treasury. |
| R013 | L04987–L05355 | Supplied report read; hierarchical budget attenuation, policy compilation, multiple rails and honeypot. |
| R014 | L05356–L05556 | Starts at section 7; earlier source memos/catalogue absent. IntentLock, ServiceMeter, MilestoneLatch, benchmark and recovery proposals retained from visible sections. |

This is a comprehensive synthesis of **recoverable supplied content**, not a completeness certificate for absent reports. Recover missing sections before an irreversible selection if they contain a materially different candidate. Missing content is an uncertainty, not a reason to fabricate entries.

Five claim statuses are used: **Verified** means the stated claim is supported at the specified evidence level; **Partially supported** means scope or access is incomplete; **Unverified** means adequate support was not established; **Contradicted** means retrieved evidence or a concrete logical counterexample conflicts with it; **Outdated** means a newer version or status changes it. Verification of vendor documentation is not independent verification of deployed behavior. Research proposals, score estimates and experimental thresholds are analyst judgments.

## 3. Verified requirements and unresolved organizer questions

The following concise checklist is grounded in the published international-track rules [S001]; the co-organizer page corroborates the event [S002].

| Requirement | Check |
|---|---|
| Topic F | Autonomous onchain asset management, transaction execution and risk control. |
| Base scoring | Task completion 40; security/compliance 30; innovation/interaction 30. |
| Bonus | Onchain challenge: 0–5, separate. |
| Team | 2–5 full-time students studying outside Mainland China, Hong Kong, Macao and Chinese Taipei; at least 60% non-Chinese nationals; one team only. |
| Language | English. |
| Submission | 20 October 2026, 23:59 UTC+8; 21:59 Dhaka. Latest timely submission prevails. |
| Materials | Technical documentation; presentation within ten minutes; optional video within five minutes; source/README/GitHub/deployment/tests; security self-assessment covering permission tiers and known risks; real onchain transaction hashes. |
| Finals | 21–23 November; check-in 20 November; at least one attendee. |
| Other | Registration free; independent work and licensed third-party material; entrants retain IP subject to promotional license. |
| Unspecified | Testnet/mainnet, chain/token, transaction count/finality, human-approval boundaries and bonus subcriteria. |

**O1 — execution evidence:** obtain written confirmation that the proposed public testnet, test token and receipt format qualify. A local Anvil hash demonstrates a local test only. Do not present it as public-chain competition evidence.

**O2 — autonomy:** confirm whether setup approval and exceptional human review are consistent with the intended Topic F workflow. The proposed routine path runs unattended after authorization. There is no retrieved rule requiring speculative trading.

**O3 — logistics:** reconcile registration/submission channel, possible early registration closure, preliminary-review dates, and finals attendance/travel conditions. The PDF and co-organizer site serve different functions; a contact address is not automatically a submission address. Confirm roster eligibility rather than inferring it from this chat.

**O4 — dependencies and bonus:** describe the intended SDK/account reuse and hosted services; ask any remaining restrictions and what evidence supports bonus consideration. Licensed reuse is contemplated, but that is not blanket confirmation of every hosted workflow.

Organizer contact listed in the rules: `wangyr@pbcsf.tsinghua.edu.cn`. No message was sent. Mainnet is not an automatic fallback for an unanswered testnet question. A change in network/value requires a concrete lawful execution plan and team authorization.

## 4. Normalization and creative synthesis

The master catalogue contains **70 normalized ideas** and **7 meaningful hybrids**. Workflow families merge cosmetic names; distinct authority mechanisms and financial trust boundaries remain separate. For example, an objective digital milestone, subjective arbitration and physical delivery are separate ideas because their evidence and failure modes differ. A contract-audit assistant is distinguished from the unrelated AgentAudit evidence-ledger product name. Refund control remains a standalone candidate despite appearing rarely.

The catalogue captures every required field: customer/problem, financial workflow and autonomy, onchain action, security, closest alternative, differentiation hypothesis, dependencies, MVP, evaluation, feasibility and report lineage. The original concept crosswalk preserves each recoverable source slot and mapped IDs. Product/research occurrence counts are not scores.

| Hybrid | Interaction that creates value | Added burden |
|---|---|---|
| HYBRID-001 ObligationLock | Authenticated obligations and reserve accounting constrain the same settlement transition. | New stateful execution checks and trusted obligation onboarding. |
| HYBRID-002 ServiceMeter with failure stop | Payment reconciliation plus objective output acceptance limits repeated spending on failed service. | Ambiguous settlement and dishonest receipt handling. |
| HYBRID-003 PolicyProof payment conformance | Compiled policies must preserve financial semantics across two wallet backends. | Two adapters and an independent semantics oracle. |
| HYBRID-004 Refund-aware purchase escrow | Payment, partial release and original-payer refund use one cumulative order record. | Partial-state and dispute complexity. |
| HYBRID-005 Attenuated reserve treasury | Child budgets cannot collectively spend the parent's committed reserve. | Hierarchical accounting, pending operations and revocation. |
| HYBRID-006 Evidence-bound aid wallet | Limited-disclosure eligibility combines with bounded release and return of unused funds. | Proof-system, attestor and beneficiary-exclusion risks. |
| HYBRID-007 Delivery-aware stream shutdown | Independent failure detection stops future payment accrual through restricted cancellation authority. | Telemetry trust and cancellation latency. |

Do not build all seven. Each hybrid must outperform its strongest component on a measurable task. Merely combining audit logging, a chatbot, multiple agents and another chain does not create a defensible capability.

## 5. Competitor and prior-art matrix

“Not verified” below means evidence was not established in this review, not that a feature is absent. A product claim, a standard, a paper and an audited deployed implementation are different evidence classes.

| Existing system | Established overlap | Boundary and implication | Sources |
|---|---|---|---|
| PACE | Typed proposals, deterministic verification, signed approval bound to execution. | Research baseline; cannot claim this mechanism as original. | S003 |
| Cleared | Invoice registry, signed settlement, scoped-agent design. | Roadmap/live deployment distinction unresolved; still material design prior art. | S016 |
| Request | Agent payment requests, negotiation and settlement described. | Broad “first autonomous invoicing” claim fails; verify exact buyer controls separately. | S035,S036 |
| AgentsPay | Capped bill pay, vendor controls, duplicate handling and human escalation claimed. | Centralized-rail alternative directly challenges user-value differentiation. | S017 |
| Verified e-invoice paper | Author claims unique reimbursement and guarded lifecycle. | Full artifact inaccessible; must inspect before asserting distinct invoice safety. | S018 |
| Safe Allowance | Autonomous spend within token allowance. | Does not restrict payee; alone insufficient. | S009 |
| Zodiac Roles/Delay | Parameter permissions and queued execution. | Specific vulnerable versions and composition hazards require release/deployment checks. | S015 |
| ZeroDev | Kernel permissions combine signer, policies and action. | Not a drop-in assertion that Safe and Kernel share enforcement. | S010 |
| Crossmint | Onchain limits, approved counterparties, expiry and revocation documented. | Generic scoped wallet already exists. | S005 |
| Privy | Key-level rules for transfers and signing. | Hosted policy/root trust and every RPC path must be examined. | S011 |
| Turnkey | Scoped non-root signing, consensus and function controls. | Root credentials bypass policy; never place them in agent runtime. | S012 |
| Circle | Agent wallet and policy controls. | Spending policies require mainnet in current guide; reject assumed testnet control path. | S006,S007 |
| MetaMask | Broad wallet operations and current transaction safety pipeline. | Supported-path protections do not establish invoice authenticity. | S008 |
| Coinbase | Agentic Wallet CLI/MCP and AgentKit SDK. | Tools expose different capabilities; verify chosen route and wallet adapter. | S032,S033 |
| Clawnch/Clawmes | Policy-to-delegation caveats described and code published. | NL policy compilation alone is not new. | S013,S014 |
| Autonomify | Enclave/ZK policy checking and delegated execution demo described. | Hackathon maturity; weakens “first ZK agent policy” claim. | S034 |
| x402 | Machine payments, optional signed artifacts and idempotency. | Baseline must enable existing extensions before claiming improvement. | S019–S021 |
| AP2 | Signed payment authority and checkout binding. | Mandate semantics are prior art; chain enforcement is implementation-specific. | S022 |
| Nevermined | x402 payment integration. | Delivery-quality differentiation needs a direct feature/behavior comparison. | S023 |
| Kite and Virtuals | Agent commerce, escrow and evaluation/settlement. | Generic agent marketplace and evaluator escrow are crowded. | S024,S025 |
| ERC-8183 | Draft job escrow/evaluator state machine. | Interface/reference code is not an audit or trustworthy delivery oracle. | S004 |
| Sablier/Superfluid | Adjustable streams and stream operations. | “Dynamic streaming” alone is existing capability. | S037,S038 |
| AgentWallet | Search excerpt distinguishes different cap coverage by tool. | Full page inaccessible; treat as a concrete bypass hypothesis, not a reproduced exploit. | S039 |
| Mastercard | Machine-payment controls across rails announced. | Challenges generic multiple-rail novelty; deployment access not tested. | S040 |

Other report-cited products and research remain in the searchable mention register, including Skyfire, BNB, OKX, Olas, Trustless Work, Cobo, Phylax, BOB Pakt, HJS, VCAP, Verix, Fundline, SnowGate and Proof-Gated Signing. Their unverified detailed capabilities are not silently promoted to facts. None is a critical MVP dependency on the strength of a report-only mention.

## 6. Disagreements and corrections that change selection

| Disagreement | Resolution | Selection effect |
|---|---|---|
| “Onchain enforcement is rare/only Safe” versus documented scoped wallets | Current Crossmint and delegation documentation directly conflicts with the broad claim. | Reduce generic policy-wallet novelty. |
| “Intent/audit binding is new” versus PACE | Prior art is material even if not production software. | Require a narrower financial invariant. |
| “No conditional agent escrow exists” versus commerce protocols | Escrow and evaluator settlement already exist. | Judge verifier quality, not escrow presence. |
| “Static Sablier” versus Flow | Adjustable-rate capability is documented. | Dynamic-stream idea needs outcome improvement. |
| “Zero-loss defender” versus operational reality | False pause, gas cost, delayed containment and faulty recovery remain. | No zero-loss security score. |
| “Daily cap = loss bound” versus repeated resets | Bound depends on time, replenishment, concurrent sessions and outstanding grants. | Enforce non-resetting aggregate demo budget. |
| “Allowlist validates invoice” versus fabricated authorized-vendor invoice | Address legitimacy and obligation legitimacy differ. | Separate owner-approved PO authority from invoice extraction. |
| “Two agents + one human, threshold two” versus role logic | Two agents can satisfy threshold without the human. | Require named-role approval where promised. |
| “Hash = justified decision” versus integrity-only evidence | A commitment can faithfully preserve a false statement. | Separate provenance, authority, execution and outcome. |
| “Fast inclusion = final” versus chain finality | State-machine labels must distinguish them. | No optimistic paid/finalized claim. |
| “Reputation makes credit safe” versus empirical manipulation | Identity and feedback do not establish repayment ability. | Defer autonomous credit and reputation-based cap increases. |
| “One-week suite” versus unavailable integration | No supplied execution evidence; Circle testnet policy path unavailable. | Narrow scope and conduct dependency experiment first. |

R005 and R009 also contain score arithmetic/aggregation problems. Their totals were not carried forward. Quoted market sizes, adoption rates, incident percentages, costs and promised performance were not used to manufacture demand or feasibility evidence. Current CaMeL, CrAIBench and FinVault records also require version/status correction [S028–S031].

## 7. Hard gates and financial exposure

Every candidate must satisfy G1 real financial problem; G2 justified blockchain; G3 meaningful autonomous action; G4 verifiable execution; G5 restricted signing outside the model; G6 non-prompt enforcement; G7 aggregate bounded exposure; G8 available/testable dependencies; G9 lawful viable workflow; G10 supported trust assumptions; and G11 organizer compatibility. **A score cannot override a failed gate.**

| Candidate class | Current gate | Exact issue, severity and evidence | Correction and disposition |
|---|---|---|---|
| All five finalists | CONDITIONAL PASS | Critical: no E1–E7 execution evidence; O1–O4 unresolved; customer value untested. | Remain candidates; no final selection until conditions pass. |
| Unrestricted signing, prompt-only restrictions | FAIL | Critical: compromised agent directly controls value; cannot claim containment. | Remove raw/root authority; prove restricted path before reconsideration. |
| Circle mainnet-policy-as-testnet design | FAIL specified architecture | Critical unavailable dependency [S007]. | Select a supported test environment/control implementation; do not quietly remove policy. |
| Read-only ledger, benchmark, scanner, identity or compliance dashboard | FAIL standalone | Major Topic F execution/autonomy gap. | Pair with a bounded financial task; retain as component. |
| Unrestricted trading, leverage, cross-chain treasury | FAIL current scope | Critical capital/protocol exposure, route and oracle uncertainty. | Local/fork research only; bounded variants deferred beyond deadline assumptions. |
| Autonomous subjective escrow or physical goods “atomic DvP” | FAIL as claimed | Critical oracle/evaluator truth gap; physical delivery is not a chain state transition. | Objective digital criterion or human dispute authority; retain narrowed variant. |
| Agent credit/factoring, inheritance, insurance, green bonds, tax optimization | FAIL current deployment scope | Critical underwriting, authority or legal workflow not established. | Synthetic demonstration or qualified regulated partner/review; defer live use. |
| ZK/private policy and privacy bridges | CONDITIONAL PASS research; defer MVP | Circuit, attestation and privacy properties unverified; high integration burden. | One isolated predicate with proof and disclosure tests; no broad privacy claim. |
| Defensive-only wallet | CONDITIONAL PASS | Containment utility plausible; zero-loss/guaranteed rescue unsupported. | Narrow pause/revoke powers; test owner recovery and operational cost. |
| Generic wallet-as-a-service/marketplace | CONDITIONAL PASS technically; strategic defer | Existing infrastructure overlaps; differentiated customer need unproven. | Select one underserved workflow rather than rebuild platform breadth. |

For a compromised model/session credential, define a conditional bound over **all reachable authority**: remaining lifetime allocations across concurrent grants and reset windows, spendable replenishments, standing allowances, pending authorizations, escrow/stream exposure, and gas. Where an independently enforced global budget exists, aggregate outflow must stay below that budget plus the separate fee cap. A per-transaction cap never bounds repeated transactions by itself.

Example for a **proposed synthetic test configuration**, not a result: fund an isolated account with 100 units of a valueless six-decimal test token; global non-resetting agent budget 20; transfer cap 5; protected obligations 60; separately cap gas. Model/session compromise could misuse up to the reachable 20 units if all authorized obligations or vendors are adversarial. A successful root compromise, executor bug or malicious token lies outside that conditional 20-unit guarantee and can expose all reachable account funds. Isolated funding reduces exposure but does not prove policy correctness.

Jurisdiction, entity, counterparties and custody permissions are not established. The experiments propose synthetic documents and valueless local/public-testnet tokens; their competition acceptance still needs O1. This is not a determination that live stablecoin activity is lawful for a team member in Bangladesh or elsewhere. No live funds, external customer data, production credit or regulated product are necessary to resolve the initial technical questions.

## 8. Scoring method and ranked top ten

Two rubrics remain separate. Official-alignment estimates use only the published category labels and maxima. They are internal proxies, not judge-score forecasts. Bonus is **0–5 unresolved**, never added to the base or used to rescue a candidate.

The independent rubric uses value 15, demonstrated-novelty potential 20, security 25, feasibility 20, demo 10 and dependency practicality 10. Central ratings are explicit ordinal modeling choices; intervals express uncertainty. Novelty and feasibility receive wider ranges because no prototype or direct user study exists. Ranges are not statistical confidence intervals. Upper security estimates assume gates pass; present evidence does not establish those outcomes. Report frequency has zero weight.

### Official category alignment

| Rank | Candidate | Task /40 | Security /30 | Innovation /30 | Base /100 |
|---|---|---|---|---|---|
| 1 | HYBRID-001 ObligationLock | 31–36 | 22–27 | 20–25 | 73–88 |
| 2 | HYBRID-002 ServiceMeter with failure stop | 31–36 | 21–26 | 20–25 | 72–87 |
| 3 | IDEA-001 Bounded invoice payout | 32–37 | 23–28 | 15–20 | 70–85 |
| 4 | HYBRID-003 PolicyProof payment conformance | 27–32 | 21–26 | 22–27 | 70–85 |
| 5 | IDEA-033 Original-payer refund governor | 27–32 | 21–26 | 15–20 | 63–78 |
| 6 | IDEA-003 Objective milestone escrow | 29–34 | 18–23 | 18–23 | 65–80 |
| 7 | HYBRID-004 Refund-aware purchase escrow | 27–32 | 19–24 | 19–24 | 65–80 |
| 8 | IDEA-009 Defensive incident agent | 25–30 | 20–25 | 16–21 | 61–76 |
| 9 | HYBRID-005 Attenuated reserve treasury | 25–30 | 19–24 | 21–26 | 65–80 |
| 10 | HYBRID-007 Delivery-aware stream shutdown | 27–32 | 18–23 | 19–24 | 64–79 |

All ten: bonus 0–5 unresolved; CONDITIONAL PASS. Rank order is the independent balanced model below, not official-category totals.

### Independent decision rubric

| Candidate | Value /15 | Novelty /20 | Security /25 | Feasibility /20 | Demo /10 | Dependencies /10 | Total /100 |
|---|---|---|---|---|---|---|---|
| HYBRID-001 | 12–14 | 11–16 | 20–22 | 12–17 | 8–10 | 6–8 | 69–87 |
| HYBRID-002 | 11–13 | 10–15 | 19–21 | 13–18 | 8–10 | 6–8 | 67–85 |
| IDEA-001 | 11–13 | 5–10 | 21–23 | 15–20 | 7–9 | 7–9 | 66–84 |
| HYBRID-003 | 10–12 | 14–19 | 18–20 | 10–15 | 7–9 | 5–7 | 64–82 |
| IDEA-033 | 9–11 | 7–12 | 19–21 | 13–18 | 6–8 | 6–8 | 60–78 |
| IDEA-003 | 11–13 | 7–12 | 16–18 | 11–16 | 8–10 | 5–7 | 58–76 |
| HYBRID-004 | 10–12 | 9–14 | 17–19 | 9–14 | 7–9 | 5–7 | 57–75 |
| IDEA-009 | 9–11 | 5–10 | 18–20 | 12–17 | 7–9 | 6–8 | 57–75 |
| HYBRID-005 | 9–11 | 11–16 | 17–19 | 8–13 | 6–8 | 5–7 | 56–74 |
| HYBRID-007 | 10–12 | 8–13 | 16–18 | 10–15 | 7–9 | 5–7 | 56–74 |

The fifth-ranked refund governor is deliberately retained despite limited report frequency: it has a crisp financial invariant and a smaller trusted surface than subjective escrow. Escrow is sixth because release truth, evaluator authority and contract-state complexity weaken its current case. Adjacent bands overlap heavily; do not interpret a one-point difference as empirical superiority.

## 9. Detailed assessment of the top five

### 9.1 HYBRID-001 — ObligationLock

**Financial problem and customer.** A stablecoin-native treasury needs unattended settlement of approved obligations without paying fabricated invoices or starving already committed payments. Conventional ERP matching is the nonchain comparator. The financial benefit is fewer wrong or missed payments and less operator review, not token-price return.

**Architecture and transaction path.** An owner-controlled channel registers a canonical obligation: principal, buyer account, vendor and registry version, token address, chain ID, raw integer amount, PO/line-item quantity, due/expiry times, one-use ID and policy epoch. The LLM extracts invoice evidence and schedules eligible obligations; it cannot register or alter them. A deterministic reconciler matches the proposal to the approved obligation. A restricted signer may call only the payment executor. That executor atomically consumes the obligation, updates spend/reserve state and transfers the fixed asset. A separate watcher verifies receipt, token effect and finality status.

One existing account implementation is selected and pinned. Do not stack Safe and ZeroDev Kernel as if they were one account. If using a Safe module route, the module can call only the dedicated executor and required fixed transfer path; alternate agent modules, token approvals, raw signing and administrative calls are disabled. If the selected implementation cannot enforce an obligation predicate, a small executor becomes new trusted code requiring E1/E2 review. It is not automatically audited because it imports a familiar library.

**Core invariant.** For a discretionary payment, post-payment balance must cover all unpaid protected obligations plus required reserve. For an eligible obligation payment, its own reservation is consumed once; all other commitments remain protected. Reserve entries cannot be invented, canceled or reprioritized by the agent. Partial payment is excluded initially. State checks and transfer occur in the same serialized chain transition, not just in a preflight database read.

**Autonomy and permissions.** The owner authorizes genuine obligations and the global scope once. The agent chooses processing order among permitted due items, reconciles document variations, retries reads, explains exceptions and submits routine eligible payments without another human click. Unknown obligations, new payees, altered amounts, policy changes and recovery require owner action through a separate channel. If all examples require per-payment approval, the autonomy claim must be reduced.

**Prior art and falsifiable difference.** The proposed difference is preservation of authenticated obligations and aggregate reserves at execution under adversarial concurrency. Neither invoice NFTs, exact-byte binding nor duplicate state alone is claimed as new. Inspect the e-invoice paper and Cleared implementation before asserting the combination is missing. Falsifier: an existing baseline enforces the same invariant on the same traces with comparable operator effort, or reserve logic produces no useful outcome improvement.

**Dependencies, effort and likely failure.** Requires trusted obligation issuance, one supported account/token deployment, RPC/bundler if needed, deterministic executor, document parser, durable journal and independent verification. Estimate 8–12 engineer-days with an experienced integration owner; calendar completion in one week requires parallel team capacity and working access. Most likely failure: the trusted registry accepts a fraudulent PO, or custom reserve accounting breaks under a second session/route. The model cannot solve that trust problem.

**Demo and metrics.** Three approved obligations, one altered invoice, one duplicate, one legitimate discretionary request blocked by reserve, and two simultaneous payment attempts. Show operator touches, correct execution rate, unjustified-payment count, reserve-invariant violations, duplicate transfers, latency/cost and receipt reconstruction. Targets are in E1–E3. Confidence: medium in usefulness of the invariant; low-to-medium in novelty and one-week feasibility; no engineering confidence until tested. Cheapest falsifier: try spending reserved funds through an alternate enabled tool while an invoice payment is pending.

### 9.2 HYBRID-002 — ServiceMeter with failure stop

**Problem/customer.** An agent operator pays for compute or data but repeated paid calls can return unusable output. A simple price cap permits total-budget waste. Choose a task with objective success, such as retrieving a specified signed dataset or producing a deterministic transform, rather than judging arbitrary prose quality.

**Architecture/workflow.** The owner permits two service origins, fixed payee mappings, a task predicate and a global job allocation. The agent compares approved quotes. The client parses payment requirements as untrusted data, checks exact service/request/price/asset/domain, atomically reserves the maximum payable amount and obtains a restricted authorization. Settlement is reconciled independently. The client validates the output against the pinned predicate before allowing the next purchase. One unresolved payment occupies the available slot; timeout never automatically restores budget or issues a second independent payment authorization.

The policy boundary must cover the actual x402 signing scheme, including typed-data authorization and facilitator settlement. A normal token-transfer cap does not prove that an offchain signed payment cannot later be redeemed. If the token/account scheme is incompatible with the chosen smart account, use another documented supported implementation or reject that integration. Do not substitute a funded unrestricted EOA and call it equivalent.

**Permissions/security.** Sequential calls initially; one outstanding payment authorization; no arbitrary URL, redirect-to-new-origin, raw-signature, approval or wallet-transfer fallback. A separate owner can stop future spending, but already issued authorizations can remain redeemable until protocol expiry/cancellation. The total budget must include them. A malicious seller can still receive the bounded initial payment and return junk; the wallet cannot make service quality trustless.

**Prior art/difference.** Existing x402 receipts and retry support are the baseline [S020,S021]. The proposed difference is an acceptance state that constrains subsequent spending and a measured cap on failure-related waste. A seller-signed “delivered” receipt cannot substitute for the client's independent objective test. Falsifier: native service/payment tooling already provides the same behavior, or the new layer reduces useful completion more than it saves.

**Infrastructure/effort.** Two controlled test endpoints, compatible test token/signing scheme, facilitator or self-hosted settlement, durable reservations and independent receipt reader. Estimate 5–8 engineer-days after access is confirmed. Likely failure: payment succeeds but response is lost, and retry creates another authorization or stalls forever. E3 and E5 resolve this. Exposure is the job allocation including outstanding authorizations, plus fees; no reimbursement assumed. Confidence medium for a narrow demo, low-to-medium for differentiation.

**Demo/metrics.** A valid endpoint returns a known answer; another takes one payment and returns a mismatched result. Show the agent switch or stop, reject an injected higher price, and recover a timeout without duplicate payment. Measure accepted-task completion, total cost, spend after first known failure, unresolved exposure and false stops. This finalist deserves inclusion because task completion and failure cost can be measured in one short scenario.

### 9.3 IDEA-001 — Bounded invoice payout

**Problem/customer and scope.** Same initial customer as ObligationLock, reduced to approved-invoice execution without reserve optimization. The owner supplies exact signed payment mandates through a trusted interface; the model matches invoice data and handles variations/exceptions. An immutable schedule alone would be automation rather than meaningful agent reasoning, so evaluate nontrivial document reconciliation and explain where the model adds value.

**Architecture/path.** Trusted mandate → untrusted invoice parser → exact canonical match → one-use protected authorization → fixed token transfer → independent receipt checker. Prefer a documented account permission or protected signer that can enforce exact terms and consumed state. If unavailable, a minimal one-use payment adapter remains trusted code and must be reviewed. Broad allowlists plus an application-only duplicate database are insufficient against compromise of the exposed session signer.

**Permissions/threats.** Global lifetime allocation, per-call ceiling, fixed chain/token/payee, expiry and mandatory idempotency; no approvals, bridges, swaps or policy updates. Root key outside model runtime; dedicated non-root credential. The business authority is the signed mandate, not OCR confidence. Payment authenticity still depends on owner approval and trusted onboarding. An approved but fraudulent invoice may spend the full allocation.

**Alternatives/novelty.** Direct competition from Cleared, Request and capped bill-pay tools; the innovation case is modest. The measurable opportunity is integration reliability, exact authorization and lower review effort. It belongs in the top five because it provides the cleanest implementation fallback and wins two scenarios without pretending to invent a primitive.

**Effort, demo and falsification.** Approximately 3–5 engineer-days with known account support. Show three valid document formats, one unknown invoice, one amount substitution, duplicate race, expiry and recovery. Metrics: authorized executions, rejected unauthorized cases, benign rejection and operator touches. The cheapest falsifier is to attempt a second transfer using the same economic invoice via another tool after a timeout. Any success invalidates the design. Confidence medium-high in narrow feasibility relative to other finalists, low in novelty; integration still untested.

### 9.4 HYBRID-003 — PolicyProof payment conformance

**Problem/customer.** Wallet developers migrate providers or compile user policies without knowing whether the effective permissions preserve the intended semantics. A missing payee constraint or a reset counter can silently widen authority. This is a developer product with a real payment demonstration, not a passive benchmark alone.

**Architecture/workflow.** An LLM drafts a limited policy; a deterministic parser rejects ambiguity. A trusted UI displays effective terms and differences. A compiler emits configurations for two documented wallet backends. An independently specified reference oracle evaluates the same allowed and forbidden financial traces, including concurrency, reset and administrative routes. Activation requires owner approval of the effective policy and passing conformance cases. Each backend then autonomously pays the same authorized invoice fixture on its test environment.

**Security/permissions.** Compiler cannot sign its own policy changes. Reject unsupported predicates rather than dropping them. Avoid an oracle that merely reuses compiler code, which could agree on the same bug. Separate adapter credentials, no cross-account root authority, and no production activation. The hard onchain/signer cap remains even if NL interpretation is wrong. Human review is not a guarantee: the UI must expose raw effective amount, payee, method and time controls clearly.

**Prior art and innovation.** Clawnch already weakens the generic compiler claim; PACE and wallet SDKs weaken generic verifier claims. The narrower hypothesis is a reproducible demonstration of semantic divergence and a sound restricted mapping across two providers. This is the innovation-scenario leader only under optimistic differentiation assumptions, not a proven technical discovery. A rival conformance implementation or inability to define a useful common subset would falsify it.

**Infrastructure/effort/demo.** Two wallet test environments, fixture runner, policy AST, adapters and independent expected-outcome oracle. Estimate 10–16 engineer-days. Show a policy that one naive adapter widens, refuse activation, then deploy corrected policies and execute matching valid payments. Measure unsafe acceptance, benign mismatch, supported policy coverage and human comprehension. Most likely failure is spending the week on incompatibilities without a credible financial flow. Cheapest test: implement one payee+amount+expiry policy against both backends before writing a general compiler. Confidence medium in research value, low in submission feasibility.

### 9.5 IDEA-033 — Original-payer refund governor

**Problem/customer.** A merchant must refund the correct original payer, account for partial refunds and prevent repeated refunds across support channels. The source insight from R003 survives normalization because refund direction and cumulative conservation create a distinct financial invariant.

**Architecture/workflow.** Independent payment index binds order ID to payer, asset, chain and paid amount. An owner-authorized return/credit rule allows the agent to match support evidence and issue a refund. A restricted refund executor atomically checks cumulative refund ≤ original settled payment, fixes the destination to the original payer and consumes the refund authorization. Receipt watcher reconciles status. Unknown payer mappings, third-party payouts and subjective disputes escalate.

**Permissions/security.** Agent cannot create original-payment records, alter the payer, issue arbitrary credit or change asset. Original payments require sufficient confirmation before becoming refundable. Partial-refund state and retries are atomic. A compromised agent can refund every genuinely eligible payment within its total allocation; this may still harm merchant revenue. A payment from an exchange omnibus address may not identify the correct end customer, so the MVP uses direct known wallets and declines unsupported payment sources.

**Alternatives/novelty.** Conventional payment processors already support original-payment refunds and idempotency; escrow also returns funds. The hypothesis is consistent enforcement across agent tool paths with independently verified onchain provenance. It is an incremental, testable improvement, not a new refund concept. A standard provider matching all cases removes most innovation value.

**Infrastructure/effort/demo.** One merchant account, one asset, two synthetic orders, trusted original-payment index and minimal executor/permission route. Estimate 4–7 engineer-days. Refund 3 of 10 units, then attempt 8 more, change the destination, replay the original refund and race two partial requests. Only eligible total ≤10 may succeed, subject also to the smaller global allocation. E6 is the cheap decisive test. Confidence medium in feasibility and financial clarity, low-to-medium in novelty. This minority idea beats broader escrow in the base ranking because the authorization predicate is easier to explain and test.

## 10. Detailed top-three security architectures

The top three share an adversary model: the LLM, its memory, documents, web/API output and its delegated credential may all be malicious. Owner administration, the selected enforcement code and token behavior are trusted only under explicitly stated assumptions. Provider outage is an availability failure; provider compromise can become an integrity failure. No code has been audited in this synthesis.

| Boundary | ObligationLock | ServiceMeter | Bounded invoice payout |
|---|---|---|---|
| Authority source | Owner-issued obligation and registry version. | Owner-issued task, endpoint/payee mapping and job budget. | Owner-issued exact one-use payment mandate. |
| Model permission | Extract, reconcile, schedule, propose. | Select allowed quote, request paid task, explain failure. | Match document to mandate and propose execution. |
| Signer permission | Only approved executor operation, fixed asset. | Only pinned payment scheme/terms; no generic URL signer. | Exact transfer authority and consumed mandate. |
| Stateful enforcement | Obligation consumed, total spent and protected reserves updated atomically. | Outstanding authorizations reserved against aggregate allocation before release. | Consumed mandate and aggregate spent updated atomically. |
| Trusted offchain inputs | Genuine PO/vendor onboarding and revocation channel. | Endpoint ownership and objective output verifier. | Genuine mandate and beneficiary approval. |
| Fee protection | Signed gas fields and separate lifetime gas cap. | Gas/settlement fees included explicitly; facilitator terms pinned. | Same; no unbounded retry/top-up loop. |
| Dangerous paths denied | Module install, admin change, approve/permit, raw call, delegatecall, arbitrary transfer. | Arbitrary origin/payee, redirect, generic typed signature, token approval, fallback wallet transfer. | All routes except the exact transfer schema. |
| Outcome check | Correct obligation paid and other reserves intact. | Correct output accepted as well as settlement verified. | Correct recipient/amount once, status accurately reported. |
| Recovery | Independent owner revokes session, pauses executor, reconciles pending obligations. | Owner stops new authorizations; tracks outstanding redeemable ones to expiry/settlement. | Owner revokes scope and reconciles pending transfer before replacing it. |

**Authorization record.** Bind account, chain ID, token contract, raw integer amount, destination, action selector, nonce/obligation ID, policy epoch, expiry and maximum fee exposure. Canonical encoding must distinguish decimal display from raw units. User approval must display the same effective terms that are hashed. Check ERC-1271 success and valid result where applicable, not merely magic bytes returned through a failed call [S015].

**Execution coverage.** Inventory every reachable path: application tool, CLI, MCP, wallet REST/API, raw RPC, typed-data signing, batch/multicall, enabled module, fallback handler, recovery and administrative endpoint. The effective permission is the union of reachable grants, not the intersection of boxes drawn in an architecture diagram. A public transaction guard may not guard a module path. Either each route enforces the same invariant or the agent cannot access it.

**Atomic accounting.** Offchain reservations prevent avoidable duplicate signing but are not a substitute for final enforcement when an adversary can bypass the service. For a smart-account path, consume state within execution, including parallel operations that passed validation earlier. For a hosted signer route, explicitly test provider atomicity and durable state and disclose that provider trust replaces onchain enforcement. Do not claim an onchain property based solely on application checks.

**Receipt state machine.** Use proposed → authorized → submitted → included → finalized, with distinct rejected/reverted/expired/unknown states. A transport response is not a receipt. Verify chain/account/recipient/token/amount/status and relevant events, then cross-check state. After timeout, query the existing operation and its nonce/mandate status; do not generate a fresh authorization blindly. A policy rejection can be documented without broadcasting a losing transaction. Real hashes are required for actual executed examples, not fabricated for every rejected proposal.

**Shutdown and key lifecycle.** Root owner remains outside the model runtime, prompts, plugins and telemetry. Agent credential is dedicated, scoped, short-lived and non-root. Monitoring and revocation use an independent channel. Revocation is effective only after its relevant enforcement state changes; pending earlier actions may win the race. Revoke, verify, reconcile, rotate, review state, then resume. A compromised agent cannot be the only detector or sole holder of the emergency mechanism.

**Privacy.** Keep invoices, names, account credentials and full commercial terms off public chain. Use opaque IDs and salted commitments where needed; plain hashes of predictable personal data can still leak. Public amounts and address links remain visible. Neither hashing nor selective disclosure establishes legal compliance.

## 11. Red team of the provisional preference

| Attack or objection | Expected control | Residual risk / evidence that defeats the recommendation |
|---|---|---|
| Prompt injection in PDF/OCR, invoice memo, webpage or API | All extracted content remains data; trusted mandate supplies authority. | Any extracted instruction can add an obligation or change scope: fail. |
| Memory poisoning | Memory may suggest a match but cannot write approved registry. | Prior forged memory accepted as owner approval: fail. |
| Address substitution | Bind exact beneficiary and registry version into authorization. | New beneficiary from invoice or mutable name resolution accepted: fail. |
| Decimal or amount manipulation | Fixed token metadata, integer units, exact authorized value. | Alternate encoding or six/eighteen decimal confusion executes: fail. |
| Unauthorized approve/permit | Disable allowance and generic typed-data tools. | Any route creates spend authority outside the same budget: fail. |
| Replay and duplicate invoice | Domain-bound nonce plus economic obligation identity and atomic consumed state. | New invoice number for same PO/line item bypasses quantity remaining: fail. |
| Concurrent valid calls | Final state transition checks aggregate budget and protected reserves. | Both individually pass and jointly breach invariant: fail. |
| Malicious contract/token | Pin token/address/code assumptions; no arbitrary call or delegatecall. | Proxy upgrade or token hook changes behavior; bound no longer supported. |
| Agent impersonation/tool compromise | Authenticate session; signer independently validates scope. | Attacker can invoke root API, swap policy or install module: fail. |
| Stale simulation/TOCTOU | Recheck stateful invariants at execution; simulation only advisory. | Changed state permits spending protected funds: fail. |
| False success/reorg/RPC lie | Independent receipt and state checks; explicit unknown/finality status. | UI marks settled without correct effect or pays again on retry: fail. |
| Insufficient permissions | Fail closed and explain unmet permission. | Silent fallback to unrestricted wallet: fail. |
| Excessive permissions | Enumerate union of grants and routes. | Hidden enabled route bypasses executor: fail. |
| Key leakage | Model never receives root; delegated key constrained independently. | Root/administrator secret in tool environment or logs: fail. |
| Recovery race | Independent owner revoke; account for pending operations. | Claim immediate recovery but old authorization still spends unaccounted value: fail. |
| Vendor/owner fraud | Onboarding and approval are explicit trusted boundaries. | Authorized fraudulent obligations remain financially harmful; full scoped budget can be lost. |
| Chain succeeds, objective fails | Distinguish settlement evidence from delivery and contractual satisfaction. | Correct transfer does not prove goods/services received or debt legitimate. |
| Product already solved | Run identical adversarial traces against strongest accessible baseline. | Equal invariant enforcement with equal/lower complexity eliminates claimed contribution. |
| AI unnecessary | Compare LLM reconciliation against deterministic rules/OCR baseline. | No meaningful accuracy or review-effort improvement: simplify and reduce autonomy claim. |
| Demo fragile | Cold-start rehearsal with dependency failure and reproducible artifacts. | Requires manual database editing, hidden approvals or perfect RPC uptime: not ready. |

Why might it remain unsolved? The difficult part is establishing and maintaining authoritative business obligations, not constructing a token transfer. That is also the strongest reason the project may fail: a wallet cannot infer legal debt from arbitrary text. The proposed solution deliberately makes authority explicit, which reduces autonomy at onboarding. This tradeoff must be shown honestly.

The strongest alternative is ServiceMeter for differentiated task utility; the strongest operational fallback is bounded invoice payout. Neither inherits safety from the favorite. Each must pass its own scheme-specific authorization and recovery tests.

## 12. Scenario-based demonstrations

Use synthetic counterparties and valueless assets. All numbers below are planned fixtures, never measured results.

| Finalist | Positive task | Adversarial/failure moment | Evidence shown |
|---|---|---|---|
| ObligationLock | Agent reconciles and pays two approved due invoices while preserving a third obligation. | Hidden instruction redirects payee; concurrent discretionary requests try to consume reserve. | Pre/post balances, obligation states, policy version, correct hashes and rejected-path logs. |
| ServiceMeter | Agent selects affordable endpoint and obtains known correct result. | Second endpoint returns bad result; settlement response times out. | Payment status distinct from acceptance; bounded waste; no duplicate economic payment. |
| Bounded invoice | Agent handles three invoice formats under one policy. | Changed decimals, duplicate and expired mandate. | Exactly-once payouts, denied attempts and independent receipt checks. |
| PolicyProof | Same narrow policy on two backends executes one valid payment. | Naive adapter omits payee or resets budget unexpectedly. | Failing trace, refused activation, corrected configuration and comparable execution. |
| Refund governor | Agent performs valid partial refund. | Redirection, cumulative over-refund and parallel duplicate. | Original-payer binding, refund counters and final total. |

Suggested ten-minute narrative: 0:00–1:00 user problem and existing baseline; 1:00–2:00 trusted setup; 2:00–5:00 autonomous positive task; 5:00–7:00 two attacks and one timeout; 7:00–8:30 owner revocation/recovery; 8:30–9:30 independently verified evidence; 9:30–10:00 contribution and known limits. Show whether a transaction is merely included or finalized. Use a recorded backup as a disclosed recording, not as a pretend live transaction. Network outage should produce an honest pending state.

## 13. Sensitivity analysis

All scenarios retain hard gates. Scenario A assumes comparable evidence confidence but preserves design differences. B changes weights toward feasibility/dependencies. C emphasizes enforceable security. D emphasizes differentiated capability while retaining meaningful security weight. This is an inspectable decision model, not a prediction of judging.

| Scenario | Value | Novelty | Security | Feasibility | Demo | Dependencies |
|---|---|---|---|---|---|---|
| A | 15 | 20 | 25 | 20 | 10 | 10 |
| B | 15 | 10 | 25 | 25 | 10 | 15 |
| C | 10 | 10 | 45 | 15 | 10 | 10 |
| D | 10 | 40 | 25 | 10 | 10 | 5 |

| Position | A: balanced | B: feasibility | C: security | D: innovation |
|---|---|---|---|---|
| 1 | HYBRID-001 | IDEA-001 | IDEA-001 | HYBRID-003 |
| 2 | HYBRID-002 | HYBRID-001 | HYBRID-001 | HYBRID-001 |
| 3 | IDEA-001 | HYBRID-002 | HYBRID-002 | HYBRID-002 |
| 4 | HYBRID-003 | IDEA-033 | HYBRID-003 | HYBRID-005 |
| 5 | IDEA-033 | HYBRID-003 | IDEA-033 | IDEA-001 |
| 6 | IDEA-003 | IDEA-009 | IDEA-009 | HYBRID-004 |
| 7 | HYBRID-004 | IDEA-003 | IDEA-003 | IDEA-033 |
| 8 | IDEA-009 | HYBRID-004 | HYBRID-004 | IDEA-003 |
| 9 | HYBRID-005 | HYBRID-007 | HYBRID-005 | HYBRID-007 |
| 10 | HYBRID-007 | HYBRID-005 | HYBRID-007 | IDEA-009 |

For reproducibility, scenario centers reweight the criterion centers in research_ledgers.json: sum(center / criterion maximum × scenario weight). They only break an ordinal ordering; the report presents uncertainty ranges rather than treating centers as measurements.

The scenario winner changes. ObligationLock leads the balanced model; bounded invoice payout leads feasibility/security; PolicyProof leads maximum innovation potential. The small center differences and overlapping ranges make the result fragile. A one-step novelty downgrade or a two-day integration failure can reverse it. No report consensus can resolve that uncertainty.

Concrete reversals: if O1 disallows the available test environment, all affected candidates defer regardless of score. If exact obligation enforcement needs a new account rather than a small reviewed executor, prefer the narrow payout. If the e-invoice/Cleared comparison reproduces the claimed contribution, lower ObligationLock novelty and choose based on utility, not branding. If x402 signer compatibility fails, ServiceMeter loses feasibility. If a useful second policy backend is unavailable, PolicyProof is a research extension rather than this submission. If a trusted original-payer mapping is available but invoice authority is not, refund control becomes more attractive.

## 14. Decisive proof-of-concept experiments

**None of E1–E7 has been run.** The minimum code described here is a specification for later authorized implementation. Begin with the cheapest failure-revealing tests; do not build a broad UI first. All experiments permit **zero real financial value at risk**. Synthetic token units and gas on a valueless test environment are bounded; no live assets or production secrets. If organizer requirements demand something else, reassess separately.

### E1 — Does the exact deployed authorization boundary work?

**Hypothesis:** a compromised model/session credential can execute allowed payments but cannot mutate authority or use another signing route. **Setup/environment:** local EVM first, then the chosen supported public testnet after O1; one account, token, recipient, owner and non-root credential. **Minimal code:** canonical mandate parser, transaction encoder/decoder, selected account adapter, independent assertions, tool-path enumerator; only the smallest executor needed for exact mandate consumption.

**Positive tests:** 20 authorized payments across format and boundary cases. **Negative tests:** wrong amount/payee/token/chain, expiry, malformed decimals and revoked policy. **Adversarial tests:** 60 predefined cases including encoded document injection, raw API/RPC, typed-data approval, batch, module install, root API and post-simulation mutation; 20 additional blind holdout cases. **Pass:** zero unauthorized signatures with spendable authority and zero unauthorized execution; all 20 positive cases execute exactly once; every exposed route is enforced or inaccessible. Model refusal alone is not a pass. **Fail:** any bypass, undocumented permission widening or untested reachable signing path.

**Evidence:** dependency lockfile, deployed code/version/address, owner/session configuration, complete route inventory, logs, local assertions and independently verified public-testnet hashes for permitted actions. **Exposure:** at most 100 valueless test units funded, 20-unit lifetime allocation, 5 per payment, finite test gas cap. **Constraint:** module support, ERC-1271 behavior and token scheme are exact-version matters. Circle's unavailable testnet policy route cannot satisfy this setup. First result expected within 1–2 engineer-days after access; otherwise reassess feasibility.

### E2 — Can concurrency or another session defeat budgets and reserves?

**Hypothesis:** the final execution boundary preserves aggregate outflow and reserved obligations despite parallel requests, reset windows and process crashes. **Setup:** same account, two sessions, two workers, isolated 100-unit balance, 60-unit protected obligations and 20-unit agent allocation. **Minimal code:** concurrent operation runner, obligation model, atomic executor state, fuzz/property assertions and crash/restart harness. **Environment:** local EVM with controlled block ordering, then selected testnet for supported concurrency.

**Positive:** eligible obligation consumes its own reservation; permitted discretionary spend leaves all other reserves intact. **Negative:** spend exceeding aggregate budget or protected floor. **Adversarial:** same nonce versus distinct nonce duplicates, renamed invoices on same PO, two sessions spending concurrently, grant renewal/reset, policy epoch change, direct-token path, reentrancy fixture, timeout at reservation boundary. **Pass:** zero invariant violations over 1,000 seeded interleavings and 20 scheduled boundary traces; balances, consumed obligations and global allocation reconcile exactly. Rejection of all payments fails benign utility. **Fail:** any aggregate overspend or protected-reserve depletion; no claim that sampled tests prove all possible traces.

**Evidence:** seed, exact trace, signed operations, pre/post state and receipts, plus public-testnet hashes for representative successful and rejected execution paths where broadcast is appropriate. **Exposure:** same isolated valueless allocation; no replenishment by agent. **Constraints:** validation may precede execution for several operations; accounting must survive that ordering. Approximately 1–2 engineer-days. If reserve semantics remain ambiguous, drop the reserve extension and retest the contingency.

### E3 — Can the wallet tell the truth after timeout, replay and revocation?

**Hypothesis:** uncertain transport or chain state never causes duplicate economic payment or false completion, and revoked authority cannot initiate new authorized execution once revocation takes effect. **Setup:** proxy RPC/facilitator fault injector, durable journal, independent read provider, owner revoke channel. **Minimal code:** payment state machine, status reconciler, retry policy and revoke runner. **Environment:** local chain for deterministic reorgs and public testnet for actual inclusion/revocation.

**Positive:** successful payment reaches correct status; owner can recover and resume with new scope. **Negative:** reverted transaction, stale receipt, expired authorization. **Adversarial:** timeout after broadcast, fabricated success, process restart, reorg, duplicate provider response, revoke racing pending operation. **Pass:** zero duplicate economic transfers and zero false finalized states across 50 fault schedules; all new post-effective-revocation attempts fail; owner retains recovery. Suggested operational target: recover a determinable status within two minutes after providers recover, while unknown state stays visibly unknown. **Fail:** blind replacement payment, old authority accepted after effective revocation, or owner lockout.

**Evidence:** fault schedule, journal, independent receipts/state, revoke hash, before/after grants and recovery transcript. **Exposure:** same valueless account and fee cap. **Constraint:** already issued x402 authorizations may survive wallet-session revocation; include expiry/settlement in outstanding exposure rather than claim instantaneous cancellation. Approximately one engineer-day, more if provider APIs lack reliable status lookup.

### E4 — Is there a useful, sound policy-conformance subset?

**Hypothesis:** two backends can enforce the same bounded transfer policy without silently widening it. **Setup:** one AST supporting fixed chain, asset, payee, amount, aggregate allocation and expiry; owner-review UI; two pinned adapters; independent hand-written oracle. **Minimal code:** parser, two compiler adapters and differential trace runner. **Environment:** local deployments or two documented public test deployments.

**Positive:** 20 supported policies and permitted traces. **Negative:** unsupported predicates or ambiguity must be rejected. **Adversarial:** omitted payee condition, reset period mismatch, alternative signing method, nested grant, wrong decimal/token and root bypass. **Pass:** zero unsafe acceptance in at least 100 differential traces, no silent predicate removal, and no more than one unexplained benign mismatch after fixing adapter configuration. Both backends must execute a valid real test transaction. **Fail:** useful common subset cannot be expressed, oracle merely reuses compiler logic, or divergence remains unexplained.

**Evidence:** source policy, effective configs, owner-approved diff, trace oracle, failing/corrected examples and hashes. **Exposure:** separately isolated valueless wallets. **Constraints:** SDK/deployment availability; reviewed oracle independence. Budget 1–2 days for the first single-policy feasibility test; stop before broad compiler work if it fails.

### E5 — Does failure-aware service spending add value beyond native x402?

**Hypothesis:** ServiceMeter reduces spending after known delivery failure relative to x402 with existing receipt and idempotency extensions enabled. **Setup:** two deterministic service endpoints, signed offers, one deliberately faulty seller, global 10-unit synthetic job budget, maximum one outstanding payment. **Minimal code:** restricted payment client, durable authorization reservation, output predicate, baseline client and fault injector. **Environment:** local service/settlement environment followed by compatible public testnet.

**Positive:** honest known-answer task completes. **Negative:** wrong output, wrong signer, price beyond cap. **Adversarial:** signed dishonest receipt, request-hash mismatch, injected 402 instruction, malicious redirect, timeout after settlement, cached replay and cap boundary. **Pass:** no total-budget breach or duplicate payment; no new charge after a known failed predicate except a separately preauthorized alternate-provider attempt; comparable benign completion at least 95% across 40 defined trials; lower failure-related waste than the configured baseline on preregistered failure traces. Report raw counts and trial composition, not a universal success rate. **Fail:** payment proof treated as quality proof or native baseline already matches the claimed advantage.

**Evidence:** offers, authorizations, actual settlement receipts/hashes, returned content digests, verifier outcomes and comparative cost ledger. **Exposure:** ten valueless units plus capped gas. **Constraints:** exact x402 token/account/facilitator compatibility and authorization expiry. Estimate 1–2 days after the payment path exists.

### E6 — Is refund provenance and cumulative conservation enforceable?

**Hypothesis:** the refund agent cannot redirect a refund or exceed the original eligible payment through partial/concurrent requests. **Setup:** two synthetic original payments from direct known wallets, immutable order mapping, cumulative refund state. **Minimal code:** trusted payment index, refund executor or equivalent enforceable signer rule, race runner and receipt reconciler. **Environment:** local chain then supported public testnet.

**Positive:** partial refund 3 from a paid amount 10, followed by permitted remainder subject to global allocation. **Negative:** unknown payment, unconfirmed original, wrong asset, refund above remaining amount. **Adversarial:** changed refund address, two concurrent requests, stale indexer, duplicate support ticket, exchange-omnibus payer ambiguity. **Pass:** all valid fixtures settle once, zero redirection, cumulative refund never exceeds original eligible payment or global budget in 100 seeded interleavings. **Fail:** payer authority can be created from agent text or an unsupported payment source is guessed.

**Evidence:** original/refund hashes, payer binding, counters, negative traces and independent balances. **Exposure:** isolated valueless original payments and refund pool. **Constraints:** mapping direct sender to rightful customer; finality. Estimate one day for a minimal falsifier, 4–7 engineer-days for robust MVP.

### E7 — Does the contribution survive prior art and user-value testing?

**Hypothesis:** the leading design solves a recurring problem better than accessible existing implementations and simple deterministic alternatives. **Setup:** five relevant treasury/agent operators, a disclosed synthetic scenario, and a capability checklist for PACE, Cleared/Request, capped bill pay, x402 extensions and the e-invoice paper. **Minimal code:** only baseline adapters needed to reproduce the same positive/negative task; no broad product build. **Environment:** local/testnet and structured interviews; no production customer access required.

**Positive:** at least three of five operators identify the problem from their own experience and prefer the invariant's outcome over ordinary caps, with concrete reasons. This is a go/no-go heuristic, not population evidence. **Negative:** users do not need chain settlement or find existing tools sufficient. **Adversarial:** demonstrate baseline capabilities with equivalent extensions enabled; test whether a deterministic parser performs as well as the LLM; ask reviewers to identify a missing trust assumption. **Pass:** at least one reproducible useful behavior differs from the closest accessible baseline, no known primary source already establishes the exact claimed difference, and task utility does not depend on unsupported autonomy or legal assertions. **Fail:** all novelty is naming, or added complexity yields no useful behavior.

**Evidence:** dated feature comparison, exact versions/source links, comparative traces, interview notes with consent and limitations; any baseline transaction claims require real receipts. Missing vendor access remains uncertainty, not proof of absence. **Exposure:** zero financial value; no unsolicited external messages. **Constraints:** access to full S018 artifact and vendor demos may block certainty. Budget 1–2 days; use a narrow incremental contribution claim if exhaustive novelty evidence remains unavailable.

## 15. Decision matrix: uncertainties that must be resolved

| Candidate | Technical uncertainty / smallest test | Security uncertainty / smallest test | Novelty uncertainty / smallest test | Required evidence and rejection condition |
|---|---|---|---|---|
| ObligationLock | Can selected account atomically consume obligations and preserve reserve? E1/E2. | Any alternate route or concurrent session bypass? E2/E3. | Is same invariant already implemented? E7 and S018 full-artifact inspection. | Real allowed transfer, invariant traces, correct recovery, dated baseline comparison. Any invariant breach rejects current architecture. |
| ServiceMeter | Does chosen scheme support restricted signing/test settlement? E1/E5. | Outstanding authorization/retry creates extra spend? E3/E5. | Does native extension baseline already stop waste equally? E5/E7. | Settlement and objective-result evidence; exposure ledger. Any unsafe fallback or duplicate rejects integration. |
| Bounded invoice | Can exact one-use mandate be enforced end to end? E1. | Duplicate economic invoice bypasses nonce? E2/E3. | Enough benefit over existing bill-pay tools? E7. | Once-only correct payment and reduced review effort. No enforceable one-use path means no-go. |
| PolicyProof | Can two adapters express useful common subset? E4. | Compiler and oracle agree on same widening bug? Independent E4 review. | Existing cross-wallet conformance covers it? E7. | Independent oracle, blind traces, both real test payments. Unsupported predicate silently dropped means fail. |
| Refund governor | Reliable original-payer/order mapping? E6. | Partial refunds race or redirect? E6. | Existing processor/refund contract equivalent? E7. | Original/refund receipt chain and conserved total. Guessed recipient mapping means fail. |

## 16. Feasibility and implementation sequence after selection authorization

The remaining calendar window is short. No team capacity, provider credentials or contract-review availability was established. Estimate effort in engineer-days, not guaranteed delivery dates. A practical team split would assign account/security integration, workflow/evaluation, and evidence/demo preparation; one person may cover multiple roles if scope is reduced. This is a staffing recommendation, not delegated work performed here.

First resolve O1–O4 and run E1 against the exact intended account. Then E2/E3 determine whether the stateful extension is safe enough to pursue. Conduct E7 alongside those tests; do not delay prior-art falsification until after building. Select one workflow only. Finish repeatable setup, evidence export and security self-assessment before adding a polished interface. Reserve the last available day for independent reproduction and submission checks. If initial dependency access or narrow payment cannot be demonstrated promptly, activate the bounded-payout contingency rather than compress security review.

Use TypeScript where it reduces wallet SDK integration work; Python is suitable for document extraction and evaluation if that matches team skills. Language is not the security boundary. No provider is mandatory. Pin dependency versions, chain IDs, token addresses and deployed code. Keep an explicit state machine with bounded retries; an agent framework is optional. No new chain, token, lending protocol, marketplace, arbitrary browser tool, dynamic policy update or broad autonomous recovery belongs in the initial MVP.

## 17. Provisional choice, runner-up and contingency

**Overall preference — HYBRID-001:** strongest combined problem clarity and security-mechanism opportunity, but confidence is only medium as a research direction and low-to-medium as a one-week implementation commitment. The reserve invariant must be real, and its incremental value must survive primary-source comparison.

**Runner-up — HYBRID-002:** preferable if objective service tasks and a compatible restricted payment path are readily available, or if invoice authority/novelty fails. Its financial exposure is easier to isolate by job, but paid nondelivery remains possible and outstanding authorizations must be counted.

**Contingency — IDEA-001:** use when time, new trusted code or integration makes the preferred extension impractical. Its modest novelty is acceptable only with an honest contribution claim and strong measured reliability. A generic chatbot wrapper around a wallet is not the proposed fallback.

**Research reserve — HYBRID-003:** highest innovation potential in the selected model; defer unless two backends and an independent semantics oracle are demonstrably available. **Minority reserve — IDEA-033:** particularly attractive if the team has reliable original-payment data and wants a narrow, observable financial invariant.

## 18. Precise conditions for final selection

Final selection requires all of the following, not the highest estimated score:

1. Written organizer evidence resolves network/value, transaction evidence and proposed autonomy assumptions; roster and submission logistics are checked.
2. A named customer/workflow needs shared onchain settlement; E7 produces concrete value evidence and a truthful, narrowly worded contribution claim. Recover missing report material where it could materially alter the shortlist.
3. The exact account, signer, token, chain and dependency versions are available. E1 proves allowed action and denied mutation across every reachable signing path.
4. E2 establishes the specified budget/idempotency/reserve invariants on planned concurrency and boundary tests; custom trusted code receives independent review. Any unresolved critical bypass means no-go.
5. E3 demonstrates truthful receipt status, safe ambiguous retry, effective revocation and owner recovery. Public-chain evidence is independently checked at the stated finality stage.
6. The chosen candidate passes its additional experiment: E5 for ServiceMeter, E4 for PolicyProof or E6 for refunds. ObligationLock must additionally beat its simpler invoice baseline on protected-obligation outcomes.
7. Exact maximum reachable value and gas exposure are documented with assumptions and exclusions. No unbounded approvals, root access, agent policy expansion, automatic replenishment or hidden route survives review.
8. A lawful, appropriate demo plan exists for the team's jurisdiction and circumstances. No production compliance, principal-protection, insurance, privacy or audit claim exceeds evidence.
9. An independent team member reproduces the end-to-end demo from a clean checkout, including at least one failure and one recovery case, without hidden manual state repair. The required artifacts are complete and known risks remain prominent.

If these conditions do not pass, **do not declare a winner**. Preserve the best-supported candidate and the exact failed gate. The current decision is to validate a narrow financial invariant before committing to implementation.

## Appendix A. Claim-verification and uncertainty log

| ID | Claim | Report sources | Status | Evidence | Selection implication |
|---|---|---|---|---|---|
| CL-001 | Topic F weights and real transaction evidence | R001–R014 | Verified | S001,S002 | Keep base 40/30/30 and bonus separate; hash alone does not prove business success |
| CL-002 | Testnet acceptance is certain or mainnet is mandatory | R002,R005,R010,R013 versus R014 | Unverified | S001 | Organizer answer is a hard selection gate; no automatic mainnet switch |
| CL-003 | FISCO BCOS portability or EVM requirement is official | R006 | Unverified | S001 | Do not impose domestic historical requirements on international track |
| CL-004 | Bonus rewards complexity, extra chains or trading | R005,R006,R013 | Unverified | S001 | Zero bonus assumed; no invented subcriteria |
| CL-005 | Only Safe enforces policy onchain | R005 versus own table and R010 | Contradicted | S005,S010,S013 | Generic onchain caps are existing capability |
| CL-006 | Crossmint is necessarily custodial | R006 versus R005 | Contradicted | S005 | Use current product-specific custody description |
| CL-007 | ERC-4337 natively supplies session-key semantics | R005,R008,R011 | Contradicted | S027 | Verify account-specific validator and every execution path |
| CL-008 | Safe allowance restricts recipients | Several proposed Safe cap architectures; R010 warns | Contradicted | S009 | Allowance alone cannot meet payee-binding gate |
| CL-009 | Stacking Safe guards, Roles, Allowance and sessions means all constraints apply | R002,R005,R011,R013 | Unverified | S009,S010,S015 | Draw actual call graph; disable alternate grants and fallback signing |
| CL-010 | June 2026 Zodiac bypass and patched versions | R002 | Verified | S015 | Pin audited patch or newer reviewed release; do not treat old deployments as safe |
| CL-011 | MetaMask simulation is only future functionality | R010 versus R011,R013 | Outdated | S008 | Current documentation lists mandatory pipeline for supported EVM transactions; coverage remains path-specific |
| CL-012 | Circle policy-enforced testnet prototype is available | R006,R008,R011,R013 recommendations | Contradicted | S007 | Mainnet-only spending policies disqualify assumed testnet route |
| CL-013 | Circle wallets are universally custodial | R006 | Contradicted | S006 | Current documented user-custody 2-of-2 architecture; this is not proof of every policy path |
| CL-014 | Exact bytes, signed decision records and audit chain are new | R003,R005,R007,R011 versus R010 | Contradicted | S003,S022 | Reframe as implementation and workflow improvement |
| CL-015 | No close autonomous invoice-settlement prior art | R006,R013 | Contradicted | S016,S017,S018,S035 | Reject broad novelty; test obligation/reserve difference explicitly |
| CL-016 | Request has no agent-payment capability | R013 versus R006 | Contradicted | S035 | Primary site describes agent negotiation and settlement demo |
| CL-017 | Generic A2A escrow with evaluator is novel | R004,R005,R009,R011 | Contradicted | S004,S024,S025 | Release-verifier quality may differentiate; escrow does not |
| CL-018 | Signed service receipts and payment dedup are absent from x402 | R001,R002,R010,R012 ideas imply gap | Contradicted | S020,S021 | Reuse extensions; test quality and cross-path budget behavior instead |
| CL-019 | Sablier is only static streaming | R006 | Contradicted | S037 | Dynamic rate control alone has no novelty |
| CL-020 | TEE or MPC guarantees financial correctness | R008,R009,R011 | Contradicted | S006,S011,S012 | Protecting keys does not validate obligations or honest counterparties |
| CL-021 | Defensive-only agent guarantees zero loss | R002,R006,R013 | Contradicted | Threat analysis; S015 | DoS, gas, withdrawal penalties and recovery errors remain; no retroactive rescue guarantee |
| CL-022 | Daily cap equals lifetime maximum loss | R001–R014 variants | Contradicted | S009; adversarial accounting analysis | Sum reset windows, sessions, approvals, gas and reachable replenishments |
| CL-023 | Allowlisted invoice payment is not theft or is recoverable | R002,R013 | Contradicted | Financial workflow analysis | A fabricated obligation or colluding approved vendor can consume full authorized budget |
| CL-024 | Policy module bug still bounded by same module cap | R005 | Contradicted | S015; trust-boundary analysis | A bound cannot assume the broken enforcement mechanism still works |
| CL-025 | Two agents plus human, threshold two, forces human approval | R005,R006,R011 | Contradicted | Threshold logic | Two agent signatures satisfy threshold; require named human role separately |
| CL-026 | Hash of an explanation proves faithful authorized decision | R003,R005,R007,R012 | Contradicted | S003,S022; cryptographic reasoning | Commitments prove integrity under assumptions, not truth or legal authority |
| CL-027 | Pre-execution record can contain final transaction hash | R012 | Contradicted | Transaction lifecycle reasoning | Use pre-authorization digest then post-execution receipt linking final hash |
| CL-028 | Two Base blocks or 200 ms means finality | R005,R013 | Contradicted | S026 | Display submitted/included/finalized separately |
| CL-029 | ERC-8004 identity or reputation proves trustworthy borrower | R003,R006,R011 | Contradicted | S030 | Registry data cannot justify autonomous unsecured lending |
| CL-030 | ERC-8004 reduced credit defaults by 73 percent | R006 | Unverified | S030 | Cited study instead reports reputation manipulation; do not retain performance claim |
| CL-031 | CaMeL 67 percent is current benchmark performance | R001 | Outdated | S029 | Version v2 reports 77 percent in its setting; neither estimates wallet-loss probability |
| CL-032 | CrAIBench evaluates memory manipulation with 150-plus tasks and 500-plus attacks | R002,R006,R013 | Verified | S028 | Use attack taxonomy; do not transfer aggregate rates into this wallet |
| CL-033 | FinVault is an established active benchmark | Some survey references; R014 flags withdrawal | Outdated | S031 | Withdrawal verified; exclude results from scoring evidence |
| CL-034 | PACE results establish real-world zero-loss security | Potential reading of R010 | Contradicted | S003 | Authors limit claims to reproducible logic-level setting; implementation not audited here |
| CL-035 | Natural-language policy compilation to onchain constraints is new | R002,R003,R013 | Contradicted | S013,S014 | Conformance/unsafe-widening detection is narrower hypothesis |
| CL-036 | ZK plus enclave policy execution is novel by itself | R011,R013 | Contradicted | S034 | Existing hackathon design materially weakens claim |
| CL-037 | AgentKit is unusable or universally replaced | R008 versus R005,R014 | Unverified | S033 | Repository exists; exact support and adapter compatibility still need testing |
| CL-038 | Private keys absent from prompt means signer compromise loss is zero | R013 | Contradicted | S011,S012; trust-boundary reasoning | Leaked API credentials or root operations can authorize value movement |
| CL-039 | Simulation identifies all malicious contracts and guarantees safe effects | R006,R011,R013 | Contradicted | S003,S008; state-change analysis | Simulation is state-specific and cannot prove objective satisfaction |
| CL-040 | Single-chain Base wallet can settle Arc escrow without a bridge | R011 | Contradicted | Chain-domain reasoning | Choose one chain or explicitly model another transport and trust boundary |
| CL-041 | Provider sanctions screening means lawful deployment everywhere | R005,R008,R011 | Contradicted | S006 is product control, not legal authorization | Team jurisdiction and workflow law remain unverified; synthetic test-only path is proposed |
| CL-042 | Published insurance, EU AI Act or GDPR compliance follows from audit hash | R005,R011 | Unverified | No applicable legal analysis supplied | Do not market legal compliance or insurance from technical logging |
| CL-043 | Wallet pricing, free tiers and faucets guarantee near-zero cost | R002,R005,R006,R013 | Unverified | No account access or current quotes tested | Exclude precise cost promises; impose project expense budget |
| CL-044 | Local implementation or simulation already succeeded | R011; other confident test projections | Unverified | No code, logs or hashes supplied | All proposed systems remain untested in this synthesis |
| CL-045 | One-week full suite is low-risk feasible | R005,R006,R011,R013 | Unverified | No team capacity or integration evidence | Narrow scope; reserve final days for reproducibility and submission |
| CL-046 | Broad market volume, BEC losses and attack percentages prove demand | R002,R006,R008,R009,R013 | Unverified | No decision-grade customer validation in supplied reports | Do not use unverified market numbers in ranking; interview actual users |
| CL-047 | Proof-Gated Signing, HJS, VCAP and other loosely cited projects have claimed capabilities | R004,R005 and references | Unverified | Bibliographic identifiers incomplete or not independently checked | Preserve in mention register; no production dependency or novelty claim rests on them |
| CL-048 | Public source availability implies audited deployment is available | R004,R005,R011,R013 | Contradicted | S004,S016,S034 | Draft, prototype, docs and deployed audited code are separate evidence levels |
| CL-049 | Generic AgentWallet tool may bypass agent-level cap | R014 path concern; independent search | Partially supported | S039 | Primary search excerpt supports concern; direct page failed; exact adapter bypass test mandatory |
| CL-050 | Duplicate-reimbursement contract is close new prior art | Independent research | Partially supported | S018 | Primary abstract retrieved; full artifact inaccessible; verify before claiming novelty |
| CL-051 | All 14 attached reports are complete | Attachment framing | Contradicted | Document source audit | R004 abbreviated; R006 damaged; R007 summary; R008 five of ten; R014 starts section seven |

## Appendix B. Primary sources and evidence boundaries

All sources below were checked on 13 October 2026. Search-only or access-limited sources are explicitly marked. Dynamic documentation should be pinned again at implementation. None of the retrieved pages was executed as setup instructions.

**S001 — [International Track Appendix 2, four-page rules PDF](https://www.its.ac.id/international/wp-content/uploads/sites/66/2026/10/PBCSF-Appendix-2-Problem-Description-and-Competition-Rules-for-International-Track.pdf)**. Official rules mirrored by ITS university. Topic F, weights, eligibility, checklist and dates verified; testnet unspecified.

**S002 — [IEEE CIS Singapore competition page](https://www.ieee-cis-singapore.org/2026-fintechathon)**. Co-organizer announcement. Corroborates track; registration and review details require reconciliation.

**S003 — [PACE, arXiv 2608.17220v1](https://arxiv.org/html/2608.17220)**. Research preprint. Typed intents, deterministic verification and signed records bind exact bytes; sandbox results are authors claims, not deployment guarantee.

**S004 — [ERC-8183 Agentic Commerce](https://eips.ethereum.org/EIPS/eip-8183)**. Draft standard with reference code. Escrow and evaluator release/refund already specified; draft status is not audit certification.

**S005 — [Crossmint Agent Wallets](https://docs.crossmint.com/agents/wallets/overview)**. Vendor documentation. Documents onchain scoped access, caps, counterparties, expiry and revocation; not exercised here.

**S006 — [Circle Agent Wallets](https://developers.circle.com/agent-stack/agent-wallets)**. Vendor documentation. Documents 2-of-2 MPC, user custody and policy controls.

**S007 — [Circle spending policies](https://developers.circle.com/agent-stack/agent-wallets/wallet-operations/custom-policies)**. Vendor implementation guide. Explicitly mainnet-only policies; testnet unsupported.

**S008 — [MetaMask Agent Wallet](https://docs.metamask.io/agent-wallet/)**. Vendor documentation. Current supported EVM path documents mandatory simulation, threat scan and supported execution protections.

**S009 — [Safe spending limits](https://help.safe.global/articles/3961440620-set-up-and-use-spending-limits)**. Vendor documentation. Allowance caps token amount but does not restrict recipient.

**S010 — [ZeroDev permissions](https://docs.zerodev.app/smart-accounts/permissions/intro)**. Vendor documentation. Kernel-specific signer, policies and action composition; integration must be checked.

**S011 — [Privy policies](https://docs.privy.io/controls/policies/overview)**. Vendor documentation. Key-level policy rules including calldata and typed signatures; default deny with policy.

**S012 — [Turnkey agentic wallets](https://docs.turnkey.com/solutions/company-wallets/agentic-wallets)**. Vendor documentation. Scoped non-root agent, policy and consensus controls; root bypasses policy engine.

**S013 — [Clawnch delegation integration](https://metamask.io/en-GB/news/clawnch-ai-agent-launchpad-delegation)**. Vendor integration account. Natural-language policy compilation to delegation caveats is already described.

**S014 — [Clawmes repository](https://github.com/clawnchdev/clawmes)**. Project repository. Published policy/delegation implementation; no execution performed here.

**S015 — [Zodiac June 2026 post-mortem](https://engineering.gnosisguild.org/posts/zodiac-post-mortem)**. Maintainer incident report. Specific ERC-1271 bypass and patched Roles 2.1.1 / Delay 1.1.1 confirmed.

**S016 — [Cleared whitepaper v1.1](https://clearedpay.xyz/cleared-whitepaper.pdf)**. Project design paper. Invoice registry, signed settlement, sessions and agent roadmap; live production maturity not established.

**S017 — [AgentsPay bill pay](https://agentspay.ai/use-cases/bill-pay-agents)**. Vendor product page. Claims capped automated bill pay, vendor controls, duplicates and review; marketing, not independent audit.

**S018 — [Verified Ethereum e-invoice preprint](https://arxiv.org/abs/2609.37819)**. Primary abstract search record; direct open failed. Author claims guarded invoice lifecycle and uniqueness proof; full paper/code not inspected; novelty threat, not trusted implementation.

**S019 — [x402 introduction](https://docs.x402.org/introduction)**. Protocol documentation. HTTP payment flows and optional extensions exist; no business-quality guarantee.

**S020 — [x402 signed offers/receipts](https://docs.x402.org/extensions/offer-receipt)**. Protocol documentation. Signed interaction artifacts already exist; seller signature does not independently prove output usefulness.

**S021 — [x402 payment identifier](https://docs.x402.org/extensions/payment-identifier)**. Protocol documentation. Optional retry/dedup extension; shared state and server support matter.

**S022 — [AP2 security/privacy](https://ap2-protocol.org/ap2/security_and_privacy_considerations/)**. Protocol documentation. Treats agents as potential attackers; signed mandate/checkout binding; exact implementation remains necessary.

**S023 — [Nevermined x402](https://nevermined.ai/docs/development-guide/nevermined-x402)**. Vendor documentation. Payment integration exists; broad scope and quality controls not independently verified.

**S024 — [Kite Passport](https://docs.gokite.ai/passport)**. Vendor documentation. Policy-controlled identity and escrow agreement lifecycle described.

**S025 — [Virtuals ACP changelog](https://whitepaper.virtuals.io/acp/acp-changelogs)**. Maintainer release notes. Agent jobs, escrow funding, evaluation and settlement documented.

**S026 — [Base finality](https://docs.base.org/specifications/transactions/transaction-finality)**. Chain documentation. Preconfirmation, L2 inclusion, L1 inclusion and finality differ.

**S027 — [ERC-4337 session keys](https://docs.erc4337.io/smart-accounts/session-keys-and-delegation.html)**. Protocol documentation. Session constraints are wallet-specific rather than native ERC-4337 guarantees.

**S028 — [CrAIBench paper v3](https://arxiv.org/abs/2503.16248)**. Research preprint. Memory/context attacks on Web3 agents; current title differs from older report citations.

**S029 — [CaMeL paper v2](https://arxiv.org/abs/2503.18813)**. Research preprint. Capability/control-flow defense; revised benchmark result differs from older 67% figure.

**S030 — [ERC-8004 empirical study v2](https://arxiv.org/abs/2606.26028)**. Research preprint. Observes sybil/manipulable reputation in sampled ecosystem; not credit-default reduction evidence.

**S031 — [FinVault withdrawal record](https://arxiv.org/abs/2601.07853)**. Research archive status. Withdrawn; do not use reported benchmark as established selection evidence.

**S032 — [Coinbase Agentic Wallet](https://docs.cdp.coinbase.com/agentic-wallet/welcome)**. Vendor documentation. CLI and MCP have different exposed capabilities.

**S033 — [Coinbase AgentKit repository](https://github.com/coinbase/agentkit)**. Maintainer repository. SDK repository exists with Python and TypeScript; universal deprecation not established.

**S034 — [Autonomify](https://chain.link/hack-26/projects/autonomify)**. Hackathon project account. Enclave, Noir proof, simulation and ERC-7710 execution described; demonstration claim, not production assurance.

**S035 — [Request AI infrastructure](https://request.network/ai)**. Vendor product/demo page. AI negotiation, payment requests, settlement and receipts are described.

**S036 — [Request disbursements](https://request.network/stablecoin-disbursements/)**. Vendor product page. Batch payment and integration claims; use as workflow prior art.

**S037 — [Sablier features](https://docs.sablier.com/apps/features/overview)**. Protocol documentation. Flow supports adjustable recurring stream rates.

**S038 — [Superfluid flow operations](https://docs.superfluid.org/docs/protocol/money-streaming/guides/create-update-delete-flow)**. Protocol documentation. Create/update/delete flow are existing primitives.

**S039 — [AgentWallet payment paths](https://agentwallet.ai/agent-payments/)**. Primary search excerpt; direct page inaccessible. Excerpt distinguishes cap-gated agent tools from generic x402.pay_url; verify exact version before relying.

**S040 — [Mastercard Agent Pay for Machines](https://investor.mastercard.com/investor-news/investor-news-details/2026/Mastercard-Launches-Agent-Pay-for-Machines-to-Unlock-Super-Fast-Always-On-Payments/default.aspx)**. Issuer announcement. Machine-payment controls across rails announced; commercial availability not independently tested.

## Appendix C. Complete normalized catalogue

# Master idea inventory

70 ideas; all proposed integrations are untested. Closest alternatives are documented in the source matrix when verified; other named comparisons are retained report leads, not confirmed capability assertions.

## IDEA-001 — Bounded invoice payout

- **Problem/customer:** DAO finance teams; wrong or duplicate supplier payment
- **Workflow and autonomy:** Match invoice to a separately approved purchase order; agent schedules and pays routine matches
- **Onchain action:** One-use token transfer
- **Security:** Exact mandate, cumulative cap, independent beneficiary record
- **Closest alternative:** Cleared; AgentsPay; Request; PACE
- **Differentiation hypothesis:** Buyer-side obligation authenticity beyond ordinary capped bill pay
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** One supplier, three invoices, one token
- **Evaluation:** Correct payment once; forged obligation never pays
- **Feasibility:** 1–2 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Exact mandate, cumulative cap, independent beneficiary record.
- **Required correction:** Build only this proposed falsifier after authorization: One supplier, three invoices, one token. Accept only if: Correct payment once; forged obligation never pays. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R001:L00159 (F01); R002:L00640 (C01); R003:L01195 (C01); R003:L01278 (C15); R004:L01958 (C09); R006:L03220 (C01); R008:L03300 (C01); R009:L03600 (C-14); R010:L03998 (C01); R010:L03999 (C02); R011:L04456 (C02); R011:L04486 (C13); R012:L04793 (C01); R013:L05126 (C01); R014:L05403 (visible architecture 1)

## IDEA-002 — Obligation reserve treasury

- **Problem/customer:** Stablecoin-native treasury; discretionary spending consumes committed cash
- **Workflow and autonomy:** Agent prioritizes approved obligations and schedules due payments while preserving other reserves
- **Onchain action:** Reserve accounting and bounded payout
- **Security:** Atomic balance and outstanding-obligation invariant
- **Closest alternative:** Safe modules; conventional ERP reserves; Cleared
- **Differentiation hypothesis:** Same-transaction protection of authenticated future obligations
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Two due invoices and one attempted discretionary payment
- **Evaluation:** No aggregate reserve breach under parallel execution
- **Feasibility:** 1–3 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Atomic balance and outstanding-obligation invariant.
- **Required correction:** Build only this proposed falsifier after authorization: Two due invoices and one attempted discretionary payment. Accept only if: No aggregate reserve breach under parallel execution. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R001:L00159 (F01); R001:L00161 (F03); R001:L00180 (F22); R002:L00641 (C02); R003:L01195 (C01); R003:L01234 (C06); R003:L01306 (C20); R004:L01952 (C03); R006:L03220 (C04); R009:L03595 (C-09); R010:L04004 (C07); R010:L04007 (C10); R011:L04488 (C15); R012:L04805 (C13); R013:L05129 (C04)

## IDEA-003 — Objective milestone escrow

- **Problem/customer:** Digital contractors; prepayment and nonpayment risk
- **Workflow and autonomy:** Agent evaluates an agreed machine-checkable deliverable and triggers release or expiry refund
- **Onchain action:** Fund, submit, release, refund
- **Security:** Pinned evaluator, immutable terms, terminal state, bounded escrow
- **Closest alternative:** ERC-8183; Virtuals ACP; Kite; Trustless Work
- **Differentiation hypothesis:** Reproducible verifier and adversarial evidence quality, not escrow itself
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** One milestone and pinned tests
- **Evaluation:** No double release; malformed deliverable rejected; valid work paid
- **Feasibility:** 2–3 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Pinned evaluator, immutable terms, terminal state, bounded escrow.
- **Required correction:** Build only this proposed falsifier after authorization: One milestone and pinned tests. Accept only if: No double release; malformed deliverable rejected; valid work paid. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R001:L00160 (F02); R001:L00166 (F08); R002:L00642 (C03); R003:L01222 (C04); R004:L01947 (C01); R005:L02242 (Concept03); R005:L02633 (Concept20); R006:L03220 (C03); R007:L03240 (summary 1); R009:L03588 (C-02); R009:L03591 (C-05); R010:L04000 (C03); R011:L04433 (C01); R012:L04794 (C02); R012:L04804 (C12); R013:L05126 (C01); R013:L05142 (C17); R014:L05410 (visible architecture 3)

## IDEA-004 — Subjective dispute arbiter

- **Problem/customer:** Freelancers and buyers; subjective acceptance disputes
- **Workflow and autonomy:** Agent summarizes evidence; original variant gives LLM binding release authority
- **Onchain action:** Escrow settlement or refund
- **Security:** Human arbiter for subjective decisions; agent cannot override terms
- **Closest alternative:** Kleros; ERC-8183 evaluator; platform arbitration
- **Differentiation hypothesis:** Faster evidence preparation, not objectively correct AI judgment
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** One dispute with human decision
- **Evaluation:** Agreement with rubric; no release without authorized decision
- **Feasibility:** Defer autonomous ruling
- **Gate:** FAIL current submission scope / CONDITIONAL PASS research
- **Issue:** Essential safety, external evidence, legal workflow or integration remains unresolved beyond the short submission window; narrow to synthetic/local experiment. Not yet demonstrated: Human arbiter for subjective decisions; agent cannot override terms.
- **Required correction:** Build only this proposed falsifier after authorization: One dispute with human decision. Accept only if: Agreement with rubric; no release without authorized decision. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R001:L00166 (F08); R002:L00642 (C03); R003:L01222 (C04); R005:L02357 (Concept08); R012:L04804 (C12); R014:L05410 (visible architecture 3)

## IDEA-005 — RFQ procurement scout

- **Problem/customer:** DAO operations; search and negotiation overhead
- **Workflow and autonomy:** Agent compares signed quotes and buys within authorized requirements
- **Onchain action:** Bounded supplier payment or escrow
- **Security:** Signed quote, trusted suppliers, price and task cap
- **Closest alternative:** Kite; Request AI; Virtuals ACP
- **Differentiation hypothesis:** Measured price-quality selection under fixed buyer mandate
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Two vendors and one repeatable task
- **Evaluation:** Cost per accepted outcome versus fixed vendor
- **Feasibility:** 1–2 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Signed quote, trusted suppliers, price and task cap.
- **Required correction:** Build only this proposed falsifier after authorization: Two vendors and one repeatable task. Accept only if: Cost per accepted outcome versus fixed vendor. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R001:L00163 (F05); R002:L00651 (C12); R003:L01228 (C05); R004:L01964 (C15); R004:L01968 (C19); R009:L03588 (C-02); R009:L03589 (C-03); R009:L03599 (C-13); R010:L04010 (C13); R012:L04800 (C08)

## IDEA-006 — Metered service buyer

- **Problem/customer:** Agent operators; API cost overrun and paid failures
- **Workflow and autonomy:** Choose approved compute/API; pay per request; stop on budget or failure threshold
- **Onchain action:** x402 settlement
- **Security:** Global job budget, scoped signer, outstanding-payment reservation
- **Closest alternative:** x402; Nevermined; Circle; Coinbase; Crossmint
- **Differentiation hypothesis:** Task-level stop after verifiable delivery failure
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Two endpoints, one job, strict total budget
- **Evaluation:** Accepted output per unit cost; spend after failure
- **Feasibility:** 1–2 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Global job budget, scoped signer, outstanding-payment reservation.
- **Required correction:** Build only this proposed falsifier after authorization: Two endpoints, one job, strict total budget. Accept only if: Accepted output per unit cost; spend after failure. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R001:L00164 (F06); R002:L00643 (C04); R003:L01244 (C08); R004:L01951 (C02); R005:L02288 (Concept05); R006:L03220 (C02); R007:L03240 (summary 1); R008:L03322 (C02); R009:L03596 (C-10); R010:L04013 (C16); R011:L04490 (C17); R012:L04795 (C03); R014:L05407 (visible architecture 2)

## IDEA-007 — Data provenance buyer

- **Problem/customer:** Research teams; paid data lacks provenance
- **Workflow and autonomy:** Agent checks publisher signature and provenance before subsequent purchases
- **Onchain action:** Data micropayment and evidence commitment
- **Security:** Pinned issuer and schema; signed data is not necessarily true
- **Closest alternative:** x402 signed offers; data marketplaces
- **Differentiation hypothesis:** Provenance-conditioned purchasing behavior
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** One signed dataset and one tampered copy
- **Evaluation:** Reject altered provenance; track factual quality separately
- **Feasibility:** 1–2 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Pinned issuer and schema; signed data is not necessarily true.
- **Required correction:** Build only this proposed falsifier after authorization: One signed dataset and one tampered copy. Accept only if: Reject altered provenance; track factual quality separately. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R001:L00165 (F07)

## IDEA-008 — Conditional grant steward

- **Problem/customer:** Grantmakers; tranche misuse and unclear delivery
- **Workflow and autonomy:** Agent checks enrollment or objective milestone and pays authorized tranche
- **Onchain action:** Grant escrow/release/refund
- **Security:** Verified issuer attestations; cap per beneficiary; human exceptions
- **Closest alternative:** Trustless Work; Sablier; ERC-8183
- **Differentiation hypothesis:** Evidence-linked grant controls with explainable withholding
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** One synthetic award and two tranches
- **Evaluation:** No wrong beneficiary or duplicate tranche
- **Feasibility:** 2–3 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Verified issuer attestations; cap per beneficiary; human exceptions.
- **Required correction:** Build only this proposed falsifier after authorization: One synthetic award and two tranches. Accept only if: No wrong beneficiary or duplicate tranche. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R001:L00167 (F09); R002:L00647 (C08); R003:L01239 (C07); R004:L01953 (C04); R005:L02426 (Concept11); R006:L03220 (C14); R010:L04014 (C17); R011:L04493 (C20); R012:L04806 (C14); R013:L05132 (C07); R014:L05510 (visible architecture 6)

## IDEA-009 — Defensive incident agent

- **Problem/customer:** Treasury operators; exposure persists after suspicious activity
- **Workflow and autonomy:** Independent watcher revokes or pauses narrowly authorized sessions
- **Onchain action:** Revoke/pause, optionally fixed safe transfer
- **Security:** Out-of-band owner; no arbitrary rescue destination
- **Closest alternative:** Wallet revocation; Safe; monitoring systems
- **Differentiation hypothesis:** Tested incident-to-containment time across a narrow incident class
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** One compromised session and one revoke
- **Evaluation:** Post-revoke execution denied; false pause rate
- **Feasibility:** 1–2 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Out-of-band owner; no arbitrary rescue destination.
- **Required correction:** Build only this proposed falsifier after authorization: One compromised session and one revoke. Accept only if: Post-revoke execution denied; false pause rate. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R001:L00168 (F10); R002:L00645 (C06); R003:L01214 (C03); R004:L01955 (C06); R005:L02495 (Concept14); R006:L03220 (C19); R008:L03344 (C03); R010:L04005 (C08); R011:L04470 (C05); R012:L04802 (C10); R013:L05128 (C03); R014:L05483 (visible architecture 5)

## IDEA-010 — Approval hygiene

- **Problem/customer:** Wallet owners; stale token allowances
- **Workflow and autonomy:** Agent inventories and revokes specific unnecessary allowances
- **Onchain action:** approve(spender,0) or authorized revoke
- **Security:** Exact token/spender; gas cap; no new approval rights
- **Closest alternative:** Wallet allowance tools; revoke utilities
- **Differentiation hypothesis:** Safe automated selection and rollback-free explanation
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Two stale allowances, one needed allowance
- **Evaluation:** Revoke only stale grants; no value moved
- **Feasibility:** 3–7 days
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Exact token/spender; gas cap; no new approval rights.
- **Required correction:** Build only this proposed falsifier after authorization: Two stale allowances, one needed allowance. Accept only if: Revoke only stale grants; no value moved. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R001:L00169 (F11); R003:L01253 (C10); R013:L05140 (C15)

## IDEA-011 — Exact-intent execution firewall

- **Problem/customer:** Wallet developers; approved terms mutate before execution
- **Workflow and autonomy:** Model proposes; deterministic verifier binds policy and approved bytes
- **Onchain action:** Account verifies authorization then executes
- **Security:** Domain separation, expiry, one-use nonce, exact calldata and fee bounds
- **Closest alternative:** PACE; AP2; wallet policy engines
- **Differentiation hypothesis:** Workflow-specific authority and verified integration, not byte binding
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Single canonical payment schema
- **Evaluation:** Every field mutation denied; all tool paths covered
- **Feasibility:** 1–2 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Domain separation, expiry, one-use nonce, exact calldata and fee bounds.
- **Required correction:** Build only this proposed falsifier after authorization: Single canonical payment schema. Accept only if: Every field mutation denied; all tool paths covered. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R001:L00170 (F12); R002:L00644 (C05); R003:L01205 (C02); R005:L02196 (Concept01); R006:L03220 (C05); R006:L03220 (C20); R007:L03240 (summary 1); R010:L03998 (C01); R010:L04001 (C04); R010:L04002 (C05); R011:L04433 (C01); R011:L04473 (C06); R012:L04798 (C06); R012:L04812 (C20); R014:L05403 (visible architecture 1)

## IDEA-012 — Trusted beneficiary registry

- **Problem/customer:** AP teams; address substitution and fake vendors
- **Workflow and autonomy:** Verify vendor onboarding independently; agent uses signed versioned payee mapping
- **Onchain action:** Bounded transfer to registered address
- **Security:** Owner-authorized address change; delay/review; no invoice-driven update
- **Closest alternative:** Payee allowlists; AP2 merchant credentials
- **Differentiation hypothesis:** Combine vendor version with obligation identity
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** One valid and one changed vendor address
- **Evaluation:** Reject unapproved beneficiary update
- **Feasibility:** 3–7 days
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Owner-authorized address change; delay/review; no invoice-driven update.
- **Required correction:** Build only this proposed falsifier after authorization: One valid and one changed vendor address. Accept only if: Reject unapproved beneficiary update. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R001:L00171 (F13); R003:L01278 (C15); R010:L03999 (C02); R011:L04486 (C13)

## IDEA-013 — Surplus yield allocator

- **Problem/customer:** Treasuries; idle cash earns little
- **Workflow and autonomy:** Agent allocates only discretionary surplus to approved lending vault
- **Onchain action:** Deposit/withdraw
- **Security:** Reserve floor, exposure cap; no promised principal protection
- **Closest alternative:** Aave; Morpho; existing yield automation
- **Differentiation hypothesis:** Obligation-aware allocation; uncertain incremental value
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Local fork, one vault, no real funds
- **Evaluation:** Reserve remains available during stress withdrawal
- **Feasibility:** Defer beyond submission
- **Gate:** FAIL current submission scope / CONDITIONAL PASS research
- **Issue:** Essential safety, external evidence, legal workflow or integration remains unresolved beyond the short submission window; narrow to synthetic/local experiment. Not yet demonstrated: Reserve floor, exposure cap; no promised principal protection.
- **Required correction:** Build only this proposed falsifier after authorization: Local fork, one vault, no real funds. Accept only if: Reserve remains available during stress withdrawal. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R001:L00172 (F14); R002:L00641 (C02); R006:L03220 (C04); R008:L03388 (C05); R013:L05129 (C04); R013:L05144 (C19)

## IDEA-014 — Collateral rescue

- **Problem/customer:** Borrowers; liquidation under changing prices
- **Workflow and autonomy:** Agent repays or adds collateral within authorized budget
- **Onchain action:** Repay/add collateral
- **Security:** No new borrowing; stale oracle rejection; maximum rescue spend
- **Closest alternative:** Protocol automation and lending keepers
- **Differentiation hypothesis:** Obligation-aware prioritization under fixed rescue capital
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** One synthetic debt position
- **Evaluation:** Rescue under delay; bound spend without guaranteeing no liquidation
- **Feasibility:** 2–4 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: No new borrowing; stale oracle rejection; maximum rescue spend.
- **Required correction:** Build only this proposed falsifier after authorization: One synthetic debt position. Accept only if: Rescue under delay; bound spend without guaranteeing no liquidation. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R001:L00173 (F15); R002:L00650 (C11); R003:L01259 (C11)

## IDEA-015 — Risk-capped DeFi allocator

- **Problem/customer:** Treasury traders; repeated strategy execution
- **Workflow and autonomy:** Agent rebalances approved positions, including delta-neutral variant
- **Onchain action:** Swap/deposit/withdraw
- **Security:** Exposure/slippage caps; no unrestricted approvals; leverage excluded MVP
- **Closest alternative:** MetaMask; Coinbase; trading automation
- **Differentiation hypothesis:** Demonstrated risk-adjusted improvement remains unverified
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Forked one-asset strategy
- **Evaluation:** Adversarial oracle/MEV test; account for full capital loss
- **Feasibility:** Defer
- **Gate:** FAIL current submission scope / CONDITIONAL PASS research
- **Issue:** Essential safety, external evidence, legal workflow or integration remains unresolved beyond the short submission window; narrow to synthetic/local experiment. Not yet demonstrated: Exposure/slippage caps; no unrestricted approvals; leverage excluded MVP.
- **Required correction:** Build only this proposed falsifier after authorization: Forked one-asset strategy. Accept only if: Adversarial oracle/MEV test; account for full capital loss. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R001:L00174 (F16); R004:L01961 (C12); R006:L03220 (C09); R008:L03388 (C05); R009:L03598 (C-12); R011:L04484 (C11)

## IDEA-016 — Cross-chain treasury replenisher

- **Problem/customer:** Multichain treasury; fragmented liquidity
- **Workflow and autonomy:** Agent selects route and replenishes known destination wallets
- **Onchain action:** Bridge/burn/mint and destination verify
- **Security:** Per-route cap, source/destination finality, no blind retries
- **Closest alternative:** CCTP; LI.FI; deBridge; wallet routing
- **Differentiation hypothesis:** Obligation deadlines across chains with explicit failure states
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Local two-chain simulation
- **Evaluation:** No duplicate mint/payment; stalled source never shown settled
- **Feasibility:** Defer
- **Gate:** FAIL current submission scope / CONDITIONAL PASS research
- **Issue:** Essential safety, external evidence, legal workflow or integration remains unresolved beyond the short submission window; narrow to synthetic/local experiment. Not yet demonstrated: Per-route cap, source/destination finality, no blind retries.
- **Required correction:** Build only this proposed falsifier after authorization: Local two-chain simulation. Accept only if: No duplicate mint/payment; stalled source never shown settled. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R001:L00175 (F17); R002:L00649 (C10); R003:L01264 (C12); R004:L01956 (C07); R005:L02518 (Concept15); R006:L03220 (C15); R009:L03592 (C-06); R009:L03606 (C-20); R010:L04008 (C11); R011:L04481 (C09); R012:L04808 (C16); R013:L05136 (C11)

## IDEA-017 — DAO contributor payout

- **Problem/customer:** DAOs; contributor accounting overhead
- **Workflow and autonomy:** Agent evaluates authorized work records and proposes/pays capped awards
- **Onchain action:** Batch payouts or streams
- **Security:** Approved roster and amount rules; subjective evaluation escalates
- **Closest alternative:** Request; Sablier; DAO treasury tools
- **Differentiation hypothesis:** Task evidence to governed payout audit
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Three contributors, fixed approved rates
- **Evaluation:** No forged work record payment
- **Feasibility:** 1–2 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Approved roster and amount rules; subjective evaluation escalates.
- **Required correction:** Build only this proposed falsifier after authorization: Three contributors, fixed approved rates. Accept only if: No forged work record payment. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R001:L00176 (F18); R003:L01269 (C13); R005:L02587 (Concept18); R012:L04797 (C05)

## IDEA-018 — Agent service marketplace

- **Problem/customer:** Agent operators; hiring and settlement friction
- **Workflow and autonomy:** Agents discover, negotiate, escrow and settle services
- **Onchain action:** Job escrow, optional reputation attestation
- **Security:** Identity is not trust; aggregate job budget; fixed evaluators
- **Closest alternative:** Virtuals ACP; Kite; BNB; OKX
- **Differentiation hypothesis:** Specialized service quality market, not generic A2A settlement
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Two sellers, one objective job
- **Evaluation:** Accepted deliverable rate and total cost
- **Feasibility:** 3–4 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Identity is not trust; aggregate job budget; fixed evaluators.
- **Required correction:** Build only this proposed falsifier after authorization: Two sellers, one objective job. Accept only if: Accepted deliverable rate and total cost. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R001:L00177 (F19); R001:L00180 (F22); R002:L00651 (C12); R004:L01960 (C11); R004:L01968 (C19); R005:L02633 (Concept20); R012:L04801 (C09); R013:L05142 (C17)

## IDEA-019 — Outcome-gated purchase

- **Problem/customer:** Digital task buyers; payment succeeds but task fails
- **Workflow and autonomy:** Agent buys only after objective acceptance or stops future spending
- **Onchain action:** Escrow release or bounded follow-on payment
- **Security:** Pinned acceptance tests and evidence digest; sandbox evaluator
- **Closest alternative:** ERC-8183; x402 receipts; Kite
- **Differentiation hypothesis:** Distinguish verifiable output acceptance from signed delivery claim
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Known-answer dataset or deterministic compute job
- **Evaluation:** False acceptance, false rejection, unpaid valid work
- **Feasibility:** 2–3 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Pinned acceptance tests and evidence digest; sandbox evaluator.
- **Required correction:** Build only this proposed falsifier after authorization: Known-answer dataset or deterministic compute job. Accept only if: False acceptance, false rejection, unpaid valid work. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R001:L00164 (F06); R001:L00178 (F20); R003:L01239 (C07); R006:L03220 (C03); R010:L04000 (C03); R010:L04014 (C17); R014:L05407 (visible architecture 2); R014:L05510 (visible architecture 7)

## IDEA-020 — Private policy proof

- **Problem/customer:** Sensitive treasury; public policy leaks
- **Workflow and autonomy:** Agent proposes action; ZK/enclave proves compliance before execution
- **Onchain action:** Proof verification and scoped execution
- **Security:** Circuit and attestation trust; public metadata still leaks
- **Closest alternative:** Autonomify; BOB Pakt (report-only)
- **Differentiation hypothesis:** Specific private obligation predicate with measurable overhead
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** One predicate and one token on local chain
- **Evaluation:** Invalid witness rejected; compare disclosure and latency
- **Feasibility:** Defer production; research prototype 3–6 weeks
- **Gate:** FAIL current submission scope / CONDITIONAL PASS research
- **Issue:** Essential safety, external evidence, legal workflow or integration remains unresolved beyond the short submission window; narrow to synthetic/local experiment. Not yet demonstrated: Circuit and attestation trust; public metadata still leaks.
- **Required correction:** Build only this proposed falsifier after authorization: One predicate and one token on local chain. Accept only if: Invalid witness rejected; compare disclosure and latency. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R001:L00179 (F21); R003:L01316 (C22); R004:L01962 (C13); R013:L05141 (C16); R014:L05510 (visible architecture 6); R014:L05510 (visible architecture 7)

## IDEA-021 — Streaming payroll

- **Problem/customer:** Contractor employers; recurring payment administration
- **Workflow and autonomy:** Agent validates approved payroll and starts/stops capped streams
- **Onchain action:** Create/update/delete stream
- **Security:** Signed roster/rate; expiry; ongoing accrual included in exposure
- **Closest alternative:** Superfluid; Sablier; Request
- **Differentiation hypothesis:** Obligation-linked controls and evidence, not streaming
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Two synthetic contractors
- **Evaluation:** Unauthorized rate rise blocked; accrued liability bounded
- **Feasibility:** 1–3 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Signed roster/rate; expiry; ongoing accrual included in exposure.
- **Required correction:** Build only this proposed falsifier after authorization: Two synthetic contractors. Accept only if: Unauthorized rate rise blocked; accrued liability bounded. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R001:L00161 (F03); R002:L00648 (C09); R003:L01306 (C20); R005:L02403 (Concept10); R006:L03220 (C01); R009:L03603 (C-17); R010:L04009 (C12); R011:L04479 (C08); R012:L04796 (C04); R013:L05134 (C09)

## IDEA-022 — Parametric claims wallet

- **Problem/customer:** Insurers/relief funds; slow trigger-based payouts
- **Workflow and autonomy:** Agent reads authorized trigger, checks eligibility, executes bounded payout
- **Onchain action:** Escrow release
- **Security:** Pinned oracle, freshness, beneficiary and aggregate cap
- **Closest alternative:** Etherisc; parametric contracts
- **Differentiation hypothesis:** Document-assisted exceptions with deterministic trigger boundary
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Synthetic weather/event feed
- **Evaluation:** Stale/manipulated trigger never pays
- **Feasibility:** 2–4 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Pinned oracle, freshness, beneficiary and aggregate cap.
- **Required correction:** Build only this proposed falsifier after authorization: Synthetic weather/event feed. Accept only if: Stale/manipulated trigger never pays. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R002:L00659 (C20); R005:L02449 (Concept12); R006:L03220 (C07); R008:L03366 (C04); R009:L03601 (C-15); R011:L04489 (C16); R012:L04807 (C15); R013:L05133 (C08)

## IDEA-023 — Reconciliation agent

- **Problem/customer:** Finance operations; chain state differs from ledger
- **Workflow and autonomy:** Agent resolves payment status and proposes bounded correction/refund
- **Onchain action:** Read-only baseline; optional corrective transfer
- **Security:** Independent receipt verification and durable idempotency
- **Closest alternative:** Request; payment ledgers
- **Differentiation hypothesis:** Safe correction after ambiguous execution
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Broadcast timeout and duplicated invoice
- **Evaluation:** At most one economic payment; accurate pending status
- **Feasibility:** 3–7 days
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Independent receipt verification and durable idempotency.
- **Required correction:** Build only this proposed falsifier after authorization: Broadcast timeout and duplicated invoice. Accept only if: At most one economic payment; accurate pending status. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R002:L00656 (C17); R003:L01289 (C17); R012:L04810 (C18); R014:L05403 (visible architecture 1); R014:L05407 (visible architecture 2)

## IDEA-024 — Agent credit wallet

- **Problem/customer:** Agent/SME borrowers; working-capital shortage
- **Workflow and autonomy:** Agent requests bounded advance based on history and repays
- **Onchain action:** Borrow/repay
- **Security:** Collateral/underwriting needed; reputation alone inadequate
- **Closest alternative:** DeFi lending; invoice finance
- **Differentiation hypothesis:** Sound agent-specific underwriting remains unproven
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Synthetic borrower simulation
- **Evaluation:** Default and sybil stress; no real credit issued
- **Feasibility:** Defer
- **Gate:** FAIL current submission scope / CONDITIONAL PASS research
- **Issue:** Essential safety, external evidence, legal workflow or integration remains unresolved beyond the short submission window; narrow to synthetic/local experiment. Not yet demonstrated: Collateral/underwriting needed; reputation alone inadequate.
- **Required correction:** Build only this proposed falsifier after authorization: Synthetic borrower simulation. Accept only if: Default and sybil stress; no real credit issued. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R002:L00657 (C18); R012:L04809 (C17)

## IDEA-025 — Natural-language policy compiler

- **Problem/customer:** Wallet admins; policies are hard to configure
- **Workflow and autonomy:** LLM drafts policy; deterministic compiler produces reviewed constraints
- **Onchain action:** Install/update delegated permission
- **Security:** Trusted review surface; narrow-only defaults; reject ambiguity
- **Closest alternative:** Clawnch; MetaMask caveats; Zodiac permissions-as-code
- **Differentiation hypothesis:** Semantic conformance and unsafe-widening detection
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Ten policies, one backend
- **Evaluation:** No unauthorized widening; understandable effective-policy diff
- **Feasibility:** 1–2 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Trusted review surface; narrow-only defaults; reject ambiguity.
- **Required correction:** Build only this proposed falsifier after authorization: Ten policies, one backend. Accept only if: No unauthorized widening; understandable effective-policy diff. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R002:L00658 (C19); R003:L01295 (C18); R006:L03220 (C20); R013:L05131 (C06)

## IDEA-026 — Conditional loss certificate

- **Problem/customer:** Wallet owners; unclear delegated financial exposure
- **Workflow and autonomy:** Compute maximum reachable outflow from current grants and state
- **Onchain action:** Optional certificate commitment; pair with payment
- **Security:** Enumerate all sessions, resets, approvals and gas; explicit assumptions
- **Closest alternative:** Wallet caps; formal verification tools
- **Differentiation hypothesis:** Machine-checkable aggregate exposure explanation
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** One account, two sessions
- **Evaluation:** Predicted bound survives adversarial reachable traces
- **Feasibility:** 2–4 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Enumerate all sessions, resets, approvals and gas; explicit assumptions.
- **Required correction:** Build only this proposed falsifier after authorization: One account, two sessions. Accept only if: Predicted bound survives adversarial reachable traces. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R003:L01301 (C19); R004:L01965 (C16)

## IDEA-027 — Gas and fee keeper

- **Problem/customer:** Wallet operators; failed tasks from no gas
- **Workflow and autonomy:** Agent funds dedicated gas account within strict policy
- **Onchain action:** Native-token top-up or paymaster deposit
- **Security:** Fixed destination and gas lifetime cap
- **Closest alternative:** Paymasters; GasJanitor; wallet infrastructure
- **Differentiation hypothesis:** Obligation-aware gas reservation
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** One payment blocked by low gas then authorized refill
- **Evaluation:** No gas-drain loop; bounded retry count
- **Feasibility:** 3–7 days
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Fixed destination and gas lifetime cap.
- **Required correction:** Build only this proposed falsifier after authorization: One payment blocked by low gas then authorized refill. Accept only if: No gas-drain loop; bounded retry count. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R001:L00175 (F17); R002:L00661 (C22); R004:L01964 (C15); R011:L04481 (C09); R013:L05140 (C15)

## IDEA-028 — Family allowance wallet

- **Problem/customer:** Families; delegated discretionary spending
- **Workflow and autonomy:** Child/agent spends within category and time mandate
- **Onchain action:** Scoped transfers
- **Security:** Guardian root, lifetime budget, recipient boundaries
- **Closest alternative:** Scoped wallet infrastructure
- **Differentiation hypothesis:** Age-appropriate approval UX; no novel protocol claim
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** One synthetic allowance
- **Evaluation:** No escalation or cross-category spend
- **Feasibility:** 1–2 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Guardian root, lifetime budget, recipient boundaries.
- **Required correction:** Build only this proposed falsifier after authorization: One synthetic allowance. Accept only if: No escalation or cross-category spend. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R002:L00653 (C14)

## IDEA-029 — Student tuition and stipend wallet

- **Problem/customer:** Students/sponsors; recurring earmarked costs
- **Workflow and autonomy:** Agent schedules approved tuition/rent/stipends
- **Onchain action:** Recipient-bound payout
- **Security:** Institution onboarding, restricted categories, sponsor controls
- **Closest alternative:** Remittance/payroll products; scoped wallets
- **Differentiation hypothesis:** Education-specific reserve and proof workflow
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Synthetic tuition and rent
- **Evaluation:** Pay on time without consuming tuition reserve
- **Feasibility:** 1–2 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Institution onboarding, restricted categories, sponsor controls.
- **Required correction:** Build only this proposed falsifier after authorization: Synthetic tuition and rent. Accept only if: Pay on time without consuming tuition reserve. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R002:L00655 (C16); R011:L04494 (C21); R013:L05143 (C18)

## IDEA-030 — Governance-to-execution agent

- **Problem/customer:** DAOs; proposal text differs from transaction
- **Workflow and autonomy:** Agent maps passed resolution to restricted executable proposal
- **Onchain action:** Safe module execution
- **Security:** Canonical proposal hash; independently approved calldata; governance auth
- **Closest alternative:** Zodiac; Snapshot execution ecosystem; SentinelDAO
- **Differentiation hypothesis:** Semantic mismatch detection with executable authority boundary
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** One passed proposal and mutated payout
- **Evaluation:** Wrong calldata never executes
- **Feasibility:** 1–3 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Canonical proposal hash; independently approved calldata; governance auth.
- **Required correction:** Build only this proposed falsifier after authorization: One passed proposal and mutated payout. Accept only if: Wrong calldata never executes. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R002:L00654 (C15); R006:L03220 (C13); R012:L04797 (C05); R013:L05139 (C14)

## IDEA-031 — Decision and receipt ledger

- **Problem/customer:** Wallet reviewers; cannot reconstruct why payment happened
- **Workflow and autonomy:** Record input provenance, signed decision, execution and observed result
- **Onchain action:** Optional opaque commitment plus actual payment
- **Security:** Separate pre-authorization record and post-execution receipt
- **Closest alternative:** PACE; AP2; x402 receipts; Cleared; AgentAudit
- **Differentiation hypothesis:** Workflow-specific reconstruction completeness, not truth from a hash
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Five payments and deterministic verifier
- **Evaluation:** Every receipt reconstructs; tampering detected
- **Feasibility:** 3–7 days
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Separate pre-authorization record and post-execution receipt.
- **Required correction:** Build only this proposed falsifier after authorization: Five payments and deterministic verifier. Accept only if: Every receipt reconstructs; tampering detected. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R002:L00652 (C13); R003:L01205 (C02); R004:L01960 (C11); R004:L01962 (C13); R004:L01970 (C21); R005:L02219 (Concept02); R007:L03240 (summary 1); R010:L04017 (C20); R011:L04467 (C04); R012:L04801 (C09); R012:L04810 (C18); R013:L05130 (C05); R014:L05403 (visible architecture 1)

## IDEA-032 — Adversarial wallet benchmark

- **Problem/customer:** Builders/judges; safety claims lack reproducible evidence
- **Workflow and autonomy:** Agent completes financial tasks while harness mutates inputs and execution
- **Onchain action:** Controlled valid and invalid payment attempts
- **Security:** Independent oracle, positive controls, blind holdout cases
- **Closest alternative:** PACE; CrAIBench; AgentDojo; InjecAgent
- **Differentiation hypothesis:** Wallet-path coverage and obligation-specific attack corpus
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** One real wallet workflow plus attack fixtures
- **Evaluation:** Zero unauthorized execution; report benign failures too
- **Feasibility:** 1–2 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Independent oracle, positive controls, blind holdout cases.
- **Required correction:** Build only this proposed falsifier after authorization: One real wallet workflow plus attack fixtures. Accept only if: Zero unauthorized execution; report benign failures too. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R002:L00660 (C21); R010:L03998 (C01); R011:L04495 (C22); R014:L05480 (visible architecture 4)

## IDEA-033 — Original-payer refund governor

- **Problem/customer:** Merchants; refund fraud and repeated refunds
- **Workflow and autonomy:** Agent reconciles return against original order and refunds remaining amount
- **Onchain action:** Refund token transfer
- **Security:** Original-payer destination, cumulative refunded<=paid, one-use order state
- **Closest alternative:** Conventional payment refunds; escrow refunds
- **Differentiation hypothesis:** Cross-tool original-payment provenance enforcement
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** One partial and one attempted duplicate refund
- **Evaluation:** No destination change or over-refund
- **Feasibility:** 1–2 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Original-payer destination, cumulative refunded<=paid, one-use order state.
- **Required correction:** Build only this proposed falsifier after authorization: One partial and one attempted duplicate refund. Accept only if: No destination change or over-refund. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R003:L01249 (C09)

## IDEA-034 — Multi-agent treasury committee

- **Problem/customer:** Treasuries; one model makes bad proposals
- **Workflow and autonomy:** Separate proposer/reviewer agents with human policy authority
- **Onchain action:** Threshold-authorized payout
- **Security:** Two agents are correlated; require actual human role where needed
- **Closest alternative:** Turnkey personas; multisig; Safe
- **Differentiation hypothesis:** Measured disagreement utility, not assumed independence
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Two models and one immutable cap
- **Evaluation:** Compromised pair cannot expand authority
- **Feasibility:** 2–3 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Two agents are correlated; require actual human role where needed.
- **Required correction:** Build only this proposed falsifier after authorization: Two models and one immutable cap. Accept only if: Compromised pair cannot expand authority. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R003:L01284 (C16); R004:L01959 (C10); R005:L02265 (Concept04); R006:L03220 (C11); R009:L03595 (C-09); R010:L04003 (C06)

## IDEA-035 — Two-sided work bond

- **Problem/customer:** Agent marketplaces; provider/client can default
- **Workflow and autonomy:** Both post bounded stake; objective verdict settles bond
- **Onchain action:** Escrow and slash/refund
- **Security:** Independent accepted evaluator; cap collateral; dispute path
- **Closest alternative:** Staking/escrow platforms; ERC-8183 extension
- **Differentiation hypothesis:** Balanced incentives for a narrowly measurable task
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** One task and two bounded bonds
- **Evaluation:** Collusion and griefing costs; no unfair automatic slash
- **Feasibility:** 3–4 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Independent accepted evaluator; cap collateral; dispute path.
- **Required correction:** Build only this proposed falsifier after authorization: One task and two bounded bonds. Accept only if: Collusion and griefing costs; no unfair automatic slash. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R003:L01311 (C21); R011:L04487 (C14)

## IDEA-036 — Counterparty fallback wallet

- **Problem/customer:** Procurement teams; seller history is unreliable
- **Workflow and autonomy:** Require signed interaction evidence; default unknown sellers to smaller escrow
- **Onchain action:** Scoped payment/escrow
- **Security:** History cannot automatically increase owner cap; sybil tests
- **Closest alternative:** ERC-8004; x402 receipts; Kite
- **Differentiation hypothesis:** Conservative fallback despite missing or sybil reputation
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Known seller, unknown seller, forged history
- **Evaluation:** No budget escalation from fabricated reputation
- **Feasibility:** 1–2 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: History cannot automatically increase owner cap; sybil tests.
- **Required correction:** Build only this proposed falsifier after authorization: Known seller, unknown seller, forged history. Accept only if: No budget escalation from fabricated reputation. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R006:L03220 (C06); R010:L04012 (C15); R012:L04811 (C19)

## IDEA-037 — Policy conformance kernel

- **Problem/customer:** Wallet developers; policy changes meaning across backends
- **Workflow and autonomy:** Compile common narrow policy; test each adapter against same executable cases
- **Onchain action:** Two wallet implementations execute same payment policy
- **Security:** Reject unsupported predicates; preserve strict semantics
- **Closest alternative:** Clawnch; wallet permission SDKs; PACE
- **Differentiation hypothesis:** Demonstrable cross-backend semantic equivalence for specified subset
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Two adapters and 20 policies
- **Evaluation:** No unsafe widening or accepted-path divergence
- **Feasibility:** 2–3 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Reject unsupported predicates; preserve strict semantics.
- **Required correction:** Build only this proposed falsifier after authorization: Two adapters and 20 policies. Accept only if: No unsafe widening or accepted-path divergence. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R004:L01965 (C16); R010:L04018 (C21)

## IDEA-038 — Repayment waterfall

- **Problem/customer:** Treasuries; scarce funds require payment priority
- **Workflow and autonomy:** Agent schedules payments under owner-set seniority and reserve floors
- **Onchain action:** Ordered repayments
- **Security:** No agent-defined creditor priority; atomic aggregate accounting
- **Closest alternative:** Traditional waterfall contracts; obligation treasury
- **Differentiation hypothesis:** Explainable priority adherence under stress
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Three synthetic obligations
- **Evaluation:** Senior obligations protected under concurrent draws
- **Feasibility:** 1–3 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: No agent-defined creditor priority; atomic aggregate accounting.
- **Required correction:** Build only this proposed falsifier after authorization: Three synthetic obligations. Accept only if: Senior obligations protected under concurrent draws. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R010:L04011 (C14)

## IDEA-039 — Welfare disbursement and return

- **Problem/customer:** Aid funds; unused earmarked budget not returned
- **Workflow and autonomy:** Agent releases eligible expense payments; unused allocation returns at expiry
- **Onchain action:** Payout/return to original funder
- **Security:** Eligibility attestation, beneficiary limits, privacy safeguards
- **Closest alternative:** Grant/escrow infrastructure
- **Differentiation hypothesis:** Return-aware beneficiary budgeting
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** One synthetic beneficiary, one expiry
- **Evaluation:** No invalid payout; exact unused balance returned
- **Feasibility:** 2–3 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Eligibility attestation, beneficiary limits, privacy safeguards.
- **Required correction:** Build only this proposed falsifier after authorization: One synthetic beneficiary, one expiry. Accept only if: No invalid payout; exact unused balance returned. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R006:L03220 (C07); R010:L04019 (C22); R011:L04493 (C20)

## IDEA-040 — Self-funding compute wallet

- **Problem/customer:** Agent operators; compute spend exceeds earned revenue
- **Workflow and autonomy:** Agent buys compute only from realized revenue allocation
- **Onchain action:** Service payment and revenue receipt
- **Security:** Use finalized revenue, reserve obligations, global cap
- **Closest alternative:** Agent payment platforms; Clawnch earning/spending
- **Differentiation hypothesis:** Revenue-conditioned task budget with no circular expected-income credit
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** One earned fee then one compute job
- **Evaluation:** No spending against unpaid receivable
- **Feasibility:** 1–2 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Use finalized revenue, reserve obligations, global cap.
- **Required correction:** Build only this proposed falsifier after authorization: One earned fee then one compute job. Accept only if: No spending against unpaid receivable. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R004:L01969 (C20)

## IDEA-041 — Inheritance and dead-man wallet

- **Problem/customer:** Estate owners; inaccessible assets after death
- **Workflow and autonomy:** Agent detects inactivity and proposes timed recovery to named beneficiary
- **Onchain action:** Timelocked transfer
- **Security:** Legal authority and reliable trigger; owner cancellation
- **Closest alternative:** Social recovery/dead-man contracts
- **Differentiation hypothesis:** Estate evidence UX remains unvalidated
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Simulation only with reversible cancellation
- **Evaluation:** False-death trigger cannot cause irreversible payout
- **Feasibility:** Defer
- **Gate:** FAIL current submission scope / CONDITIONAL PASS research
- **Issue:** Essential safety, external evidence, legal workflow or integration remains unresolved beyond the short submission window; narrow to synthetic/local experiment. Not yet demonstrated: Legal authority and reliable trigger; owner cancellation.
- **Required correction:** Build only this proposed falsifier after authorization: Simulation only with reversible cancellation. Accept only if: False-death trigger cannot cause irreversible payout. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R005:L02334 (Concept07)

## IDEA-042 — Carbon offset purchaser

- **Problem/customer:** Businesses; offset procurement and evidence burden
- **Workflow and autonomy:** Agent selects authorized credits and retires tokens
- **Onchain action:** Purchase/retire credit
- **Security:** Issuer quality and double-counting checks; no climate truth from chain
- **Closest alternative:** Carbon registries and tokenized credits
- **Differentiation hypothesis:** Budgeted quality-aware selection
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Synthetic credit registry
- **Evaluation:** Reject duplicate/unverifiable retirement
- **Feasibility:** Defer market claims
- **Gate:** FAIL current submission scope / CONDITIONAL PASS research
- **Issue:** Essential safety, external evidence, legal workflow or integration remains unresolved beyond the short submission window; narrow to synthetic/local experiment. Not yet demonstrated: Issuer quality and double-counting checks; no climate truth from chain.
- **Required correction:** Build only this proposed falsifier after authorization: Synthetic credit registry. Accept only if: Reject duplicate/unverifiable retirement. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R005:L02380 (Concept09); R006:L03220 (C18)

## IDEA-043 — Invoice factoring wallet

- **Problem/customer:** SMEs; delayed receivables create cash shortfall
- **Workflow and autonomy:** Agent screens invoice and advances against legally assigned claim
- **Onchain action:** Advance, assignment, repayment
- **Security:** Authenticity, duplicate financing, debtor and legal enforceability
- **Closest alternative:** Centrifuge; Qupital; Oliver; Cleared invoice NFT design
- **Differentiation hypothesis:** Verified small-invoice funding within hard credit limit
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Synthetic invoice, no live lending
- **Evaluation:** Reject duplicate pledge; loss stress exceeds no promises
- **Feasibility:** Defer
- **Gate:** FAIL current submission scope / CONDITIONAL PASS research
- **Issue:** Essential safety, external evidence, legal workflow or integration remains unresolved beyond the short submission window; narrow to synthetic/local experiment. Not yet demonstrated: Authenticity, duplicate financing, debtor and legal enforceability.
- **Required correction:** Build only this proposed falsifier after authorization: Synthetic invoice, no live lending. Accept only if: Reject duplicate pledge; loss stress exceeds no promises. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R005:L02564 (Concept17); R006:L03220 (C12); R013:L05138 (C13)

## IDEA-044 — Green bond proceeds agent

- **Problem/customer:** Issuers/investors; use-of-proceeds accountability
- **Workflow and autonomy:** Agent proposes earmarked disbursements and evidence reports
- **Onchain action:** Bond/proceeds token and payout
- **Security:** Approved eligible uses and real-world attestation
- **Closest alternative:** Tokenized bonds and conventional reporting
- **Differentiation hypothesis:** Evidence-linked proceeds controls
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Synthetic proceeds ledger
- **Evaluation:** No ineligible allocation; truthful uncertainty
- **Feasibility:** Defer securities deployment
- **Gate:** FAIL current submission scope / CONDITIONAL PASS research
- **Issue:** Essential safety, external evidence, legal workflow or integration remains unresolved beyond the short submission window; narrow to synthetic/local experiment. Not yet demonstrated: Approved eligible uses and real-world attestation.
- **Required correction:** Build only this proposed falsifier after authorization: Synthetic proceeds ledger. Accept only if: No ineligible allocation; truthful uncertainty. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R005:L02610 (Concept19)

## IDEA-045 — Tax-loss harvesting agent

- **Problem/customer:** Investors; tax-aware rebalancing workload
- **Workflow and autonomy:** Agent identifies candidate trades subject to jurisdiction-specific rules
- **Onchain action:** Swap/rebalance
- **Security:** Human tax authorization, exposure/slippage limits
- **Closest alternative:** Portfolio automation and tax tools
- **Differentiation hypothesis:** Demonstrated compliant jurisdiction-specific optimization
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Historical simulation only
- **Evaluation:** No unsupported tax benefit claim; compare after costs
- **Feasibility:** Defer
- **Gate:** FAIL current submission scope / CONDITIONAL PASS research
- **Issue:** Essential safety, external evidence, legal workflow or integration remains unresolved beyond the short submission window; narrow to synthetic/local experiment. Not yet demonstrated: Human tax authorization, exposure/slippage limits.
- **Required correction:** Build only this proposed falsifier after authorization: Historical simulation only. Accept only if: No unsupported tax benefit claim; compare after costs. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R011:L04483 (C10)

## IDEA-046 — Just-in-time liquidity wallet

- **Problem/customer:** Merchants/agents; funds tied up in multiple spending wallets
- **Workflow and autonomy:** Agent replenishes just before an approved payment
- **Onchain action:** Top-up then transfer
- **Security:** Fixed destination, lifetime cap, no recursive credit
- **Closest alternative:** Treasury sweep and wallet funding systems
- **Differentiation hypothesis:** Reserve-aware replenishment without task starvation
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** One funding wallet and two invoices
- **Evaluation:** No duplicate top-up; task completes with bounded idle cash
- **Feasibility:** 1–2 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Fixed destination, lifetime cap, no recursive credit.
- **Required correction:** Build only this proposed falsifier after authorization: One funding wallet and two invoices. Accept only if: No duplicate top-up; task completes with bounded idle cash. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R009:L03604 (C-18)

## IDEA-047 — Contract-analysis agent

- **Problem/customer:** Wallet users; harmful contract interactions
- **Workflow and autonomy:** Agent explains contract risk and proposes block/review decision
- **Onchain action:** None alone; pair with protected transaction
- **Security:** Analysis advisory; deterministic allowlist remains authority
- **Closest alternative:** Slither; Tenderly; Blockaid; contract scanners
- **Differentiation hypothesis:** Measured coverage for specific exploit patterns
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Two reviewed contract fixtures
- **Evaluation:** No unsafe automatic approval from scanner result
- **Feasibility:** Component only
- **Gate:** FAIL standalone / CONDITIONAL PASS integrated
- **Issue:** No sufficient financial execution workflow alone; pair with a bounded real payment task. Not yet demonstrated: Analysis advisory; deterministic allowlist remains authority.
- **Required correction:** Build only this proposed falsifier after authorization: Two reviewed contract fixtures. Accept only if: No unsafe automatic approval from scanner result. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R006:L03220 (C05); R009:L03605 (C-19); R011:L04495 (C22)

## IDEA-048 — Prompt and memory scanner

- **Problem/customer:** Agent operators; malicious documents poison decisions
- **Workflow and autonomy:** Detect/label suspicious inputs and memory; quarantine suspect data
- **Onchain action:** None alone
- **Security:** Scanner cannot authorize; downstream deterministic control
- **Closest alternative:** CaMeL; CrAIBench defenses; injection detectors
- **Differentiation hypothesis:** Measured detection with false-positive tradeoff
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Document and memory attacks
- **Evaluation:** Report recall and benign rejection; never claim boundary
- **Feasibility:** Component only
- **Gate:** FAIL standalone / CONDITIONAL PASS integrated
- **Issue:** No sufficient financial execution workflow alone; pair with a bounded real payment task. Not yet demonstrated: Scanner cannot authorize; downstream deterministic control.
- **Required correction:** Build only this proposed falsifier after authorization: Document and memory attacks. Accept only if: Report recall and benign rejection; never claim boundary. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R006:L03220 (C11); R011:L04473 (C06); R011:L04491 (C18)

## IDEA-049 — Policy drift sentinel

- **Problem/customer:** Admins; effective authority grows unexpectedly
- **Workflow and autonomy:** Agent compares intended grant and installed permission graph; alerts/revokes
- **Onchain action:** Authorized revoke or pause
- **Security:** Read state independently; no expansion; trusted owner channel
- **Closest alternative:** Permission audits and wallet policy tools
- **Differentiation hypothesis:** Detect semantic drift across versions/routes
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Mutate one module/policy
- **Evaluation:** Detect widening and stop before next unauthorized payment
- **Feasibility:** 1–2 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Read state independently; no expansion; trusted owner channel.
- **Required correction:** Build only this proposed falsifier after authorization: Mutate one module/policy. Accept only if: Detect widening and stop before next unauthorized payment. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R012:L04803 (C11)

## IDEA-050 — Hierarchical sub-agent budget

- **Problem/customer:** Agent teams; subagents multiply aggregate exposure
- **Workflow and autonomy:** Parent allocates attenuated grants; subagents spend assigned shares
- **Onchain action:** Scoped grants and payments
- **Security:** Global parent ceiling, no upward authority, atomic shared spend
- **Closest alternative:** MetaMask delegation; wallet sessions
- **Differentiation hypothesis:** Verified aggregate conservation across branching agents
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Parent and two child sessions
- **Evaluation:** Children cannot double-spend parent allocation
- **Feasibility:** 2–3 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Global parent ceiling, no upward authority, atomic shared spend.
- **Required correction:** Build only this proposed falsifier after authorization: Parent and two child sessions. Accept only if: Children cannot double-spend parent allocation. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R004:L01959 (C10); R013:L05127 (C02)

## IDEA-051 — Honeypot defender

- **Problem/customer:** Security demo teams; observe attacks safely
- **Workflow and autonomy:** Decoy account captures attacks while real account uses narrow controls
- **Onchain action:** Decoy transfers/revocation
- **Security:** No live victim funds; decoy isolation; no guaranteed detection
- **Closest alternative:** Honeypots and wallet monitors
- **Differentiation hypothesis:** Reproducible attack visibility, weak standalone financial utility
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Synthetic decoy local chain
- **Evaluation:** No production authority reachable from decoy
- **Feasibility:** Component only
- **Gate:** FAIL standalone / CONDITIONAL PASS integrated
- **Issue:** No sufficient financial execution workflow alone; pair with a bounded real payment task. Not yet demonstrated: No live victim funds; decoy isolation; no guaranteed detection.
- **Required correction:** Build only this proposed falsifier after authorization: Synthetic decoy local chain. Accept only if: No production authority reachable from decoy. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R013:L05145 (C20)

## IDEA-052 — Multiple-rail payment router

- **Problem/customer:** Finance teams; different counterparties accept different rails
- **Workflow and autonomy:** Agent chooses card, bank, stablecoin or stream under mandate
- **Onchain action:** Only selected stablecoin path is onchain
- **Security:** One shared budget across rails; custody/legal constraints
- **Closest alternative:** AgentsPay; Mastercard; AgentWallet; Crossmint
- **Differentiation hypothesis:** Cross-rail reconciliation and budget consistency
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Simulated fiat plus one test-token transfer
- **Evaluation:** No double payment across timeout fallback
- **Feasibility:** Defer broad deployment
- **Gate:** FAIL current submission scope / CONDITIONAL PASS research
- **Issue:** Essential safety, external evidence, legal workflow or integration remains unresolved beyond the short submission window; narrow to synthetic/local experiment. Not yet demonstrated: One shared budget across rails; custody/legal constraints.
- **Required correction:** Build only this proposed falsifier after authorization: Simulated fiat plus one test-token transfer. Accept only if: No double payment across timeout fallback. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R013:L05146 (C21)

## IDEA-053 — Intent route executor

- **Problem/customer:** Wallet users; complex payment route selection
- **Workflow and autonomy:** Agent finds swaps/bridges to satisfy approved end-state
- **Onchain action:** Multi-step swap/bridge/transfer
- **Security:** Slippage, aggregate exposure, deadline, destination-state verify
- **Closest alternative:** CoW Swap; 1inch; routing wallets
- **Differentiation hypothesis:** Obligation-bound routing; no generic intent novelty
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Local single-chain route
- **Evaluation:** No intermediate-asset leakage or false completion
- **Feasibility:** Defer multi-chain
- **Gate:** FAIL current submission scope / CONDITIONAL PASS research
- **Issue:** Essential safety, external evidence, legal workflow or integration remains unresolved beyond the short submission window; narrow to synthetic/local experiment. Not yet demonstrated: Slippage, aggregate exposure, deadline, destination-state verify.
- **Required correction:** Build only this proposed falsifier after authorization: Local single-chain route. Accept only if: No intermediate-asset leakage or false completion. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R004:L01968 (C19); R013:L05147 (C22)

## IDEA-054 — Maritime demurrage reconciler

- **Problem/customer:** Shippers; disputed detention charges
- **Workflow and autonomy:** Agent matches signed gate/AIS events to contract terms and settles due penalty
- **Onchain action:** Escrow settlement
- **Security:** Authenticated timestamps and dispute path; AIS is not sole truth
- **Closest alternative:** Trade finance/logistics systems
- **Differentiation hypothesis:** Explainable evidence-to-charge reconciliation
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Synthetic shipment and conflicting timestamps
- **Evaluation:** Wrong event source cannot trigger payout
- **Feasibility:** 3–6 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Authenticated timestamps and dispute path; AIS is not sole truth.
- **Required correction:** Build only this proposed falsifier after authorization: Synthetic shipment and conflicting timestamps. Accept only if: Wrong event source cannot trigger payout. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R006:L03220 (C10)

## IDEA-055 — Bug-bounty proof payout

- **Problem/customer:** Security programs; valid reports wait for payment
- **Workflow and autonomy:** Sandbox reproduces pinned exploit fixture; agent proposes award
- **Onchain action:** Bounty escrow release
- **Security:** Isolated runner, scoped test targets, payout schedule and reviewer
- **Closest alternative:** Immunefi; Code4rena; escrow
- **Differentiation hypothesis:** Repeatable evidence-bound bounty settlement
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Authorized toy vulnerable contract
- **Evaluation:** No payout for nonreproducible or duplicate report
- **Feasibility:** 2–4 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Isolated runner, scoped test targets, payout schedule and reviewer.
- **Required correction:** Build only this proposed falsifier after authorization: Authorized toy vulnerable contract. Accept only if: No payout for nonreproducible or duplicate report. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R006:L03220 (C17)

## IDEA-056 — Performance-adjusted streaming

- **Problem/customer:** Compute buyers/employers; service continues billing during failure
- **Workflow and autonomy:** Agent interprets signed telemetry; rate changes obey fixed limits
- **Onchain action:** Update/delete authorized stream
- **Security:** Maximum accrued exposure and independent telemetry; no arbitrary rate
- **Closest alternative:** Superfluid; Sablier Flow
- **Differentiation hypothesis:** Measured failure-to-stop spending under telemetry delay
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** One mock service and one stream
- **Evaluation:** Stop within deadline; no fabricated telemetry rate rise
- **Feasibility:** 2–3 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Maximum accrued exposure and independent telemetry; no arbitrary rate.
- **Required correction:** Build only this proposed falsifier after authorization: One mock service and one stream. Accept only if: Stop within deadline; no fabricated telemetry rate rise. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R006:L03220 (C01); R006:L03220 (C08); R013:L05135 (C10)

## IDEA-057 — Subscription lifecycle agent

- **Problem/customer:** Consumers/teams; unwanted recurring spend
- **Workflow and autonomy:** Agent identifies low-use service and executes approved cancellation or renewal
- **Onchain action:** Stop stream or bounded renewal payment
- **Security:** Cancellation policy and explicit impact threshold
- **Closest alternative:** Rocket Money; Sablier; Superfluid; wallet budgets
- **Differentiation hypothesis:** Provable spending cessation tied to usage evidence
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Two subscriptions, one unused
- **Evaluation:** Savings net of fees; no needed-service cancellation
- **Feasibility:** 1–2 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Cancellation policy and explicit impact threshold.
- **Required correction:** Build only this proposed falsifier after authorization: Two subscriptions, one unused. Accept only if: Savings net of fees; no needed-service cancellation. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R001:L00162 (F04); R002:L00646 (C07); R003:L01274 (C14); R004:L01957 (C08); R005:L02541 (Concept16); R006:L03220 (C08); R009:L03587 (C-01); R010:L04013 (C16); R011:L04464 (C03); R012:L04799 (C07); R013:L05135 (C10)

## IDEA-058 — Agent identity and reputation passport

- **Problem/customer:** Marketplaces; unknown counterparty identity
- **Workflow and autonomy:** Register identities and collect interaction-linked feedback
- **Onchain action:** Registry/attestation
- **Security:** Identity is not honesty; sybil and key-rotation checks
- **Closest alternative:** ERC-8004; Kite; Skyfire
- **Differentiation hypothesis:** Evidence-grounded history and conservative use
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Three synthetic agents and sybil cluster
- **Evaluation:** No automatic credit from fake reviews
- **Feasibility:** Component only
- **Gate:** FAIL standalone / CONDITIONAL PASS integrated
- **Issue:** No sufficient financial execution workflow alone; pair with a bounded real payment task. Not yet demonstrated: Identity is not honesty; sybil and key-rotation checks.
- **Required correction:** Build only this proposed falsifier after authorization: Three synthetic agents and sybil cluster. Accept only if: No automatic credit from fake reviews. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R004:L01954 (C05); R005:L02472 (Concept13); R006:L03220 (C06); R011:L04485 (C12); R012:L04811 (C19)

## IDEA-059 — Compliance policy firewall

- **Problem/customer:** Regulated operators; prohibited counterparties or workflows
- **Workflow and autonomy:** Agent gathers evidence; deterministic attestation policy blocks prohibited path
- **Onchain action:** Conditional payment; read-only Governor variant
- **Security:** Qualified rules/data; freshness; cannot promise universal compliance
- **Closest alternative:** Provider controls; sanctions screening; AP2
- **Differentiation hypothesis:** Jurisdiction-specific coverage with explicit false-negative limits
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Synthetic policy and test counterparties
- **Evaluation:** No unsupported declaration of legality
- **Feasibility:** Conditional only; read-only variant fails Topic F alone
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Qualified rules/data; freshness; cannot promise universal compliance.
- **Required correction:** Build only this proposed falsifier after authorization: Synthetic policy and test counterparties. Accept only if: No unsupported declaration of legality. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R003:L01316 (C22); R005:L02311 (Concept06); R008:L03344 (C03); R009:L03597 (C-11); R010:L04006 (C09)

## IDEA-060 — Agent wallet service platform

- **Problem/customer:** Developers; duplicated wallet integration effort
- **Workflow and autonomy:** Provision scoped wallets and standardized payment APIs
- **Onchain action:** Wallet creation and bounded payment
- **Security:** Tenant isolation, root separation, operational security
- **Closest alternative:** Coinbase; Privy; Turnkey; Crossmint; Circle
- **Differentiation hypothesis:** Narrow underserved integration; broad platform crowded
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** One tenant and one workflow
- **Evaluation:** No cross-tenant signing; reliable onboarding
- **Feasibility:** Defer broad platform
- **Gate:** FAIL current submission scope / CONDITIONAL PASS research
- **Issue:** Essential safety, external evidence, legal workflow or integration remains unresolved beyond the short submission window; narrow to synthetic/local experiment. Not yet demonstrated: Tenant isolation, root separation, operational security.
- **Required correction:** Build only this proposed falsifier after authorization: One tenant and one workflow. Accept only if: No cross-tenant signing; reliable onboarding. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R009:L03602 (C-16)

## IDEA-061 — Privacy bridge wallet

- **Problem/customer:** Privacy-seeking users; public spending exposes behavior
- **Workflow and autonomy:** Agent moves funds into privacy rail and pays
- **Onchain action:** Shield/bridge/transfer
- **Security:** Privacy threat model, bridge/custody/legal dependencies
- **Closest alternative:** Zcash; shielded payment rails
- **Differentiation hypothesis:** Specific policy-preserving disclosure proof
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Local synthetic flow
- **Evaluation:** No claim of anonymity from a bridge alone
- **Feasibility:** Defer
- **Gate:** FAIL current submission scope / CONDITIONAL PASS research
- **Issue:** Essential safety, external evidence, legal workflow or integration remains unresolved beyond the short submission window; narrow to synthetic/local experiment. Not yet demonstrated: Privacy threat model, bridge/custody/legal dependencies.
- **Required correction:** Build only this proposed falsifier after authorization: Local synthetic flow. Accept only if: No claim of anonymity from a bridge alone. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R011:L04476 (C07)

## IDEA-062 — Prediction-market trader

- **Problem/customer:** Traders; automated event speculation
- **Workflow and autonomy:** Agent buys and settles positions
- **Onchain action:** Trade/redeem
- **Security:** Capital cap and bounded venues; market and legal risk
- **Closest alternative:** MetaMask; prediction-market bots
- **Differentiation hypothesis:** No supported new mechanism
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Historical/local simulation
- **Evaluation:** No fabricated profits or guaranteed forecasts
- **Feasibility:** Fail unrestricted version; defer bounded version
- **Gate:** FAIL unrestricted version / CONDITIONAL PASS bounded research
- **Issue:** Unrestricted speculation fails bounded-loss and lawful-workflow gates; narrow local simulation only before venue and jurisdiction checks. Not yet demonstrated: Capital cap and bounded venues; market and legal risk.
- **Required correction:** Build only this proposed falsifier after authorization: Historical/local simulation. Accept only if: No fabricated profits or guaranteed forecasts. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R009:L03593 (C-07)

## IDEA-063 — Liquidity forecasting assistant

- **Problem/customer:** SME/DAO finance; poor cash visibility
- **Workflow and autonomy:** Agent predicts shortfalls and schedules approved transfers
- **Onchain action:** None read-only; payout when paired
- **Security:** Forecast advisory; obligation truth separate
- **Closest alternative:** ERP/treasury software; AP automation
- **Differentiation hypothesis:** Forecast value tested against simple calendar baseline
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Synthetic ledger and holdout obligations
- **Evaluation:** Forecast error and missed-payment rate
- **Feasibility:** Component only unless executing
- **Gate:** FAIL standalone / CONDITIONAL PASS integrated
- **Issue:** No sufficient financial execution workflow alone; pair with a bounded real payment task. Not yet demonstrated: Forecast advisory; obligation truth separate.
- **Required correction:** Build only this proposed falsifier after authorization: Synthetic ledger and holdout obligations. Accept only if: Forecast error and missed-payment rate. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R009:L03594 (C-08); R011:L04492 (C19); R012:L04805 (C13); R013:L05129 (C04)

## IDEA-064 — Approval ladder and preauthorization split

- **Problem/customer:** Wallet owners; manual review bottleneck
- **Workflow and autonomy:** Agent autonomously uses narrow allocation; exceptions require explicit approval
- **Onchain action:** Scoped transfer and human authorization
- **Security:** Named role required, not ambiguous 2-of-3; separate root
- **Closest alternative:** AP2; Turnkey; wallet policies
- **Differentiation hypothesis:** Usability and safe exception handling, not tiered approval novelty
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** One auto and one exception payment
- **Evaluation:** No exception via alternative tool path
- **Feasibility:** 3–7 days
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Named role required, not ambiguous 2-of-3; separate root.
- **Required correction:** Build only this proposed falsifier after authorization: One auto and one exception payment. Accept only if: No exception via alternative tool path. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R004:L01947 (C01); R004:L01952 (C03); R004:L01967 (C18); R010:L04001 (C04); R010:L04015 (C18); R010:L04016 (C19); R012:L04812 (C20)

## IDEA-065 — Royalty split and attribution payout

- **Problem/customer:** Digital creators; revenue splits hard to reconcile
- **Workflow and autonomy:** Agent matches authorized usage receipts to agreed royalty shares
- **Onchain action:** Split payment
- **Security:** Signed allocation, total conservation, no model-invented ownership
- **Closest alternative:** Royalty split contracts and registries
- **Differentiation hypothesis:** Evidence-linked usage allocation remains unverified
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Synthetic usage and fixed split
- **Evaluation:** Totals conserve; disputed attribution escalates
- **Feasibility:** 2–4 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Signed allocation, total conservation, no model-invented ownership.
- **Required correction:** Build only this proposed falsifier after authorization: Synthetic usage and fixed split. Accept only if: Totals conserve; disputed attribution escalates. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R006:L03220 (royalty/model attribution)

## IDEA-066 — Ad-fraud-aware micropayment

- **Problem/customer:** Advertisers; fake events trigger spending
- **Workflow and autonomy:** Agent checks approved event evidence then releases bounded payment
- **Onchain action:** Micropayment
- **Security:** Authenticated event source and anti-replay; fraud model advisory
- **Closest alternative:** Ad verification and micropayment rails
- **Differentiation hypothesis:** Task-specific fraud-loss reduction
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Synthetic click/conversion fixtures
- **Evaluation:** No duplicate event payout; disclose detector errors
- **Feasibility:** 3–4 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Authenticated event source and anti-replay; fraud model advisory.
- **Required correction:** Build only this proposed falsifier after authorization: Synthetic click/conversion fixtures. Accept only if: No duplicate event payout; disclose detector errors. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R006:L03220 (ad-fraud micropayments)

## IDEA-067 — Owner recovery wallet

- **Problem/customer:** Wallet owners; lost or compromised delegated credentials
- **Workflow and autonomy:** Independent owner recovers control, revokes sessions and reconciles pending actions
- **Onchain action:** Revoke/rotate/fixed-safe transfer
- **Security:** Recovery authority outside agent; delayed sensitive changes
- **Closest alternative:** Safe recovery; wallet revocation infrastructure
- **Differentiation hypothesis:** Recovery completeness across outstanding authorizations
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** One compromise, pending tx, owner rotation
- **Evaluation:** Old session invalid; legitimate owner retains access
- **Feasibility:** 1–2 weeks
- **Gate:** CONDITIONAL PASS
- **Issue:** Organizer network/evidence acceptance and exact enforcement/dependency tests unresolved; no implementation evidence supplied. Not yet demonstrated: Recovery authority outside agent; delayed sensitive changes.
- **Required correction:** Build only this proposed falsifier after authorization: One compromise, pending tx, owner rotation. Accept only if: Old session invalid; legitimate owner retains access. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R004:L01971 (C22); R006:L03220 (C19); R012:L04812 (C20); R014:L05483 (visible architecture 5)

## IDEA-068 — Isolated signing and MPC control

- **Problem/customer:** Wallet builders; key exposure or unilateral signing
- **Workflow and autonomy:** Agent requests constrained signatures from isolated non-root signer
- **Onchain action:** Authorized signatures and payment
- **Security:** Key isolation plus policy; MPC alone does not validate financial purpose
- **Closest alternative:** Turnkey; Privy; Circle; Coinbase
- **Differentiation hypothesis:** Integration assurance and precise trust model, not new custody cryptography
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** One scoped signer and one denied export attempt
- **Evaluation:** Leaked agent credential cannot gain root authority
- **Feasibility:** Component only
- **Gate:** FAIL standalone / CONDITIONAL PASS integrated
- **Issue:** No sufficient financial execution workflow alone; pair with a bounded real payment task. Not yet demonstrated: Key isolation plus policy; MPC alone does not validate financial purpose.
- **Required correction:** Build only this proposed falsifier after authorization: One scoped signer and one denied export attempt. Accept only if: Leaked agent credential cannot gain root authority. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R009:L03590 (C-04); R010:L04002 (C05)

## IDEA-069 — Ephemeral session wallet

- **Problem/customer:** Wallet owners; standing delegation persists too long
- **Workflow and autonomy:** Agent uses short-lived scoped authority then expires or is revoked
- **Onchain action:** Install/use/revoke session
- **Security:** Absolute expiry, domain binding, no self-renewal, aggregate cap
- **Closest alternative:** ZeroDev; MetaMask; Rhinestone; Crossmint
- **Differentiation hypothesis:** Proved session lifecycle across retries and pending operations
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** One session, one expiry, one revoke
- **Evaluation:** No accepted execution after effective expiry/revocation
- **Feasibility:** Component only
- **Gate:** FAIL standalone / CONDITIONAL PASS integrated
- **Issue:** No sufficient financial execution workflow alone; pair with a bounded real payment task. Not yet demonstrated: Absolute expiry, domain binding, no self-renewal, aggregate cap.
- **Required correction:** Build only this proposed falsifier after authorization: One session, one expiry, one revoke. Accept only if: No accepted execution after effective expiry/revocation. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R004:L01966 (C17); R014:L05483 (visible architecture 5)

## IDEA-070 — Physical-delivery escrow

- **Problem/customer:** Importers and suppliers; payment and physical delivery disagree
- **Workflow and autonomy:** Agent reconciles shipment attestations and proposes release
- **Onchain action:** Escrow release/refund
- **Security:** Trusted delivery attestor and dispute path; goods are not atomically onchain
- **Closest alternative:** Trade escrow; oracle systems; ERC-8183
- **Differentiation hypothesis:** Measured evidence-quality and dispute reduction for specified goods
- **Dependencies:** Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.
- **Blockchain justification:** Conditional: counterparties already settle onchain or shared enforceable state is necessary. Otherwise compare against ordinary payment/ERP APIs.
- **Minimum MVP:** Synthetic shipment with conflicting delivery records
- **Evaluation:** No release from forged attestation; truthful unresolved status
- **Feasibility:** Defer real-world deployment
- **Gate:** FAIL current submission scope / CONDITIONAL PASS research
- **Issue:** Essential safety, external evidence, legal workflow or integration remains unresolved beyond the short submission window; narrow to synthetic/local experiment. Not yet demonstrated: Trusted delivery attestor and dispute path; goods are not atomically onchain.
- **Required correction:** Build only this proposed falsifier after authorization: Synthetic shipment with conflicting delivery records. Accept only if: No release from forged attestation; truthful unresolved status. Confirm O1–O4 and exact dependency support; resolve critical defects before final selection.
- **Lineage:** R004:L01963 (C14); R006:L03220 (C14); R008:L03300 (C01); R009:L03589 (C-03); R009:L03591 (C-05); R011:L04456 (C02); R013:L05137 (C12)

# Hybrid catalogue

## HYBRID-001 — ObligationLock

- **Constituents:** IDEA-001, IDEA-002, IDEA-011, IDEA-012, IDEA-023, IDEA-031
- **New capability:** Authenticated obligations, aggregate reserves and one-use settlement share an execution boundary; invoices cannot mint spending authority.
- **Benefit:** Prevents authorized-budget misuse and cash starvation that independent caps alone permit.
- **Mvp:** Two preapproved obligations, one reserve, one transfer-only account, one token.
- **Prior art:** S003,S009,S016,S017,S018,S022,S035
- **Extra risk:** Custom obligation/reserve executor; registry truth; accounting around partial payments and concurrency.
- **Novelty test:** Compare against capped wallet and invoice-state-machine baselines on fabricated-obligation and reserve-depletion traces.
- **Gate:** CONDITIONAL PASS

## HYBRID-002 — ServiceMeter with failure stop

- **Constituents:** IDEA-006, IDEA-019, IDEA-023, IDEA-031
- **New capability:** Combine signed offers and settlement reconciliation with objective output checks and a hard ceiling on spending after a failed delivery.
- **Benefit:** Budget protects cash while acceptance state prevents repeated purchases from a failing endpoint.
- **Mvp:** Two pinned services, one deterministic quality test, one global job budget, sequential purchases.
- **Prior art:** S019,S020,S021,S023,S024
- **Extra risk:** Seller dishonesty, receipt replay, settlement ambiguity, payment authorization surviving timeout.
- **Novelty test:** Show lower wasted spend than x402 with existing receipts/idempotency enabled, without worsening accepted-task completion.
- **Gate:** CONDITIONAL PASS

## HYBRID-003 — PolicyProof payment conformance

- **Constituents:** IDEA-025, IDEA-037, IDEA-032, IDEA-001
- **New capability:** A reviewed policy is compiled into two wallet backends and checked against the same financial trace oracle before activation.
- **Benefit:** Detects silent authority widening during provider migration; payment workflow gives benchmark financial meaning.
- **Mvp:** Narrow fixed-recipient transfer policy on two adapters; reject unsupported controls.
- **Prior art:** S003,S010,S013,S014,S027
- **Extra risk:** Compiler/verifier share bugs; policy semantics differ; second adapter expands work.
- **Novelty test:** Demonstrate previously uncaught adapter divergence on blind holdout traces and preserve benign utility.
- **Gate:** CONDITIONAL PASS

## HYBRID-004 — Refund-aware purchase escrow

- **Constituents:** IDEA-003, IDEA-033, IDEA-031
- **New capability:** Order-bound settlement and refunds share one cumulative accounting record, preserving original payer and refundable remainder.
- **Benefit:** Reduces refund redirection and cumulative over-refund after partial settlement.
- **Mvp:** One digital order, partial release and one refund.
- **Prior art:** S004,S016,S025
- **Extra risk:** Partial-state accounting and dispute roles; contract expansion.
- **Novelty test:** Find materially stronger original-payer and partial-refund guarantees than baseline escrow implementation.
- **Gate:** CONDITIONAL PASS

## HYBRID-005 — Attenuated reserve treasury

- **Constituents:** IDEA-002, IDEA-050, IDEA-026
- **New capability:** Parent reserve and aggregate maximum exposure remain invariant across subagent grants and revocations.
- **Benefit:** Prevents separate child caps from collectively consuming committed obligations.
- **Mvp:** Two children, one parent, one immutable reserve.
- **Prior art:** S010,S013,S014
- **Extra risk:** Double-counted allocations, hierarchy resets, revoked in-flight operations.
- **Novelty test:** Prove aggregate conservation for a documented delegation subset, then reproduce adversarial traces.
- **Gate:** CONDITIONAL PASS

## HYBRID-006 — Evidence-bound aid wallet

- **Constituents:** IDEA-008, IDEA-020, IDEA-039
- **New capability:** Release a limited grant with minimal public beneficiary data and return unused allocation at expiry.
- **Benefit:** Combines donor accountability, reduced disclosure and clear unused-funds handling.
- **Mvp:** Synthetic eligibility proof and two bounded disbursements.
- **Prior art:** S004,S034,S037
- **Extra risk:** Circuit correctness, eligibility trust, beneficiary exclusion and metadata leakage.
- **Novelty test:** Quantify information revealed and processing error against ordinary signed-attestation grant escrow.
- **Gate:** CONDITIONAL PASS; deferred beyond one week

## HYBRID-007 — Delivery-aware stream shutdown

- **Constituents:** IDEA-056, IDEA-019, IDEA-009
- **New capability:** Independent acceptance monitor cancels an ongoing authorized service stream when contractual delivery checks fail.
- **Benefit:** Bounds continued accrual during service failure without permitting monitor to redirect funds.
- **Mvp:** One service, one stream, fixed-rate ceiling and owner restart.
- **Prior art:** S037,S038
- **Extra risk:** Telemetry lies, delayed cancellation, accrual during network outage.
- **Novelty test:** Measure failure-to-stop loss against periodic billing and native stream controls.
- **Gate:** CONDITIONAL PASS


## Appendix D. Original concept crosswalk and omission audit

A source slot can map to multiple normalized ideas when it combines mechanisms. “Summary” and “visible architecture” are extraction ordinals, not original report IDs. R006 C16 and R014 missing C-slots remain unfilled. R011 uses its original CONCEPT numbering; the report later renumbers some entries inconsistently. Every row below has a concrete original source anchor.

| Report/source anchor | Original slot | Normalized IDs | Preserved concepts |
|---|---|---|---|
| R001:L00159 | F01 | IDEA-001, IDEA-002 | Bounded invoice payout; Obligation reserve treasury |
| R001:L00160 | F02 | IDEA-003 | Objective milestone escrow |
| R001:L00161 | F03 | IDEA-002, IDEA-021 | Obligation reserve treasury; Streaming payroll |
| R001:L00162 | F04 | IDEA-057 | Subscription lifecycle agent |
| R001:L00163 | F05 | IDEA-005 | RFQ procurement scout |
| R001:L00164 | F06 | IDEA-006, IDEA-019 | Metered service buyer; Outcome-gated purchase |
| R001:L00165 | F07 | IDEA-007 | Data provenance buyer |
| R001:L00166 | F08 | IDEA-003, IDEA-004 | Objective milestone escrow; Subjective dispute arbiter |
| R001:L00167 | F09 | IDEA-008 | Conditional grant steward |
| R001:L00168 | F10 | IDEA-009 | Defensive incident agent |
| R001:L00169 | F11 | IDEA-010 | Approval hygiene |
| R001:L00170 | F12 | IDEA-011 | Exact-intent execution firewall |
| R001:L00171 | F13 | IDEA-012 | Trusted beneficiary registry |
| R001:L00172 | F14 | IDEA-013 | Surplus yield allocator |
| R001:L00173 | F15 | IDEA-014 | Collateral rescue |
| R001:L00174 | F16 | IDEA-015 | Risk-capped DeFi allocator |
| R001:L00175 | F17 | IDEA-016, IDEA-027 | Cross-chain treasury replenisher; Gas and fee keeper |
| R001:L00176 | F18 | IDEA-017 | DAO contributor payout |
| R001:L00177 | F19 | IDEA-018 | Agent service marketplace |
| R001:L00178 | F20 | IDEA-019 | Outcome-gated purchase |
| R001:L00179 | F21 | IDEA-020 | Private policy proof |
| R001:L00180 | F22 | IDEA-002, IDEA-018 | Obligation reserve treasury; Agent service marketplace |
| R002:L00640 | C01 | IDEA-001 | Bounded invoice payout |
| R002:L00641 | C02 | IDEA-002, IDEA-013 | Obligation reserve treasury; Surplus yield allocator |
| R002:L00642 | C03 | IDEA-003, IDEA-004 | Objective milestone escrow; Subjective dispute arbiter |
| R002:L00643 | C04 | IDEA-006 | Metered service buyer |
| R002:L00644 | C05 | IDEA-011 | Exact-intent execution firewall |
| R002:L00645 | C06 | IDEA-009 | Defensive incident agent |
| R002:L00646 | C07 | IDEA-057 | Subscription lifecycle agent |
| R002:L00647 | C08 | IDEA-008 | Conditional grant steward |
| R002:L00648 | C09 | IDEA-021 | Streaming payroll |
| R002:L00649 | C10 | IDEA-016 | Cross-chain treasury replenisher |
| R002:L00650 | C11 | IDEA-014 | Collateral rescue |
| R002:L00651 | C12 | IDEA-005, IDEA-018 | RFQ procurement scout; Agent service marketplace |
| R002:L00652 | C13 | IDEA-031 | Decision and receipt ledger |
| R002:L00653 | C14 | IDEA-028 | Family allowance wallet |
| R002:L00654 | C15 | IDEA-030 | Governance-to-execution agent |
| R002:L00655 | C16 | IDEA-029 | Student tuition and stipend wallet |
| R002:L00656 | C17 | IDEA-023 | Reconciliation agent |
| R002:L00657 | C18 | IDEA-024 | Agent credit wallet |
| R002:L00658 | C19 | IDEA-025 | Natural-language policy compiler |
| R002:L00659 | C20 | IDEA-022 | Parametric claims wallet |
| R002:L00660 | C21 | IDEA-032 | Adversarial wallet benchmark |
| R002:L00661 | C22 | IDEA-027 | Gas and fee keeper |
| R003:L01195 | C01 | IDEA-001, IDEA-002 | Bounded invoice payout; Obligation reserve treasury |
| R003:L01205 | C02 | IDEA-011, IDEA-031 | Exact-intent execution firewall; Decision and receipt ledger |
| R003:L01214 | C03 | IDEA-009 | Defensive incident agent |
| R003:L01222 | C04 | IDEA-003, IDEA-004 | Objective milestone escrow; Subjective dispute arbiter |
| R003:L01228 | C05 | IDEA-005 | RFQ procurement scout |
| R003:L01234 | C06 | IDEA-002 | Obligation reserve treasury |
| R003:L01239 | C07 | IDEA-008, IDEA-019 | Conditional grant steward; Outcome-gated purchase |
| R003:L01244 | C08 | IDEA-006 | Metered service buyer |
| R003:L01249 | C09 | IDEA-033 | Original-payer refund governor |
| R003:L01253 | C10 | IDEA-010 | Approval hygiene |
| R003:L01259 | C11 | IDEA-014 | Collateral rescue |
| R003:L01264 | C12 | IDEA-016 | Cross-chain treasury replenisher |
| R003:L01269 | C13 | IDEA-017 | DAO contributor payout |
| R003:L01274 | C14 | IDEA-057 | Subscription lifecycle agent |
| R003:L01278 | C15 | IDEA-001, IDEA-012 | Bounded invoice payout; Trusted beneficiary registry |
| R003:L01284 | C16 | IDEA-034 | Multi-agent treasury committee |
| R003:L01289 | C17 | IDEA-023 | Reconciliation agent |
| R003:L01295 | C18 | IDEA-025 | Natural-language policy compiler |
| R003:L01301 | C19 | IDEA-026 | Conditional loss certificate |
| R003:L01306 | C20 | IDEA-002, IDEA-021 | Obligation reserve treasury; Streaming payroll |
| R003:L01311 | C21 | IDEA-035 | Two-sided work bond |
| R003:L01316 | C22 | IDEA-020, IDEA-059 | Private policy proof; Compliance policy firewall |
| R004:L01947 | C01 | IDEA-003, IDEA-064 | Objective milestone escrow; Approval ladder and preauthorization split |
| R004:L01951 | C02 | IDEA-006 | Metered service buyer |
| R004:L01952 | C03 | IDEA-002, IDEA-064 | Obligation reserve treasury; Approval ladder and preauthorization split |
| R004:L01953 | C04 | IDEA-008 | Conditional grant steward |
| R004:L01954 | C05 | IDEA-058 | Agent identity and reputation passport |
| R004:L01955 | C06 | IDEA-009 | Defensive incident agent |
| R004:L01956 | C07 | IDEA-016 | Cross-chain treasury replenisher |
| R004:L01957 | C08 | IDEA-057 | Subscription lifecycle agent |
| R004:L01958 | C09 | IDEA-001 | Bounded invoice payout |
| R004:L01959 | C10 | IDEA-034, IDEA-050 | Multi-agent treasury committee; Hierarchical sub-agent budget |
| R004:L01960 | C11 | IDEA-018, IDEA-031 | Agent service marketplace; Decision and receipt ledger |
| R004:L01961 | C12 | IDEA-015 | Risk-capped DeFi allocator |
| R004:L01962 | C13 | IDEA-020, IDEA-031 | Private policy proof; Decision and receipt ledger |
| R004:L01963 | C14 | IDEA-070 | Physical-delivery escrow |
| R004:L01964 | C15 | IDEA-005, IDEA-027 | RFQ procurement scout; Gas and fee keeper |
| R004:L01965 | C16 | IDEA-026, IDEA-037 | Conditional loss certificate; Policy conformance kernel |
| R004:L01966 | C17 | IDEA-069 | Ephemeral session wallet |
| R004:L01967 | C18 | IDEA-064 | Approval ladder and preauthorization split |
| R004:L01968 | C19 | IDEA-005, IDEA-018, IDEA-053 | RFQ procurement scout; Agent service marketplace; Intent route executor |
| R004:L01969 | C20 | IDEA-040 | Self-funding compute wallet |
| R004:L01970 | C21 | IDEA-031 | Decision and receipt ledger |
| R004:L01971 | C22 | IDEA-067 | Owner recovery wallet |
| R005:L02196 | Concept01 | IDEA-011 | Exact-intent execution firewall |
| R005:L02219 | Concept02 | IDEA-031 | Decision and receipt ledger |
| R005:L02242 | Concept03 | IDEA-003 | Objective milestone escrow |
| R005:L02265 | Concept04 | IDEA-034 | Multi-agent treasury committee |
| R005:L02288 | Concept05 | IDEA-006 | Metered service buyer |
| R005:L02311 | Concept06 | IDEA-059 | Compliance policy firewall |
| R005:L02334 | Concept07 | IDEA-041 | Inheritance and dead-man wallet |
| R005:L02357 | Concept08 | IDEA-004 | Subjective dispute arbiter |
| R005:L02380 | Concept09 | IDEA-042 | Carbon offset purchaser |
| R005:L02403 | Concept10 | IDEA-021 | Streaming payroll |
| R005:L02426 | Concept11 | IDEA-008 | Conditional grant steward |
| R005:L02449 | Concept12 | IDEA-022 | Parametric claims wallet |
| R005:L02472 | Concept13 | IDEA-058 | Agent identity and reputation passport |
| R005:L02495 | Concept14 | IDEA-009 | Defensive incident agent |
| R005:L02518 | Concept15 | IDEA-016 | Cross-chain treasury replenisher |
| R005:L02541 | Concept16 | IDEA-057 | Subscription lifecycle agent |
| R005:L02564 | Concept17 | IDEA-043 | Invoice factoring wallet |
| R005:L02587 | Concept18 | IDEA-017 | DAO contributor payout |
| R005:L02610 | Concept19 | IDEA-044 | Green bond proceeds agent |
| R005:L02633 | Concept20 | IDEA-018, IDEA-003 | Agent service marketplace; Objective milestone escrow |
| R006:L03220 | C01 | IDEA-001, IDEA-021, IDEA-056 | Bounded invoice payout; Streaming payroll; Performance-adjusted streaming |
| R006:L03220 | C02 | IDEA-006 | Metered service buyer |
| R006:L03220 | C03 | IDEA-003, IDEA-019 | Objective milestone escrow; Outcome-gated purchase |
| R006:L03220 | C04 | IDEA-002, IDEA-013 | Obligation reserve treasury; Surplus yield allocator |
| R006:L03220 | C05 | IDEA-011, IDEA-047 | Exact-intent execution firewall; Contract-analysis agent |
| R006:L03220 | C06 | IDEA-036, IDEA-058 | Counterparty fallback wallet; Agent identity and reputation passport |
| R006:L03220 | C07 | IDEA-022, IDEA-039 | Parametric claims wallet; Welfare disbursement and return |
| R006:L03220 | C08 | IDEA-056, IDEA-057 | Performance-adjusted streaming; Subscription lifecycle agent |
| R006:L03220 | C09 | IDEA-015 | Risk-capped DeFi allocator |
| R006:L03220 | C10 | IDEA-054 | Maritime demurrage reconciler |
| R006:L03220 | C11 | IDEA-034, IDEA-048 | Multi-agent treasury committee; Prompt and memory scanner |
| R006:L03220 | C12 | IDEA-043 | Invoice factoring wallet |
| R006:L03220 | C13 | IDEA-030 | Governance-to-execution agent |
| R006:L03220 | C14 | IDEA-008, IDEA-070 | Conditional grant steward; Physical-delivery escrow |
| R006:L03220 | C15 | IDEA-016 | Cross-chain treasury replenisher |
| R006:L03220 | C17 | IDEA-055 | Bug-bounty proof payout |
| R006:L03220 | C18 | IDEA-042 | Carbon offset purchaser |
| R006:L03220 | C19 | IDEA-009, IDEA-067 | Defensive incident agent; Owner recovery wallet |
| R006:L03220 | C20 | IDEA-025, IDEA-011 | Natural-language policy compiler; Exact-intent execution firewall |
| R007:L03240 | summary 1 | IDEA-011, IDEA-031, IDEA-006, IDEA-003 | Exact-intent execution firewall; Decision and receipt ledger; Metered service buyer; Objective milestone escrow |
| R008:L03300 | C01 | IDEA-001, IDEA-070 | Bounded invoice payout; Physical-delivery escrow |
| R008:L03322 | C02 | IDEA-006 | Metered service buyer |
| R008:L03344 | C03 | IDEA-059, IDEA-009 | Compliance policy firewall; Defensive incident agent |
| R008:L03366 | C04 | IDEA-022 | Parametric claims wallet |
| R008:L03388 | C05 | IDEA-013, IDEA-015 | Surplus yield allocator; Risk-capped DeFi allocator |
| R009:L03587 | C-01 | IDEA-057 | Subscription lifecycle agent |
| R009:L03588 | C-02 | IDEA-003, IDEA-005 | Objective milestone escrow; RFQ procurement scout |
| R009:L03589 | C-03 | IDEA-005, IDEA-070 | RFQ procurement scout; Physical-delivery escrow |
| R009:L03590 | C-04 | IDEA-068 | Isolated signing and MPC control |
| R009:L03591 | C-05 | IDEA-003, IDEA-070 | Objective milestone escrow; Physical-delivery escrow |
| R009:L03592 | C-06 | IDEA-016 | Cross-chain treasury replenisher |
| R009:L03593 | C-07 | IDEA-062 | Prediction-market trader |
| R009:L03594 | C-08 | IDEA-063 | Liquidity forecasting assistant |
| R009:L03595 | C-09 | IDEA-034, IDEA-002 | Multi-agent treasury committee; Obligation reserve treasury |
| R009:L03596 | C-10 | IDEA-006 | Metered service buyer |
| R009:L03597 | C-11 | IDEA-059 | Compliance policy firewall |
| R009:L03598 | C-12 | IDEA-015 | Risk-capped DeFi allocator |
| R009:L03599 | C-13 | IDEA-005 | RFQ procurement scout |
| R009:L03600 | C-14 | IDEA-001 | Bounded invoice payout |
| R009:L03601 | C-15 | IDEA-022 | Parametric claims wallet |
| R009:L03602 | C-16 | IDEA-060 | Agent wallet service platform |
| R009:L03603 | C-17 | IDEA-021 | Streaming payroll |
| R009:L03604 | C-18 | IDEA-046 | Just-in-time liquidity wallet |
| R009:L03605 | C-19 | IDEA-047 | Contract-analysis agent |
| R009:L03606 | C-20 | IDEA-016 | Cross-chain treasury replenisher |
| R010:L03998 | C01 | IDEA-011, IDEA-001, IDEA-032 | Exact-intent execution firewall; Bounded invoice payout; Adversarial wallet benchmark |
| R010:L03999 | C02 | IDEA-001, IDEA-012 | Bounded invoice payout; Trusted beneficiary registry |
| R010:L04000 | C03 | IDEA-003, IDEA-019 | Objective milestone escrow; Outcome-gated purchase |
| R010:L04001 | C04 | IDEA-064, IDEA-011 | Approval ladder and preauthorization split; Exact-intent execution firewall |
| R010:L04002 | C05 | IDEA-011, IDEA-068 | Exact-intent execution firewall; Isolated signing and MPC control |
| R010:L04003 | C06 | IDEA-034 | Multi-agent treasury committee |
| R010:L04004 | C07 | IDEA-002 | Obligation reserve treasury |
| R010:L04005 | C08 | IDEA-009 | Defensive incident agent |
| R010:L04006 | C09 | IDEA-059 | Compliance policy firewall |
| R010:L04007 | C10 | IDEA-002 | Obligation reserve treasury |
| R010:L04008 | C11 | IDEA-016 | Cross-chain treasury replenisher |
| R010:L04009 | C12 | IDEA-021 | Streaming payroll |
| R010:L04010 | C13 | IDEA-005 | RFQ procurement scout |
| R010:L04011 | C14 | IDEA-038 | Repayment waterfall |
| R010:L04012 | C15 | IDEA-036 | Counterparty fallback wallet |
| R010:L04013 | C16 | IDEA-006, IDEA-057 | Metered service buyer; Subscription lifecycle agent |
| R010:L04014 | C17 | IDEA-008, IDEA-019 | Conditional grant steward; Outcome-gated purchase |
| R010:L04015 | C18 | IDEA-064 | Approval ladder and preauthorization split |
| R010:L04016 | C19 | IDEA-064 | Approval ladder and preauthorization split |
| R010:L04017 | C20 | IDEA-031 | Decision and receipt ledger |
| R010:L04018 | C21 | IDEA-037 | Policy conformance kernel |
| R010:L04019 | C22 | IDEA-039 | Welfare disbursement and return |
| R011:L04433 | C01 | IDEA-003, IDEA-011 | Objective milestone escrow; Exact-intent execution firewall |
| R011:L04456 | C02 | IDEA-001, IDEA-070 | Bounded invoice payout; Physical-delivery escrow |
| R011:L04464 | C03 | IDEA-057 | Subscription lifecycle agent |
| R011:L04467 | C04 | IDEA-031 | Decision and receipt ledger |
| R011:L04470 | C05 | IDEA-009 | Defensive incident agent |
| R011:L04473 | C06 | IDEA-011, IDEA-048 | Exact-intent execution firewall; Prompt and memory scanner |
| R011:L04476 | C07 | IDEA-061 | Privacy bridge wallet |
| R011:L04479 | C08 | IDEA-021 | Streaming payroll |
| R011:L04481 | C09 | IDEA-027, IDEA-016 | Gas and fee keeper; Cross-chain treasury replenisher |
| R011:L04483 | C10 | IDEA-045 | Tax-loss harvesting agent |
| R011:L04484 | C11 | IDEA-015 | Risk-capped DeFi allocator |
| R011:L04485 | C12 | IDEA-058 | Agent identity and reputation passport |
| R011:L04486 | C13 | IDEA-001, IDEA-012 | Bounded invoice payout; Trusted beneficiary registry |
| R011:L04487 | C14 | IDEA-035 | Two-sided work bond |
| R011:L04488 | C15 | IDEA-002 | Obligation reserve treasury |
| R011:L04489 | C16 | IDEA-022 | Parametric claims wallet |
| R011:L04490 | C17 | IDEA-006 | Metered service buyer |
| R011:L04491 | C18 | IDEA-048 | Prompt and memory scanner |
| R011:L04492 | C19 | IDEA-063 | Liquidity forecasting assistant |
| R011:L04493 | C20 | IDEA-008, IDEA-039 | Conditional grant steward; Welfare disbursement and return |
| R011:L04494 | C21 | IDEA-029 | Student tuition and stipend wallet |
| R011:L04495 | C22 | IDEA-032, IDEA-047 | Adversarial wallet benchmark; Contract-analysis agent |
| R012:L04793 | C01 | IDEA-001 | Bounded invoice payout |
| R012:L04794 | C02 | IDEA-003 | Objective milestone escrow |
| R012:L04795 | C03 | IDEA-006 | Metered service buyer |
| R012:L04796 | C04 | IDEA-021 | Streaming payroll |
| R012:L04797 | C05 | IDEA-017, IDEA-030 | DAO contributor payout; Governance-to-execution agent |
| R012:L04798 | C06 | IDEA-011 | Exact-intent execution firewall |
| R012:L04799 | C07 | IDEA-057 | Subscription lifecycle agent |
| R012:L04800 | C08 | IDEA-005 | RFQ procurement scout |
| R012:L04801 | C09 | IDEA-018, IDEA-031 | Agent service marketplace; Decision and receipt ledger |
| R012:L04802 | C10 | IDEA-009 | Defensive incident agent |
| R012:L04803 | C11 | IDEA-049 | Policy drift sentinel |
| R012:L04804 | C12 | IDEA-003, IDEA-004 | Objective milestone escrow; Subjective dispute arbiter |
| R012:L04805 | C13 | IDEA-002, IDEA-063 | Obligation reserve treasury; Liquidity forecasting assistant |
| R012:L04806 | C14 | IDEA-008 | Conditional grant steward |
| R012:L04807 | C15 | IDEA-022 | Parametric claims wallet |
| R012:L04808 | C16 | IDEA-016 | Cross-chain treasury replenisher |
| R012:L04809 | C17 | IDEA-024 | Agent credit wallet |
| R012:L04810 | C18 | IDEA-031, IDEA-023 | Decision and receipt ledger; Reconciliation agent |
| R012:L04811 | C19 | IDEA-036, IDEA-058 | Counterparty fallback wallet; Agent identity and reputation passport |
| R012:L04812 | C20 | IDEA-011, IDEA-064, IDEA-067 | Exact-intent execution firewall; Approval ladder and preauthorization split; Owner recovery wallet |
| R013:L05126 | C01 | IDEA-001, IDEA-003 | Bounded invoice payout; Objective milestone escrow |
| R013:L05127 | C02 | IDEA-050 | Hierarchical sub-agent budget |
| R013:L05128 | C03 | IDEA-009 | Defensive incident agent |
| R013:L05129 | C04 | IDEA-002, IDEA-063, IDEA-013 | Obligation reserve treasury; Liquidity forecasting assistant; Surplus yield allocator |
| R013:L05130 | C05 | IDEA-031 | Decision and receipt ledger |
| R013:L05131 | C06 | IDEA-025 | Natural-language policy compiler |
| R013:L05132 | C07 | IDEA-008 | Conditional grant steward |
| R013:L05133 | C08 | IDEA-022 | Parametric claims wallet |
| R013:L05134 | C09 | IDEA-021 | Streaming payroll |
| R013:L05135 | C10 | IDEA-057, IDEA-056 | Subscription lifecycle agent; Performance-adjusted streaming |
| R013:L05136 | C11 | IDEA-016 | Cross-chain treasury replenisher |
| R013:L05137 | C12 | IDEA-070 | Physical-delivery escrow |
| R013:L05138 | C13 | IDEA-043 | Invoice factoring wallet |
| R013:L05139 | C14 | IDEA-030 | Governance-to-execution agent |
| R013:L05140 | C15 | IDEA-010, IDEA-027 | Approval hygiene; Gas and fee keeper |
| R013:L05141 | C16 | IDEA-020 | Private policy proof |
| R013:L05142 | C17 | IDEA-018, IDEA-003 | Agent service marketplace; Objective milestone escrow |
| R013:L05143 | C18 | IDEA-029 | Student tuition and stipend wallet |
| R013:L05144 | C19 | IDEA-013 | Surplus yield allocator |
| R013:L05145 | C20 | IDEA-051 | Honeypot defender |
| R013:L05146 | C21 | IDEA-052 | Multiple-rail payment router |
| R013:L05147 | C22 | IDEA-053 | Intent route executor |
| R014:L05403 | visible architecture 1 | IDEA-001, IDEA-011, IDEA-023, IDEA-031 | Bounded invoice payout; Exact-intent execution firewall; Reconciliation agent; Decision and receipt ledger |
| R014:L05407 | visible architecture 2 | IDEA-006, IDEA-019, IDEA-023 | Metered service buyer; Outcome-gated purchase; Reconciliation agent |
| R014:L05410 | visible architecture 3 | IDEA-003, IDEA-004 | Objective milestone escrow; Subjective dispute arbiter |
| R014:L05480 | visible architecture 4 | IDEA-032 | Adversarial wallet benchmark |
| R014:L05483 | visible architecture 5 | IDEA-009, IDEA-067, IDEA-069 | Defensive incident agent; Owner recovery wallet; Ephemeral session wallet |
| R014:L05510 | visible architecture 6 | IDEA-008, IDEA-020 | Conditional grant steward; Private policy proof |
| R014:L05510 | visible architecture 7 | IDEA-019, IDEA-020 | Outcome-gated purchase; Private policy proof |
| R006:L03220 | royalty/model attribution | IDEA-065 | Royalty split and attribution payout |
| R006:L03220 | ad-fraud micropayments | IDEA-066 | Ad-fraud-aware micropayment |
