# Agent Wallet Adversarial Review

Oct 13, 2026 · @GOAT

No shortlisted candidate is a genuinely new mechanism, and the synthesis's own selection gates cannot finish before the shared registration and submission deadline of 20 October 2026, 23:59 Beijing time (21:59 Dhaka). The strongest defensible position is a corrected ObligationLock: built on existing onchain permission primitives rather than a new executor, and staged so that the bounded invoice payout is a submittable floor. No experiment, transaction or interview was run for this review; every result below is either a cited fact or labeled judgment.

## A. Executive adversarial findings

The synthesis is careful on threat modelling but wrong on timing, rubric reading and novelty. Its favourite survives only in a simpler form.

1. **The selection process cannot finish in time.** The synthesis requires written organizer answers, experiments E1–E7 and five operator interviews before choosing. For ObligationLock that is about 4–7 engineer-days of validation plus its own 8–12-day build estimate, against roughly 7 calendar days left. Followed literally, it defaults to no submission.
2. **Registration is an unverified gate.** Registration and submission share the 20 October deadline. Registration is an emailed form with confirmation "within 48 hours", and organizers may "close registration early without prior notice" ([IEEE CIS Singapore](https://www.ieee-cis-singapore.org/2026-fintechathon)). Confirm today.
3. **The rubric is partly misread.** The third criterion is "Innovation & interaction", not "Innovation". The rules also say all six topics share the same scoring and "choosing the on-chain topic does not affect scoring". Topic F says "Ambitious ideas are encouraged". The synthesis models none of these.
4. **No candidate is a new mechanism.** ObligationLock's exact, one-use, expiring payment authority can already be expressed with MetaMask Delegation Framework caveats and Biconomy Smart Sessions. Stablecoin accounts payable with approvals exists (Request Finance). Cleared specifies an onchain invoice registry, with agent session keys on its roadmap.
5. **The custom executor is the riskiest part and is unnecessary.** Segregated accounts plus existing caveats give the same obligation and reserve guarantees without new Solidity. That lowers both novelty and risk.
6. **Topic F's asset-management pillar is under-served.** ServiceMeter, PolicyProof and the refund governor barely manage assets. The blanket rejection of surplus allocation treated a valueless-testnet demo as if real capital were at risk.
7. **AI necessity is weak as specified.** In ObligationLock a deterministic matcher can do most of the agent's job. The agent needs real, bounded decisions: payment timing, reserve funding, standing-contract invoices and surplus placement.
8. **Compliance is treated mostly as disclaimers.** Judges are "WeBank industry experts and university scholars". Segregation of funds, segregation of duties, payee screening and an evidence trail are demonstrable controls under the 30% criterion.
9. **Much of the synthesis holds up.** I confirmed the Circle testnet blocker, the Zodiac ERC-1271 bypass, PACE as prior art, the x402 extensions and the Cleared roadmap caveat. Its loss-bound, hash, finality and threshold corrections are sound. I could not open the e-invoice preprint (S018).
10. **Verdicts, pending a 14 October spike.** Corrected ObligationLock (N1): CONDITIONAL GO. Bounded invoice payout: GO as the Stage 1 floor. ServiceMeter: CONDITIONAL GO as fallback, in a two-tier wallet form. ObligationLock with a custom executor, PolicyProof, standalone refunds, escrows and stream shutdown: NO-GO for this deadline. No winner is declared.

## B. Official requirement verification and corrections

The synthesis's facts match the rules, but it misses four official points that change strategy: "interaction" in the third criterion, shared scoring across topics, the explicit encouragement of ambition, and the registration channel. Sources: the [rules PDF](https://www.its.ac.id/international/wp-content/uploads/sites/66/2026/10/PBCSF-Appendix-2-Problem-Description-and-Competition-Rules-for-International-Track.pdf) (October 2026), the [IEEE CIS Singapore page](https://www.ieee-cis-singapore.org/2026-fintechathon), the [ITS announcement](https://www.its.ac.id/international/2026/10/06/2026-shenzhen-fintechathon-international-track-a-fully-funded-international-competition/) and the earlier [IEEE R10 announcement](https://r10.ieee.org/shenzhen-cis/blog/2026/06/17/2026-shenzhen-international-fintech-competition-international-track/).

| Item | What the sources say | Label | Effect on the synthesis |
| --- | --- | --- | --- |
| Topic F scope | "build an AI wallet agent that autonomously executes on-chain operations (asset management, transaction execution, risk control)" | Official requirement | Stated correctly. All three pillars are named, so a pure payment bot covers only two. |
| Theme | "AI as a Financial Participant". The June announcement framed the track around AI agents, secure digital wallets "and inclusive financial technologies" | Verified fact (June text superseded) | Not used. The agent should make financial decisions, not only relay them. |
| Asset management | Only the parenthetical above | Analytical inference | Holding, allocating and protecting funds over time probably counts; paying bills alone is thin. |
| Autonomy | "autonomously executes". Human-approval boundaries are not stated | Organizer clarification required | The synthesis's O2 stands. |
| Risk control | Security self-assessment must cover "permission-tier implementation and known-risk list" | Official requirement | Stated correctly. |
| Execution evidence | "for the on-chain topic: real on-chain transaction hashes". Testnet or mainnet is not stated | Official requirement; network needs clarification | Stated correctly (O1). |
| Criteria | Task completion 40%, Security & compliance 30%, Innovation & interaction 30% | Official requirement | **Correction:** the synthesis scores "Innovation /30" and drops interaction. |
| Shared scoring | "All six topics share the same core capability requirements and scoring criteria; choosing the on-chain topic does not affect scoring" | Official requirement | **Correction:** omitted. The "core capability requirements" are not described in the text retrieved; clarification required. |
| Bonus | "Ambitious ideas are encouraged, with a 0–5 point challenge bonus"; "Challenge bonus (on-chain exploration)" | Official requirement; subcriteria unpublished | Assuming zero for ranking is fine. Choosing a deliberately unambitious primary ignores the stated signal. |
| Materials | Technical documentation; deck (10 min max); optional video (5 min max); source with README, GitHub, deployment, tests; security self-assessment; transaction hashes | Official requirement | Stated correctly. |
| Deadline | "Registration and submission share the same deadline: October 20, 2026, 23:59 (Beijing Time, UTC+8)". Updates allowed until then; "No changes are accepted after the deadline" | Official requirement | Date correct (21:59 Dhaka). **Correction:** the synthesis's selection gates ignore it. |
| Registration | Form from the official site, emailed to fintechathon@ican-x.com with a fixed subject format; reply within 48 hours; early closure possible | Verified fact (co-organizer page) | **Correction:** the synthesis lists only the rules contact address and treats closure as a logistics footnote. |
| Review | Compliance screening 21–22 Oct; online review 23–28 Oct by WeBank experts and scholars; finalists 31 Oct | Verified fact | Preliminary judging reads submitted materials. Video and reproducibility matter more than live-demo fragility before 31 Oct. |
| Conflicting dates | June page: preliminary closes 2 Nov (tentative). ITS page shows shifted review dates | Organizer clarification required | Plan on the October PDF. |
| Finals | Check-in 20 Nov; final 21–23 Nov, Shenzhen; one member in person | Official requirement | Whether finalists may change code after 20 Oct is unstated; clarification required. |
| Eligibility | 2–5 full-time students at overseas institutions; at least 60% non-Chinese nationals; one team per person | Official requirement (60% wording reported garbled) | Stated correctly. Verify the roster. |
| Technology | No restrictions found; work must be original and third-party code properly licensed | Official requirement (absence is not proof) | Stated correctly. |
| Chain | None specified. WeBank, the judges' employer, leads FISCO BCOS; one source report raised it | Analytical inference | No FISCO requirement. A private-chain hash may not count as "real on-chain" without confirmation. |
| Awards | "Best Innovation Award RMB 20,000 (1)" | Verified fact | A separate innovation prize exists. |

**Questions to send today** (any answer that arrives late must not block the build): is our registration confirmed; do Base Sepolia or Ethereum Sepolia hashes qualify; what are the shared "core capability requirements"; may finalists update code before the final; what does the challenge bonus assess; does owner pre-authorization with human escalation count as autonomous. If no answer arrives, use a public EVM testnet and disclose it.

## C. Independent prior-art and novelty assessment

Every candidate is a product integration or an incremental improvement; none is a new wallet mechanism. The synthesis already lowered most novelty claims. It did not notice that ObligationLock's core authority model is expressible with existing, documented caveat enforcers, which cuts its novelty further. Vendor documentation shows what is described, not what is deployed or audited.

| Candidate | Closest competitor | Closest technical predecessor | Already documented | Claimed differentiator | Innovation type |
| --- | --- | --- | --- | --- | --- |
| HYBRID-001 ObligationLock | [Request Finance](https://partners.circle.com/partner/request-finance) (stablecoin invoices, "from approvals to payments", Safe integration); [AgentsPay](https://agentspay.ai/use-cases/bill-pay-agents) (capped bill-pay wallet, payee allowlist, duplicates declined, human escalation) | [PACE](https://arxiv.org/abs/2608.17220) (typed intents, deterministic verifier, signed records bound to exact bytes); [Cleared](https://clearedpay.xyz/cleared-whitepaper.pdf) (onchain InvoiceRegistry, EIP-712 settlement, agent session keys on the v2 roadmap) | Exact, one-use, expiring, redeemer-bound transfers via [MetaMask caveats](https://docs.metamask.io/smart-accounts-kit/reference/delegation/caveats/) `exactExecution`, `limitedCalls`, `timestamp`, `redeemer`; cumulative caps `erc20TransferAmount`; bulk revoke `nonce`. [Biconomy Smart Sessions](https://docs.biconomy.io/new/smart-sessions/policies): `usageLimit`, `tokenLimits`, parameter rules | Obligation binding: already available. Reserve preservation against discretionary spend: not found in the systems checked (absence not established). "Adversarial concurrency": largely free on EVM, where onchain checks run serially | Product integration, incremental |
| HYBRID-002 ServiceMeter | [Coinbase Agentic Wallet](https://docs.cdp.coinbase.com/agentic-wallet/welcome) (x402 payments, "built-in security guardrails"); [PolicyLayer](https://policylayer.com/glossary/x402-circuit-breaker) (its glossary describes budget reservation before each tool call, circuit breakers and a kill switch) | x402 [payment identifier](https://docs.x402.org/extensions/payment-identifier) (idempotent retries) and [signed offers and receipts](https://docs.x402.org/extensions/offer-receipt) | Reservation, idempotency, signed delivery receipts, anomaly circuit breakers | Stop after an objective output check fails: partially new; generic breakers exist | Incremental |
| IDEA-001 Bounded invoice payout | AgentsPay; Request Finance; [Ramp AP agents](https://ramp.com/blog/ramp-ap-agents-announcement) (offchain; "60-plus fraud signals", automatic payment) | MetaMask caveats; AP2 mandates | Essentially every mechanism | None claimed beyond reliability; the synthesis is honest here | Product integration |
| HYBRID-003 PolicyProof | Clawnch / Clawmes (natural-language policy to delegation caveats, per the synthesis's S013–S014) | Differential testing; PACE's verifier | Policy compilation; vendor policy engines | Cross-backend semantic conformance: not found in sources checked | Possible new developer tool, not a wallet |
| IDEA-033 Refund governor | Conventional processors' refund-to-original-payment | ERC-8183 escrow refund path (synthesis S004) | Original-payment refunds; escrow refunds | Cumulative refund cap across agent tool paths | Incremental |

**Falsifiers and defensible improvements**

- ObligationLock is invalidated as a mechanism contribution if a 30-line caveat composition reproduces its invariants, which section H argues is likely. A defensible claim is narrower: an accounts-payable agent whose whole spending authority is a set of owner-signed, onchain-enforced mandates, with a published worst-case compromise exposure (section L, N2).
- ServiceMeter is invalidated if PolicyLayer or Coinbase guardrails already stop spending on a failed output predicate. Its defensible improvement is a measured reduction in post-failure spend against x402 with both extensions enabled.
- PolicyProof is the only candidate with a plausible research gap. It cannot be built and demonstrated as a payment product in the time left.
- The e-invoice preprint (synthesis S018) could not be opened here; its novelty threat to ObligationLock remains unassessed.

## D. Candidate-by-candidate technical review

Assessed independently of the synthesis's ranking, only ObligationLock and the bounded payout address a meaningful financial problem with real asset control. Both are weak on AI necessity. ServiceMeter is the most feasible on a public testnet but barely manages assets. PolicyProof is a developer tool that cannot ship in time.

| Question | HYBRID-001 ObligationLock | HYBRID-002 ServiceMeter | IDEA-001 Bounded payout | HYBRID-003 PolicyProof | IDEA-033 Refund governor |
| --- | --- | --- | --- | --- | --- |
| 1. Financial problem | Paying fabricated or duplicate invoices; starving committed payments | Repeated spend on failed paid API calls | Wrong or duplicate supplier payment | Provider migration silently widens agent authority | Refund to the wrong payer or above the original |
| 2. Meaningful and specific | Yes for payables. The reserve half assumes discretionary spending the design never defines | Yes, but small tickets | Yes | Real but niche | Yes, narrow |
| 3. Customer | Stablecoin-native treasury (DAO, crypto SME) | Agent operators | Same as ObligationLock | Wallet developers | Crypto merchants |
| 4. Why AI | Unstructured invoices and exceptions. Weak if invoices arrive structured | Provider choice and failure diagnosis; weak | Document matching only | Drafting a policy; a parser does the rest | Matching support evidence; weak |
| 5. Why blockchain | Counterparties settle onchain; authority is publicly verifiable | x402 settlement | Same as ObligationLock | Onchain enforcement is the target | Onchain provenance of the original payment |
| 6. Autonomous actions | Intake, matching, scheduling, paying approved items | Choose provider, pay, verify output, stop | Match and pay | Compile, test, pay a fixture | Match and refund |
| 7. Must stay deterministic | Obligation creation, payee, amount, caps, expiry, status | Payee mapping, price ceiling, budget | Mandate terms | Activation, oracle verdict | Payer mapping, cumulative cap |
| 8. Assets controlled | Treasury balance (reserve and discretionary) | One job budget | One payout allocation | Test wallets only | Refund pool |
| 9. Onchain transactions | Obligation consumption and transfer | EIP-3009 or Permit2 settlements via a facilitator | Transfers by delegation redemption | One payment per backend | Refund transfers |
| 10. Meaningful asset management | Partial (reserve) | No | No | No | No |
| 11. Differentiated | Weak to moderate | Weak | No | Moderate (research) | Weak |
| 12. Innovation defensible | Only when narrowed | Only against a baseline | No claim | Plausibly | Narrowly |
| 13. Feasible by 20 Oct | Low as specified; medium if revised (N1) | Medium to high on Base Sepolia | High | Low | Medium |
| 14. Convincing demo | Yes: injection, duplicate, reserve block | Yes, short | Yes, but plain | Hard to make vivid | Clear but small |
| 15. Rubric fit | Good task and security; moderate innovation and interaction | Topic gap on asset management | Good task and security; low innovation | Weak task completion | Weak task completion |

**Architecture challenge (Phase 4)**

| Candidate | Straightforward | Substantial engineering | Unverified dependency | Contradiction | Likely demo failure | Simplification that keeps the value |
| --- | --- | --- | --- | --- | --- | --- |
| ObligationLock | Invoice parsing, matcher, receipt watcher | New executor with registry, reserve accounting, policy epochs and fuzzing | Whether the chosen account can confine the agent to the executor | Reserve rule blocks every payment when underfunded, with no priority rule. "Adversarial concurrency" is hard only for offchain policy engines. One-week claim against an 8–12 engineer-day estimate | Executor revert on an edge case; bundler or RPC outage | Per-obligation delegations plus a segregated reserve account (section H) |
| ServiceMeter | x402 client on Base Sepolia with the public testnet facilitator; output predicate | Durable reservation and reconciliation of unknown settlements | Smart-contract-wallet (ERC-1271) signing for EIP-3009 or Permit2 is not documented | Demands a "restricted authorization", yet an EIP-3009 authorization names whatever payee the signer chooses | Facilitator or faucet outage | Two-tier wallet: treasury delegation with a period cap tops up a hot key that holds only the job budget |
| Bounded payout | Everything | Evidence and documentation only | Smart Accounts Kit on the chosen testnet behaving as documented | None major; autonomy is thin | Low risk | Already minimal |
| PolicyProof | One-policy syntax tree | Two adapters and an independent oracle | Second backend on testnet (Circle policies are mainnet-only) | Pitched as a wallet, built as a developer tool; 10–16 engineer-days | Incompatibility rabbit holes | One differential test inside N1's suite |
| Refund governor | Exact-recipient refund transfer | Trusted original-payment index; partial-refund state | Payer mapping from omnibus senders | None | Indexer lag | One more mandate type inside N1 |

**Candidates ranked 6–10 by the synthesis, plus HYBRID-006**

| Candidate | Decisive problem |
| --- | --- |
| IDEA-003 Objective milestone escrow | Evaluator truth; escrow with evaluators already exists (ERC-8183, Virtuals ACP); 2–3 weeks |
| HYBRID-004 Refund-aware escrow | Two hard state machines combined |
| IDEA-009 Defensive incident agent | No standalone financial task; its revoke path belongs inside N1 |
| HYBRID-005 Attenuated reserve treasury | Multi-agent accounting; the single-agent reserve belongs inside N1 |
| HYBRID-007 Delivery-aware stream shutdown | Telemetry trust; adjustable streams already exist |
| HYBRID-006 Evidence-bound aid wallet | Zero-knowledge circuit work; deferred by the synthesis too |

## E. Fatal security and architectural issues

Eight issues are fatal to a plan, an architecture or a submission if left unresolved; two are already verified facts. None is a demonstrated exploit against this team's code, because no code exists.

| ID | Fatal to | Issue | Evidence | Resolution |
| --- | --- | --- | --- | --- |
| FX-1 | The plan | The synthesis's nine selection conditions plus E1–E7 cannot complete before 20 Oct | Its own estimates: E1–E3 and E7 take 4–7 engineer-days before an 8–12-day build | 48-hour spike with kill criteria, then staged build (section P) |
| FX-2 | The submission | Registration not confirmed | Shared deadline; 48-hour confirmation; possible early closure | Verify or register today |
| FX-3 | Any candidate | A reachable signing path outside the enforced mandates | Class of failure flagged by the synthesis (S012 root bypass; S039 excerpt) | Agent key holds no assets; strip all transfer tools (SEC-01) |
| FX-4 | One architecture | Circle spending policies assumed on testnet | "Spending policies require a mainnet agent wallet. Testnet is not supported" ([Circle](https://developers.circle.com/agent-stack/agent-wallets/wallet-operations/custom-policies)) | Verified; do not use that route |
| FX-5 | Safe + Zodiac routes | Roles v2.1.0 and Delay v1.1.0 accepted a failed ERC-1271 call returning the magic value | [Post-mortem](https://engineering.gnosisguild.org/posts/zodiac-post-mortem): first reported 1 June 2026, Gnosis Pay most affected, about $4,500 confirmed lost elsewhere; patched in Roles 2.1.1 and Delay 1.1.1 | Avoid, or verify the patched version on the chosen testnet (SEC-12) |
| FX-6 | ObligationLock as specified | A new, unaudited executor holding all treasury authority cannot meet the synthesis's own bar (1,000 interleavings plus independent review) by 20 Oct | Section 14 of the synthesis | Replace with existing caveats and account segregation (section H) |
| FX-7 | ServiceMeter as specified | Its "restricted authorization" assumes a smart account can sign x402 payments; ERC-1271 support is not documented | [x402 network page](https://docs.x402.org/core-concepts/network-and-token-support) names EIP-3009 and Permit2 only | Two-tier hot wallet (section H) |
| FX-8 | PolicyProof this round | 10–16 engineer-day estimate | Synthesis section 9.4 | Defer |

**Security finding register.** Severity assumes the revised designs in section H are not yet in place. "Status" separates a known precedent from a hypothesis about this design.

| ID | Affects | Severity | Status | Attack or failure, and financial impact | Likelihood |
| --- | --- | --- | --- | --- | --- |
| SEC-01 | All | Critical | Hypothesis; precedent class | An enabled SDK, CLI or MCP transfer tool, raw key or root API outside the mandate path is invoked by injection. All funds reachable by that path | High if any default wallet tool stays enabled |
| SEC-02 | ObligationLock, payout, N1, ServiceMeter | High | Known attack class | Invoice, email or 402 body instructs the agent to add a payee or approve a payment. Theft if the agent can create authority | High attempt rate |
| SEC-03 | ObligationLock, payout, N1 | High | Hypothesis; missed by the synthesis | The LLM writes the summary the owner reads when signing a new obligation and misdescribes payee or amount. Full mandate amount | Medium |
| SEC-04 | ObligationLock, payout, N1 | High | Common payables fraud pattern | "Our wallet changed" invoice substitutes the vendor address. Payment to attacker | Medium |
| SEC-05 | All | High | Hypothesis | Look-alike token, 6-versus-18-decimal confusion or wrong chain ID. Over- or mis-payment | Medium |
| SEC-06 | ServiceMeter, all | High | Documented mechanism | Permit2 needs a one-time onchain approval; EIP-3009 signatures are redeemable until expiry. Spend outside the budget if the treasury key signs them | Medium |
| SEC-07 | ServiceMeter | Medium | Identified by the synthesis | Issued authorizations survive session revocation and settle later | Medium |
| SEC-08 | All | High | Hypothesis | Crash after broadcast; the agent re-issues payment. Double payment | High without onchain one-use state |
| SEC-09 | All | Medium | Identified by the synthesis | Stale RPC, reorg or fabricated success marks a payment settled; a retry pays again | Low on testnet; nonzero |
| SEC-10 | ObligationLock | Medium | Design gap | Obligations exceed reserve; the invariant blocks all payments or ordering is undefined. Missed due payments | Medium |
| SEC-11 | All | Medium | Hypothesis | Owner revocation lands after a pending redemption, or the owner key is unavailable | Low on testnet |
| SEC-12 | Safe + Zodiac routes | Critical if used | Demonstrated exploit elsewhere | Unpatched Roles or Delay mastercopy deployed on the chosen testnet | Unknown until checked |
| SEC-13 | All | Medium | Known attack class | Poisoned memory ("vendor X is always approved") steers matching | Medium |
| SEC-14 | ServiceMeter | High | Identified by the synthesis | 402 response changes payee, price, network or redirects to a new origin | Medium |
| SEC-15 | All | Medium | Hypothesis | Retry loop burns gas | Medium |
| SEC-16 | ObligationLock as specified | High | Inherent to new code | Bug in the custom executor bypasses the reserve or the cap; the bound assumes the broken code works | Unknown |
| SEC-17 | All | Medium | Compliance exposure | Paying an unscreened counterparty; personal data written onchain | Low with synthetic data |
| SEC-18 | All | Medium | Hypothesis | Agent key exfiltrated from the host | Medium |

| ID | Mitigation | Validation test | Residual risk |
| --- | --- | --- | --- |
| SEC-01 | Agent key holds no assets and is only a delegation redeemer; remove every transfer tool; root keys never in runtime | Enumerate every tool and route; attempt a transfer through each, with injected instructions | Host compromise can redeem existing mandates only |
| SEC-02 | Extracted content is data; no agent write path to mandates or payees | 20 injected invoices: encoded, multilingual, image-embedded | Stalls and escalations (availability) |
| SEC-03 | Owner signs EIP-712 typed data rendered by the wallet; AI summary shown separately and labelled untrusted | Run a deliberately lying summarizer; confirm the signed terms are unchanged and visible | Owner inattention |
| SEC-04 | Payee only from an owner-signed vendor record; changes need out-of-band confirmation and a delay | Changed-address invoice must produce an escalation, not a mandate | Compromised vendor |
| SEC-05 | `exactExecution` binds token address and raw integer amount; chain-bound signatures | Mutated token, decimals and chain fixtures | Upgradeable token contracts |
| SEC-06 | Only the hot wallet signs x402; approval no larger than its balance; short expiry; treasury never approves | Allowance scan before and after; redeem after expiry | Unexpired authorizations count toward exposure |
| SEC-07 | Count outstanding authorizations in exposure; short expiry | Revoke, then settle an old authorization | Bounded by expiry window |
| SEC-08 | Obligations use `limitedCalls` = 1, so a second redemption reverts; standing mandates add a journal and the x402 payment identifier | Kill the process after broadcast, repeatedly; verify one transfer | Duplicates within a standing period cap |
| SEC-09 | Two independent RPCs; proposed, authorized, submitted, included, finalized states | Fault proxy with stale and fabricated receipts | Display lag |
| SEC-10 | Due-date priority; agent tops up the reserve from operating funds; escalation | Underfunded fixture | Owner must fund |
| SEC-11 | One-transaction bulk revoke via the `nonce` caveat; independent watcher | Revoke against a pending redemption on a local chain | In-flight transactions |
| SEC-12 | Avoid, or pin Roles 2.1.1 and Delay 1.1.1 and verify deployed bytecode | Read the mastercopy version on the chosen chain | Composition hazards |
| SEC-13 | Memory carries no authority; writes logged | Poisoned-memory fixture | Wrong suggestions, caught by the matcher |
| SEC-14 | Payee pinned per origin; price ceiling; same-origin only | Malicious 402 fixtures | Bounded first payment |
| SEC-15 | Capped gas tank; retry budget | Forced-revert loop | Gas tank only |
| SEC-16 | Do not write the executor; if unavoidable, minimal code, property tests, disclosed as unaudited | Property and fuzz tests | Unaudited code |
| SEC-17 | Synthetic counterparties; payee screening as a control, not a legal claim; opaque identifiers onchain | Screened-address fixture blocks payment | Legal status unassessed |
| SEC-18 | Key holds nothing; rotate by bumping the `nonce` caveat | Rotate mid-demo | Outstanding mandates |

**Do controls work without the LLM?** For each required mechanism, where enforcement lives:

| Mechanism | ObligationLock as specified | N1 (revised, section H) | ServiceMeter, two-tier |
| --- | --- | --- | --- |
| Authorization | Owner registry in new contract | Owner-signed EIP-712 delegations, enforced onchain by existing contracts | Owner configuration; hot-wallet funding |
| Spending limits | New executor | `erc20TransferAmount` / `erc20PeriodTransfer` and segregated balances | Hot balance (token-enforced) plus period-capped top-up |
| Recipient restriction | New executor | `exactExecution` / `allowedCalldata` | Offchain payee pinning only (weak) |
| Contract restriction | Module limited to executor | `allowedTargets` / `exactExecution` | None; hot key holds only budget |
| Transaction validation | Offchain matcher plus executor | Offchain matcher plus caveats | Offchain 402 parsing |
| Protected signing | Unspecified provider | Agent key holds nothing; can only redeem | Hot key in runtime; exposure equals balance |
| Monitoring | Watcher (to build) | Watcher plus exposure meter (to build) | Watcher (to build) |
| Emergency revocation | Pause executor (new code) | `nonce` bump or `disableDelegation` | Stop top-ups; old authorizations live to expiry |
| Audit evidence | Hashes and journal | Signed mandate linked to each hash | Hashes, receipts, journal |
| Recovery | Owner reconciliation | Owner reconciliation; revoke-verify-rotate | Owner reconciliation |

## F. Serious but fixable weaknesses

The biggest fixable weaknesses are about scoring, not safety: interaction, asset management, AI necessity and compliance are each under-designed relative to the official criteria.

| ID | Weakness | Why it matters | Fix |
| --- | --- | --- | --- |
| W-1 | Interaction is not modelled; the synthesis advises against UI work until late | Part of a 30% criterion | One owner console: sign mandates through the wallet's typed-data screen, a live exposure figure, "why not paid" explanations, plain-language questions over the payment journal |
| W-2 | Asset management is thin across finalists | Named Topic F pillar | The agent allocates between operating and reserve accounts. Optional surplus placement in the [Aave v3 Sepolia market](https://aave.com/docs/aave-v3/smart-contracts/testing-and-debugging), cut if not working by 18 Oct noon |
| W-3 | AI is not necessary for most of ObligationLock's flow | "AI as a Financial Participant" theme | Give the agent bounded decisions (timing, reserve funding, in-terms invoices) and measure it against a deterministic baseline (experiment X3) |
| W-4 | Compliance appears mostly as disclaimers | Part of a 30% criterion; bank judges | Segregation of funds, segregation of duties (requester, approver, executor), payee screening as a control, evidence trail from signed mandate to hash. Never claim legal compliance |
| W-5 | The reserve invariant presumes discretionary spending that is never defined | Without it the reserve rule protects nothing | Define agent-initiated operating spend from a separate operating account |
| W-6 | No rule for underfunded obligations | Missed payments (SEC-10) | Due-date priority, agent top-up, escalation |
| W-7 | Customer tension: crypto-native payers send structured invoices (AI unnecessary); unstructured invoices come from less crypto-native firms | Undercuts both AI and blockchain justification | Target crypto SMEs paying contractors in USDC from PDF or email invoices, and say so |
| W-8 | If every obligation needs a human signature, autonomy is only timing | Judges may see a scheduler | Standing contract mandates (vendor, monthly cap) let in-terms invoices pay unattended; fabricated-invoice harm is bounded to overpaying a known vendor within the cap |
| W-9 | Contingency-first framing ignores "Ambitious ideas are encouraged" | Bonus and innovation scores | Present onchain-enforced mandates and the exposure meter as the onchain ambition; still score the bonus at zero |
| W-10 | Five operator interviews (E7) are infeasible in days | Blocks selection | One or two quick conversations if possible; otherwise state the customer hypothesis as unvalidated |
| W-11 | Planning centres on a live 10-minute demo | Preliminary review reads materials | Recorded video with explorer-linked hashes; evidence table in the deck; clean-checkout README |
| W-12 | Acceptance bars (1,000 interleavings; 60 plus 20 adversarial cases) are right but unscheduled | Rigor that never runs protects nothing | Run scaled versions; list untested cases in the security self-assessment |
| W-13 | Chain not chosen | Blocks the spike | Ethereum Sepolia if surplus placement is in scope (Aave); Base Sepolia if x402 operating spend is (public facilitator). MetaMask Smart Accounts support both ([networks](https://docs.metamask.io/smart-accounts-kit/get-started/supported-networks/)) |

## G. Unsupported or exaggerated innovation claims

ObligationLock's lead in the synthesis rests on a novelty centre of 14/20 against 8/20 for the bounded payout. Lowering it to 10, which the caveat evidence supports, gives ObligationLock 75 against the payout's 76 in the synthesis's own balanced model: the favourite flips on one disputed input.

| Claim | Source | Verdict | Evidence |
| --- | --- | --- | --- |
| Obligation and reserve preservation "at execution under adversarial concurrency" | Synthesis, HYBRID-001 | Exaggerated | One-use exact authority exists as caveats; onchain checks are serial by construction. Only reserve protection against discretionary spend may be new |
| "An invoice is evidence, not authority" as a capability | Synthesis | Correct principle, not new | Purchase-order matching and AP2 mandates encode it |
| Acceptance state that limits later spending | Synthesis, HYBRID-002 | Partially supported | Budget reservation and circuit breakers exist (PolicyLayer); output-predicate gating not found elsewhere |
| PolicyProof leads on innovation | Synthesis, scenario D | Unsupported for this round | Plausible gap, but the score presumes a delivery the 10–16-day estimate rules out |
| The "verifiable autonomy layer" is empty; no product anchors decision records onchain | Source report R007 | Contradicted | PACE verifies signed decision records onchain |
| First safe agent wallet, first intent-bound transaction, first AI escrow, first autonomous invoice payment | Several source reports | Contradicted | Synthesis already rejected these; confirmed |
| Exact-bytes binding plus signed decision records are new | Several source reports | Contradicted | PACE |
| Aggregate conservation across sub-agent grants | Synthesis, HYBRID-005 | Partly unverified | Delegation chains attenuate authority in existing frameworks; exact conservation semantics need checking |
| Worst-case compromise exposure meter | This review, N2 | Unverified hypothesis | Not found in the sources checked; absence not established. Search before claiming |
| Local implementation already succeeded | Source report R011 | Unsupported | No code, logs or hashes supplied; synthesis already discarded |

## H. Recommended architecture corrections

Keep ObligationLock's principle, drop its custom executor: put obligations and discretionary funds in separate smart accounts and let existing caveat enforcers carry every spending rule. The agent's key then holds only gas and can do nothing except redeem owner-signed mandates.

&#91;embedded content: Revised N1 architecture · trust zones and money paths\]

Untrusted inputs and the LLM sit above a deterministic executor; every rule that moves money is enforced by existing onchain contracts, and the owner's key never enters the agent runtime.

1. **Segregate funds instead of computing reserves.** A reserve account holds money for approved obligations. Its only outflow is a per-obligation delegation with `exactExecution` (token, vendor, raw amount), `limitedCalls` = 1, `timestamp` (not before the payment window, not after expiry) and `redeemer` = the agent key. An operating account holds discretionary funds. Reserve protection then holds by construction, with no new contract.
2. **Two authority tiers.** One-off obligations: the owner signs each mandate. Standing contracts: the owner signs once; `erc20PeriodTransfer` caps the monthly total and `allowedCalldata` fixes the recipient, so in-terms invoices pay unattended.
3. **A one-way valve.** The agent may move operating funds into the reserve account, never the reverse. That is its main asset-allocation decision and cannot drain obligations.
4. **Approval screen outside the model.** Owners sign typed data that the wallet renders from the canonical fields. The AI's summary sits beside it, labelled untrusted (SEC-03).
5. **Deterministic executor around the LLM.** The LLM reads invoices and proposes matches, timing and escalations as schema-checked output. Plain code redeems only matched mandates inside their window. No free-form tool use touches money.
6. **A stated compromise bound.** If the agent key is stolen, the attacker can only redeem outstanding mandates: early payment of approved obligations, plus standing-contract caps summed over every period until expiry, plus the gas tank. Payment to a non-approved party requires the owner key, a fake vendor record or a framework bug. Show this number live.
7. **Evidence trail.** Each transaction hash is linked to its signed mandate hash and the invoice digest, verified on an independent RPC with an explicit finality state.
8. **ServiceMeter, if used, as two tiers.** The treasury grants a period-capped delegation that tops up a hot key holding only the job budget. Exposure equals hot balance, plus remaining period allowance, plus unexpired x402 authorizations.
9. **Fallback order if experiment X1 fails.** Biconomy or Rhinestone Smart Sessions (`usageLimit`, parameter rules); then Safe with verified Roles 2.1.1; then a minimal custom executor disclosed as unaudited; then pivot to ServiceMeter.

Verify in X1 rather than assume: `limitedCalls` counts per delegation; `exactExecution` covers target, value and calldata; `nonce` revokes earlier delegations as documented. A single-account dynamic floor would need a custom caveat enforcer, which is new code; prefer segregation.

## I. Minimum security and functional tests

These 24 tests are the floor for any submission; each must leave a log or a hash. A failure in the first eight blocks submission of that architecture. Synthetic counterparties and valueless test tokens only.

- [ ] Route inventory: every tool, SDK method, CLI, MCP server and key in the agent runtime is listed; none can move value except mandate redemption (SEC-01)
- [ ] Agent key balance is gas only; a direct token transfer from it fails for lack of funds
- [ ] Mutated amount, recipient, token or chain on an obligation mandate reverts onchain
- [ ] Second redemption of a one-use obligation reverts (duplicate payment impossible)
- [ ] Redemption before the payment window and after expiry both revert
- [ ] Redemption by any key other than the named redeemer reverts
- [ ] Owner bulk revocation (`nonce` bump) makes every outstanding mandate unredeemable
- [ ] No path moves funds from reserve to operating or to any non-mandated address
- [ ] Standing contract: in-terms invoices pay unattended; the period cap holds; a different recipient reverts
- [ ] 20 injected invoices (hidden text, encoded, multilingual, "wallet changed") produce zero new authority and zero unmandated payments
- [ ] Lying-summarizer test: the owner's signing screen shows the true payee, token, raw amount and expiry
- [ ] Changed vendor address produces an escalation, never a mandate
- [ ] Crash after broadcast, five times: exactly one transfer per obligation; journal reconciles
- [ ] Stale or fabricated receipt from one RPC is caught by the second; status never shows "finalized" early
- [ ] Underfunded reserve: due-date priority applied; top-up proposed; escalation raised
- [ ] Exposure meter value equals hand-computed worst case after each grant, payment and revocation
- [ ] Red-team drain with the stolen agent key never exceeds the displayed exposure
- [ ] Gas retry loop stops at the retry budget
- [ ] Screened payee (synthetic sanctions-list fixture) blocks mandate creation
- [ ] No invoice text, names or personal data written onchain; only opaque identifiers
- [ ] End-to-end positive run: three invoice formats matched and paid with explorer-verified hashes
- [ ] AI versus deterministic baseline on the same 40 invoices: accuracy and escalation counts recorded (X3)
- [ ] Clean-checkout reproduction by a second team member, including one failure and one recovery
- [ ] Security self-assessment lists every untested case and every trust assumption

## J. Revised independent ranking

The corrected ObligationLock (N1) ranks first because it covers all three Topic F pillars with enforcement that does not depend on the model, and because its Stage 1 is the bounded payout. Order weighs the estimated official score by the chance of a demonstrable submission by 20 October. All figures are ordinal judgments, not forecasts of judges' scores; the bonus is scored at zero.

| Rank | Candidate | Task /40 | Security & compliance /30 | Innovation & interaction /30 | Base /100 | Chance of a demonstrable submission |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | N1: corrected ObligationLock, staged (absorbs IDEA-001, IDEA-012, IDEA-009, N2) | 30–36 | 23–27 | 19–25 | 72–88 | Medium (Stage 1 high) |
| 2 | IDEA-001 Bounded payout (Stage 1 alone) | 27–33 | 22–26 | 13–19 | 62–78 | High |
| 3 | HYBRID-002 ServiceMeter, two-tier | 25–32 | 20–25 | 16–22 | 61–79 | Medium to high |
| 4 | HYBRID-001 as specified (custom executor) | 24–36 | 17–27 | 19–25 | 60–88 | Low |
| 5 | IDEA-033 Refund governor | 22–29 | 20–25 | 13–19 | 55–73 | Medium |
| 6 | IDEA-009 Defensive incident agent | 18–25 | 20–25 | 12–18 | 50–68 | Medium |
| 7 | HYBRID-005 Attenuated reserve treasury | 20–28 | 18–24 | 18–24 | 56–76 | Low |
| 8 | HYBRID-003 PolicyProof | 15–25 | 19–25 | 18–25 | 52–75 | Low |
| 9 | IDEA-003 Objective milestone escrow | 22–30 | 17–22 | 16–22 | 55–74 | Low |
| — | HYBRID-004, HYBRID-006, HYBRID-007 | Not scored |  |  |  | Very low |

**How the order moves**

- **Conservative implementation** (Stage 2 slips): the bounded payout is what ships. That matches the synthesis's feasibility and security scenarios.
- **Stricter security:** N1 and the bounded payout tie; ObligationLock as specified falls further because of unaudited code.
- **Innovation weighted up:** N1 still leads only if the exposure meter works and survives a prior-art search. PolicyProof would lead with two more weeks.
- **Payment-path reality:** if MetaMask, Smart Sessions and Safe routes all fail X1 by 15 October but x402 works, ServiceMeter becomes first by default.
- **Organizer rejects public testnets:** every candidate defers equally; ranking unchanged.

## K. Disagreements with the previous synthesis

The material disagreements are about time, rubric and mechanism, not about threat modelling. This comparison was made only after sections B–J were drafted.

| # | Synthesis position | This review | Evidence | Effect |
| --- | --- | --- | --- | --- |
| 1 | Select only after organizer answers, E1–E7 and interviews | Decide by a 48-hour spike; build in submittable stages | Deadline 20 Oct; the synthesis's own effort estimates | Replaces the selection process |
| 2 | Third criterion modelled as "Innovation" | "Innovation & interaction" | Rules PDF | Adds owner-console work |
| 3 | Balanced weights are the primary model | Under a seven-day window, the feasibility scenario should be primary | Synthesis scenario B already puts the payout first | Payout becomes the floor, not the contingency |
| 4 | ObligationLock novelty centre 14/20 | About 10/20 | Caveat enforcers; Request Finance; Cleared | Favourite flips to the payout in the synthesis's own model (section G) |
| 5 | A small custom executor if the account cannot enforce obligations | No executor; segregate accounts | Documented caveats cover one-use exact transfers | Removes SEC-16; lowers novelty |
| 6 | "Adversarial concurrency" is a key differentiator | Hard only for offchain policy engines | EVM executes transactions serially; checks inside execution are atomic | Drop from the pitch; keep the ERC-4337 validation-versus-execution caveat |
| 7 | Yield and treasury allocation fail current scope for capital risk | Capital risk is zero on a valueless testnet; the real issues are benefit and reliability | Aave v3 runs a Sepolia test market | Asset-management stretch goal restored, with a cut rule |
| 8 | A funded unrestricted hot wallet is not equivalent and should not be used | For budget bounding it is the one documented onchain control for x402; payee restriction is not | Token balances are enforced by the token contract; x402 lists EIP-3009 and Permit2 only | ServiceMeter becomes feasible |
| 9 | Compliance mainly as legal caveats | Also as demonstrable controls | Bank judges; 30% criterion | Adds W-4 controls |
| 10 | PolicyProof leads the innovation scenario | Research reserve only | 10–16 engineer-days | No-go this round |
| 11 | Bonus unresolved, assume zero | Agree on zero; disagree with an unambitious primary | "Ambitious ideas are encouraged" | Pitch onchain enforcement as the ambition |
| 12 | Organizer contact is the rules address | Registration goes to a separate address with a 48-hour reply | Co-organizer page | Urgent action today |

**Where the synthesis is right and this review agrees:** Circle's mainnet-only policies; the Zodiac bypass and patched versions; PACE as direct prior art; x402's existing receipts and idempotency; daily caps are not lifetime loss bounds; a hash proves integrity, not truth; two agents can meet a threshold of two without the human; inclusion is not finality; vendor fraud remains inside the trusted boundary.

## L. New or improved innovation opportunities

One revised concept (N1) and three components are worth investigating; each answers a gap in the rubric rather than adding features. N2 is the most promising differentiator, but its novelty is unverified.

|  | N1 Mandate-only obligation treasury | N2 Worst-case compromise exposure meter | N3 Obligation-aware surplus placement (stretch) | N4 Compliance control pack |
| --- | --- | --- | --- | --- |
| Problem | Payables agents either hold broad keys or need a human click per payment | Owners cannot see what a compromised agent could take; daily caps understate it | Idle operating cash while obligation dates are known | Bank-style controls are missing from agent-wallet demos |
| Closest existing | Request Finance (human approvals), AgentsPay (offchain caps), Ramp (offchain), Cleared (agent sessions on roadmap) | Allowance viewers and wallet permission lists; a single worst-case figure across grant types was not found (unverified) | Vault and treasury yield automation | Provider sanctions screening; standard banking segregation |
| Why more defensible | No new contract; every rule enforced onchain by existing code; authority publicly auditable | Measurable: a red-team drain must never exceed the displayed figure | Covers the asset-management pillar with a hard rule: reserve money is never invested | Matches the judges' domain; cheap |
| Autonomous workflow | Intake, match, choose timing, fund reserve, redeem, verify, reconcile, escalate | Recompute after every grant, payment and revocation; refuse actions that push exposure over the owner's limit | Forecast obligations; deposit surplus; withdraw ahead of due dates | Screen payees at mandate creation; log evidence; keep roles separate |
| Onchain actions | Mandate redemptions, reserve top-ups, owner revocation | Reads only | Market supply and withdraw through a delegation limited to that pool, those methods and withdrawal back to the operating account | None; it blocks mandate creation |
| Security boundary | Redeem-only agent key; offline owner key; one-way reserve | Computed from the owner's ledger of issued mandates plus onchain consumption; assumes that ledger is complete | Invested amount capped; recipient fixed | Screening list pinned and versioned; a control, not a legal finding |
| Smallest version | One reserve, one operating account, three obligations, one standing contract, one token, one chain | Closed-world calculator over the grant types N1 issues: one number and its breakdown | One market, one asset, one deposit, one just-in-time withdrawal | List check, role separation, evidence export |
| Main risk | Caveat behaviour differs from documentation; toolkit learning curve | False comfort if a grant is missed | Testnet market or faucet limits; mixing market test tokens with the payment token | Overclaiming compliance |
| Validated by | X1, X2, X3, X4 | X2 red-team drain | X2 extension, only if green by 18 Oct noon | Tests in section I |

A tempting merge, ObligationLock plus ServiceMeter as the agent's own operating spend, gives the reserve rule a real job. It also doubles integration work; adopt it only if both payment paths pass their spikes by 15 October.

## M. Top candidate validation experiments

Six experiments, ordered to falsify the weakest assumption first; X1 must report by 14 October 23:59 Dhaka. None has been run. Every one uses valueless test tokens, so maximum financial exposure is zero real value; the exposure limits below cap test units.

**X1 — Mandate enforcement spike (N1, bounded payout)**

- **Hypothesis:** existing caveats enforce exact, one-use, windowed, redeemer-bound transfers and one-transaction bulk revocation, with no custom contract.
- **Prototype and tools:** script on MetaMask Smart Accounts Kit (pinned version) and viem; owner smart account, test token, three signed delegations, an agent key that redeems them; two RPC providers.
- **Environment:** local fork for at most two hours, then Ethereum Sepolia or Base Sepolia.
- **Tests:** positive — three exact payments to the right vendors. Negative — wrong amount, recipient, token; before the window; after expiry; wrong redeemer. Adversarial — second redemption; redemption after a `nonce` bump; batching two delegations; direct transfer from the agent key.
- **Accept:** 3 of 3 positives with public hashes; every negative and adversarial case reverts. **Fail:** any negative succeeds, or the toolkit is not deployed and working within six working hours.
- **Evidence:** lockfile, addresses, signed delegation JSON, hashes, revert reasons.
- **Exposure:** at most 100 test units; faucet gas.
- **Blockers and dependencies:** faucet limits; toolkit version drift; whether a bundler is needed.
- **Implication:** pass — build Stage 1. Fail — take the fallback order in section H, item 9.

**X2 — Segregation, standing mandates and exposure red-team (N1, N2)**

- **Hypothesis:** reserve funds leave only through obligation mandates; standing caps hold across periods; the displayed exposure is never exceeded by a drain with the agent key.
- **Prototype and tools:** reserve and operating accounts, one-way top-up delegation, one standing contract, exposure calculator.
- **Environment:** testnet, with short periods (about ten minutes) so resets are observable.
- **Tests:** positive — in-terms invoices paid; reserve topped up. Negative — other recipient; over the period cap; reserve-to-operating move. Adversarial — a red-teamer holding the agent key tries every order, batch and period-boundary trick to maximize outflow.
- **Accept:** outflow never exceeds the displayed figure; zero non-obligation reserve outflow; benign tasks complete. **Fail:** any excess or leak.
- **Evidence:** red-team log, balances before and after, hashes, calculator snapshots.
- **Exposure:** same isolated units.
- **Blockers and dependencies:** period-caveat semantics; X1 pass.
- **Implication:** pass — N2 anchors the demo. Fail — drop the exposure claim, keep segregation. Extension (N3): one restricted supply and withdraw on the Aave Sepolia market, only if green by 18 Oct noon.

**X3 — Agent adversarial and AI-necessity test (N1, bounded payout)**

- **Hypothesis:** the LLM matches invoices better than a deterministic parser, and no model output can create authority.
- **Prototype and tools:** 40 synthetic invoices — 20 benign in varied formats (one non-English), 20 adversarial; LLM pipeline with schema-checked output; template-parser baseline.
- **Environment:** offline scoring; testnet only for paid cases.
- **Tests:** positive — correct mandate matched. Negative — unknown vendor or amount mismatch escalates. Adversarial — hidden text, "wallet changed", memo instructions, text inside images, poisoned memory.
- **Accept:** zero unmandated payments (hard); LLM accuracy at least the baseline's with no more false escalations (soft). **Fail:** any unmandated payment means an architecture leak; a weaker LLM means reframe the AI role.
- **Evidence:** dataset, outputs, confusion table, logs.
- **Exposure:** none beyond X1 and X2 units.
- **Blockers and dependencies:** model API quota; X1.
- **Implication:** sets how strongly to pitch AI.

**X4 — Truthful status, retry and revocation (all candidates)**

- **Hypothesis:** crashes and timeouts never cause a duplicate economic payment or a false "finalized"; revocation takes effect.
- **Prototype and tools:** payment state machine, durable journal, two RPCs, fault-injecting proxy.
- **Environment:** local chain for reorgs and faults; testnet for real inclusion and finality.
- **Tests:** positive — correct final status. Negative — reverted and expired cases shown as such. Adversarial — kill after broadcast five times; fabricated success from one RPC; revocation racing a pending redemption.
- **Accept:** zero duplicates and zero false finalized states across at least 20 fault schedules (scaled from the synthesis's 50); no redemption succeeds after revocation takes effect. **Fail:** any duplicate or false status.
- **Evidence:** fault schedule, journal, receipts.
- **Exposure:** same units.
- **Blockers and dependencies:** testnet finality takes minutes; X1.
- **Implication:** required for any submission.

**X5 — ServiceMeter two-tier spike (fallback)**

- **Hypothesis:** an x402 purchase on Base Sepolia through the public testnet facilitator can be bounded by hot-wallet funding and stopped after an objective failure, without duplicate payment.
- **Prototype and tools:** two local paid endpoints (honest and faulty) on x402 server middleware; hot key topped up by a period-capped treasury delegation; client with payee pinning, price ceiling, output predicate and the payment identifier.
- **Environment:** Base Sepolia, test USDC.
- **Tests:** positive — honest task completes. Negative — wrong output stops spending; price over ceiling refused. Adversarial — 402 changes payee; redirect to a new origin; timeout after settlement; replay.
- **Accept:** total spend within hot balance; no charge after the first failed check except a preauthorized alternate; no duplicate on timeout; lower post-failure spend than x402 with both extensions enabled. **Fail:** facilitator unusable, a duplicate, or no gain over the baseline.
- **Evidence:** authorizations, settlement hashes, content digests, cost ledger.
- **Exposure:** at most 10 test USDC in the hot wallet.
- **Blockers and dependencies:** faucet limits; facilitator uptime; pinned x402 versions.
- **Implication:** pass — viable fallback or operating-spend module. Fail — drop ServiceMeter.

**X6 — Prior-art and contribution desk check (three hours)**

- **Hypothesis:** N1's narrow claim — mandate-only onchain authority plus a published compromise bound — is not already a shipped feature.
- **Method:** dated feature table for Coinbase, Crossmint, MetaMask Advanced Permissions, Safe, Request, Cleared, AgentsPay, PolicyLayer, PACE and the e-invoice preprint.
- **Accept:** a contribution statement of at most three sentences, each cited. **Fail:** the claim exists; reduce it to integration quality.
- **Evidence:** the dated table with links. **Exposure:** none. **Blocker:** access to the preprint.
- **Implication:** sets the pitch wording.

## N. GO / CONDITIONAL GO / NO-GO decisions

One GO, two CONDITIONAL GOs, nine NO-GOs for this submission. GO means "proceed to controlled prototype validation", not production readiness; no high innovation score overrode a critical issue.

| Candidate | Decision | Exact conditions |
| --- | --- | --- |
| N1 Corrected ObligationLock (staged) | CONDITIONAL GO | Registration confirmed by 14 Oct. X1 passes by 14 Oct 23:59 Dhaka on some route in the section H fallback order. X2 shows zero reserve leakage and no drain above the displayed bound by 16 Oct. X3 shows zero unmandated payments. X4 passes. Stage 2 is cut if not green by 17 Oct 23:59 |
| IDEA-001 Bounded invoice payout (Stage 1) | GO | Stays GO while X1 passes on some route, the route inventory is clean (SEC-01) and the contribution claim stays modest. Becomes NO-GO if no route enforces one-use mandates |
| HYBRID-002 ServiceMeter (two-tier only) | CONDITIONAL GO | X5 passes. Activated as primary only if every N1 route fails X1 by 15 Oct; as an operating-spend module only if both pass by 15 Oct. Disclose weak asset-management coverage |
| HYBRID-001 ObligationLock with custom executor | NO-GO | Cannot meet its own review bar (1,000 interleavings plus independent review) by 20 Oct. Revisit after the round with an audit |
| HYBRID-003 PolicyProof | NO-GO | 10–16 engineer-days; weak task completion. Research reserve |
| IDEA-033 Refund governor | NO-GO | Not as primary: little asset management. May return as one mandate type inside N1 if time allows |
| IDEA-003 Objective milestone escrow | NO-GO | Evaluator truth unresolved; crowded prior art; 2–3 weeks |
| HYBRID-004 Refund-aware escrow | NO-GO | Scope |
| IDEA-009 Defensive incident agent | NO-GO | No standalone task; revoke path absorbed into N1 |
| HYBRID-005 Attenuated reserve treasury | NO-GO | Multi-agent accounting out of scope; single-agent reserve absorbed into N1 |
| HYBRID-007 Delivery-aware stream shutdown | NO-GO | Telemetry trust; existing stream controls |
| HYBRID-006 Evidence-bound aid wallet | NO-GO | Zero-knowledge work out of scope |

## O. Remaining critical uncertainties

Three uncertainties can end the effort outright: registration status, testnet acceptance and team capacity. The rest change scope or wording.

| Uncertainty | Consequence if it goes wrong | Resolved by |
| --- | --- | --- |
| Team registration status | No submission accepted | Check today |
| Whether public-testnet hashes count | All candidates defer equally | Organizer reply; otherwise disclose |
| Team size, hours and wallet-SDK skill | Stage 2 slips; payout ships | Owners named today |
| What the shared "core capability requirements" are | A rubric item could be missed | Organizer reply |
| Whether finalists may update code after 20 Oct | Changes how much to defer to the final | Organizer reply |
| What the challenge bonus assesses | Up to 5 points | Organizer reply; scored zero meanwhile |
| Caveat behaviour on the chosen testnet; audit status of the delegation contracts (not checked here) | Architecture change | X1; read audit reports before claiming |
| Whether any operator wants this | Value claim unvalidated | One or two conversations; else state as hypothesis |
| Novelty of the exposure meter (N2) | Innovation claim weakens | X6 |
| Contents of the e-invoice preprint (S018) | Possible direct prior art | Open it from another network |
| Whether testnet Zodiac mastercopies are patched | Only matters on the Safe route | SEC-12 check |
| ERC-1271 support in x402 payment signing | Only matters for ServiceMeter with smart accounts | X5 |
| Missing source material (R004 abbreviated, R006 damaged, R007 summary, R008 five of ten concepts, R014 from section 7) | A stronger concept could be absent | Low probability given 70 normalized ideas; no action this week |
| How judges read "autonomous" when the owner signs mandates | Task-completion score | Standing mandates (W-8); organizer reply |

## P. Recommendation for the next evidence-gathering stage

Spend the next 36 hours falsifying, not building: X1 and X6 decide the architecture by 14 October 23:59 Dhaka, and a Stage 1 submission should be uploaded by 16 October, because "the latest version received prevails". Implementation itself is the team's call; nothing here has been started.

**Today, 13 October**

- [ ] Confirm registration, or send the form to fintechathon@ican-x.com in the required subject format
- [ ] Send the six questions in section B
- [ ] Name three owners: payment and security integration; agent and evaluation; evidence, documents and video
- [ ] Choose the chain (W-13) and pin toolkit versions
- [ ] Start X1 and X6

&#91;embedded content: Gated plan to 20 October · three gates, two fallbacks\]

If Gate 1 fails, the plan walks down the fallback routes and rejoins at Stage 1; if Gate 3 fails, Stage 1 is what ships.

## Sources

All pages below were opened on 13 October 2026. The supplied decision package (synthesis report, memo, ledgers and 14 source reports) was read directly. Two pages could not be read: the e-invoice preprint at arxiv.org/abs/2609.37819 (rate-limited) and fintechathon.g-ican.com (renders only with JavaScript).

**Competition**

- [International Track rules PDF (Appendix 2)](https://www.its.ac.id/international/wp-content/uploads/sites/66/2026/10/PBCSF-Appendix-2-Problem-Description-and-Competition-Rules-for-International-Track.pdf)
- [IEEE CIS Singapore: 2026 FinTechathon](https://www.ieee-cis-singapore.org/2026-fintechathon)
- [ITS announcement, 6 Oct 2026](https://www.its.ac.id/international/2026/10/06/2026-shenzhen-fintechathon-international-track-a-fully-funded-international-competition/)
- [IEEE R10 Shenzhen CIS announcement (June, tentative)](https://r10.ieee.org/shenzhen-cis/blog/2026/06/17/2026-shenzhen-international-fintech-competition-international-track/)

**Wallet permissions and infrastructure**

- [MetaMask Smart Accounts Kit: caveats reference](https://docs.metamask.io/smart-accounts-kit/reference/delegation/caveats/)
- [MetaMask Smart Accounts Kit: supported networks](https://docs.metamask.io/smart-accounts-kit/get-started/supported-networks/)
- [Biconomy Smart Sessions policies](https://docs.biconomy.io/new/smart-sessions/policies)
- [Zodiac Roles Modifier README](https://github.com/gnosisguild/zodiac-modifier-roles/blob/main/README.md)
- [Zodiac ERC-1271 post-mortem](https://engineering.gnosisguild.org/posts/zodiac-post-mortem)
- [Circle spending policies](https://developers.circle.com/agent-stack/agent-wallets/wallet-operations/custom-policies)
- [Crossmint Agent Wallets](https://docs.crossmint.com/agents/wallets/overview)
- [Coinbase Agentic Wallet](https://docs.cdp.coinbase.com/agentic-wallet/welcome)
- [Aave v3 testing and debugging](https://aave.com/docs/aave-v3/smart-contracts/testing-and-debugging)

**Payments protocols**

- [x402 introduction](https://docs.x402.org/introduction)
- [x402 network and token support](https://docs.x402.org/core-concepts/network-and-token-support)
- [x402 payment identifier extension](https://docs.x402.org/extensions/payment-identifier)
- [x402 signed offers and receipts](https://docs.x402.org/extensions/offer-receipt)

**Prior art and competitors**

- [PACE, arXiv 2608.17220](https://arxiv.org/abs/2608.17220)
- [Cleared whitepaper](https://clearedpay.xyz/cleared-whitepaper.pdf)
- [AgentsPay bill-pay agents](https://agentspay.ai/use-cases/bill-pay-agents)
- [Request Finance (Circle partner directory)](https://partners.circle.com/partner/request-finance)
- [Ramp AP agents announcement](https://ramp.com/blog/ramp-ap-agents-announcement)
- [PolicyLayer glossary](https://policylayer.com/glossary/x402-circuit-breaker)
