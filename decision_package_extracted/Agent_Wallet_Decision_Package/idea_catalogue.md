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
