# Agent Wallet Post-Audit Decision Package

Oct 14, 2026 · @GOAT

Both audits are largely right, and neither changes the core verdict that no candidate is a new mechanism. The provisional preference is HYBRID-008, a mandate-bound obligation treasury assembled from source-traced mechanisms on existing permission contracts; the strongest alternative is the restored budget envelope treasury, IDEA-073. Nothing is verified until experiment X1 runs, due 14 October 23:59 Dhaka, six days before the 20 October submission deadline. No winner is declared and no implementation has begun.

## A. Executive adjudication memo

1. **Inputs.** Every core input is present and hash-verified. Audit B arrived without its nine supporting files, so its coverage percentages cannot be reproduced; each finding it names was checked against the original source passage instead. Gaps in five reports cannot be recovered: the DOCX holds nothing beyond the anonymized text.
2. **Audit A, written by this adjudicator and held to a stricter standard.** Of 27 decision-changing findings: 13 confirmed, 8 partially confirmed, 3 need experiments, 2 contradicted, 1 unsupported. Its errors: x402 does document smart-account payers; PolicyLayer is not a payments competitor; and it presented four source ideas (R003 C19's loss certificate, R001 F03's segregation, R003 C06 and R006 C04's surplus placement, R001 F22's merge) as its own.
3. **Audit B.** Of 43 named findings: 39 confirmed, 3 partially confirmed, 1 uncheckable, none contradicted. Its URL-ledger defect reproduced exactly (12 stray quotes, 4 joined pairs, 227 occurrences, 181 unique). Its FAIL on completeness stands, but it reports no critical discrepancy and none was found.
4. **Synthesis errors that touch the shortlist.** Budget envelopes were merged into the liability reserve; R001 F22's competing spender was dropped from ObligationLock; R002 C01's veto lane was dropped from the bounded payout. The other confirmed errors (payroll, claims, monitoring, drift, repayment, escrow mappings, two claim-log attributions) do not change the shortlist. Two original entries, IDEA-038 and IDEA-049, turn out to have no source at all.
5. **The audits reinforce each other.** Restored envelopes and the veto lane fix Audit A's autonomy weakness; R001 F22 answers its undefined-spender critique; R003 C19 and R014 supply the loss bound Audit A wanted.
6. **Inventory.** 77 entries become 96: 16 new ideas from splits and restorations, plus HYBRID-002R, HYBRID-008 and HYBRID-009.
7. **Ranking.** HYBRID-008 leads under all four weightings (78 balanced). IDEA-073 is second (74), IDEA-001 third (73), HYBRID-002R fourth, HYBRID-009 fifth. The custom-executor ObligationLock falls to seventh and PolicyProof to eighth.
8. **Gates.** IDEA-001 and IDEA-073 pass. HYBRID-008, HYBRID-002R, HYBRID-009 and IDEA-033 pass conditionally. The custom-executor ObligationLock fails this round.
9. **Validation.** Top three: HYBRID-008, IDEA-073, HYBRID-002R, covered by X1, X1b, X2, X3, X4 and X5, with an X6 prior-art check.
10. **Not claimed.** No winner, no completed experiment, no certificate of full coverage. About 6.8 days remain, and registration must be confirmed today.

## B. Input and evidence completeness check

Every core input is present and integrity-checked, but Audit B arrived without its nine supporting files. Its coverage percentages therefore cannot be re-derived; each finding it names was instead checked against the original source passage. The missing parts of five source reports cannot be recovered from anything supplied.

| Input | Status | Verification performed (14 Oct 2026) | Gap and effect |
| --- | --- | --- | --- |
| Original synthesis package (ZIP, 23 files) | Available | All 22 manifest-listed files match their SHA-256 and byte counts | None |
| Original 14 reports: All responses DOCX | Available | 827,067 bytes; SHA-256 `15d768c6…364108f4`, matching the hash recorded by the synthesis and Audit B | None |
| Anonymized source blocks (R001–R014, 5,556 anchors) | Available | All 4,346 blocks of 40 or more characters found in the DOCX text after normalizing table separators; the DOCX holds no extra report material | The DOCX cannot restore missing source sections |
| Audit A: Agent Wallet Adversarial Review | Available (revision 27, 13 Oct) | Written by this adjudicator. Mitigation: stricter standard, external facts re-checked today, and every critique built on a synthesis definition re-checked against sources | Conflict of interest, disclosed |
| Audit B: merger integrity audit report | Available (main report only) | Package, DOCX and URL-ledger claims reproduced exactly; every named finding checked against source anchors | Not supplied: traceability matrix, suggested amendments, discrepancy register (116 records), source-item inventory, normalized inventory, source-to-synthesis mapping, source-unit index, URL inventory, review configuration |
| Official rules | Verified 13 Oct in Audit A (rules PDF, co-organizer pages) | Not re-fetched today | Official site renders only with JavaScript; unread |
| External facts re-checked today | Available | x402 wallet compatibility, MetaMask delegation repository, Zodiac Delay, Zodiac Roles v2 description, Freysa challenge, PolicyLayer product | Ethereum Attestation Service testnet deployments not confirmed; e-invoice preprint (S018) still unread |

**Unrecoverable source gaps** (already disclosed by the synthesis and confirmed by Audit B): R004 research notebook and 22-field concept details; a clean R006 report (C02 opening, C16 and the C17 heading missing); the R007 canvas with 18 problems and 22 concepts; R008 concepts 6–10; R014 sections 1–6. Audit B's 32 "uncertain" records depend on these and stay unresolved.

**Consequence for Audit B's metrics.** Strict coverage 125/249 = 50.20% and weighted coverage 203/431 = 47.10% are arithmetically correct. The per-record classifications behind them are in files not supplied, so they are reported here as Audit B's figures, not as independently reproduced results.

## C. Adversarial findings adjudication matrix

Of 27 decision-changing Audit A findings, 13 are confirmed, 8 partially confirmed, 3 need experiments, 2 are contradicted and 1 is unsupported. The two contradictions are Audit A's own errors: it called x402 smart-account support undocumented when it is documented, and it framed ideas already in the source reports as its own proposals.

| ID | Audit A finding (section) | Candidate | Verdict | Evidence | Action and impact | Remaining uncertainty |
| --- | --- | --- | --- | --- | --- | --- |
| A-01 | Synthesis selection gates cannot finish before 20 Oct (A1, FX-1) | All | Confirmed | Rules deadline; synthesis E1–E3, E7 estimates of 4–7 engineer-days before an 8–12-day build | Keep the gated plan; about 6.8 days remain | Team capacity unknown |
| A-02 | Registration is an unverified gate (A2, FX-2) | All | Confirmed | Co-organizer page: emailed form, reply within 48 hours, early closure possible | User action today | Whether the team is registered |
| A-03 | Third criterion is "Innovation & interaction"; shared scoring; ambition statement (A3, B) | All | Confirmed | Synthesis section 8 table header reads "Innovation /30"; rules PDF wording | Interaction scored in Layer A | Bonus subcriteria unpublished |
| A-04 | No candidate is a new mechanism; one-use exact authority already expressible (A4, C) | HYBRID-001, IDEA-001 | Partially confirmed | MetaMask caveats documented (`exactExecution`, `limitedCalls`, `timestamp`, `redeemer`, `nonce`); Biconomy `usageLimit` | Novelty lowered; deployed behaviour still untested | X1 |
| A-05 | Custom executor unnecessary; segregate accounts (A5, FX-6, H) | HYBRID-001 → HYBRID-008 | Requires experimental verification | Documentation only. Segregation was already proposed by R001 F03 ("Separate reserved spending capability") | Architecture adopted provisionally; credit R001 F03 | X1, X2 |
| A-06 | Asset management under-served; yield rejection conflated capital risk (A6, W-2) | Finalists, IDEA-013 | Partially confirmed | Pillar point stands. The synthesis failed IDEA-013 for scope, not only capital risk | Surplus placement restored as IDEA-074 (R003 C06, R006 C04), not as an Audit A invention | Testnet market reliability |
| A-07 | AI necessity weak (A7, W-3) | HYBRID-001, IDEA-001 | Requires experimental verification | Sources define AI roles (R001 F01, R003 C01: extract, forecast, schedule); value unmeasured | X3 compares LLM with a deterministic parser | X3 |
| A-08 | Compliance treated as disclaimers (A8, W-4) | All | Partially confirmed | Synthesis corrects legal overclaims but designs few demonstrable controls; R013 C09 already proposed sanctions screening | Control set added to section K | Legal status unassessed |
| A-09 | Circle spending policies unavailable on testnet (FX-4) | Circle route | Confirmed | Circle guide: "Testnet is not supported" | No change | None |
| A-10 | Zodiac ERC-1271 bypass; patched versions (FX-5, SEC-12) | Safe routes | Confirmed | Maintainer post-mortem; R002 L00501 already required Roles 2.1.1 | Route Z requires patched-version check | Testnet mastercopy version |
| A-11 | x402 smart-account (ERC-1271) support undocumented, so ServiceMeter as specified is fatal (FX-7) | HYBRID-002 | **Contradicted** | [x402 wallet compatibility](https://docs.x402.org/advanced-concepts/wallet-compatibility): deployed ERC-4337 accounts supported via EIP-1271 for EIP-3009 (token-dependent) and Permit2 | FX-7 withdrawn; HYBRID-002R may pay from a smart account | Account validator rules for typed-data signing |
| A-12 | PolicyProof cannot ship by 20 Oct (FX-8) | HYBRID-003 | Confirmed | Synthesis estimate 10–16 engineer-days | Research reserve | None |
| A-13 | LLM-written approval summaries can deceive the owner (SEC-03) | HYBRID-008, IDEA-001 | Confirmed (threat class) | Approval UI driven by model text is a direct injection path | Typed-data signing screen required | Test in X3 |
| A-14 | `limitedCalls` = 1 makes duplicates impossible (SEC-08) | HYBRID-008, IDEA-001 | Requires experimental verification | Caveats reference: "maximum number of times this delegation may be redeemed" | X1 and X4 | Behaviour on testnet |
| A-15 | Reserve rule presumes undefined discretionary spending (W-5, W-6) | HYBRID-001 | Partially confirmed | R001 F22 defines it: agent service purchases "must preserve future budget for mandatory commitments"; the synthesis dropped that context | HYBRID-009 restores R001 F22 | Underfunding priority still unspecified |
| A-16 | Novelty centre 14 → 10 flips the favourite (G, K4) | HYBRID-001 | Partially confirmed | Arithmetic correct (75 against 76); the input is judgment | Novelty set to 10–11 for HYBRID-008 | Prior-art desk check X6 |
| A-17 | "Adversarial concurrency" is free on EVM (K6) | HYBRID-001 | Partially confirmed | True for checks inside one execution; not for ERC-4337 validation-phase or hosted policy engines | Drop from pitch; keep execution-phase checks | None |
| A-18 | Hot-wallet funding bounds x402 budget (K8) | HYBRID-002 | Confirmed | Token balance enforced by the token contract | Retained as option B for HYBRID-002R | None |
| A-19 | PolicyLayer is a ServiceMeter competitor (C) | HYBRID-002 | **Unsupported** | [PolicyLayer](https://policylayer.com/) sells an authority playbook for coding agents; no payment budgets shown | Removed from prior-art matrix | None |
| A-20 | Request Finance as closest payables competitor (C) | HYBRID-001 | Partially confirmed | Stablecoin approvals-to-payments workflow is real; it is not agentic | Kept as workflow competitor | None |
| A-21 | Exposure meter (N2), surplus placement (N3), segregation and the ObligationLock–ServiceMeter merge presented as this review's proposals (H, L) | HYBRID-008 | **Contradicted** | R003 C19 "Maximum-loss certificate" (IDEA-026); R014 L05371 conditional loss ceiling; R003 C06 and R006 C04 surplus placement; R001 F03 segregation; R001 F22 merge | Attribution corrected throughout; no originality claimed | External novelty of a loss certificate unverified |
| A-22 | Standing mandates give autonomy (W-8) | HYBRID-008 | Confirmed | Matches R010 C07 envelopes and R002 C01 metered allowances | Credited to sources | Period-caveat semantics (X2) |
| A-23 | Stage 1 should be uploaded early (P) | All | Confirmed | Rules: "the latest version received prevails" | Kept | None |
| A-24 | Refund governor not a primary (N) | IDEA-033 | Confirmed | Weak asset management | Kept | None |
| A-25 | Escrows no-go for this deadline (N) | IDEA-003 family | Confirmed | Audit B's restored predicates add scope, not feasibility | Kept; predicates restored as IDEA-081 | None |
| A-26 | Custom-executor ObligationLock no-go (N) | HYBRID-001 | Confirmed | Its own review bar cannot be met in time | Gate FAIL for this round | None |
| A-27 | Experiments X1–X6 sized to deadline (M) | All | Partially confirmed | X5 assumed no smart-account path; X2 omitted envelopes; no veto-lane route | X5 revised; X2 extended; X1b added | Results pending |

## D. Merger integrity findings disposition matrix

Every Audit B finding that names a source was checked against the original passage: 39 of 43 are confirmed, 3 partially confirmed and 1 cannot be checked without the missing traceability matrix. None was contradicted. Audit B overstated two items (R009 C17, R006 C04). Its "zero fully preserved" count is a product of its strict definition, not evidence of loss.

| ID | Finding (source anchor) | Synthesis location | Verdict | Disposition | Action and impact | Remaining uncertainty |
| --- | --- | --- | --- | --- | --- | --- |
| B-01 | Synthesis cannot be certified complete | Whole package | Confirmed | UNRESOLVED | Backlog accepted; not a blocker for this round (B-41) | Missing sources |
| B-02 | Package, manifest and DOCX integrity | Package | Confirmed | No change | Reproduced today | None |
| B-03 | Coverage 50.20% strict, 47.10% weighted | Audit B metrics | Partially confirmed | UNRESOLVED | Arithmetic correct; classifications not reproducible | Mapping file absent |
| B-04 | R008 C04 ClaimFlow: evidence, fraud scoring, deductibles, adjuster path (L03366–L03387) | IDEA-022 parametric | Confirmed | SPLIT | New IDEA-072 | None |
| B-05 | R005 C10 human-approved pay runs; R013 C09 bulk payout with withholding (L02403–L02425, L05134) | IDEA-021 streaming | Confirmed | SPLIT | New IDEA-071 | None |
| B-06 | R001 F03 batch payroll with reserve; R003 C20 release after signed work confirmation; R012 C04 payroll from bounded treasury (L00161, L01306–L01310, L04796) | IDEA-021 | Confirmed | SPLIT | Moved to IDEA-071; R001 F03 keeps its IDEA-002 reserve link | None |
| B-07 | R009 C17 "automated payroll" (L03603) | IDEA-021 | Partially confirmed | UNRESOLVED | Streaming link removed; batch not stated in source | Source too terse |
| B-08 | R010 C07 per-cost-center envelopes with resets, recipient sets, reallocation; R011 C15 per-task envelopes (L04004, L04082–L04085, L04488) | IDEA-002 liability reserve | Confirmed | SPLIT | New IDEA-073; becomes Tier 1 of HYBRID-008 | Period semantics (X2) |
| B-09 | R006 C04 runway forecast and sweep to Aave v3 | IDEA-002, IDEA-013 | Partially confirmed | SPLIT | New IDEA-074 with R003 C06; IDEA-013 link kept, IDEA-002 link dropped | None |
| B-10 | R002 C01 time-delayed slow lane a human can veto (L00497, L00640) | IDEA-001 | Confirmed | RESTORE | New IDEA-080; optional route for HYBRID-008 | Route Z cost |
| B-11 | R002 C03 AI key is one vote in a named 2-of-3 (L00781–L00783) | IDEA-003, IDEA-004 | Confirmed | EXPAND | Variant IDEA-003/Q | None |
| B-12 | R010 C03 verdict AND counterparty attestation; R012 C02 counterparty acceptance (L04000, L04087–L04088, L04794) | IDEA-003, IDEA-019 | Confirmed | RESTORE | New IDEA-081 with bootstrap dependency | Attestation source |
| B-13 | R006 C11 second adversarial model co-signs, AST validation, freeze on divergence | IDEA-034, IDEA-048 | Confirmed | RESTORE | New IDEA-082 | Shared model blind spots |
| B-14 | R006 C07 pool solvency checks; R006 C08 streaming liquidity buffers | IDEA-022, IDEA-056 | Confirmed | EXPAND | Variants IDEA-022/S, IDEA-056/B | None |
| B-15 | R006 C12 buyer-signed delivery receipt, discount floors, per-buyer caps | IDEA-043 generic factoring | Confirmed | SPLIT | New IDEA-083 | Credit and legal |
| B-16 | R010 C18 AP2 mandate verified by a contract (L04015) | IDEA-064 | Confirmed | RESTORE | New IDEA-085 | AP2 version stability |
| B-17 | R010 C08 agent detects and revokes its own authority (L04005) | IDEA-009 independent watcher | Confirmed | SPLIT | New IDEA-075; IDEA-009 labelled a synthesis redesign | Self-detection is weak by R010's own note |
| B-18 | R012 C11 agent halts when its behaviour drifts (L04803) | IDEA-049 permission drift | Confirmed | SPLIT | New IDEA-076 | None |
| B-19 | R010 C14 repayment by rate and deadline (L04011) | IDEA-038 owner seniority | Confirmed | SPLIT | New IDEA-077 | None |
| B-20 | R008 C03 Guardian: proposal checks plus guardian multisig (L03344–L03354) | IDEA-009 | Confirmed | CORRECT | Linked to IDEA-059 and IDEA-064 instead | None |
| B-21 | R010 C10 subscriptions with cancellation authority (L04007) | IDEA-002 | Confirmed | CORRECT | Linked to IDEA-057 | None |
| B-22 | R011 C22 trace and MEV analysis (L04495) | IDEA-032, IDEA-047 | Confirmed | CORRECT | New IDEA-079 | None |
| B-23 | R008 C01 pays when a logistics API reports delivery; no escrow (L03300–L03310) | IDEA-001, IDEA-070 | Confirmed | SPLIT | New IDEA-078 | Oracle reliability |
| B-24 | R011 C02 escrow released on a merged GitHub pull request (L04456–L04462) | IDEA-070 physical delivery | Confirmed | CORRECT | Linked to IDEA-003 | None |
| B-25 | Clawback in R010 C12, R010 C17, R013 C07 (L04009, L04014, L05132) | IDEA-021, IDEA-008 | Confirmed | EXPAND | Variants IDEA-021/C, IDEA-008/C; must state vesting, unspent or paid funds | Enforceability unproven |
| B-26 | R006 C20 temporal invariants ("only if our treasury balance stays above…") | IDEA-025, IDEA-011 | Confirmed | RESTORE | New IDEA-086; option for HYBRID-008 reserve floor | New code |
| B-27 | R002 C21 public red-team arena with prize capped by onchain limits (L00660) | IDEA-032 | Confirmed | RESTORE | New IDEA-084; evaluation layer for HYBRID-008 | Hosting effort |
| B-28 | R007 attested policy decision records (L03240) | IDEA-031 | Confirmed | EXPAND | Variant IDEA-031/E | Attestation-service testnet deployment unconfirmed |
| B-29 | R006 C18 telemetry-derived carbon retirement | IDEA-042 | Confirmed | EXPAND | Variant IDEA-042/T | None |
| B-30 | R010 C21 one policy across chains (L04018) | IDEA-037, HYBRID-003 backend-to-backend | Confirmed | CORRECT | IDEA-037 restored to chain-to-chain; HYBRID-003 labelled redesign | None |
| B-31 | R008 delivery-oracle feasibility test (L03468) | Not carried | Confirmed | RESTORE | Attached to IDEA-078 | None |
| B-32 | R010 attestation bootstrap risk (L04088) | Not carried | Confirmed | RESTORE | Attached to IDEA-081 | None |
| B-33 | R013 C15 replace-by-fee and paymaster top-up; R002 C22 gas top-ups (L05140) | IDEA-027 | Confirmed | EXPAND | Variant IDEA-027/R; fee-bounded replacement added to X4 | None |
| B-34 | Token-metadata injection inputs (R011 L04355, L04486; R014) | Red-team table | Confirmed | EXPAND | Added to threat model (section K) | None |
| B-35 | CL-002 groups R002 with testnet certainty (L00501, L00551, L00809) | Claim log | Confirmed | CORRECT | R002 asked for written confirmation | None |
| B-36 | CL-022 attributes the daily-cap error to all reports (R014 L05371) | Claim log | Confirmed | CORRECT | R014 stated a conditional ceiling | None |
| B-37 | URL ledger: 12 R013 fields with stray quotes, 4 joined pairs | research\_ledgers.json | Confirmed (reproduced exactly: 227 occurrences, 181 unique) | CORRECT | One URL per record | Destinations unchecked |
| B-38 | R005 post-quantum "market gap" is low priority | Catalogue | Confirmed | REJECT (for promotion) | Not shortlisted | None |
| B-39 | R011 claims sentence too thin to classify | IDEA-022 | Confirmed | UNRESOLVED | No change | Source detail |
| B-40 | 32 uncertain records (R004 22, R006 4, R009 3, R011 1, R014 2) | Various | Confirmed | UNRESOLVED | Needs missing sources | Unrecoverable now |
| B-41 | Exhaustive A–L atomic closure incomplete | Whole package | Confirmed | UNRESOLVED | Cannot finish before 20 Oct; no named gap weakens the shortlisted authority model | Reopen if new sources appear |
| B-42 | Core controls preserved (untrusted documents, exact-byte authority, aggregate exposure, receipts, idempotency, recovery, privacy) | Synthesis sections 10–11 | Confirmed | ALREADY PRESERVED | No change | None |
| B-43 | Remaining unnamed high-priority records and full false-merge/misrepresentation ID lists | Audit B matrix (absent) | Cannot be checked | UNRESOLVED | Request the matrix | Unknown items |

## E. Confirmed errors in the original synthesis

The synthesis made four kinds of confirmed error: it rewrote source mechanisms into safer or tidier ones, dropped decisive predicates, misattributed two claim-log positions, and misread the rubric and timeline. Only three errors touch the shortlist, and all three strengthen it once corrected.

| Error | Type | Findings | Effect on shortlist |
| --- | --- | --- | --- |
| Period and task budget envelopes merged into the authenticated-liability reserve (IDEA-002) | Mechanism rewrite | B-08 | **Touches HYBRID-001.** Envelopes return as IDEA-073 and become HYBRID-008's autonomous tier |
| Discretionary spending context of R001 F22 lost from HYBRID-001 | Context loss | A-15 | **Touches HYBRID-001.** Restored as HYBRID-009 and as the reason the reserve exists |
| Delayed human-veto slow lane dropped from the bounded payout (IDEA-001) | Predicate loss | B-10 | **Touches IDEA-001.** Restored as IDEA-080, an autonomy-preserving option |
| Batch pay runs mapped to streaming payroll | Mechanism rewrite | B-05, B-06, B-07 | None; IDEA-071 split out |
| Indemnity claims assessment mapped to parametric triggers | Mechanism rewrite | B-04 | None; IDEA-072 split out |
| Forecast runway buffer linked to authenticated obligations | Over-merge | B-09 | None; IDEA-074 split out |
| Self-revoking agent replaced by an independent watcher; behavioural drift replaced by permission drift | Redesign presented as the source | B-17, B-18 | None; both source variants restored, redesigns labelled |
| Rate-and-deadline repayment replaced by owner seniority | Mechanism rewrite | B-19 | None |
| Delivery-signal payment and digital pull-request delivery mapped to physical escrow | Mechanism rewrite | B-23, B-24 | None |
| Guardian, subscriptions, trace analysis and the chain-agnostic kernel mapped to the wrong families | Wrong family | B-20, B-21, B-22, B-30 | None; PolicyProof relabelled a redesign |
| One-AI-vote quorum, verdict-AND-attestation release, dual-model co-signing, onchain AP2 mandates, temporal invariants, clawback, solvency buffers and reverse-factoring controls dropped | Predicate loss | B-11 to B-16, B-25, B-26 | None directly; IDEA-086 is an option for HYBRID-008 |
| Bounded-loss red-team arena folded into an offline benchmark | Minority loss | B-27 | Becomes HYBRID-008's evaluation layer |
| Delivery-oracle and attestation-bootstrap experiments not carried | Lost tests | B-31, B-32 | None |
| CL-002 and CL-022 attribute positions to reports that did not hold them | Attribution | B-35, B-36 | None |
| URL ledger joins and quotes 16 records | Parsing defect | B-37 | None |
| Third criterion modelled as "Innovation" only | Rubric misread | A-03 | Interaction now scored |
| Selection gates incompatible with the 20 Oct deadline; registration channel not flagged | Timeline | A-01, A-02 | Replaced by the gated plan |
| ObligationLock novelty centre of 14/20 not supported by documented primitives | Overestimate | A-04, A-16 | Novelty lowered to 10–11 |

What the synthesis got right is substantial and stays: Circle's mainnet-only policies, the Zodiac bypass, PACE as prior art, x402's existing extensions, daily caps not being lifetime loss bounds, hashes proving integrity rather than truth, threshold logic, and inclusion versus finality.

## F. Restored minority ideas and missing innovations

Fifteen mechanisms, all but two proposed by a single report, were lost or under-weighted. Five materially improve the leading design (veto lane, red-team arena, loss certificate, segregated payroll reserve, temporal reserve floor), and one restores a source-backed hybrid (R001 F22). None outperforms the leader on its own; most fail current scope as standalone candidates, which is recorded rather than used to hide them. Popularity played no part.

| Restored ID | Source | Original mechanism | Why it was lost | Potential contribution | Versus shortlist | Decision |
| --- | --- | --- | --- | --- | --- | --- |
| IDEA-080 | R002 C01 | Payments above a threshold enter a time-delayed slow lane that a human can veto | Folded into generic bounded payout | Autonomy above the routine cap without a signature per payment | Complements HYBRID-008; Zodiac Delay supports cooldown queues and owner skipping by nonce | Restore; component and route Z |
| IDEA-084 | R002 C21 | Public challenge: attackers try to inject the agent; prize equals the onchain cap | Folded into offline benchmark | Public evidence that fooling the model does not move more than the cap; strong demo | Freysa (Nov 2024) shows the opposite case: an LLM-only gate lost about $45,000 to one injection. R002 cites it as "inverse design" | Restore; evaluation layer, fails standalone (no financial task) |
| IDEA-026 (elevated) | R003 C19; R014 L05371 | Compute and display worst-case loss under current permissions before activation | Preserved but buried as a HYBRID-005 component; Audit A then presented it as new | Live, testable risk statement for judges and owners | Core control of HYBRID-008 | Elevate; credit sources |
| R001 F03 detail | R001 F03 | Separate reserved spending capability protects payroll; demo refuses a vendor bill that would breach it | Split between a reserve idea and streaming payroll | Source basis for account segregation and the headline demo | Directly HYBRID-008's design and demo | Restore provenance |
| HYBRID-009 | R001 F22 | Agent buys services but must preserve budget for mandatory commitments (x402 + reserve + mandate) | Mapped to two separate families | Gives the reserve a real competing spender | Superset of HYBRID-008 and HYBRID-002R | Restore as source-backed hybrid; conditional on both paths |
| IDEA-086 | R006 C20 | Conditional recurring payment "only if treasury balance stays above" a floor, compiled to an onchain module | Folded into policy compiler | Onchain reserve floor inside one account | Alternative to account segregation; needs a custom caveat or module | Restore; option only |
| IDEA-075 | R010 C08 | Agent detects anomalies and revokes its own authority onchain | Replaced by independent watcher | Deterministic self-halt in the executor, beside the owner's revoke | Small add-on to HYBRID-008; R010 itself calls self-detection weak | Restore; component |
| IDEA-076 | R012 C11 | Agent halts when its behaviour drifts from its mandate | Replaced by permission-drift check | Same as IDEA-075 | Same | Restore; component |
| IDEA-082 | R006 C11 | Second adversarial model co-signs; AST validation; freeze on divergence | Folded into committee and scanner | Fewer bad proposals reach the executor | Not a security boundary in HYBRID-008, because enforcement does not rely on any model | Restore; low priority |
| IDEA-085 | R010 C18 | AP2 mandate semantics verified onchain by a contract | Mapped to approval ladder | Interoperable mandate format | Could replace HYBRID-008's mandate encoding; adds spec-version risk | Restore; defer |
| IDEA-081 | R010 C03; R012 C02 | Escrow release needs a verdict AND a signed counterparty attestation or acceptance | Folded into generic escrow | Multi-party settlement R010 called its most original idea | Attestation source cannot be bootstrapped by 20 Oct | Restore; no-go this round |
| IDEA-083 | R006 C12 | Buyer-signed delivery receipt triggers discounted early payment from a factoring pool, with discount floors and buyer caps | Folded into generic factoring | SME working capital | Needs a liquidity pool and credit decisions | Restore; fails current scope |
| IDEA-078 | R008 C01 | Pay a scheduled invoice when a logistics API reports delivery | Mapped to escrow | Simple conditional payment | Delivery-oracle test (L03468) undone | Restore; no-go this round |
| IDEA-077 | R010 C14 | Repay debts by rate and deadline within a budget | Replaced by owner seniority | Optimization role for AI | R010 rated it "Weak; saturated" | Restore; not shortlisted |
| IDEA-079 | R011 C22 | Analyse transaction traces for MEV and anomalies, aimed at the bonus | Mapped to benchmark and contract reading | Possible bonus angle | Read-only; fails Topic F execution alone | Restore; not shortlisted |

## G. Incorrectly merged concepts and corrections

Ten merged families are split or re-pointed. In each case the original ID keeps the mechanism most of its sources actually describe, and the other mechanism gets a new ID. Where the synthesis substituted a safer redesign, the redesign stays but is labelled as the synthesis's, not the source's.

| Original ID | What it now means | Split out or re-pointed | Distinguishing mechanism | Findings |
| --- | --- | --- | --- | --- |
| IDEA-002 Obligation reserve treasury | Authenticated-liability reserve (R001 F01, F03, F22; R003 C01, C20) | IDEA-073 Budget envelope treasury (R010 C07, R011 C15); IDEA-074 Forecast-buffer liquidity sweep (R006 C04, R003 C06) | Envelopes cap spending per cost centre and period, with reallocation; forecast buffers hold estimated runway; neither authenticates individual obligations | B-08, B-09 |
| IDEA-021 Streaming payroll | Continuous stream accrual, with clawback variant (R010 C12, R006 C08) | IDEA-071 Human-approved batch payroll (R005 C10, R013 C09, R001 F03, R003 C20, R012 C04) | Discrete approved pay runs, withholding, bulk transfer, work confirmation | B-05, B-06 |
| IDEA-022 Parametric claims wallet | Preset trigger payouts (R006 C07) with pool-solvency variant | IDEA-072 Indemnity claims settlement agent (R008 C04) | Evidence review, fraud scoring, deductibles, adjuster escalation | B-04, B-14 |
| IDEA-009 Defensive incident agent | Independent watcher (synthesis redesign, labelled) | IDEA-075 Self-limiting incident agent (R010 C08) | The agent revokes its own authority | B-17 |
| IDEA-049 Policy drift sentinel | Permission-configuration drift (synthesis redesign, labelled) | IDEA-076 Behavioural-drift self-halt (R012 C11) | Monitors behaviour, not installed permissions | B-18 |
| IDEA-038 Repayment waterfall | Owner-fixed seniority | IDEA-077 Rate-and-deadline repayment optimizer (R010 C14) | Optimization objective and agent autonomy differ | B-19 |
| IDEA-070 Physical-delivery escrow | Prefunded escrow released on shipment attestation | IDEA-078 Delivery-signal conditional payment (R008 C01); R011 C02 re-pointed to IDEA-003 | No escrow custody; digital pull-request delivery is an objective digital milestone | B-23, B-24 |
| IDEA-043 Invoice factoring wallet | Advance against an assigned receivable | IDEA-083 Buyer-confirmed reverse factoring (R006 C12) | Buyer-signed receipt, discount floor, per-buyer cap, pool funding | B-15 |
| IDEA-032 Adversarial wallet benchmark | Offline harness | IDEA-084 Bounded-loss red-team arena (R002 C21) | Live public attackers; prize equals the onchain cap | B-27 |
| IDEA-037 Policy conformance kernel | One policy deployed across EVM chains with conformance tests (R010 C21) | HYBRID-003's two-backend design labelled as a synthesis redesign | Chain-to-chain versus provider-to-provider | B-30 |

**Re-pointed without new IDs:** R010 C10 subscriptions to IDEA-057; R008 C03 Guardian to IDEA-059 and IDEA-064; R009 C17 detached from IDEA-021 and left unresolved.

**Insertion wording for the catalogue.** Each split entry should state: "Source mechanism: \[as above\]. Synthesis redesign, where it differs: \[as above\]. The redesign is an analytical proposal, not a recovered source contribution."

## H. Interaction between the two audits

The audits do not contradict each other; they collide productively. Mechanisms Audit B restored fix three weaknesses Audit A found, and Audit B's source evidence removes Audit A's originality claims. One adversarial critique turns out to target a synthesis rewrite rather than any source design.

| Situation | Instance | Effect |
| --- | --- | --- |
| 1. A restored idea fixes an adversarial weakness | Audit A W-8 (autonomy reduced to timing when the owner signs every payment) is fixed by IDEA-073 envelopes and IDEA-080 veto lane. W-5 (reserve without a competing spender) is fixed by R001 F22. W-2 (thin asset management) is eased by envelope reallocation | HYBRID-008 gains genuine autonomy and an asset-allocation role |
| 2. A restored mechanism improves a shortlisted architecture | R001 F03 already specified a "separate reserved spending capability". R003 C19 and R014 L05371 supply the loss statement. R013 C15 adds fee-bounded transaction replacement to X4. Token-metadata injection (R011, R014) joins X3 | Design unchanged in shape; provenance and tests strengthened |
| 3. A merged concept must be evaluated alone | IDEA-073, split from IDEA-002, is scored separately and ranks second | New fallback with more autonomy than IDEA-001 |
| 4. An overlooked finding invalidates a novelty claim | Audit A's exposure meter (R003 C19), surplus placement (R003 C06, R006 C04), segregation (R001 F03) and ObligationLock-plus-ServiceMeter merge (R001 F22) all pre-exist in the corpus. Freysa qualifies the arena; R002 already cited it | Audit A's originality framing withdrawn (A-21) |
| 5. An adversarial critique targets a misrepresented design | Audit A's PolicyProof critique applies to the synthesis's provider-to-provider redesign, not R010 C21's chain-to-chain kernel. Audit A's W-5 criticised a HYBRID-001 that had lost R001 F22. Audit A endorsed IDEA-009's independent watcher without noting it replaced R010 C08 | Critiques re-scoped; verdicts unchanged |
| 6. Restored evidence changes feasibility | Zodiac Delay supports a veto queue (route Z feasible, with bypass history). x402 documents smart-account payers, raising HYBRID-002R feasibility. R010's attestation bootstrap and R008's delivery oracle lower IDEA-081 and IDEA-078 | HYBRID-002R up; escrow and delivery payment down |
| 7. A minority idea might outperform the leader | IDEA-073 beats IDEA-001 under balanced and feasibility weights but not under strict security, and never beats HYBRID-008. IDEA-081 and IDEA-084 cannot lead within the deadline | No change of leader |
| 8. A hybrid becomes stronger through restored mechanisms | HYBRID-008 combines IDEA-001, IDEA-002, IDEA-073, IDEA-026 and optional IDEA-080, evaluated with IDEA-084. HYBRID-009 restores R001 F22 | HYBRID-008 is a new analytical combination; every part is source-traced |

Where the audits pull in different directions, both are kept. Audit B wants source mechanisms preserved; Audit A prefers safer redesigns. The inventory now records both, labelled, and the shortlist uses the safer variant with the source cited.

## I. Updated master idea inventory

The inventory grows from 77 to 96 entries: 86 ideas and 10 hybrid records. Of the 70 original ideas, 44 are unchanged, 9 have corrected lineage, 8 are split, 7 expanded, 1 elevated (IDEA-026) and 1 corrected (IDEA-037). Two originals, IDEA-038 and IDEA-049, lose every source slot and are now labelled synthesis redesigns. Stable IDs are kept; new IDs (IDEA-071 to IDEA-086, HYBRID-002R, HYBRID-008, HYBRID-009) mark only splits, restorations and new combinations.

The full list with change status, gate and source slots is on the Master inventory tab. Complete 16-field records for all 96 entries are in the companion files master\_inventory.csv and master\_inventory.json. The table below condenses all 16 fields for every new or revised entry (the files hold the full text); the top five are expanded in section N.

| Entry | Problem and customer | Agent and asset role | Onchain workflow and security | Closest competitor and novelty | Dependencies and feasibility | MVP and evaluation | Confidence, gate and sources |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **HYBRID-008** Mandate-bound obligation treasury | Treasury must pay approved obligations unattended, never pay fabricated ones, and keep committed cash from being spent elsewhere. Customer: crypto SMEs and DAOs paying vendors and contractors in stablecoins | Read invoices, match to mandates, choose timing, reallocate envelopes, fund reserve, redeem, reconcile, escalate. Asset role: allocates between reserve and operating accounts and across envelopes; optional surplus placement (IDEA-074) | Redeem one-use exact obligation mandates from reserve; period-capped envelope payments from operating; one-way reserve top-ups; owner bulk revoke. Security: agent key holds gas only and can only redeem; route M uses MetaMask caveats; route Z uses Safe with Roles 2.1.1 and Delay 1.1.1 for the veto lane; loss certificate shown live | Request Finance; AgentsPay; Cleared; PACE. Novelty: an accounts-payable agent whose entire authority is owner-signed, onchain-enforced mandates, with a published conditional loss bound tested by attackers; integration-level | Smart Accounts Kit or Safe and Zodiac on chosen testnet; test token; two RPCs. Feasibility: medium (Stage 1 high) | Reserve and operating accounts, three obligations, two envelopes, one token, one chain. Evaluation: payroll-reserve demo (R001 F03); injection, duplicate and address-swap attempts fail onchain; red-team drain stays under displayed bound | Medium on design; no execution. Gate: CONDITIONAL PASS. Sources: R001 F01, F03, F22; R003 C01, C19; R010 C07; R011 C15; R002 C01, C21; R014 L05371; Audit A |
| **HYBRID-009** Obligation-reserved agent commerce | Agent buys services but must preserve budget for mandatory commitments. Customer: agent operators with recurring obligations | As HYBRID-008, plus x402 purchases from operating funds. Asset role: reserve protected against service spending | HYBRID-008 flows plus x402 settlements. Security: union of HYBRID-008 and HYBRID-002R controls | Nevermined; Circle. Novelty: source-backed combination (R001 F22); unverified | Both payment paths. Feasibility: low to medium by 20 Oct | One obligation, one envelope, one paid endpoint. Evaluation: service purchase refused when it would breach reserve | Low. Gate: CONDITIONAL PASS only if X1 and X5 both pass by 15 Oct. Sources: R001 F22 |
| **HYBRID-002R** ServiceMeter with failure stop (revised) | Repeated paid calls return unusable output. Customer: agent operators | Choose provider, pay, verify output, stop after failure. Asset role: job budget only | x402 exact (EIP-3009) or Permit2 settlement on Base Sepolia. Security: option A, a deployed smart-account payer (EIP-1271); option B, a hot wallet holding only the job budget, topped up by a period-capped delegation; payee pinned per origin; one outstanding authorization | Coinbase Agentic Wallet guardrails; x402 payment identifier and signed receipts. Novelty: stopping after a failed output check reduces wasted spend; unverified | x402 testnet facilitator; test USDC. Feasibility: medium to high | Two endpoints (honest, faulty), 10-unit budget. Evaluation: post-failure spend against a baseline with both extensions | Medium on feasibility, low on novelty. Gate: CONDITIONAL PASS. Sources: R001 F06; R002 C04; R014; synthesis IDEA-006, IDEA-019 |
| **IDEA-071** Human-approved batch payroll | Pay runs are error-prone and slow. Customer: SMEs and DAOs paying contractors | Validate contractors, compute the run, propose batch; humans approve (R005 C10); release after signed work confirmation (R003 C20). Asset role: holds a payroll reserve | Bulk stablecoin transfer after approval. Security: approved register, per-run cap, payee registry, sanctions screen (R013 C09) | Payroll platforms named by sources. Novelty: none strong; best used as a HYBRID-008 scenario | Payee registry; tax rules only if withholding is in scope. Feasibility: medium without tax | One approved run of three contractors, no tax. Evaluation: paid once; vendor bill refused if it breaches the payroll reserve | Medium; no prototype. Gate: FAIL standalone with withholding; CONDITIONAL PASS as a scenario. Sources: R001 F03; R003 C20; R005 Concept10; R012 C04; R013 C09 |
| **IDEA-072** Indemnity claims settlement agent | Slow, costly claim adjustment. Customer: insurers | Ingest evidence, validate against policy, fraud-score, settle small claims, escalate others. Asset role: claims reserve | Settlement transfer. Security: eligibility gate, hard cap, adjuster approval | Insurtech claims automation. Novelty: weak; regulated | Fraud model; regulatory framework. Feasibility: very high difficulty (source's own estimate) | One claim type, simulated data | Low. Gate: FAIL current scope. Sources: R008 C04 |
| **IDEA-073** Budget envelope treasury | Spending across cost centres needs period limits and recipient restrictions without a click per payment. Customer: SME or protocol treasuries | Settle routine obligations inside envelopes, sweep and reallocate, escalate above threshold. Asset role: allocates the balance across envelopes each period | Period-capped transfers to recipient sets. Security: per-envelope cap and recipient set enforced by the account (R010 C07); per-task cap (R011 C15) | Safe allowance (no recipient limit); MetaMask `erc20PeriodTransfer` with `allowedCalldata`; Zodiac Roles allowances. Novelty: weak; R010's "functional gap" is contradicted by these frameworks | Delegation framework or Roles 2.1.1 on chosen testnet. Feasibility: high (2–4 engineer-days) | Three envelopes, a period reset, a reallocation, an out-of-set recipient attempt. Evaluation: breach count zero by construction | Medium; untested. Gate: PASS. Sources: R010 C07; R011 C15 |
| **IDEA-074** Forecast-buffer liquidity sweep | Idle cash earns nothing while runway must be covered. Customer: startup and SME treasuries | Forecast runway; keep buffer; sweep surplus to an allowlisted vault and back. Asset role: allocates surplus | Vault supply and withdraw. Security: vault and method allowlist, invested cap, fixed withdrawal recipient | Treasury yield automation. Novelty: weak | Aave v3 Sepolia market or self-deployed vault. Feasibility: medium | One market, one deposit, one just-in-time withdrawal | Low. Gate: CONDITIONAL PASS as stretch only. Sources: R006 C04; R003 C06 |
| **IDEA-075** Self-limiting incident agent | A compromised agent keeps spending until noticed. Customer: agent operators | Detect own anomalies and revoke own authority. Asset role: protective | Self-revocation. Security: must pair with a human trigger (R010's own caveat); implemented as executor code, not the model | None found by R010. Novelty: weak as a boundary | Revocation path. Feasibility: high | Executor halts and bumps nonce on invariant breach | Medium. Gate: PASS as component. Sources: R010 C08 |
| **IDEA-076** Behavioural-drift self-halt | Agent behaviour drifts from mandate. Customer: agent operators | Compare own actions with mandate and halt. Asset role: protective | Halt or revoke. Security: as IDEA-075 | Monitoring tools. Novelty: weak | Mandate model. Feasibility: high | Drift fixture triggers halt | Low. Gate: PASS as component. Sources: R012 C11 |
| **IDEA-077** Rate-and-deadline repayment optimizer | Limited funds across debts. Customer: borrowers, treasuries | Prioritise repayment by rate and deadline. Asset role: allocates repayment budget | Repay calls. Security: budget cap, protocol allowlist | Position managers. Novelty: weak, saturated (R010) | Testnet lending protocol. Feasibility: medium | Two synthetic debts | Low. Gate: CONDITIONAL PASS research. Sources: R010 C14 |
| **IDEA-078** Delivery-signal conditional payment | Supplier payment should follow delivery. Customer: SME importers | Schedule invoice; pay when logistics API reports delivery. Asset role: payout from balance | Transfer after signal; no escrow. Security: spend limit, supplier allowlist, human threshold | Cross-border payment platforms. Novelty: weak | Shipping API (R008 L03468 test). Feasibility: unknown | One shipment feed | Low. Gate: CONDITIONAL PASS research. Sources: R008 C01 |
| **IDEA-079** Transaction-trace and MEV analyzer | Anomalies and MEV unseen. Customer: wallet operators | Analyse traces. Asset role: none | Reads only | Explorers and MEV analytics. Novelty: weak | Trace RPC. Feasibility: medium | Trace report | Low. Gate: FAIL standalone. Sources: R011 C22 |
| **IDEA-080** Delayed human-veto payment lane | Above-threshold payments need oversight without blocking autonomy. Customer: SMEs and DAOs | Queue above-threshold payments; owner may veto during cooldown. Asset role: delayed payout | Queued transaction executes after cooldown unless skipped. Security: Zodiac Delay with owner nonce skip (1.1.1 or later); Roles recipient and allowance conditions per R002 | Timelocks; Zodiac Delay. Novelty: none as a primitive | Safe, Roles 2.1.1, Delay 1.1.1 on chosen testnet. Feasibility: medium | One vetoed and one executed payment | Medium. Gate: CONDITIONAL PASS as route Z. Sources: R002 C01 |
| **IDEA-081** Attestation-gated escrow | Escrow released on one party's say-so. Customer: agent and freelance buyers | Release needs a verdict AND counterparty attestation or acceptance. Asset role: escrow custody | Fund, attest, release, refund | ERC-8183; Virtuals ACP; Trustless Work. Novelty: plausible, unverified | Bootstrappable attestation source (R010 L04088). Feasibility: low by 20 Oct | One milestone | Low. Gate: FAIL this round. Sources: R010 C03; R012 C02 |
| **IDEA-082** Dual-model co-signing gate | One jailbroken model hijacks proposals. Customer: funds and treasuries | Second adversarial model co-signs; AST check; freeze on divergence. Asset role: protective | Dual-signature validator. Security: still model-dependent | Multi-model review tooling. Novelty: weak to moderate | Second model. Feasibility: medium | Injection blocked by second model | Low. Gate: CONDITIONAL PASS as optional filter. Sources: R006 C11 |
| **IDEA-083** Buyer-confirmed reverse factoring | Small suppliers wait 90–120 days. Customer: lower-tier suppliers | Verify buyer-signed receipt; price discount; pay from pool. Asset role: factoring pool | Receivable token, discounted payout. Security: discount floor, per-buyer cap, officer approval | Receivables protocols named by source. Novelty: weak to moderate | Pool, credit, legal assignment. Feasibility: low | One synthetic invoice | Low. Gate: FAIL current scope. Sources: R006 C12 |
| **IDEA-084** Bounded-loss red-team arena | Safety claims lack public adversarial evidence. Customer: judges and builders | Run the agent against attackers. Asset role: prize equals the onchain cap | Attack attempts; payouts capped. Security: caps bound the prize | Freysa (Nov 2024; LLM-only gate lost about $45,000). Novelty: the inverse, where the model can be fooled but the chain bounds loss | Hosting, logs. Feasibility: medium | Logged private red-team session; public arena optional | Medium. Gate: PASS as evaluation layer. Sources: R002 C21 |
| **IDEA-085** Onchain AP2 mandate verifier | Mandates verified merchant-side only. Customer: wallets, merchants | Contract verifies mandate before payment. Asset role: payout under mandate | Verify, then transfer | AP2 implementations. Novelty: plausible; version risk | Stable mandate format. Feasibility: medium | One mandate type | Low. Gate: CONDITIONAL PASS research. Sources: R010 C18 |
| **IDEA-086** Temporal-invariant conditional payments | Recurring payments should stop below a balance floor. Customer: CFOs, DAO managers | Compile instruction to an invariant; schedule payments. Asset role: protects a floor | Module checks the invariant before each payment. Security: owner approves compiled rule | Scheduled-payment modules. Novelty: weak to moderate | New caveat or module code. Feasibility: medium | One recurring payment with a floor | Low. Gate: CONDITIONAL PASS as option. Sources: R006 C20 |

## J. Updated competitor and prior-art matrix

Every mechanism inside the leading candidates already exists; the only differentiation left is how they are combined and what that combination measurably prevents. Two claims remain plausible but unverified: reserve protection against the agent's own discretionary spending, and a published, attack-tested loss bound. R010's envelope "functional gap" and Audit A's PolicyLayer comparison are both removed.

| Candidate | Capability claimed | Classification | Nature | Supporting evidence | Weakening evidence | Falsifying experiment |
| --- | --- | --- | --- | --- | --- | --- |
| HYBRID-008, IDEA-001 | One-use, exact, expiring, redeemer-bound payment authority | Verified existing capability | Technical | [MetaMask caveats](https://docs.metamask.io/smart-accounts-kit/reference/delegation/caveats/); [Biconomy Smart Sessions](https://docs.biconomy.io/new/smart-sessions/policies); [PACE](https://arxiv.org/abs/2608.17220) binds approvals to exact bytes | Documentation only; deployed behaviour untested | X1 |
| HYBRID-008, IDEA-073 | Period-capped, recipient-restricted envelopes | Verified existing capability; R010's "functional gap" claim contradicted | Technical | `erc20PeriodTransfer` with `allowedCalldata`; Zodiac Roles v2 "spending limits within permissions" ([ENS EP 5.12](https://docs.ens.domains/dao/proposals/5.12)) | Safe allowance alone lacks recipient limits, as R010 says | X2 |
| HYBRID-008 | Segregated reserve that the agent can fund but never drain | Plausible but unverified differentiation | Financial | R001 F03 proposed it; not found in [AgentsPay](https://agentspay.ai/use-cases/bill-pay-agents) (offchain caps), [Request Finance](https://partners.circle.com/partner/request-finance) (human approvals) or [Cleared](https://clearedpay.xyz/cleared-whitepaper.pdf) (registry) | Conventional segregated accounts and ERP reserves do the same off-chain | X2 (reserve breach count); X6 |
| HYBRID-008 | Live conditional loss certificate, tested by attackers | Plausible but unverified | Operational and technical | R003 C19; R014 L05371; [Freysa](https://simonwillison.net/2024/Nov/29/0xfreysaagent/) shows an LLM-only gate failing | Wallet permission lists and allowance viewers show parts of it; full external search not done | X2 red-team drain against displayed bound; X6 |
| HYBRID-008, IDEA-001 | AI improves invoice matching over rules | Insufficient evidence | Operational | Sources assign extraction and scheduling to AI | [Ramp AP agents](https://ramp.com/blog/ramp-ap-agents-announcement) already automate coding and fraud flags offchain | X3 |
| IDEA-080 | Delayed veto lane | Verified existing capability | Technical | [Zodiac Delay](https://github.com/gnosisguild/zodiac-modifier-delay): cooldown queue, owner skips by advancing the nonce | Bypass in Delay 1.1.0 ([post-mortem](https://engineering.gnosisguild.org/posts/zodiac-post-mortem)) | X1b |
| IDEA-084 | Public bounded-loss arena | Format verified existing (Freysa); the onchain-capped inverse is plausible but unverified | Presentational and evidential | R002 C21 cites Freysa as "inverse design" | Prize on testnet has no real value, which weakens attacker incentive | X2 red-team session |
| HYBRID-002R | Stop spending after a failed output check | Plausible but unverified | Financial | x402 [payment identifier](https://docs.x402.org/extensions/payment-identifier) and [signed receipts](https://docs.x402.org/extensions/offer-receipt) exist but do not judge output; [Coinbase Agentic Wallet](https://docs.cdp.coinbase.com/agentic-wallet/welcome) guardrails are unspecified | Circuit breakers are a common engineering pattern | X5 against the extensions baseline |
| HYBRID-002R | Smart-account payer for x402 | Verified existing capability | Technical | [x402 wallet compatibility](https://docs.x402.org/advanced-concepts/wallet-compatibility): deployed ERC-4337 accounts via EIP-1271 | Token must route signatures to EIP-1271; Permit2 needs an onchain approval | X5 |
| HYBRID-009 | Service spending that respects obligation reserves | Plausible but unverified | Financial | R001 F22 | R001 itself names Nevermined and Circle as close | X1 plus X5 |
| HYBRID-003 | Cross-provider policy conformance | Plausible but unverified (research) | Technical | Not found in sources checked | Source R010 C21 proposed chain-to-chain, an easier and less novel problem | Not run this round |

**Removed or corrected entries.** PolicyLayer removed (its product is an authority playbook for coding agents). x402 "no smart-account path" corrected. Request Finance kept as a workflow competitor, not an agent competitor. Delegation framework: latest release v1.3.0 (24 July 2025) with tagged audited versions per its [repository](https://github.com/MetaMask/delegation-framework); the auditors and report scope were not opened.

## K. Revised security architectures and controls

HYBRID-008 now has five authority tiers, each enforced by existing contracts rather than by the model, and a stated loss bound for a stolen agent key. The restored mechanisms add a veto lane (route Z) and give the envelope tier a source. Neither route needs new Solidity unless the single-account floor (IDEA-086) is chosen.

**HYBRID-008 authority tiers**

| Tier | Authority | Granted by | Route M: MetaMask delegations | Route Z: Safe with Roles 2.1.1 and Delay 1.1.1 | Agent autonomy | Exposure if the agent key is stolen |
| --- | --- | --- | --- | --- | --- | --- |
| T0 Obligations | Pay one approved obligation once | Owner signs each, rendered by the wallet | `exactExecution`, `limitedCalls` = 1, `timestamp` window, `redeemer` | Per-obligation allowance with no refill, recipient EqualTo vendor (per R002 C01) | Timing inside the window | Early payment of approved obligations to their real vendors |
| T1 Envelopes | Routine payments within a period cap to a recipient set | Owner signs once per envelope | `erc20PeriodTransfer`, `allowedTargets`, `allowedCalldata`, `timestamp` expiry | Allowance with refill period and recipient conditions | Pays in-terms invoices unattended; reallocates within owner totals | Cap times remaining periods until expiry, to allowed recipients only |
| T2 Above threshold | Larger or unusual payments | Owner | Escalate: owner signs a new T0 mandate | Delay queue: executes after cooldown unless the owner skips it | Proposes; may proceed if not vetoed (route Z) | Queued amount if the owner misses the veto window (route Z only) |
| T3 Reserve funding | Move operating funds into the reserve | Owner signs once | `allowedCalldata` recipient = reserve account | Roles recipient condition | Decides when and how much | None (funds stay in the treasury) |
| T4 Administration | Grants, revocation, withdrawals, upgrades | Owner key, offline | Owner only; `nonce` bump revokes all; `disableDelegation` revokes one | Owner only; skip queue by nonce; revoke role | None | Not reachable from the agent key |

**Conditional loss bound for a stolen agent key.** Under assumptions A1–A5 (owner key safe; vendor records genuine; framework contracts and token behave as documented; correct chain; no other enabled authority), nothing can be paid to an unapproved recipient. The reachable outflow is:

```latex
L_{max} = \sum_{i \in T0,\ unredeemed} a_i \; + \sum_{e \in T1} c_e \cdot p_e \; + \; Q_{T2} \; + \; G
```

Here a is an obligation amount, c an envelope's period cap, p the periods left until that envelope expires (counting the current one as its remaining allowance), Q the unvetoed queued amount (route Z only) and G the gas tank. If any assumption fails, every token in both accounts is exposed. This restates R003 C19 and R014 L05371 for this design; it is a design ceiling, not an audited guarantee.

**Controls checked against the gate list**

| Control area | HYBRID-008 | HYBRID-002R |
| --- | --- | --- |
| Protected signing and keys | Agent key holds gas only, can only redeem; owner key never in runtime, prompts or logs | Option A: smart-account payer via EIP-1271. Option B: hot key holding only the job budget |
| Independent authorization | Owner-signed mandates; approval screen renders typed data, AI summary shown separately as untrusted | Owner-set origins, payees and job budget |
| Spending and recipient limits | Tiers T0–T3 above | Hot balance, period-capped top-up, payee pinned per origin, price ceiling |
| Smart-contract risk | Existing contracts only; verify release tag and audit scope; route Z requires patched Zodiac and must avoid the post-mortem's fallback-handler condition | Facilitator and token code; no custom contract |
| Prompt injection | Invoices, emails, API bodies and token metadata are data; no agent path creates authority | 402 bodies are data; redirects to new origins refused |
| Simulation and verification | Simulation advisory only; receipts confirmed on two RPCs; proposed, submitted, included, finalized states | Settlement receipt checked independently of the seller's signed receipt |
| Duplicates and replay | `limitedCalls` = 1 on T0; journal plus invoice identifiers on T1; fee-bounded same-nonce replacement for stuck transactions (R013 C15) | One outstanding authorization; x402 payment identifier |
| Recovery and emergency | One-transaction `nonce` revoke; executor self-halt on invariant breach (IDEA-075); revoke, verify, reconcile, rotate | Stop top-ups; unexpired authorizations counted until expiry |
| Auditability | Each hash linked to its signed mandate hash and invoice digest; optional attested decision records (IDEA-031/E) if the attestation service is on the chosen testnet | Offers, receipts, settlement hashes, cost ledger |
| Compliance | Segregation of funds and of duties (requester, approver, executor); payee screening as a control; opaque identifiers onchain; no legal-compliance claim | Same, where applicable |
| Maximum loss | Formula above | Hot balance + remaining top-up allowance + unexpired authorizations + fees |

The dual-model gate (IDEA-082) may filter proposals before the executor, but it is not counted as a security boundary because both models can share blind spots.

## L. Security and feasibility gate results

Two candidates pass outright (IDEA-001, IDEA-073), four pass conditionally, and the custom-executor ObligationLock fails for this round. A PASS means eligible for controlled prototype investigation only. Every gate shares one open organizer item, O1: whether public-testnet hashes count. If they do not, all candidates defer equally.

| Candidate | Gate | Gates met | Open or failed items | Maximum loss on agent compromise |
| --- | --- | --- | --- | --- |
| IDEA-001 Bounded invoice payout | PASS | Real problem; onchain path; no unrestricted signing; non-prompt controls; bounded exposure; documented dependencies | Autonomy thin (owner signs each mandate) | Sum of unredeemed mandates, paid to the right vendors |
| IDEA-073 Budget envelope treasury | PASS | As above, with genuine autonomy inside envelopes | Period-caveat semantics untested | Caps times remaining periods, to allowed recipients |
| HYBRID-008 Mandate-bound obligation treasury | CONDITIONAL PASS | All gates on paper | Composition of tiers untested (X1, X2); route Z needs patched Zodiac check; AI value unmeasured (X3) | Section K formula |
| HYBRID-002R ServiceMeter, revised | CONDITIONAL PASS | Real problem (narrow); onchain settlement; bounded by budget | Asset-management pillar weak; smart-account validator behaviour untested (X5) | Hot balance + top-up allowance + unexpired authorizations |
| HYBRID-009 Obligation-reserved agent commerce | CONDITIONAL PASS | Union of the above | Scope: needs both payment paths working by 15 Oct | Union of both bounds |
| IDEA-033 Refund governor | CONDITIONAL PASS | Clear invariant | Payer mapping; weak asset management | Eligible refunds within allocation |
| IDEA-074 Forecast-buffer sweep | CONDITIONAL PASS (stretch) | Asset-management role | Testnet market reliability; protocol risk only on testnet | Invested cap |
| IDEA-080 Veto lane, IDEA-075 self-halt, IDEA-076 drift halt, IDEA-026 loss certificate, IDEA-084 arena | PASS as components | Strengthen HYBRID-008 | Fail as standalone candidates (no financial task) | Not applicable |
| IDEA-086 Temporal floor | CONDITIONAL PASS as option | Onchain floor | New code | Depends on module |
| HYBRID-001 ObligationLock, custom executor | FAIL this round | Concept sound | Unaudited trusted code holding treasury authority; 8–12 days plus validation; its own review bar unmeetable | Undefined if the executor is buggy |
| HYBRID-003 PolicyProof | FAIL this round | Research value | Weak task completion; 10–16 days | Not applicable |
| IDEA-081 Attestation-gated escrow | FAIL this round | Strong concept | Attestation source unavailable (R010 L04088) | Escrow amount |
| IDEA-071 Batch payroll | FAIL standalone; CONDITIONAL PASS as a HYBRID-008 scenario | Real problem | Tax withholding out of scope | Run amount |
| IDEA-072 Indemnity claims; IDEA-083 Reverse factoring | FAIL current scope | Real problems | Regulated decisions; credit and legal assignment | Not assessed |
| IDEA-078 Delivery payment; IDEA-085 AP2 verifier; IDEA-077 Repayment optimizer | CONDITIONAL PASS research | Real problems | Oracle test; spec stability; saturation | Not assessed |
| IDEA-079 Trace analyzer; IDEA-082 Dual-model gate (standalone) | FAIL standalone | Supporting value | No execution or no boundary | Not applicable |
| HYBRID-004 to HYBRID-007 | FAIL this round | Research value | Scope beyond 20 Oct | Not assessed |

No unresolved critical security issue is waived: every conditional pass names the experiment that must close it, and the failing designs stay failed regardless of innovation score.

## M. Revised top ten ranking

HYBRID-008 ranks first; the restored envelope treasury (IDEA-073) enters at second, and the synthesis's former favourite, as specified, falls to seventh. Order follows the Layer B balanced centre, with security as tiebreaker. All numbers are internal judgment ranges, not predicted judges' scores. The challenge bonus is scored 0–5 unresolved for every candidate and never added.

| Rank | Candidate | Task /40 | Security and compliance /30 | Innovation and interaction /30 | Layer A /100 | Layer B /100, range (centre) | Gate | Synthesis rank |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | HYBRID-008 Mandate-bound obligation treasury | 31–36 | 23–27 | 19–25 | 73–88 | 68–86 (78) | Conditional pass | New |
| 2 | IDEA-073 Budget envelope treasury | 29–34 | 21–25 | 14–20 | 64–79 | 65–80 (74) | Pass | New (was inside IDEA-002) |
| 3 | IDEA-001 Bounded invoice payout | 27–33 | 22–26 | 13–19 | 62–78 | 65–79 (73) | Pass | 3 |
| 4 | HYBRID-002R ServiceMeter, revised | 25–32 | 20–25 | 16–22 | 61–79 | 64–81 (72) | Conditional pass | 2 (as HYBRID-002) |
| 5 | HYBRID-009 Obligation-reserved agent commerce | 28–36 | 20–26 | 19–25 | 67–87 | 60–79 (70) | Conditional pass | New (R001 F22) |
| 6 | IDEA-033 Refund governor | 22–29 | 20–25 | 13–19 | 55–73 | 61–77 (69) | Conditional pass | 5 |
| 7 | HYBRID-001 ObligationLock, custom executor | 24–36 | 17–27 | 19–25 | 60–88 | 56–76 (66) | Fail this round | 1 |
| 8 | HYBRID-003 PolicyProof | 15–25 | 19–25 | 18–25 | 52–75 | 55–71 (63) | Fail this round | 4 |
| 9 | IDEA-074 Forecast-buffer liquidity sweep | 24–32 | 18–24 | 15–21 | 57–77 | 54–72 (63) | Conditional pass (stretch) | New (was inside IDEA-002/013) |
| 10 | IDEA-081 Attestation-gated escrow | 20–30 | 16–23 | 19–26 | 55–79 | 54–72 (63) | Fail this round | New (was inside IDEA-003) |

Layer B centres by criterion (value /15, novelty /20, security /25, feasibility /20, demo /10, dependencies /10): HYBRID-008 13, 11, 22, 15, 9, 8; IDEA-073 12, 7, 20, 18, 8, 9; IDEA-001 11, 6, 22, 18, 7, 9; HYBRID-002R 11, 10, 19, 16, 9, 7; HYBRID-009 13, 12, 19, 11, 9, 6; IDEA-033 10, 9, 20, 16, 7, 7; HYBRID-001 13, 10, 18, 10, 9, 6; HYBRID-003 10, 15, 18, 8, 7, 5; IDEA-074 11, 8, 17, 13, 8, 6; IDEA-081 11, 14, 16, 9, 8, 5.

Leaving the top ten: IDEA-003 objective escrow, HYBRID-004, IDEA-009, HYBRID-005 and HYBRID-007, which the synthesis ranked sixth to tenth. Their predicates or single-agent parts are absorbed into the entries above or failed for scope.

## N. Detailed top five candidate evaluation

The top five share one infrastructure family except HYBRID-002R, so one spike (X1) informs four of them. HYBRID-008 is the only candidate that scores well on all three Topic F pillars; its weakness is composition risk, which the staged build contains.

| Field | HYBRID-008 Mandate-bound obligation treasury | IDEA-073 Budget envelope treasury | IDEA-001 Bounded invoice payout | HYBRID-002R ServiceMeter, revised | HYBRID-009 Obligation-reserved agent commerce |
| --- | --- | --- | --- | --- | --- |
| Exact financial problem | Pay approved obligations unattended; never pay fabricated ones; keep committed cash from other spending | Cap routine spending per cost centre and period without a click per payment | Pay a specific approved invoice exactly once | Stop paying for services that keep failing | Let an agent buy services without eating committed cash |
| Differentiation | Whole authority = owner-signed, onchain-enforced mandates; segregated reserve; live loss bound | Envelope reallocation by the agent within owner totals | Exactness and one-use enforcement, nothing more | Output-check failure stops further spend | Reserve-aware service spending |
| Novelty evidence | Plausible but unverified (section J); every part pre-exists | Contradicted as a gap; existing frameworks do it | None claimed | Plausible but unverified | Plausible but unverified; R001 F22 |
| Autonomous workflow | Intake, match, time, reallocate, fund reserve, redeem, reconcile, escalate | Settle in-terms invoices, reallocate, escalate | Match and redeem | Choose provider, pay, check, stop or switch | HYBRID-008 plus purchases |
| Asset-management function | Reserve versus operating allocation; envelopes; optional surplus placement | Allocation across envelopes | None beyond payout | Job budget only | Reserve protection against spending |
| Onchain execution | Mandate redemptions, envelope transfers, reserve top-ups, owner revocation | Period-capped transfers | One-use transfers | x402 settlements | Both |
| Wallet architecture | Reserve and operating smart accounts; route M (MetaMask) or route Z (Safe, Roles 2.1.1, Delay 1.1.1) | Same family, envelope tier only | Same family, T0 only | Smart-account payer (EIP-1271) or two-tier hot wallet | Union |
| Security boundary | Agent key can only redeem; owner key offline; typed-data approvals | Caps and recipient sets enforced by the account | Exact mandate enforced by the account | Budget enforced by balance or account; payee pinned offchain | Union |
| Key risks | Tier composition; caveat semantics; Zodiac history on route Z; AI value unproven | Overpayment within cap to allowed recipients | Thin autonomy | Paid non-delivery within budget; weak Topic F fit | Scope |
| Technical feasibility | Medium (Stage 1 high) | High | High | Medium to high | Low to medium by 20 Oct |
| Dependencies | Smart Accounts Kit or Safe/Zodiac on testnet; test token; two RPCs | Same | Same | x402 facilitator on Base Sepolia; test USDC | Both |
| MVP scope | Reserve and operating accounts; three obligations; two envelopes; one token; one chain | Three envelopes, one reset, one reallocation | Three invoices, one token | Two endpoints, 10-unit budget | One obligation, one envelope, one endpoint |
| Demo scenario | Payroll reserve (R001 F03): agent pays two approved invoices and an in-terms envelope bill; a vendor bill that would breach the payroll reserve is refused; injected "wallet changed" invoice and a duplicate fail onchain; owner revokes everything in one transaction; red-team drain stays under the displayed bound | Period reset and out-of-set recipient reverted | Exact payment; mutated amount reverts | Faulty seller stops spending; injected price refused | Service purchase refused at reserve floor |
| Required evidence | X1, X2, X3, X4 passes; explorer-verified hashes; clean-checkout reproduction | X1, X2 | X1, X4 | X5 | X1 and X5 by 15 Oct |
| Confidence | Medium on design, none on execution | Medium | Medium-high | Medium (feasibility), low (novelty) | Low |
| Status | CONDITIONAL GO | GO (prototype validation) | GO (prototype validation; Stage 1 floor) | CONDITIONAL GO (fallback) | CONDITIONAL GO (late, only if both paths pass) |

## O. Top three prototype validation candidates

The three are chosen to cover distinct uncertainties, not simply by rank: HYBRID-008 (does the full tier composition hold?), IDEA-073 (does an autonomy-first fallback hold if exact mandates make autonomy too thin?), and HYBRID-002R (is there a working path if the delegation family fails?). All three are technically plausible on documented infrastructure; none is verified.

| Candidate | Uncertainty it resolves | Experiments | Why it is in the three |
| --- | --- | --- | --- |
| HYBRID-008 | Whether mandates, envelopes, segregation and the loss bound compose without leaks, and whether AI adds value | X1, X2, X3, X4 (X1b for route Z) | Highest estimated score on all four weightings; covers all three Topic F pillars |
| IDEA-073 | Whether period-capped, recipient-restricted envelopes behave as documented across resets | X2 (envelope arm), X1 | Most autonomous design that passes the gate outright; a credible Stage 1 if Stage 2 slips |
| HYBRID-002R | Whether x402 payments can be bounded and stopped on a public testnet | X5 | Only shortlisted path independent of the delegation family |

IDEA-001 is not listed separately: its uncertainty is a strict subset of X1, which validates it as HYBRID-008's Stage 1 floor. HYBRID-009 needs X1 and X5 to pass first, so it cannot be validated independently in time.

## P. Ranking sensitivity analysis

HYBRID-008 leads under all four weightings, but its lead is thin where it matters most: 0.7 points over IDEA-073 under feasibility weights. That is expected, because HYBRID-008 contains IDEA-073 and IDEA-001 as stages; if X1 or X2 fails, the ranking collapses onto them. Weights follow the synthesis's scenarios (A balanced 15/20/25/20/10/10; B feasibility 15/10/25/25/10/15; C security 10/10/45/15/10/10; D innovation 10/40/25/10/10/5), applied to the centres in section M.

| Position | A: balanced | B: feasibility | C: strict security | D: innovation |
| --- | --- | --- | --- | --- |
| 1 | HYBRID-008 (78.0) | HYBRID-008 (80.2) | HYBRID-008 (82.0) | HYBRID-008 (73.2) |
| 2 | IDEA-073 (74.0) | IDEA-073 (79.5) | IDEA-001 (79.4) | HYBRID-009 (69.2) |
| 3 | IDEA-001 (73.0) | IDEA-001 (79.0) | IDEA-073 (78.0) | HYBRID-003 (68.2) |
| 4 | HYBRID-002R (72.0) | HYBRID-002R (74.5) | HYBRID-002R (74.5) | HYBRID-002R (66.8) |
| 5 | HYBRID-009 (70.0) | IDEA-033 (72.0) | IDEA-033 (73.2) | IDEA-081 (66.3) |
| 6 | IDEA-033 (69.0) | HYBRID-009 (69.8) | HYBRID-009 (72.1) | HYBRID-001 (63.7) |
| 7 | HYBRID-001 (66.0) | HYBRID-001 (66.5) | HYBRID-001 (68.6) | IDEA-073 (63.5) |
| 8 | HYBRID-003 (63.0) | IDEA-074 (65.2) | IDEA-074 (65.7) | IDEA-033 (63.2) |
| 9 | IDEA-074 (63.0) | IDEA-081 (60.8) | HYBRID-003 (64.6) | IDEA-001 (61.8) |
| 10 | IDEA-081 (63.0) | HYBRID-003 (60.0) | IDEA-081 (62.9) | IDEA-074 (57.8) |

**Changes against the original synthesis** (its balanced order: HYBRID-001, HYBRID-002, IDEA-001, HYBRID-003, IDEA-033)

| Change | Cause |
| --- | --- |
| HYBRID-001 falls from first to seventh | Gate fails for scope and unaudited code (A-26); novelty lowered (A-04, A-16); its concept survives inside HYBRID-008 |
| HYBRID-008 enters first | Audit A's corrected architecture plus restored envelopes (B-08), veto lane (B-10), loss certificate (A-21) and arena (B-27) |
| IDEA-073 enters second | Split from IDEA-002 (B-08) and scored independently |
| HYBRID-002 becomes HYBRID-002R and slips from second to fourth | Weak asset-management fit outweighs the feasibility gain from x402 smart-account support (A-11); PolicyLayer comparison removed (A-19) |
| HYBRID-003 falls from fourth to eighth | Fails this round (A-12); source design was chain-to-chain (B-30) |
| HYBRID-009 enters fifth | R001 F22 restored (A-15) |
| IDEA-003, HYBRID-004, IDEA-009, HYBRID-005, HYBRID-007 leave | Deadline scope; parts absorbed into HYBRID-008 |

**Changes against Audit A** (its order: N1, IDEA-001, ServiceMeter, HYBRID-001 as specified, IDEA-033): IDEA-073 now sits between N1 (HYBRID-008) and IDEA-001, and HYBRID-009 appears. Both come from Audit B's restorations.

**What would reverse the order.** Every route fails X1: HYBRID-002R moves to first. Stage 2 fails X2: IDEA-073 or IDEA-001 is what ships. X3 shows the LLM no better than rules: task and innovation scores drop for HYBRID-008, IDEA-073 and IDEA-001 together, so order holds but the AI claim shrinks. Organizer rejects testnet hashes: all candidates defer equally. Only the innovation weighting lets research candidates (HYBRID-003, IDEA-081) into the top five, and both fail the gate this round.

## Q. Unresolved disagreements and evidence requirements

Twelve questions stay open. None is settled by argument; each has a named test or document and a default to use if the answer arrives after 20 October.

| Question | Positions | Evidence that resolves it | Default if unresolved |
| --- | --- | --- | --- |
| How novel is HYBRID-008? | Synthesis 14/20 for ObligationLock; Audit A about 10; this package 10–11 | X6 dated feature table; external search for loss-certificate products | Claim integration quality and measured outcomes only |
| Segregated accounts or a single-account floor? | Audit A and R001 F03: segregate. R001 F01 and synthesis: solvency invariant. R006 C20: temporal floor | X2 reserve-leak test | Segregation (no new code) |
| Route M or route Z? | Route M has one-use mandates; route Z has the native veto lane and Zodiac's bypass history | X1 and X1b | Route M; veto lane optional |
| Does AI add value? | Sources assign it extraction and scheduling; Audit A doubts necessity | X3 against a template parser | Reduce the AI claim to intake and explanation |
| Can Audit B's coverage figures be reproduced? | Audit B: 50.20% and 47.10% | Its mapping file and traceability matrix | Report as Audit B's figures |
| Which are the remaining high-priority records? | Audit B names 12 of 22 core records | Traceability matrix | Unresolved; reopen when supplied |
| Is the synthesis complete? | Audit B: no | R004 notebook, clean R006, R007 canvas, R008 concepts 6–10, R014 sections 1–6 | Proceed with disclosure; 32 records stay uncertain |
| Do public-testnet hashes count? | Rules say "real on-chain transaction hashes" | Written organizer answer | Public EVM testnet, disclosed |
| May finalists update code after 20 Oct? | Rules: "No changes are accepted after the deadline" | Organizer answer | Treat the 20 Oct submission as final |
| What does the bonus assess? | Unpublished | Organizer answer | Score zero |
| What did the delegation framework's audits cover? | Repository tags audited releases | Read the repository's audit reports | State "audited release tags; scope not reviewed" |
| Does a smart-account x402 payer obey restricted signing rules? | Documented support for EIP-1271; validator behaviour unknown | X5 | Use the two-tier hot wallet |

## R. Decisive prototype experiment specifications

Six experiments cover the top three; the cheapest falsifier, X1, runs first and is due 14 October 23:59 Dhaka. None has been run, and no result below is reported as achieved. All use valueless test tokens, so real financial exposure is zero; the limits cap test units. Unrestricted real-money deployment is not recommended.

| Field | X1 Mandate enforcement (route M) | X1b Veto lane (route Z) | X2 Segregation, envelopes and loss-bound red team | X3 Agent adversarial and AI-necessity test | X4 Truthful status, retry and revocation | X5 ServiceMeter payment path |
| --- | --- | --- | --- | --- | --- | --- |
| Serves | HYBRID-008, IDEA-001, IDEA-073 | HYBRID-008 route Z | HYBRID-008, IDEA-073 | HYBRID-008, IDEA-001 | All | HYBRID-002R, HYBRID-009 |
| 1. Hypothesis | Existing caveats enforce exact, one-use, windowed, redeemer-bound transfers and one-transaction bulk revocation | Patched Roles and Delay give a working veto queue with recipient and allowance limits | Reserve funds leave only through obligation mandates; envelope caps hold across resets; no drain with the agent key exceeds the displayed bound | The LLM matches invoices better than rules, and no model output creates authority | Crashes and timeouts never cause duplicate payment or false "finalized"; revocation takes effect | x402 spending can be bounded and stopped after a failed output check without duplicate payment |
| 2. Minimum implementation | Script: owner smart account, test token, three signed delegations, agent redeemer | Safe with Roles 2.1.1 and Delay 1.1.1; one queued payment | Reserve and operating accounts; one-way top-up; two envelopes; exposure calculator | 40 synthetic invoices (20 benign, one non-English; 20 adversarial); schema-checked LLM pipeline; template parser | Payment state machine, journal, two RPCs, fault proxy, same-nonce replacement | Two local paid endpoints (honest, faulty); payer option A or B; payee pinning; output predicate; payment identifier |
| 3. Tools and infrastructure | MetaMask Smart Accounts Kit (pinned), viem, faucet token | Safe, Zodiac Roles and Delay, Safe SDK | As X1 plus calculator script | Model API, PDF generator, harness | Local chain, testnet, proxy | x402 packages, Base Sepolia test USDC, public testnet facilitator |
| 4. Environment | Local fork (2 hours maximum), then Ethereum Sepolia or Base Sepolia | Same testnet; verify mastercopy version first | Testnet with \~10-minute periods | Offline scoring; testnet for paid cases | Local chain for faults; testnet for inclusion and finality | Base Sepolia |
| 5. Positive tests | Three exact payments to the right vendors | Unvetoed payment executes after cooldown | In-terms envelope bills paid; reserve topped up | Benign invoices matched to the right mandate | Correct final status recorded | Honest task completes |
| 6. Negative tests | Wrong amount, recipient or token; before window; after expiry; wrong redeemer | Vetoed payment never executes; wrong recipient reverts | Other recipient; over period cap; reserve-to-operating move | Unknown vendor and amount mismatch escalate | Reverted and expired cases shown as such | Wrong output stops spending; price over ceiling refused |
| 7. Adversarial tests | Second redemption; redemption after `nonce` bump; batching two delegations; direct transfer from agent key | ERC-1271 failed-call replay against the patched version; queue skip race | Red-teamer with the agent key tries every order, batch and period-boundary trick | Hidden text, "wallet changed", memo instructions, text in images, token metadata, poisoned memory, lying summary on the approval screen | Kill after broadcast five times; fabricated success from one RPC; revocation racing a pending redemption | 402 changes payee; redirect to new origin; timeout after settlement; replay |
| 8. Quantitative acceptance | 3 of 3 positives; 100% of negative and adversarial cases revert | 1 of 1 veto holds; 0 bypasses | 0 non-obligation reserve outflow; maximum drain ≤ displayed bound in every attempt; benign completion 100% of fixtures | 0 unmandated payments (hard); LLM accuracy ≥ parser with no more false escalations (soft) | 0 duplicates and 0 false finalized states over ≥ 20 fault schedules; 0 post-revocation redemptions | Spend ≤ hot balance or account limit; 0 charges after first failed check (except a preauthorized alternate); 0 duplicates; post-failure spend below the extensions baseline |
| 9. Failure conditions | Any negative succeeds; toolkit not working within 6 working hours | Unpatched mastercopy; any bypass | Any leak or excess | Any unmandated payment (architecture leak); LLM below parser (reframe AI role) | Any duplicate or false status | Facilitator unusable; duplicate; no gain over baseline |
| 10. Onchain evidence | Explorer-verified hashes for positives; revert hashes or traces for negatives; signed delegation JSON | Queue and execution hashes; mastercopy address | Balances before and after; hashes; calculator snapshots | Hashes for paid cases | Receipts; replacement hashes; revoke hash | Settlement hashes; content digests |
| 11. Exposure limit | ≤ 100 test units | ≤ 100 test units | ≤ 100 test units | None beyond X1/X2 | Same units | ≤ 10 test USDC |
| 12. External dependencies | Kit deployment on chosen testnet; faucet | Patched Zodiac on testnet | Period-caveat semantics | Model quota | Two RPC providers | Facilitator uptime; faucet |
| 13. Estimated effort | 0.5–1 engineer-day | About 1 engineer-day | 1–1.5 engineer-days | About 1 engineer-day | 0.5–1 engineer-day | 1–1.5 engineer-days |
| 14. Result implications | Pass: build Stage 1. Fail: Smart Sessions, then route Z, then minimal executor, then X5 | Pass: veto lane available. Fail: escalate by new mandate instead | Pass: loss bound anchors the demo. Fail: drop the bound claim, keep segregation | Decides how strongly to pitch AI | Required for any submission | Pass: fallback or operating-spend module. Fail: drop ServiceMeter |

**X6 prior-art desk check** (about 3 hours): a dated feature table for Coinbase, Crossmint, MetaMask Advanced Permissions, Safe, Request Finance, Cleared, AgentsPay, Ramp and PACE. Accept a contribution statement of at most three cited sentences; if the claim already exists, reduce it to integration quality. No financial exposure.

## S. GO / CONDITIONAL GO / NO-GO recommendations

Three GOs (two candidates and the evaluation and safety components), five CONDITIONAL GOs and six NO-GO groups. GO means proceed to controlled prototype validation now, not production readiness. Security gates override scores: the custom-executor ObligationLock stays NO-GO despite a high upper score range.

| Candidate | Decision | Exact conditions |
| --- | --- | --- |
| HYBRID-008 Mandate-bound obligation treasury | CONDITIONAL GO | Registration confirmed; X1 passes on some route by 14 Oct 23:59 Dhaka; X3 shows 0 unmandated payments; X4 passes; X2 shows 0 reserve leakage and no drain above the bound by 17 Oct 23:59, or Stage 2 is cut |
| IDEA-073 Budget envelope treasury | GO | Proceed inside X1 and X2; becomes NO-GO if period caps or recipient sets fail on the chosen testnet |
| IDEA-001 Bounded invoice payout | GO | Proceed as Stage 1 floor; becomes NO-GO if no route enforces one-use mandates |
| HYBRID-002R ServiceMeter, revised | CONDITIONAL GO | Activate as primary only if every HYBRID-008 route fails X1 by 15 Oct; as an operating-spend module only if X1 and X5 both pass by 15 Oct; disclose weak asset-management coverage |
| HYBRID-009 Obligation-reserved agent commerce | CONDITIONAL GO | Only if X1 and X5 both pass by 15 Oct and Stage 1 is uploaded |
| Components: IDEA-026 loss certificate, IDEA-075 executor self-halt, IDEA-084 red-team session | GO | Build with HYBRID-008; arena stays a logged private session unless time allows public access |
| Components: IDEA-080 veto lane, IDEA-086 temporal floor | CONDITIONAL GO | IDEA-080 only if X1b passes; IDEA-086 only if segregation is rejected (new code) |
| IDEA-074 Forecast-buffer sweep | CONDITIONAL GO | Stretch only if Gate 3 is green by 18 Oct noon |
| HYBRID-001 ObligationLock, custom executor | NO-GO | Unaudited trusted code; its own review bar cannot be met by 20 Oct |
| HYBRID-003 PolicyProof | NO-GO | 10–16 engineer-days; weak task completion; research reserve |
| IDEA-033 Refund governor (as primary) | NO-GO | Weak asset management; may return as one mandate type |
| IDEA-081, IDEA-003 family, HYBRID-004 | NO-GO | Attestation source and evaluator truth unavailable in time |
| IDEA-071 (standalone), IDEA-072, IDEA-083, IDEA-078, IDEA-085, IDEA-077 | NO-GO | Regulated, credit, oracle, spec or saturation blockers; IDEA-071 survives as a HYBRID-008 demo scenario without tax |
| IDEA-079, IDEA-082 (standalone), HYBRID-005, HYBRID-006, HYBRID-007 | NO-GO | No execution, no security boundary, or scope beyond 20 Oct |

## T. Provisional preferred candidate and strongest alternative

**Provisional preference: HYBRID-008, the mandate-bound obligation treasury, built in stages on route M.** It is the only candidate that scores well on asset management, transaction execution and risk control together; its whole spending authority is owner-signed and enforced onchain by existing contracts; and its staging means a failure at any gate still leaves a submittable product. Its parts come from R001 (F01, F03, F22), R003 (C01, C19), R010 C07, R011 C15, R002 (C01, C21) and R014, with Audit A's architecture. Confidence: medium on design, none on execution.

**Strongest alternative: IDEA-073, the budget envelope treasury.** If HYBRID-008's composition fails X2 but X1 passes, envelopes give the most autonomous design that still passes the gate outright, on the same infrastructure. If the whole delegation family fails X1, the contingency in a different family is HYBRID-002R.

The strongest argument against the preference: every mechanism in it already exists, so its innovation case rests on a combination and on two measurable claims (no reserve leakage; drain never above the stated bound) that have not yet been tested. Nothing here commits the team to implementation.

## U. Exact conditions required before final selection

Final selection needs all eleven conditions below, not the highest score. They are compressed to fit the deadline; any that cannot be met becomes a disclosed limitation, not a silent waiver.

- [ ] Team registration confirmed (today)
- [ ] Organizer questions sent; without a reply, use a public EVM testnet and disclose it
- [ ] X1 passes on at least one route by 14 Oct 23:59 Dhaka
- [ ] X3 shows zero unmandated payments; the AI claim is sized to its accuracy result
- [ ] X4 shows zero duplicates and zero false "finalized" states; revocation takes effect
- [ ] Stage 1 uploaded with explorer-verified hashes by 16 Oct 23:59 Dhaka
- [ ] X2 passes before any Stage 2 claim (no reserve leakage; no drain above the bound), or Stage 2 is cut by 17 Oct 23:59
- [ ] X6 yields a contribution statement of at most three cited sentences
- [ ] Security self-assessment lists the permission tiers, the loss formula and assumptions A1–A5, every untested case, and the source-completeness disclosure
- [ ] No unbounded approval, root key in the runtime, unpatched Zodiac module or hidden signing route survives review
- [ ] A second team member reproduces the demo from a clean checkout, including one failure and one recovery

**Decision-control checks for this package (Phase 11)**

- [x] Every critical integrity finding has a disposition (Audit B reports none critical; B-42)
- [x] Every named high-priority omission is addressed (B-04 to B-16); unnamed records are explicitly deferred (B-43)
- [x] All 27 decision-changing adversarial findings are adjudicated (section C)
- [x] Restored ideas were scored: IDEA-073, IDEA-074, IDEA-081 and HYBRID-009 are ranked; components were gated
- [x] Novelty claims carry evidence or are labelled unverified (section J)
- [x] No critical security issue is waived (section L)
- [x] The top three run on documented infrastructure (section O)
- [x] No experiment is reported as completed
- [x] Material uncertainties are preserved (sections O and Q)
- [x] Unavailable sources are named (section B)
- [x] Coverage is not claimed: Audit B did not establish full coverage of the 14 reports, and this package does not either

## V. Comprehensive change log from the original synthesis

Thirty-four changes, each traced to a finding in section C (Audit A, prefix A-) or section D (Audit B, prefix B-), where its evidence, decision, impact and remaining uncertainty are recorded. The original package is unchanged; these changes define the new version.

| # | Change | Type | Synthesis item | Findings | Impact |
| --- | --- | --- | --- | --- | --- |
| V-01 | Third criterion scored as "Innovation & interaction" | Rubric correction | Section 8 | A-03 | Interaction now in Layer A |
| V-02 | Selection gates replaced by a gated plan to 20 Oct | Process | Section 18 | A-01, A-23 | Decision possible in time |
| V-03 | Registration flagged as a submission gate | Logistics | Section 3 | A-02 | User action today |
| V-04 | ObligationLock novelty lowered to 10–11 | Score | Section 8 | A-04, A-16 | Favourite no longer leads as specified |
| V-05 | HYBRID-001 custom executor gated FAIL this round | Gate | Section 9.1 | A-26 | Falls to seventh |
| V-06 | HYBRID-008 added (segregated accounts, existing caveats, tiers) | New hybrid | — | A-05, A-21, B-08, B-10, B-27 | Ranked first |
| V-07 | IDEA-002 split; IDEA-073 envelopes added | Split | IDEA-002 | B-08 | IDEA-073 ranked second |
| V-08 | IDEA-074 forecast-buffer sweep split from IDEA-002 | Split | IDEA-002, IDEA-013 | B-09, A-06 | Stretch option |
| V-09 | IDEA-071 batch payroll split from IDEA-021 | Split | IDEA-021 | B-05, B-06 | Demo scenario for HYBRID-008 |
| V-10 | R009 C17 detached and left unresolved | Lineage | IDEA-021 | B-07 | None |
| V-11 | IDEA-072 indemnity claims split from IDEA-022 | Split | IDEA-022 | B-04 | None |
| V-12 | IDEA-075 self-limiting agent split; IDEA-009 labelled redesign | Split | IDEA-009 | B-17 | Executor self-halt component |
| V-13 | IDEA-076 behavioural drift split; IDEA-049 labelled redesign with no source | Split | IDEA-049 | B-18 | Component |
| V-14 | IDEA-077 repayment optimizer split; IDEA-038 labelled redesign with no source | Split | IDEA-038 | B-19 | None |
| V-15 | IDEA-078 delivery-signal payment split; oracle test restored | Split | IDEA-070 | B-23, B-31 | None |
| V-16 | R011 C02 re-pointed to IDEA-003 | Lineage | IDEA-070 | B-24 | None |
| V-17 | IDEA-079 trace analyzer re-pointed | Lineage | IDEA-032, IDEA-047 | B-22 | None |
| V-18 | IDEA-080 veto lane restored | Restore | IDEA-001 | B-10 | Route Z option |
| V-19 | IDEA-081 attestation-gated escrow restored with bootstrap dependency | Restore | IDEA-003, IDEA-019 | B-12, B-32 | Ranked tenth; fails this round |
| V-20 | IDEA-082 dual-model gate restored | Restore | IDEA-034, IDEA-048 | B-13 | Optional filter |
| V-21 | IDEA-083 reverse factoring split | Split | IDEA-043 | B-15 | None |
| V-22 | IDEA-084 red-team arena restored | Restore | IDEA-032 | B-27 | HYBRID-008 evaluation layer |
| V-23 | IDEA-085 onchain AP2 mandate verifier restored | Restore | IDEA-064 | B-16 | Deferred option |
| V-24 | IDEA-086 temporal floor restored | Restore | IDEA-025, IDEA-011 | B-26 | HYBRID-008 option |
| V-25 | IDEA-026 elevated; R003 C19 and R014 credited | Elevate | IDEA-026 | A-21, B-36 | Core control of HYBRID-008 |
| V-26 | HYBRID-009 restored from R001 F22 | Restore | IDEA-002, IDEA-018 | A-15 | Ranked fifth |
| V-27 | HYBRID-002 revised to HYBRID-002R (smart-account payer documented) | Revision | HYBRID-002 | A-11, A-18 | Feasibility up; ranked fourth |
| V-28 | PolicyLayer removed from prior art | Prior art | Audit A matrix | A-19 | None |
| V-29 | IDEA-037 restored to chain-to-chain; HYBRID-003 labelled redesign and failed this round | Correction, gate | IDEA-037, HYBRID-003 | B-30, A-12 | Falls to eighth |
| V-30 | Variants added: IDEA-003/Q, IDEA-022/S, IDEA-056/B, IDEA-042/T, IDEA-021/C, IDEA-008/C, IDEA-031/E, IDEA-027/R | Expand | Several | B-11, B-14, B-25, B-28, B-29, B-33 | None on ranking |
| V-31 | Lineage fixes: R010 C10 to IDEA-057; R008 C03 to IDEA-059 and IDEA-064 | Lineage | IDEA-002, IDEA-009 | B-20, B-21 | None |
| V-32 | CL-002 and CL-022 attributions corrected | Claim log | Appendix A | B-35, B-36 | None |
| V-33 | URL ledger split into one URL per record (227 occurrences, 181 unique) | Data | research\_ledgers.json | B-37 | None |
| V-34 | Token-metadata injection and fee-bounded replacement added to tests | Threat model | Section 11 | B-33, B-34 | X3, X4 extended |

## Sources

**Inputs read directly:** the synthesis package (report, memo, ledgers, crosswalk, 14 anonymized source exports); the All responses DOCX; Audit A (Agent Wallet Adversarial Review, 13 Oct 2026); Audit B (merger integrity audit report, main file only). Source passages are cited by report and anchor (for example R002 L00640).

**Pages opened on 14 Oct 2026**

- [x402 wallet compatibility](https://docs.x402.org/advanced-concepts/wallet-compatibility)
- [MetaMask delegation framework repository](https://github.com/MetaMask/delegation-framework)
- [Zodiac Delay modifier](https://github.com/gnosisguild/zodiac-modifier-delay)
- [ENS EP 5.12: Roles Modifier v2 migration](https://docs.ens.domains/dao/proposals/5.12)
- [Freysa challenge write-up (Simon Willison, 29 Nov 2024)](https://simonwillison.net/2024/Nov/29/0xfreysaagent/)
- [PolicyLayer](https://policylayer.com/)

**Pages opened on 13 Oct 2026 for Audit A and relied on here**

- [International Track rules PDF](https://www.its.ac.id/international/wp-content/uploads/sites/66/2026/10/PBCSF-Appendix-2-Problem-Description-and-Competition-Rules-for-International-Track.pdf)
- [IEEE CIS Singapore: 2026 FinTechathon](https://www.ieee-cis-singapore.org/2026-fintechathon)
- [MetaMask caveats reference](https://docs.metamask.io/smart-accounts-kit/reference/delegation/caveats/) and [supported networks](https://docs.metamask.io/smart-accounts-kit/get-started/supported-networks/)
- [Biconomy Smart Sessions policies](https://docs.biconomy.io/new/smart-sessions/policies)
- [Zodiac post-mortem](https://engineering.gnosisguild.org/posts/zodiac-post-mortem)
- [Circle spending policies](https://developers.circle.com/agent-stack/agent-wallets/wallet-operations/custom-policies)
- [x402 network and token support](https://docs.x402.org/core-concepts/network-and-token-support), [payment identifier](https://docs.x402.org/extensions/payment-identifier), [signed offers and receipts](https://docs.x402.org/extensions/offer-receipt)
- [Coinbase Agentic Wallet](https://docs.cdp.coinbase.com/agentic-wallet/welcome)
- [Aave v3 testing and debugging](https://aave.com/docs/aave-v3/smart-contracts/testing-and-debugging)
- [PACE, arXiv 2608.17220](https://arxiv.org/abs/2608.17220)
- [Cleared whitepaper](https://clearedpay.xyz/cleared-whitepaper.pdf)
- [AgentsPay bill-pay agents](https://agentspay.ai/use-cases/bill-pay-agents)
- [Request Finance (Circle partner directory)](https://partners.circle.com/partner/request-finance)
- [Ramp AP agents announcement](https://ramp.com/blog/ramp-ap-agents-announcement)

**Not readable:** e-invoice preprint arXiv 2609.37819 (rate-limited on 13 Oct, not retried); Ethereum Attestation Service deployment page (metadata only); fintechathon.g-ican.com (JavaScript only).
