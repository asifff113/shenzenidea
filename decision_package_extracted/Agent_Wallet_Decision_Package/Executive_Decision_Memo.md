# Agent Wallet — executive decision memo

Research cutoff: 13 October 2026. Research only; no implementation or experiments run.

**Provisionally prefer HYBRID-001, ObligationLock: an autonomous accounts-payable wallet that can pay only independently authorized obligations while preserving funds committed to other obligations.** Its value proposition is a narrow financial invariant: an invoice is evidence to reconcile, not authority to spend. A valid vendor address and a daily cap are insufficient when a compromised agent can invent invoices to that vendor.

The most credible first customer is a small treasury whose counterparties already accept the same onchain asset. That gives blockchain a concrete role: independently enforceable shared payment state and settlement. For an ordinary SME paying only bank accounts, an ERP and payment API may solve the problem better. The project must demonstrate that its chosen customers need the chain, not merely that a transfer hash can be produced.

The proposal is an integration hypothesis, not a new wallet primitive. Broad claims of “first safe agent wallet,” “first intent-bound transaction,” “first AI escrow,” or “first autonomous invoice payment” do not survive review. Existing research and products materially overlap. PACE is direct prior art for execution binding [S003]; Cleared and Request weaken invoice-settlement novelty [S016,S035]; a recent e-invoice preprint is an additional threat to uniqueness claims [S018]. These findings reduce the innovation estimate and make an explicit baseline comparison mandatory.

**Runner-up: HYBRID-002, ServiceMeter with failure stop.** It purchases a narrow digital service within a global job budget, verifies an objective result, and stops further spending after failure. Existing signed receipts and idempotency must be enabled in the baseline; simply adding them is not a contribution. The potential contribution is measured reduction in wasted spending after delivery failure while retaining useful task completion.

**Contingency: IDEA-001, bounded invoice payout.** Drop reserve optimization and novel contract logic if they cannot be verified promptly. Keep independently authorized payment terms, one-use execution, aggregate limits, owner recovery and truthful receipt status. It is less differentiated but leads the conservative and strict-security scenarios. If it cannot enforce the one-use mandate through every reachable signing path, it is also a no-go.

Three facts govern the decision. First, generic wallet controls are already widely documented. Second, several reports rely on unsupported security assumptions: maximum loss is not necessarily a daily cap; a hash does not prove a valid financial obligation; MPC does not make an authorized payment financially correct. Third, documentation can conceal a practical blocker: Circle's current spending-policy guide explicitly excludes testnet wallets [S007]. A testnet design cannot assume those controls exist there.

**Strongest argument against ObligationLock:** it may be conventional purchase-order matching and reserve accounting repackaged as an agent wallet, with a new enforcement contract adding risk. If existing systems already enforce the same invariant, or users value simple capped payments equally, the extra complexity is not justified. The recommendation changes to the contingency or runner-up under the falsification conditions in Section 18.


The full report contains the source audit, requirements, 70 ideas, seven hybrids, 51 claim checks, 40 external source records, rankings, security architectures and seven decisive experiments.

Source completeness: all supplied report text was reviewed; R004 is abbreviated, R006 damaged, R007 a summary, R008 supplies five of ten stated concepts, and R014 begins at section 7.
