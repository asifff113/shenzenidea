# Independent Deep Research Report — 2026 Shenzhen International FinTech Competition, Topic F: Agent Wallet (Autonomous On-chain Wallet)

**Research cutoff:** 2026-10-13 (all time-sensitive findings dated)
**Track:** International Track, Topic F
**Status:** Independent discovery phase — conclusions to be challenged/merged with other AI research systems
**Evidence labels used throughout:** `[OFFICIAL]` `[VERIFIED]` `[INFERENCE]` `[PROPOSED]` `[HYPOTHESIS]` `[CLARIFY]`

---

## 1. Executive Findings (TL;DR)

1. **Deadline is 7 days away.** Registration + submission close **2026-10-20 23:59 Beijing (UTC+8)** `[OFFICIAL]`. Any concept must be MVP-buildable on testnet in roughly one engineer-week by a student team.
2. **Execution evidence is non-negotiable and on-chain.** For Topic F the rules explicitly require **real on-chain transaction hashes** (not sandbox logs) `[OFFICIAL]`. They do **not** specify testnet vs mainnet, supported chains, or allowed tokens `[CLARIFY]`. A testnet strategy with multiple verified hashes is the lowest-risk interpretation unless organizers state otherwise.
3. **The category is extremely crowded at the infrastructure layer.** As of mid-2026, Coinbase (AgentKit/Agentic Wallet/x402/Base MCP), MetaMask (Agent Wallet/Smart Accounts Kit/Gator), Circle (Agent Stack/Arc/Nanopayments), Privy (Stripe), Turnkey, Crossmint (lobster.cash), OKX, BNB Chain, Kite, Virtuals, and others all ship policy-controlled agent wallets `[VERIFIED]`. A "generic AI crypto wallet" or "chatbot that swaps" cannot win.
4. **The defensible white space is in *financial workflows*, not wallet infrastructure.** Existing vendors solve *how an agent holds keys and spends within limits*. They do **not** solve end-to-end *autonomous accounts payable / invoice-escrow settlement / treasury operations with verifiable receipts and human escalation* — which simultaneously hit all three official pillars (asset management, transaction execution, risk control) `[INFERENCE]`.
5. **Security is the real differentiator and 30% of the score.** Real-world exploits (Grok wallet NFT+Morse-code injection, May 2026; Bunq 1-cent transaction-description injection, June 2026; ElizaOS shared-memory poisoning) prove prompt injection is the dominant threat `[VERIFIED]`. A design with **contract-enforced permissions (ERC-7710/ERC-7715 session keys), mandatory transaction simulation, allowlists, spending caps, and an emergency stop** — where the LLM never touches a private key — is both implementable and judge-pleasing.
6. **Recommended near-term MVP (highest expected score per unit effort):** "**Autonomous AP & Escrow Treasury Agent**" — an AI agent that ingests invoices/bills, validates them, routes payment from a policy-enforced Safe smart account (session-key scoped, allowlisted recipients, per-tx and rolling caps), holds funds in on-chain escrow until deliverable attestation, produces a verifiable on-chain receipt, and escalates to human approval above threshold. Built on Safe + ZeroDev/Biconomy session keys (or Coinbase AgentKit on Base testnet) + a small escrow contract, in TypeScript, demoable end-to-end with real testnet hashes `[PROPOSED]`.
7. **Avoid:** autonomous trading/investment bots (crowded, high regulatory/security risk, judges may discount), and any design where the LLM holds or can derive a private key. **Most original higher-risk idea:** ZK/enclave-verified policy compliance (Autonomify-style) — strong novelty, high implementation risk in one week. **Best hybrid:** AP/Escrow agent + auto-defense incident-response module + natural-language policy compiler.

---

## 2. Verified Official Requirements (Research Task 1)

### 2.1 Exact Topic F statement `[OFFICIAL]`
> "**Topic F — Agent Wallet / Autonomous On-chain Wallet**: The track's signature topic — build an AI wallet agent that autonomously executes on-chain operations (**asset management, transaction execution, risk control**). Ambitious ideas are encouraged, with a 0–5 point challenge bonus."
>
> — PBCSF Appendix 2, Problem Description and Competition Rules for International Track (verified 2026-10-13)

Theme of the whole competition: **"AI as a Financial Participant"** `[OFFICIAL]`.

### 2.2 Shared requirements & scoring `[OFFICIAL]`
| Criterion | Weight |
|---|---|
| Task completion | 40% |
| Security & compliance | 30% |
| Innovation & interaction | 30% |
| Challenge bonus (on-chain exploration) | 0–5 points (additive) |

"All six topics share the same core capability requirements and scoring criteria; choosing the on-chain topic does not affect scoring." `[OFFICIAL]`

### 2.3 Submission checklist `[OFFICIAL]` (deadline 2026-10-20 23:59 UTC+8)
1. **Technical documentation** — system architecture, core algorithm description, security design.
2. **Presentation deck** — final presentation ≤ 10 minutes.
3. **Demo video** — optional, ≤ 5 minutes.
4. **Security self-assessment report** — *permission-tier implementation and known-risk list* (explicitly required).
5. **Source code** — with README, GitHub repos, deployment instructions, test cases.
6. **Execution evidence** — for on-chain topic: **real on-chain transaction hashes** (non-on-chain topics may use simulated-account/sandbox logs + demo video).

Other rules: teams of 2–5, ≥60% non-Chinese nationals, all enrolled outside Greater China; English; entries independent, third-party/open-source components must be properly licensed; IP vests with contestants. Finals in Shenzhen 2026-11-21 to 23; finalists' travel/accommodation covered. Prize pool RMB 250,000.

### 2.4 What the rules explicitly require vs. do not specify
| Explicitly required `[OFFICIAL]` | Not specified — `[CLARIFY]` with organizers |
|---|---|
| Real on-chain transaction hashes as evidence | Testnet vs mainnet hashes (assume testnet acceptable unless told) |
| Autonomous on-chain ops: asset mgmt + tx execution + risk control | Which chains/tokens are supported/expected |
| Security self-assessment: permission tiers + known-risk list | Whether autonomous trading is required (it is NOT — the three pillars are broader) |
| 0–5 on-chain exploration bonus | How the bonus is assessed (depth? number of chains? novel protocol use?) |
| Proper licensing of third-party code | Whether pre-existing SDKs/smart contracts are acceptable (standard open-source licensing strongly implies yes, but confirm) |
| Source code + README + deployment + tests | Whether human approvals are allowed (likely yes — "risk control" implies oversight; confirm) |
| Demo video optional ≤5 min | Third-party infrastructure/API dependency limits |

**Organizer clarification email:** wangyr@pbcsf.tsinghua.edu.cn / fintechathon@ican-x.com `[OFFICIAL]`. Recommended questions: (a) testnet hashes acceptable? (b) preferred chain(s)? (c) is human-in-the-loop approval permitted/expected? (d) bonus rubric? `[CLARIFY]`

### 2.5 Scoring implications `[INFERENCE]`
- **40% task completion** → reliability of the end-to-end demo and hash evidence dominates. A flashy-but-flaky idea loses.
- **30% security** → the mandatory security self-assessment (permission tiers + known risks) means a well-documented threat model and enforceable boundaries can score heavily. Architectural controls beat prompt-only rules.
- **30% innovation & interaction** → natural-language policy setting, verifiable receipts, multi-agent attenuation, or an auto-defense module are good interaction/innovation hooks.
- **0–5 bonus** → using a genuinely novel on-chain primitive (escrow state machine, streaming payments, delegated permissions, cross-chain CCTP) likely helps; chaining many tokens likely does not. Do not over-optimize.

---

## 3. Global Competitor & Prior-Art Landscape (Research Task 2)

Verified 2026-10-13. "Build-on" = infrastructure we can reuse; "competitor" = solves a similar end-user problem.

### 3.1 Major commercial agent-wallet infrastructure
| # | System | Category | What it actually does (verified) | Custody/signing | Security controls | Networks | Build-on or competitor | Source (access 2026-10-13) |
|---|---|---|---|---|---|---|---|---|
| 1 | **Coinbase AgentKit + Agentic Wallet + x402 + Base MCP** | Agent wallet + payment protocol + MCP tools | Agentic Wallet (launched 2026-02-11): agents hold funds, send, trade, earn yield; programmable spending limits, enclave isolation, KYT screening; $0.005/wallet-op, 5k free/mo. x402: HTTP 402 micropayments, >$100M volume, 90% on Base. Base MCP: agent trades on Uniswap, Morpho, Moonwell, Avantis via tool menu. | Custodial (CDP) | Session caps, per-tx limits, KYT, policy blocks | Base (default), Solana, Polygon + testnets; trading Base mainnet only | **Build-on** (fastest path to real hashes) | docs.cdp.coinbase.com; 0fiat.com blog 2026-09-23; grokipedia |
| 2 | **MetaMask Agent Wallet + Smart Accounts Kit + Gator (Delegation Framework)** | Self-custodial agent wallet + delegation contracts | Live 2026-08-06 (early access from 2026-06-08). Self-custodial; mandatory 3-step pipeline per tx: simulation + Blockaid threat scan + MEV protection (Smart Transactions). Guard Mode (2FA on out-of-policy/threat) vs Beast Mode. ERC-7710 delegations + ERC-7715 permission requests; user sets daily spend, protocol allowlist. CoinFello open-sourced agent skill (MIT) on this stack (2026-03). | Self-custodial; TEE keys (Cubist), exportable | On-chain contract enforcement of delegation bounds; tx simulation; Blockaid; MEV protection | Ethereum, Linea, Arbitrum, Avalanche, Optimism, Base, Polygon, BNB, Sei, Hyperliquid | **Build-on** (self-custody story strong for security score) | metamask.io news 2026-06/08; metamask.io best-agentic-wallets-2026 |
| 3 | **Circle Agent Stack (Agent Wallets, CLI, Nanopayments, Agent Marketplace) + Arc L1** | Agent wallet + payments + L1 | Launched 2026-05-11. Agent Wallets: 2-of-2 MPC, key shares never exposed to agent, user custody; spending policies (time-bound, allow/block lists); sanctions screening pre-submission. Nanopayments: gasless USDC as small as $0.000001 via Circle Gateway. Arc mainnet launched 2026-09-16 (USDC fees, BlackRock/Visa/Mastercard validators). | User-custody 2-of-2 MPC | Off-chain policy + sanctions screening; gasless | Arc, supported EVM chains, x402 | **Build-on** (CLI = zero integration code) | developers.circle.com/agent-stack; circle.com press 2026-05/09 |
| 4 | **Privy (Stripe) Agent Wallets + policy engine** | Embedded/server wallet + policy | Agent-owned or delegated-signing wallets; policies restrict tokens/chains, per-tx and time-window caps, recipient/contract allowlists. Keys sharded (Shamir) in AWS Nitro enclaves, never whole. SOC 2 Type I/II, HackerOne, audited by Cure53/Zellic/Doyensec. | Non-custodial via sharding; enclaves | Off-chain policy engine (cryptographically enforced at signing infra), approvals, human-in-loop | EVM via integrations | **Build-on** | privy.io/agent-wallets; docs.privy.io; openfort comparison 2026-09-09 |
| 5 | **Turnkey** | Signing infra (TEE) | JSON policy docs (ALLOW/DENY + quorum consensus); root quorum ultimate authority; remote attestation; 100–150ms signing. EIP-7702 support. | TEE-isolated keys | Policy evaluated in enclave; quorum approvals | EVM, Solana | **Build-on** (signer layer) | onchainden.com Turnkey vs Privy 2026-09-15 |
| 6 | **Crossmint + lobster.cash** | Wallet + multi-rail payments | Smart-contract wallets, decoupled signer (TEE agent key + owner key); on-chain-enforced spending caps/allowlists. Native x402 + Visa/Mastercard agentic rails; lobster.cash (with Visa, Solana, Circle, Stytch) picks rail per purchase. KYC/KYB/AML/travel-rule built in. | Smart-contract wallet + modular signers | On-chain policy enforcement + compliance | EVM, Solana, Stellar + card rails | Build-on / competitor | crossmint.com/learn/agent-wallets-compared 2026-03-15 |
| 7 | **OKX AI + OKX Agentic Wallet** | Agent marketplace + wallet | Launched 2026-06-30. Agent Marketplace + Task Marketplace; escrow-based or pay-per-call settlement in USDT/USDG; staked-evaluator disputes; shared on-chain identity/reputation. Up to 50 sub-wallets, ~20 networks, gas-free X Layer, native x402; risk-graded txs, one-click revocation. | Self-custodial TEE (Onchain OS) | Risk grading, auto-block critical, simulation-first | ~20 networks incl X Layer | **Competitor** (A2A commerce) | okx.com/learn/okx-ai; thirdweb blog 2026-06-29 |
| 8 | **BNB Agent Studio (v2)** | One-prompt agent deployment | CLI/MCP; deploys agent with wallet + on-chain identity (ERC-8004 Agent Employment) + task interface (ERC-8183 Agentic Commerce escrow) + x402; Altana self-custodial wallet enforces on-chain spend limits/allowlists. v2 (2026-08-19) completes hire→execute→attest→settle loop. | Self-custodial (Altana) | On-chain enforced limits | BSC | Build-on / competitor | bnbchain.org/en/bnb-agent-studio; dailyaiworld 2026-08-20 |
| 9 | **Kite Agent Passport + Kite Chain** | Agent identity + wallet | Passport = cryptographic identity + funded wallet + programmable spending rules + verifiable receipts; one session signature (not per-tx); time-boxed sessions per agent (Claude/ChatGPT/Cursor). Kite Chain L1 launched 2026-04-30. | User account + scoped agent sessions | Spending rules, verifiable receipts | Kite Chain (Avalanche/EVM) | Competitor (receipts angle) | docs.gokite.ai; theagenttimes 2026-06 |
| 10 | **Virtuals Protocol / EconomyOS** | Agent launchpad | Each agent gets wallet (non-custodial), virtual payment card, email inbox, optional token, compute credit; owners set per-agent spending limits. Commerce rebuilt around draft ERC-8183. | Non-custodial | Spending limits per agent | Base, Solana, Arc, Robinhood Chain | Competitor | datawallet.com 2026-10-09 |
| 11 | **AWS Bedrock AgentCore Payments** | Cloud agent payments | Preview 2026-05-07; built on x402 + Stripe/Privy wallet connectivity; ~200ms settlement on Base, sub-cent cost. | Via Privy/Stripe | x402 + policy | Base | Build-on | vaasblock.com 2026-09-01 |
| 12 | **BitGo** | Institutional custody + agent policy | MPC/multisig; wallet-level policy (spending limits, approval rules, destination restrictions); deterministic pre-execution checks. | Institutional custody | Policy + approval governance | Multi-chain | Build-on (enterprise angle) | metamask.io best-agentic-wallets-2026 |
| 13 | **Openfort** | Open-source smart-account wallet | Native ERC-4337 + EIP-7702; self-hostable; gas sponsorship free tier; stablecoin/fintech/AI-agent focus. | Smart account | Session keys, gas sponsorship | EVM | **Build-on** (open-source) | openfort.io blog 2026-07/09 |
| 14 | **Nevermined** | Agent monetization/payments infra | Metering, access control, pricing, settlement for agent services; A2A commerce. | — | Metering, rate limits | Multi | Build-on / competitor | nevermined.ai 2026-05-16 |
| 15 | **Skyfire** | Agent wallet/payments infra | Agent wallet creation, funding, real-time spending controls, crypto settlement. (Details limited; pricing undisclosed — `[UNVERIFIED GAP]`) | — | Spending controls | — | Build-on (verify before use) | nevermined comparison 2026-05-16 |

### 3.2 Standards & smart-account infrastructure (build-on primitives)
| # | System | What it does | Relevance | Source |
|---|---|---|---|---|
| 16 | **Safe Smart Accounts + Safe Modules** | Most deployed multisig/smart account; Safe4337Module; modular hooks/executors | Foundation for policy-enforced account; audited | docs.safe.global |
| 17 | **ERC-4337** | Account abstraction; UserOperations, EntryPoint, paymasters | Gasless, custom validation | docs.safe.global; spark.money |
| 18 | **ERC-7579** | Modular smart accounts (validators/executors/hooks/fallbacks) | Composable security modules | docs.safe.global; spark.money |
| 19 | **ERC-7715** | `wallet_grantPermissions` JSON-RPC; scoped time-bounded session grants | Standard permission request | coincub 2026-08-15; ethereum EIP |
| 20 | **ERC-7710 + MetaMask Gator** | On-chain delegation manager; caveat enforcers; permission attenuation (parent grant narrowed to sub-agent) | Contract-enforced agent bounds; hierarchical sub-agents | metamask.io; ethereum.org tools |
| 21 | **EIP-7702** | EOA temporarily delegates code to smart contract | Avoids account migration | blockeden 2026-04 |
| 22 | **ZeroDev / Biconomy / Alchemy Account Kit** | Session-key SDKs; create/revoke scoped session keys | Fastest implementation of spending limits | spark.money 2026-09-05 |
| 23 | **Rhinestone Smart Sessions** | Session-key module (used by Cleared Protocol) | Build-on | clearedpay.xyz whitepaper |
| 24 | **Blockaid / Forta** | Transaction threat scanning (used by MetaMask Agent Wallet) | Pre-execution security | metamask.io |
| 25 | **Tenderly** | Simulation, Virtual TestNets, debug_traceTransaction call tracing | Pre-flight + post-exec verification | chain.link hack-26 Autonomify |
| 26 | **x402 (Linux Foundation)** | HTTP 402 stablecoin micropayments; open spec | M2M/API payments | x402.org whitepaper |
| 27 | **ERC-8004 (Agent Employment) / ERC-8183 (Agentic Commerce)** | Draft: job postings + escrow with evaluator attestation (Open→Funded→Submitted→Terminal) | Directly relevant to escrow workflows | eips.ethereum.org/EIPS/eip-8183 |
| 28 | **Clawnch** | Plain-English policy → ERC-7710 caveats compiler | Interaction/innovation hook | metamask.io news 2026-08-26 |
| 29 | **Autonomify** | ZK (Noir) proof that tx satisfies policy held in AWS Nitro enclave; ERC-7710 execution; Base Sepolia demo | Frontier: verifiable policy compliance | chain.link hack-26 |
| 30 | **World ID human-in-the-loop** | ZK proof a unique human authorized a specific action; Vercel Workflow SDK integration | Auditable human approval | world.org blog 2026-04-16 |

### 3.3 Financial-workflow prior art (escrow, payroll, invoicing, streaming)
| # | System | What it does | Gap we can exploit | Source |
|---|---|---|---|---|
| 31 | **Cleared Protocol** | Verifiable invoicing + settlement; Invoice NFTs; Safe{7579}+Rhinestone sessions; roadmap v2 adds MCP/session keys, v3 credit scoring, v4 reputation | v2 agent features not shipped; no AI autonomy | clearedpay.xyz whitepaper 2026-02 |
| 32 | **Fundline** | AI-workflow escrow + bulk payroll in USDC; non-custodial; Arc/Ethereum/Base; on-chain receipts | No autonomous invoice validation/policy engine; Arc-testnet focused | fundline.xyz |
| 33 | **Request Network** | Decentralized invoicing, on-chain storage, recurring | No AI agent; no escrow | spark.money 2026-08-12 |
| 34 | **Superfluid / Sablier** | Token streaming / vesting / payroll schedules | No AI; deterministic only | spark.money |
| 35 | **Bitwage / Rise / Deel** | Crypto payroll/compliance | Centralized; no agent autonomy | spark.money |
| 36 | **Olas / Autonolas (Mech Marketplace, Pearl)** | Decentralized agent coordination; agents pay each other for services; >20.8M on-chain txs (2026-10-11); Polystrat uses Safe | Focus on prediction/DeFi/agent services, not AP/treasury | olas.network |
| 37 | **ElizaOS** | Open-source (MIT) agent framework, TS, 18k+ stars, multi-chain connectors; company wound down 2026-04, community-maintained; shared-RAG-memory poisoning demonstrated (CrAIBench) | Use as orchestration base but harden memory | ownyourmind.ai 2026-10-03; ultralab 2026-05-07 |
| 38 | **Ant Group AI Wallet + Token Pay** (Alipay, 2026-05) | Embedded per-agent pre-authorization limits, high-risk intercept, face verification; B2B micro-settlement | China-only, closed; validates the policy-wallet pattern | CSDN report 2026-05-27 |

### 3.4 Feature inventory & gap analysis `[INFERENCE]`
**What is well-solved (do not reinvent):** key custody (MPC/TEE/smart accounts), basic spending limits & allowlists, x402 micropayments, tx simulation/threat scan, session-key standards.
**What is absent or weak (opportunity):**
- End-to-end **autonomous accounts-payable** (ingest invoice → validate → escrow → release on attestation → receipt) with AI reasoning — Cleared/Fundline are partial, deterministic, or workflow-specific.
- **Verifiable, tamper-evident agent decision receipts** tied to on-chain execution (Kite has receipts; not broadly adopted; no standard).
- **Hierarchical permission attenuation** in a demoable multi-agent treasury (orchestrator → sub-agent daily slices). Documented as a standard property (ERC-7710) but rarely demonstrated.
- **Auto-defense / incident response** (auto-revoke approvals, pause sessions, emergency stop on anomaly). No major vendor markets an autonomous defensive agent.
- **Natural-language policy compilation with a safety/audit layer** (Clawnch exists but is a launchpad; not integrated into a treasury product).
- **Conservative, bounded asset management** (sweep idle stablecoins into audited lending with auto-exit) integrated with payments — most "asset management" agents are aggressive trading bots.

---

## 4. Relevant Academic & Security Research (Research Task 3)

All claims below change the design; cited.

1. **Prompt injection = remote code execution with capital access.** "AI Agents in Cryptoland: Practical Attacks and No Silver Bullet" (arXiv:2503.16248, 2025; verified 2026-10-13) demonstrates direct and indirect prompt injection against crypto agents and concludes no single defense suffices. → **Design implication:** assume the LLM will be compromised; bound loss contractually, not by prompting. ["https://arxiv.org/html/2503.16248v1"]
2. **Indirect injection via tool outputs / transaction metadata.** Blue41 (disclosed June 2026) hijacked Bunq's production AI assistant with a €0.01 transfer whose *description field* contained an injection payload; the agent read the transaction list via API and executed attacker instructions. → **Design implication:** treat all invoice text, memo fields, API responses, and web content as untrusted; never let free text from these sources select recipient/amount; parse structured fields with a deterministic validator. ["https://bizflowai.io/blog/a-1-cent-transfer-can-hijack-a-banking-ai-agent-heres-how"]
3. **Real-world fund loss.** Grok wallet integration (May 2026): attacker sent a crafted NFT granting elevated permissions, then hid instructions in Morse code in an X reply (safety layer classified Morse as harmless); ~3B DRB tokens transferred, ~80% recovered. → **Design implication:** (a) never auto-accept inbound NFTs/token approvals; (b) strip/normalize all inbound text (Morse, base64, homoglyphs, off-screen CSS — Rescuna advisory 2026 documented these against Llama/Gemini). ["https://www.spark.money/research/ai-wallet-security-attack-surface","https://zylos.ai/research/2026-07-15-agentic-commerce-payment-protocols-ai-agents/"]
4. **Shared-memory poisoning.** ElizaOS shared RAG memory was poisoned via Discord; later legitimate X requests retrieved the poisoned memory and the agent acted on injected instructions (CrAIBench, Sepolia demo). → **Design implication:** isolate agent memory per task/session; write-once audit log separate from retrievable memory. ["https://ultralab.tw/en/blog/crypto-ai-agent-prompt-injection-static-analysis"]
5. **Data-exfiltration benchmark.** "Simple Prompt Injection Attacks Can Leak Personal Data..." (arXiv:2506.01055, AgentDojo, 2025): 15–50% utility drop under attack, ~20% avg attack success rate; some defenses reduce ASR to zero; authorization/data-extraction tasks have highest ASR. → **Design implication:** include adversarial tests in security self-assessment; network egress control (no arbitrary HTTP posts from the agent) blocks exfiltration. ["https://arxiv.org/pdf/2506.01055v1.pdf"]
6. **OWASP LLM Top 10 (2025) / Agentic Apps (2026):** "Excessive Agency" (LLM06) — excessive functionality, permissions, autonomy. Procurement-workflow injection example: injected document says "approve all orders above $500." → **Design implication:** principle of least privilege at the tool/session-key level; the agent's maximum authority must be visible and revocable. ["https://zylos.ai/research/2026-07-15-agentic-commerce-payment-protocols-ai-agents/","https://www.zealynx.io/research/adversarial-security/ai-defi-prompt-injection"]
7. **Permission attenuation is real and standard.** ERC-7710/7715 support narrowing a grant before passing to a sub-component; orchestrator with $500/wk can hand sub-agent $10/day slice that cannot be widened (Coincub, Spark; MetaMask Gator). → **Design implication:** multi-agent designs are *more* secure if built on attenuated delegations, not less. ["https://coincub.com/wallets/guides/how-programmable-wallets-can-limit-autonomous-spending/","https://www.spark.money/research/fintech-ai-agent-payment-authorization"]
8. **Transaction simulation + call tracing is production-grade** (Tenderly; MetaMask mandates simulation on every tx; Autonomify uses debug_traceTransaction to detect inner-call failures). → **Design implication:** pre-flight simulation and post-execution receipt verification are mandatory, cheap, and score well. ["https://chain.link/hack-26/projects/autonomify"]
9. **ZK-verified policy compliance** (Autonomify, Chainlink hack 2026): policy in Nitro enclave, Noir proof of compliance, on-chain executor verifies proof via ERC-7710. → **Design implication:** high-novelty option; too risky for 1-week MVP but a strong roadmap/bonus item. ["https://chain.link/hack-26/projects/autonomify"]
10. **Human authorization is auditable.** World ID + Vercel Workflow SDK: ZK proof a unique human authorized a specific action, visible in every execution run. → **Design implication:** human-in-loop escalation can be cryptographically evidenced, boosting the security self-assessment. ["https://world.org/es-es/blog/announcements/browserbase-exa-okta-world-id-for-agentic-web"]
11. **Agent identity/KYA is an open standard gap.** ERC-8004/8183 are drafts (2026-02); "Know Your Agent" frameworks (signed credentials proving agent acts for a principal within rules) are emerging but not settled. → **Design implication:** don't bet the demo on an unratified standard; use attestation hashes instead. ["https://eips.ethereum.org/EIPS/eip-8183","https://www.quecko.com/ai-agents-on-blockchain-hype-reality-and-whats-actually-being-built"]
12. **SlowMist×Bitget (2026-03)** ranks unauthorized access, prompt injection, permission abuse, network exposure as critical for trading agents; recommends IP whitelists on keys. → **Design implication:** include in threat model. ["https://www.probitget.com/asia/blog/articles/slowmist-bitget-security-research"]

---

## 5. Real-World Problem Catalogue (Research Task 4) — 18 distinct problems

For each: customer / pain / why wallets+automation insufficient / why AI / why on-chain / success metric. Artificial blockchain cases rejected (marked).

| # | Problem | Customer | Pain | Why existing wallets/automation insufficient | Why an AI agent | Why on-chain | Success metric |
|---|---|---|---|---|---|---|---|
| P1 | **Autonomous accounts payable & invoice settlement** | SME owner / DAO ops | Invoices pile up; manual review+payment; late fees; fraud (fake invoices) | Wallets execute one tx at a time; AP automation (Bill.com) is fiat-only, centralized | Reads/invoices, validates line items, flags anomalies, schedules payment | Atomic escrow + verifiable receipt + programmable release; cross-border stablecoin settlement | % invoices auto-paid correctly; fraud caught; days-payable-outstanding |
| P2 | **Freelance milestone escrow with deliverable verification** | Freelancers + clients | Upfront payment risk vs non-payment; disputes | Crypto escrow services (Botdigit, FreelanceFlow) require manual click-to-release | Agent verifies deliverable (hash/test results) against acceptance criteria and triggers release | Escrow state machine on-chain; release on attestation; no chargeback | Dispute rate; time-to-payment; % auto-released |
| P3 | **Treasury cash-flow forecasting & bill scheduling** | SME/DAO treasury | Missed payments, idle cash, wrong-chain liquidity | Multi-sig (Safe) requires human signers per tx | Forecasts obligations, pre-funds, schedules, alerts | Scheduled execution via smart-account executor; transparent balances | # missed payments; idle-cash reduction; forecast accuracy |
| P4 | **API/data/compute micropayment budgeting** | Developers running agent swarms | Agent racks up API bills; no per-agent budget | x402 exists but budget orchestration across sub-agents is manual | Orchestrator allocates daily slices to sub-agents, reallocates, cuts off over-spenders | x402 on-chain settlement; attenuated permissions | Cost overrun %; task completion per dollar |
| P5 | **Subscription/bill optimization & cancellation** | Consumers/SMEs | Unused subscriptions; price hikes; wrong payment rail | Recurring card payments; no autonomous cancellation | Detects unused subs, negotiates/cancels, picks cheapest rail (card vs stablecoin vs streaming) | Streaming payments (Superfluid) cancel atomically; no card lock-in | Savings; # cancelled; churn |
| P6 | **Cross-chain stablecoin treasury routing** | Multi-chain DAO/company | Funds on wrong chain; expensive bridges; settlement delay | Bridges manual; treasury dashboards don't execute | Monitors balances, routes via CCTP at cheapest time, rebalances | Native USDC burn/mint (CCTP); atomic | Settlement cost; failed tx rate; idle cross-chain cash |
| P7 | **Wallet incident response / auto-defense** | Any wallet holder | Hacks happen fast; humans sleep | Monitoring tools alert; they don't act | 24/7 monitor; on anomaly auto-revokes approvals, pauses sessions, sweeps to cold vault, escalates | Approvals/sessions are on-chain; revocation is on-chain; immutable evidence | Mean-time-to-contain; loss prevented |
| P8 | **Payroll & contractor bulk payout with compliance** | SMEs with global contractors | FX fees, compliance, withholding | Deel/Rise centralized, fee-heavy | Validates contractor identities, computes withholding, bulk-pays, generates receipts | Atomic bulk payout; sanctions screening; on-chain paystub | Cost per payout; error rate; compliance pass |
| P9 | **Conditional grant/scholarship/philanthropy disbursement** | Grantmakers/DAOs/universities | Funds misused; no accountability | Wire transfers + reporting = slow, unverifiable | Disburses tranches on milestone attestation (enrollment, attendance, deliverable) | Conditional release on-chain; clawback; public accountability | Milestone compliance; fund diversion rate |
| P10 | **Parametric insurance auto-claim payout** | Small businesses/crop/freight | Claims process slow, manual | Insurance assistants (Topic D) advise; don't pay out | Reads oracle trigger (weather, shipment delay), computes payout, releases from escrow | Oracle + escrow atomic payout; auditable | Payout latency; claims-handling cost |
| P11 | **Delivery-vs-payment procurement** | Businesses buying physical/digital goods | Pay before delivery vs deliver before pay | Traditional escrow (banks) slow/expensive | Agent tracks proof-of-delivery attestation, releases payment atomically | Atomic DvP; no trusted third party | Fraud loss; settlement time |
| P12 | **Conservative idle-cash yield management (bounded)** | Treasuries | Idle stablecoins earn nothing; DeFi risky | Trading bots risky/unregulated; savings accounts low yield | Sweeps idle USDC into audited lending (Morpho/Aave), auto-exits on risk signals, bounded loss | On-chain yield; transparent holdings | Yield earned; max drawdown; auto-exit correctness |
| P13 | **Agent-to-agent job marketplace settlement** | Agent operators (one-person companies) | No trust between agents | OKX AI/Virtuals exist but reputation/escrow primitive still emerging | Agent negotiates, escrows, verifies counterparty work, settles | ERC-8183 escrow + attestation; reputation | % jobs auto-settled; dispute rate |
| P14 | **Verifiable receipt & audit ledger for agent actions** | Compliance/audit teams | Can't prove agent did what was asked | Wallets show txs but not the intent/decision trail | Agent signs a structured receipt (intent + policy + tx hash) committed on-chain | Immutable commitment; third-party verifiable | Audit pass rate; reconstruction time |
| P15 | **Autonomous student stipend / cross-border education finance** | International students (adjacent Topic C) | Tuition deadlines, remittance fees, no credit | Remittance services fee-heavy | Schedules tuition/rent, routes cheapest remittance, builds on-chain payment history | Stablecoin cross-border; credit history on-chain | Fee savings; on-time payment % |
| P16 | **DAO treasury governance execution** | DAOs | Vote passes but execution lags; executor risk | Snapshot+Safe multisig manual | Monitors passed proposals, drafts execution tx, routes through policy, executes | On-chain governance → on-chain execution; transparent | Execution lag; failed executions |
| P17 | **On-chain invoice factoring / receivables advance** | SMEs with unpaid invoices | Cash-flow gap | Factoring centralized, expensive | Agent assesses invoice (buyer reputation, on-chain history), advances % against escrowed receivable | Receivable tokenized/escrowed on-chain | Advance volume; default rate |
| P18 | **Gas/paymaster operations & account hygiene** | Any on-chain team | Stuck txs, expired approvals, wrong gas | Manual | Agent revokes stale approvals, tops up gas via paymaster, replaces stuck txs | All operations on-chain | # stale approvals revoked; stuck-tx rate |

**Rejected as artificial blockchain** `[INFERENCE]`: pure personal budgeting advice (database suffices), generic chatbot Q&A, simple price alerts, NFT-gated membership — no irreducible on-chain need.

---

## 6. Twenty Differentiated Solution Concepts (Research Task 5)

Each concept marked with primary problem(s) addressed. Difficulty: ★ (week) to ★★★★ (months). Novelty vs closest prior art noted.

| ID | Name (memorable) | One-sentence concept | Target customer | Core on-chain actions | Human authorization | Closest prior art | Defensible novelty hypothesis | Difficulty |
|---|---|---|---|---|---|---|---|---|
| C1 | **PayGuardian** — Autonomous AP & Escrow Agent | AI agent ingests invoices, validates, escrows funds, releases on deliverable attestation, issues verifiable receipt | SME/DAO treasury (P1,P2,P11) | USDC transfers, escrow deposit/release, receipt commitment | Auto-pay below threshold; human approval above | Cleared Protocol, Fundline (deterministic, no AI validation) | AI invoice validation + escrow + receipt in one autonomous loop | ★★ |
| C2 | **BudgetOrchestrator** — Hierarchical sub-agent budget controller | Orchestrator holds weekly budget, delegates attenuated daily slices to specialist sub-agents (procurement, payroll, data), reallocates/cuts off | Dev teams running agent swarms (P4) | x402 payments, session-key grants/revocations | Set weekly budget; alerts on reallocation | ERC-7710 attenuation (standard, rarely demoed) | Demonstrated multi-agent attenuation with on-chain enforcement | ★★ |
| C3 | **SentinelShield** — Autonomous wallet incident-response agent | 24/7 monitor; on anomaly auto-revokes approvals, pauses sessions, sweeps funds to cold vault, escalates | Any wallet/DAO (P7) | revoke(approval), pause module, transfer to vault | Sweep >threshold requires human; auto-revoke always | None major (security tools alert only) | Autonomous *defensive* agent — strong security-score hook | ★★ |
| C4 | **TreasuryForecaster** — Cash-flow-aware bill scheduler | Forecasts obligations, pre-funds chains, schedules payments, sweeps idle USDC to audited lending with auto-exit | SME/DAO treasury (P3,P6,P12) | Scheduled transfers, CCTP bridge, Morpho deposit/withdraw | Strategy set by human; alerts | Polystrat (Olas), trading bots (aggressive) | Conservative, bounded, integrated with payments not trading | ★★★ |
| C5 | **ReceiptChain** — Verifiable agent-decision receipt layer | Every agent action signs structured receipt (intent, policy version, simulation result, tx hash) committed on-chain | Compliance/audit (P14) | Commit hash to chain | None (read-only layer) | Kite receipts (proprietary) | Open, composable receipt standard + reconstruction UI | ★★ |
| C6 | **PolicyPlain** — Natural-language → on-chain policy compiler with safety audit | User types "max $200/day, only these vendors, 10 tx/hr" → compiled ERC-7710 caveats + adversarial check | All agent operators (interaction/innovation) | Install module, grant delegation | User signs compiled policy | Clawnch (launchpad-focused) | Compile + safety-audit + explainable diff of effective policy | ★★ |
| C7 | **MilestoneGrant** — Conditional disbursement agent | Grants/scholarships released in tranches on attestation (enrollment, deliverable); clawback on failure | Grantmakers, universities, DAOs (P9) | Escrow, release on attestation, clawback | Initial funding; disputes human | None integrated | Autonomous conditional funding with public accountability | ★★ |
| C8 | **ParametricPayout** — Insurance-claim auto-settlement agent | Oracle trigger → compute payout → release from escrow → receipt | Small insurers/clients (P10) | Oracle read, escrow release | Policy terms set; large payouts human | Etherisc (deterministic) | AI handles ambiguous claim docs + parametric trigger | ★★★ |
| C9 | **PayrollPilot** — Compliant bulk-payout agent | Validates contractors, computes withholding, sanctions-screens, atomic bulk payout, on-chain paystubs | Global SMEs (P8) | Bulk ERC-20 transfer, paystub commit | Payroll register approved by human | Deel/Rise (centralized) | Non-custodial agent + on-chain receipts + compliance log | ★★ |
| C10 | **SubSweeper** — Subscription optimizer & streaming-payments agent | Detects unused subs, cancels, migrates recurring to streaming stablecoin, picks cheapest rail | Consumers/SME (P5) | Superfluid stream create/delete, card cancel (via API) | Cancellation confirmed by user | Truebill (fiat, manual) | On-chain streaming cancellation atomic; no card lock-in | ★★ |
| C11 | **RouteOptimizer** — Cross-chain treasury router | Monitors balances, routes USDC via CCTP cheapest/fastest, rebalances | Multi-chain DAO (P6) | CCTP burn/mint, transfers | Strategy + per-move cap | LayerZero/Stargate (no AI) | AI chooses route/time with bounded slippage policy | ★★ |
| C12 | **DvPAgent** — Delivery-vs-payment procurement agent | Releases payment atomically on proof-of-delivery attestation; handles returns | Businesses (P11) | Escrow, release/refund | Terms approved | Traditional escrow | Atomic DvP with AI verification of delivery evidence | ★★ |
| C13 | **FactorFlow** — On-chain receivables advance agent | Advances % against escrowed invoice based on on-chain buyer reputation | SMEs (P17) | Escrow, advance, repayment | Advance rate set; large advances human | Centrifuge (institutional) | SME-scale, agent-driven, reputation-scored | ★★★ |
| C14 | **DAOExecutor** — Governance-to-execution agent | Passed proposal → draft tx → policy check → execute via Safe | DAOs (P16) | Safe exec via module | Proposal vote is the authorization | Boardroom/Snapshot (no execution) | Autonomous, policy-bounded execution of passed votes | ★★ |
| C15 | **GasJanitor** — Account-hygiene agent | Revokes stale approvals, replaces stuck txs, manages paymaster gas | Teams (P18) | revoke, replace-by-fee, paymaster top-up | None (low-value ops) | Etherscan tools (manual) | Autonomous hygiene + risk-scored approvals | ★ |
| C16 | **ZKPolicy** — Zero-knowledge policy-compliant agent | Policy held in enclave; agent produces ZK proof of compliance; on-chain executor verifies proof | High-security treasuries | Verify proof + execute via ERC-7710 | Policy set; no per-tx human | Autonomify (hackathon demo) | Production-grade ZK policy stack | ★★★★ |
| C17 | **A2AJobSettler** — Agent-to-agent escrow with independent verifier agent | Two agents negotiate; escrow; third verifier agent attests completion; settle; reputation log | Agent operators (P13) | ERC-8183 escrow, attestation | None (agent-to-agent) | OKX AI, Virtuals (platforms) | Decentralized verifier agent + no platform lock-in | ★★★ |
| C18 | **StudentStipend** — Cross-border education finance agent | Schedules tuition/rent, cheapest remittance, builds on-chain payment history | International students (P15) | Stablecoin transfer, history commit | Parent/student approvals | Topic C solutions (advisory) | Executes cross-border payments autonomously | ★★ |
| C19 | **YieldSentinel** — Bounded conservative yield agent | Sweeps idle USDC to Morpho/Aave; auto-exits on oracle/risk signals; hard loss cap | Treasuries (P12) | deposit/withdraw lending | Cap + strategy set | Trading bots (unbounded) | Explicitly bounded, integrated with payment buffer | ★★ |
| C20 | **HoneypotDefender** — Adversarial self-defense wallet | Lures attackers with decoy; detects exploit attempt; auto-freezes; publishes forensic evidence | Security showcase (P7) | freeze, revoke, emit event | None | None (research prototypes) | Adversarial demo strongly impresses security judges | ★★ |
| C21 | **MultiRailPay** — Card/stablecoin/streaming router per payment | Agent chooses cheapest rail (Visa agentic vs x402 vs streaming) for each outgoing payment | SMEs (P5) | x402, stablecoin, card via API | Rules set | lobster.cash (Crossmint) | AI selects rail dynamically with cost optimization | ★★ |
| C22 | **IntentExecutor** — Intent-based settlement agent | User states intent ("pay this invoice by Friday"); agent finds cheapest path (swap/bridge/rail) and executes within slippage bounds | All users | Swap/bridge/transfer | Intent approved; bounds enforced | 1inch Fusion, CoW Swap (no AI wallet) | Intent → policy-bounded multi-step execution + receipt | ★★★ |

**Note on novelty claims:** C16, C17, C20 have the strongest novelty evidence gaps (closest prior art is hackathon/platform). C1, C3, C5, C6 are novel *integrations* of established primitives — defensible as "not done end-to-end" but not breakthrough science. `[HYPOTHESIS]` novelty must be validated by deeper search before final claim.

---

## 7. Security Architecture & Threat Model (Research Task 6)

### 7.1 Mandatory separation of duties (LLM never holds funds/keys)
```
[User] --sets policy--> [Policy Store (signed, versioned)]
                              |
[LLM Agent (untrusted)] --proposes intent--> [Deterministic Validator]
        |  (no keys, no signing)              | checks: recipient allowlist, amount cap,
        |                                     | token/chain, rate limit, policy version
        v                                     v
[Transaction Simulator (Tenderly)] <-- [Policy Enforcer (smart account / session key)]
        | pre-flight state diff                  | on-chain enforcement of bounds
        v                                        v
[Protected Signer (TEE/MPC/session key) --> EntryPoint/Bundler --> Chain]
                                                          |
[Receipt Verifier] <-- tx hash + debug_trace <------------+
        |
        v
[Immutable Audit Log: intent hash + policy version + sim result + tx hash + post-state]
```
**Principle:** every control below the LLM is enforceable *independently* of it. If the LLM is fully compromised, maximum loss = the active session-key grant (e.g., $X/day on allowlisted recipients). `[PROPOSED]`

### 7.2 Threat matrix with controls (minimum set for security self-assessment)
| Threat | Control (architectural, not prompt-only) | Enforced by | Max loss if control fails |
|---|---|---|---|
| Direct prompt injection | LLM has no key access; all proposals pass deterministic validator + simulation | Validator + smart account | Session grant cap |
| Indirect injection (invoice memo, API, webpage, NFT metadata) | Free-text never selects recipient/amount; structured-field parser; strip/normalize (Morse/base64/homoglyph/off-screen CSS); inbound tokens auto-rejected | Validator (off-chain) + allowlist (on-chain) | Session grant cap |
| Private key exposure | Keys in TEE/MPC or session key only; master key never in agent environment | Signer infra | ~0 (key not present) |
| Agent impersonation | Signed agent identity + session grant scoped to agent pubkey; World ID ZK for human approvals | Signature verification | ~0 |
| Recipient substitution | Recipient allowlist + policy-signed recipient; hash of recipient list in policy | Smart account / session key | 0 (reverts) |
| Amount manipulation | Per-tx cap + rolling window cap + ERC-20 transfer enforcer | Smart account | Cap amount |
| Wrong chain/token | Policy pins chain ID + token contract; validator rejects others | Validator + session key scope | 0 (reverts) |
| Permission escalation | Modules require owner signature; session key cannot install modules; attenuation only (narrowing) | Smart account module guards | 0 |
| Tx replay / duplicate payment | Nonce + idempotency key per invoice; rate-limit hook | Smart account hook | 0–1 duplicate |
| Token approval exploitation | No infinite approvals; exact-amount; auto-revoke after use; GasJanitor revokes stale | Agent (C15) + policy | Approved amount |
| Malicious contract / dangerous calldata | Blockaid/Forta threat scan + simulation state-diff review; only allowlisted targets | Simulation + allowlist | 0 (blocked) |
| Reentrancy | Use audited escrow (PullPayment pattern, checks-effects-interactions) | Contract | 0 |
| Slippage/MEV/front-running (if swaps) | Slippage bounds; private mempool (Flashbots); avoid swaps in MVP | Policy | Slippage cap |
| Oracle manipulation (if lending) | Avoid in MVP; if used, Chainlink + min-twap | — | Bounded |
| Bridge failure (if cross-chain) | Avoid in MVP; CCTP native burn/mint only; small amounts | Policy | Bridge amount |
| RPC/provider failure | Multiple RPCs; fail closed (no tx) not open; idempotent retry | Validator | 0 |
| Gas exhaustion | Paymaster with balance monitor; alerts; fail closed | Paymaster monitor | 0 |
| Unauthorized policy change | Policy changes require owner signature + version hash logged; session key cannot alter | Smart account | 0 |
| Failure to revoke | Sessions auto-expire (short TTL); on-chain revocation; GasJanitor sweeps | Expiry + revoke | ≤ TTL window |
| Misreported success | Post-execution receipt verification via debug_trace; verify actual state change | Receipt verifier | 0 (retry/alert) |
| Reorg / insufficient confirmation | Wait N confirmations before treating as final (testnet: ≥3; mainnet L2: ≥2) | Receipt verifier | Reorg loss |
| Data privacy/regulatory | No PII on-chain; only hashes; sanctions screening (Circle/Coinbase built-in); note jurisdiction | Off-chain | Compliance fine `[CLARIFY]` |

### 7.3 For each shortlisted concept: max loss under compromised agent
- **C1 PayGuardian:** max loss = active session grant (e.g., $200/day × TTL) to allowlisted recipients only; escrowed funds refundable. Fails safe (revert). Recovery: owner revokes session, sweeps remaining. Adversarial test: inject invoice with attacker address in memo → must be ignored.
- **C3 SentinelShield:** by design has *defensive* powers only (revoke, pause, transfer to pre-approved cold vault). Compromised defender could pause (DoS) but cannot move funds to attacker. Max loss = opportunity cost of false pause.
- **C5 ReceiptChain:** read-only/commit-only; no fund access. Compromise = forged receipts if signer key leaks; mitigate with separate signing key.
- **C6 PolicyPlain:** policy compiler output must be human-signed; compiler compromise = bad policy proposed, but human signature gate stops it. Max loss = 0 if human reviews diff.
- **C16 ZKPolicy:** max loss = session grant; ZK proof prevents even policy bypass; but proving bug risk → keep session cap as backstop.

---

## 8. Competition Strategy & Scoring Alignment (Research Task 7)

Official categories kept separate from our subcriteria. Expected-score heuristic (calibrated, not precise):

| Concept | Task completion 40% (reliability of demo+hashes) | Security 30% (enforceable bounds + self-assessment) | Innovation/interaction 30% | Bonus 0–5 | Implementation risk | Expected total (0–100+5) |
|---|---|---|---|---|---|---|
| C1 PayGuardian (AP+Escrow+Receipt) | High (narrow, deterministic demo) | High (session caps, allowlist, escrow, receipts) | Medium-High (end-to-end autonomy + NL invoice review) | Medium (escrow primitive) | Low-Med | **~80–88 +2** |
| C1+C3+C5+C6 Hybrid (recommended) | High | Very High | High (NL policy + auto-defense + receipts) | High (multiple primitives) | Medium | **~84–92 +3** |
| C3 SentinelShield (auto-defense) | Medium (anomaly demo must be staged) | Very High | High | Medium | Medium | ~74–84 +2 |
| C2 BudgetOrchestrator (multi-agent attenuation) | Medium (more moving parts) | High (attenuation demonstrable) | High | Medium-High | Medium | ~72–82 +2 |
| C4 TreasuryForecaster (incl. yield) | Medium (oracles, lending risk) | Medium (DeFi exposure) | Medium | High | High | ~68–80 +3 |
| C16 ZKPolicy | Low-Med (proving bugs) | Very High (if works) | Very High | High | Very High | ~60–82 +4 (high variance) |
| Generic trading bot (avoid) | Medium (flaky markets) | Low (keys+swaps exposure) | Low (crowded) | Medium | High | ~55–70 +2 |
| C20 HoneypotDefender | Medium (staged attack) | Very High (security showcase) | High | Medium | Medium | ~70–82 +2 |

**Judges-in-10-minutes test:** C1 hybrid has the clearest narrative — "an AI that pays your bills safely, with receipts, and defends itself." Trading bots require explaining market conditions; ZK requires explaining cryptography. `[INFERENCE]`

---

## 9. Technical Feasibility (Research Task 8)

### 9.1 One-week MVP (must assume, deadline 2026-10-20)
- **Stack:** TypeScript (better web3 SDK ecosystem than Python for wallets); Vercel AI SDK or LangChain.js for orchestration; Coinbase AgentKit/Base MCP **or** Safe + ZeroDev session keys on Base Sepolia (or Arbitrum Sepolia). `[PROPOSED]`
- **Smart contracts:** one small escrow contract (audited pattern, ~150 lines, OpenZeppelin) + use existing Safe/session-key modules. **Do not write custom wallet/validation logic.** `[PROPOSED]`
- **Testnet:** Base Sepolia / Arbitrum Sepolia (faucets available, low cost, Etherscan verification). Real hashes on testnet. `[CLARIFY]` mainnet not recommended for student team.
- **RPC:** Public RPC + Alchemy/Infura free tier; Tenderly free tier for simulation.
- **Tests:** unit tests for validator; adversarial prompt-injection test suite (10+ payloads) — directly feeds the security self-assessment.
- **Cost:** near-zero (testnet); Coinbase CDP free tier 5k wallet ops/mo.

### 9.2 Two-to-four weeks (if deadline were later / finals polish)
- Add C3 auto-defense module, C5 receipt reconstruction UI, C6 NL policy compiler.
- Multi-chain (add Circle CCTP or x402 micropayments for the data-subagent).
- Formal verification of escrow (SMTChecker / Certora trial).
- Load/chaos testing.

### 9.3 Longer roadmap
- C16 ZK policy layer, C17 decentralized verifier agents, reputation graph (Cleared v3/v4 direction).

### 9.4 Python vs TypeScript `[INFERENCE]`
TypeScript strongly preferred: web3.js/viem, ethers, ZeroDev/Biconomy SDKs, Coinbase AgentKit (TS), Circle CLI (callable from any), MetaMask Smart Accounts Kit (TS/React). Python viable for ML/agent logic but wallet SDKs lag; use Python only for invoice parsing if needed, call TS signing service via subprocess/HTTP.

---

## 10. Prototype Validation Plan (Research Task 9) — top 5 candidates, cheapest decisive experiment

| Candidate | Hypothesis | Minimal prototype | Dependencies | Acceptance criteria | Failure criteria | Adversarial tests | Est. work |
|---|---|---|---|---|---|---|---|
| **C1 PayGuardian** | Agent can autonomously validate+escrow+release 5 invoices with 0 errors | LLM + validator + escrow on Base Sepolia | Coinbase AgentKit or Safe+ZeroDev; OpenZeppelin escrow | 5/5 correct releases; 0 wrong recipient/amount; ≥10 real tx hashes | Any wrong recipient/amount; any revert due to policy bug | Inject attacker addr in invoice memo; duplicate invoice; over-cap invoice; expired invoice | 3–5 days |
| **C3 SentinelShield** | Auto-defense revokes within 60s of simulated attack | Monitor + revoke/pause module | Safe + watcher | Revoke tx mined <60s; no fund movement to attacker | Defender pauses incorrectly or fails to revoke | Staged malicious approval; staged drain attempt | 2–3 days |
| **C5 ReceiptChain** | Any past action reconstructable from on-chain commitments | Receipt commit + verifier script | IPFS/local store + on-chain hash | Reconstruct intent→policy→tx for all demo txs | Hash mismatch; missing field | Forge a receipt; verify rejection | 1–2 days |
| **C6 PolicyPlain** | NL policy compiles to correct on-chain bounds | Parser→caveat generator→deploy | MetaMask Gator contracts | 10/10 test policies compile to expected bounds; human-readable diff | Compiled policy wider than stated | Ambiguous NL; adversarial "ignore above" in policy text | 2–3 days |
| **C2 BudgetOrchestrator** | Sub-agent cannot exceed attenuated slice | Orchestrator + 2 sub-agents + session keys | ERC-7710 attenuation | Sub-agent over-spend attempt reverts | Sub-agent widens grant or exceeds slice | Compromised sub-agent tries to reallocate upward | 3–4 days |

Status labels: C1/C5 = locally testable; C3/C6 = documented as supported (MetaMask Gator, Safe modules); C16 ZKPolicy = technically plausible but untested in one week → defer; mainnet usage = requires organizer clarification `[CLARIFY]`.

---

## 11. Independent Preliminary Ranking (Research Task 10) — with confidence

Rubric (independent of official score): problem value, real novelty, security robustness, implementation feasibility, demo quality, dependency risk, regulatory/operational constraints. Calibrated bands (High/Med/Low) — false precision avoided.

| Rank | Concept | Problem value | Novelty (defensible) | Security | Feasibility (1 wk) | Demo clarity | Dep. risk | Reg. risk | Overall | Confidence |
|---|---|---|---|---|---|---|---|---|---|---|
| **1** | **C1+C3+C5+C6 Hybrid (PayGuardian Suite)** | High | Medium-High (integration) | Very High | Medium | High | Low | Low | **Strongest expected score** | High (evidence-backed) |
| 2 | C1 PayGuardian alone | High | Medium | High | High | High | Low | Low | Safest implementable | High |
| 3 | C3 SentinelShield | Medium-High | High | Very High | Medium | Medium (staged) | Low | Low | Most original security angle | Medium |
| 4 | C2 BudgetOrchestrator | Medium | Medium-High | High | Medium | Medium | Medium | Low | Good multi-agent demo | Medium |
| 5 | C20 HoneypotDefender | Low (showcase) | High | Very High | Medium | High (staged) | Low | Low | Impressive but narrow | Medium |
| 6 | C4 TreasuryForecaster+Yield | High | Low-Med | Medium | Low | Medium | Medium | Medium-High (DeFi) | Defer | Medium-Low |
| 7 | C16 ZKPolicy | Medium | Very High | Very High | Very Low | Low | High | Low | Most original, high-risk | Low (feasibility) |
| — | Generic trading bot | Medium | Low | Low | Medium | Low | High | High | **Avoid** | High (crowded+risky) |

**Why strong alternatives are rejected/deferred:**
- Trading bot: crowded (MetaMask/Coinbase/OKX all ship), market-dependent demo, highest security/regulatory exposure, keys near LLM.
- ZKPolicy: novelty high but proving bugs likely in one week; keep as "future work" slide for innovation score.
- Pure x402/micropayment: Coinbase/AWS/Circle already dominate; building another is not differentiated.
- C17 A2A marketplace: OKX AI/Virtuals/BNB already ship platforms; hard to out-scope them in a week.

**Challenge my favorite (the Hybrid): credible failure case** `[INFERENCE]` — (a) invoice validation by LLM is not genuinely "autonomous AI" in judges' eyes (could look like regex + API calls); mitigate by showing multi-step reasoning (duplicate detection, vendor verification, anomaly flagging, human escalation). (b) Escrow contract bug → fund lock; mitigate by using OpenZeppelin audited patterns + testnet only + third-party review. (c) Organizers require mainnet hashes `[CLARIFY]` → testnet demo may not count; mitigate by emailing organizers now and, if mainnet required, use tiny USDC amounts on Base with Coinbase AgentKit (sponsored gas). (d) Another team picks the same idea — differentiation then rests on C3 auto-defense + C5 receipts + C6 NL policy, which are harder to copy in a week.

**Assumptions that could reverse ranking:** (1) if bonus heavily rewards DeFi/trading complexity, C4 rises; (2) if mainnet real-value transactions are mandatory, security-heavy low-value concepts (C3/C20) rise and yield/trading fall further; (3) if judges are academic researchers, C16 ZK novelty rises; (4) if a competitor already demoed AP+escrow, C1 novelty falls — verify with final pre-submission search.

---

## 12. Recommended Near-Term MVP Approach (one week to 2026-10-20)

**"PayGuardian Suite — Autonomous, Policy-Bounded Accounts Payable with Verifiable Receipts and Auto-Defense."**
1. **Day 1–2:** Set up Base Sepolia (or Arbitrum Sepolia) + Coinbase AgentKit/CDP (or Safe + ZeroDev session keys). Deploy simple escrow (OpenZeppelin). Wire LLM (any major model) with invoice-validation tool. Build deterministic validator (recipient allowlist, per-tx cap $50, daily cap $200, token=USDC testnet, chain pinned).
2. **Day 3:** End-to-end: invoice → validate → escrow → (attestation of deliverable) → release → receipt commit. Generate ≥10 real tx hashes. Add human-approval step for >$50 (email/push; optionally World ID-style signature).
3. **Day 4:** Add C5 receipt verifier (reconstruct any action from on-chain hash) and C3 auto-defense (watch for unexpected approvals/out-of-policy tx; auto-revoke + alert).
4. **Day 5:** Adversarial test suite (prompt-injection payloads, duplicate invoices, wrong-chain, over-cap); write security self-assessment (permission tiers + known-risk list — explicitly required). Fix bugs.
5. **Day 6:** Demo video (≤5 min, optional), deck (≤10 min final), README, docs.
6. **Day 7:** Buffer + organizer clarifications + final hash verification.

**Deliverables mapping to official checklist:** technical docs ✓, deck ✓, demo video ✓, security self-assessment (permission tiers + known risks) ✓, source code + README + tests ✓, execution evidence (real on-chain hashes) ✓. `[OFFICIAL]`

---

## 13. Longer-Term Innovation Roadmap (post-deadline / finals)
- Month 1: C6 NL policy compiler + human-readable policy diff; C2 multi-agent attenuation (procurement sub-agent via x402).
- Month 2–3: Cross-chain CCTP routing; C19 bounded yield sweep on idle treasury; formal verification of escrow.
- Quarter 2+: C16 ZK/enclave policy proofs; C17 decentralized verifier-agent network; reputation/credit graph (Cleared v3/v4 direction).

---

## 14. Unanswered Research Questions / Organizer Clarifications Needed `[CLARIFY]`
1. Are testnet transaction hashes accepted as "real on-chain transaction hashes"? (Email wangyr@pbcsf.tsinghua.edu.cn / fintechathon@ican-x.com)
2. Preferred/supported chains and tokens? Is USDC on Base/Arbitrum acceptable?
3. Is human-in-the-loop approval permitted/expected within "autonomous"? (Likely yes — risk control implies it — but confirm.)
4. Rubric for the 0–5 on-chain exploration bonus? (number of chains? novel protocol? mainnet value?)
5. Are pre-existing SDKs (Coinbase AgentKit, Safe, ZeroDev) and open-source contracts acceptable? (Licensing rule implies yes, but confirm.)
6. Any restrictions on third-party infrastructure/API dependencies (e.g., Tenderly, Alchemy)?
7. Is autonomous trading expected, or are payments/treasury workflows in scope? (The three pillars are asset management + tx execution + risk control — broad — but confirm to avoid mis-scoping.)

---

## 15. Source Bibliography (accessed 2026-10-13 unless noted)

**Official competition:**
- PBCSF Appendix 2 — Problem Description & Rules (International Track): https://www.its.ac.id/international/wp-content/uploads/sites/66/2026/10/PBCSF-Appendix-2-Problem-Description-and-Competition-Rules-for-International-Track.pdf
- CMU announcement: https://ird.oou.cmu.ac.th/2026-shenzhen-international-fintech-competition/
- IEEE CIS Singapore: https://www.ieee-cis-singapore.org/2026-fintechathon
- Official site: https://fintechathon.g-ican.com/#/en

**Products & infrastructure:**
- Coinbase x402 whitepaper: https://x402.org/wp-content/uploads/sites/10/2026/06/x402-whitepaper.pdf
- Coinbase Agentic Wallet guide: https://cryptouniversity.network/guides/coinbase-agentkit-and-agentic-wallets-a-complete-beginners-guide (2026-07-07)
- Agent wallets compared (0fiat): https://0fiat.com/blog/top-5-ai-agents-for-crypto-payments-2026/ (2026-09-23)
- MetaMask Agent Wallet launch: https://metamask.io/en-GB/news/introducing-metamask-agent-wallet (2026-08-05)
- MetaMask best agentic wallets 2026: https://metamask.io/en-GB/news/best-agentic-wallets-2026 (2026-06-30)
- MetaMask CoinFello / Smart Accounts Kit: https://metamask.io/news/coinfello-metamask-smart-accounts-kit (2026-08-26)
- MetaMask Gator (Delegation Framework): https://www.ethereum.org/developers/tools/metamask-delegation-framework-gator/
- Circle Agent Stack docs: https://developers.circle.com/agent-stack ; Agent Wallets: https://developers.circle.com/agent-stack/agent-wallets
- Circle Arc launch: https://www.circle.com/es/pressroom/circle-launches-arc-mainnet-an-economic-operating-system-for-the-internet (2026-09-16)
- Privy Agent Wallets: https://www.privy.io/agent-wallets ; docs: https://docs.privy.io/wallets/overview/solutions/agent-wallets
- Turnkey vs Privy: https://onchainden.com/blog/turnkey-vs-privy (2026-09-15)
- Crossmint agent wallets compared: https://www.crossmint.com/learn/agent-wallets-compared (2026-03-15)
- Openfort best agent wallets: https://www.openfort.io/blog/best-agent-wallets-for-developers (2026-09-09)
- OKX AI: https://www.okx.com/ua-eu/learn/okx-ai ; thirdweb coverage: https://blog.thirdweb.com/ai-agent-marketplace-okx-lets-agents-hire-and-pay-each-other/ (2026-06-29)
- BNB Agent Studio: https://www.bnbchain.org/en/bnb-agent-studio ; v2: https://dailyaiworld.com/blogs/bnb-agent-studio-v2-ai-agents-get-hired-paid-onchain (2026-08-20)
- Kite Agent Passport docs: https://docs.gokite.ai/
- Virtuals Protocol: https://www.datawallet.com/crypto/what-is-virtuals-protocol (2026-10-09)
- AWS Bedrock AgentCore: https://www.vaasblock.com/ai/aws-just-gave-ai-agents-a-wallet-usdc-on-base-is-how-they-pay/ (2026-09-01)
- Safe docs: https://docs.safe.global/advanced/erc-4337/4337-safe ; https://docs.safe.global/advanced/erc-7579/overview
- ERC-8183: https://eips.ethereum.org/EIPS/eip-8183
- Cleared Protocol whitepaper: https://clearedpay.xyz/cleared-whitepaper.pdf (2026-02)
- Fundline: https://fundline.xyz/
- Olas: https://olas.network/ (20.8M agent txs as of 2026-10-11)
- ElizaOS: https://ownyourmind.ai/projects/elizaos/ (2026-10-03)
- Clawnch: https://metamask.io/news/clawnch-ai-agent-launchpad-delegation (2026-08-26)
- Autonomify (ZK policy): https://chain.link/hack-26/projects/autonomify
- World ID human-in-loop: https://world.org/es-es/blog/announcements/browserbase-exa-okta-world-id-for-agentic-web (2026-04-16)
- thirdweb "June 2026 agent wallet wave": https://blog.thirdweb.com/ai-agents-on-blockchain-how-crypto-became-the-payment-layer-for-autonomous-ai/ (2026-07-02)

**Academic & security:**
- arXiv:2503.16248 "AI Agents in Cryptoland: Practical Attacks and No Silver Bullet": https://arxiv.org/html/2503.16248v1
- arXiv:2506.01055 prompt-injection data exfiltration (AgentDojo): https://arxiv.org/pdf/2506.01055v1.pdf
- Bunq 1-cent injection (Blue41): https://bizflowai.io/blog/a-1-cent-transfer-can-hijack-a-banking-ai-agent-heres-how (2026-06-12)
- Grok wallet exploit + AI wallet attack surface: https://www.spark.money/research/ai-wallet-security-attack-surface (2026-07-03)
- ElizaOS memory poisoning / CrAIBench: https://ultralab.tw/en/blog/crypto-ai-agent-prompt-injection-static-analysis (2026-05-07)
- SlowMist×Bitget agent risks: https://www.probitget.com/asia/blog/articles/slowmist-bitget-security-research (2026-03-17)
- Agentic commerce payment protocols + Rescuna advisory: https://zylos.ai/research/2026-07-15-agentic-commerce-payment-protocols-ai-agents/ (2026-07-15)
- Programmable wallet spending limits: https://coincub.com/wallets/guides/how-programmable-wallets-can-limit-autonomous-spending/ (2026-08-15)
- AI agent payment authorization: https://www.spark.money/research/fintech-ai-agent-payment-authorization (2026-09-05)
- Web3Caff agent security report (Chinese): https://research.web3caff.com/archives/47026 (2026-06-30)

---

## 16. Machine-Readable Structured Summary (for merging with other AI systems' reports)

### 16.1 Verified facts table
| Fact | Value | Label | Source |
|---|---|---|---|
| Submission deadline | 2026-10-20 23:59 UTC+8 | OFFICIAL | Rules PDF |
| Topic F pillars | asset management + transaction execution + risk control | OFFICIAL | Rules PDF |
| Weights | 40/30/30 + 0–5 bonus | OFFICIAL | Rules PDF |
| Execution evidence (on-chain topic) | real on-chain transaction hashes | OFFICIAL | Rules PDF |
| Security self-assessment content | permission-tier implementation + known-risk list | OFFICIAL | Rules PDF |
| Testnet vs mainnet | unspecified | CLARIFY | — |
| Supported chains/tokens | unspecified | CLARIFY | — |
| Human approvals allowed | unspecified (likely yes) | CLARIFY | — |
| x402 cumulative volume | >$100M (Aug 2026); 90% on Base | VERIFIED | edgeX 2026-08-16 |
| Coinbase Agentic Wallet launch | 2026-02-11; $0.005/wallet-op, 5k free/mo | VERIFIED | grokipedia/0fiat |
| MetaMask Agent Wallet | live 2026-08-06; self-custodial; mandatory sim+Blockaid+MEV | VERIFIED | metamask.io |
| Circle Agent Stack | launched 2026-05-11; Arc mainnet 2026-09-16 | VERIFIED | circle.com |
| ERC-8183 status | Draft (2026-02-25); job escrow + evaluator attestation | VERIFIED | eips.ethereum.org |
| Grok wallet exploit | May 2026; NFT permission + Morse-code injection; ~80% recovered | VERIFIED | spark.money |
| Bunq injection | June 2026; €0.01 transfer description field; patched | VERIFIED | bizflowai |

### 16.2 Top concepts summary
| ID | Name | Primary problem | Build-on stack | Difficulty | Expected score band | Recommendation |
|---|---|---|---|---|---|---|
| HYBRID | PayGuardian Suite (C1+C3+C5+C6) | AP/escrow/treasury | Safe+ZeroDev or Coinbase AgentKit + escrow | ★★ | 84–92 +3 | **RECOMMENDED MVP** |
| C1 | PayGuardian | AP/escrow | Coinbase AgentKit or Safe+ZeroDev | ★★ | 80–88 +2 | Safest implementable |
| C3 | SentinelShield | Incident response | Safe modules + watcher | ★★ | 74–84 +2 | Add-on; strong security hook |
| C16 | ZKPolicy | High-security treasury | Noir + Nitro + ERC-7710 | ★★★★ | 60–82 +4 (high var) | Most original; defer to roadmap |
| TRADE | Generic trading bot | DeFi trading | MetaMask/Coinbase agent wallet | ★★ | 55–70 +2 | AVOID (crowded, risky) |

---

## 17. Conclusion

- **Strongest evidence-backed idea:** **PayGuardian — autonomous, policy-bounded accounts-payable & escrow agent with verifiable receipts.** It hits all three official pillars, builds on audited infrastructure, is demoable in one week with real testnet hashes, and has no close end-to-end competitor (Cleared/Fundline/Request are partial and deterministic).
- **Most original but higher-risk idea:** **ZK/enclave-verified policy compliance (C16, Autonomify-style)** — genuinely novel, but proving bugs and integration risk make it unsuitable for a one-week MVP; keep as finals/roadmap innovation.
- **Safest implementable idea:** **C1 PayGuardian alone** (narrow invoice→escrow→release→receipt loop) — high task-completion reliability, strong security story, low dependency risk.
- **Best hybrid idea:** **PayGuardian + SentinelShield auto-defense + ReceiptChain verifiable receipts + PolicyPlain natural-language policy** — each module is independently demoable and together maximizes innovation/interaction score while keeping security high.
- **Idea that looks impressive but should be avoided:** **autonomous DeFi trading/investment bot** — crowded (MetaMask, Coinbase, OKX, Robinhood all ship), market-flaky demo, highest key/security exposure, regulatory risk, and judges may discount it as the obvious answer.
- **The three most important experiments to run before committing (this week):**
  1. **E1 (feasibility gate):** End-to-end PayGuardian on Base Sepolia — 5 invoices → escrow → release → receipt, ≥10 real tx hashes, 0 errors. (Pass = proceed; fail = fall back to simpler deterministic scheduled-payment agent.)
  2. **E2 (security gate):** Adversarial suite — 10+ prompt-injection payloads (memo-field, duplicate, over-cap, wrong-chain, attacker-recipient) must all be blocked; any success = fix validator before demo.
  3. **E3 (clarity gate):** Organizer email confirmation that testnet hashes + human-in-loop approvals are acceptable; if mainnet required, switch to tiny USDC on Base with sponsored gas immediately.

*Limitations: vendor marketing claims treated skeptically; Skyfire details remain unverified; novelty hypotheses require a final pre-submission prior-art check; mainnet vs testnet unresolved pending organizer reply. Research cutoff 2026-10-13.*

