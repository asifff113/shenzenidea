// Mermaid and SVG diagram sources for the research presentation.
// Every diagram is a documented interpretation of the source architecture.
// None invents new components, permissions, networks, or financial actions.

export const MERMAID_FLOW_HYBRID_008 = `flowchart LR
  A[Owner key (offline)] -->|signs mandates| B[T0 obligation mandates<br/>limitedCalls=1 · exactExecution<br/>redeemer-bound · nonce-bounded]
  A -->|caps, reallocate, bulk revoke| C[T1 envelopes<br/>erc20PeriodTransfer<br/>allowedCalldata · recipient set]
  A -->|delayed veto| D[T2 above threshold<br/>queue + cooldown]
  A -->|top-ups only| E[T3 reserve funding<br/>one-way · owner bulk revoke]
  X[LLM agent<br/>untrusted] -->|extract · reconcile · schedule| B
  X -. no authority .-> C
  X -. no authority .-> D
  X -. no authority .-> E
  B --> F[(Smart account<br/>MetaMask caveats<br/>route M)]
  C --> F
  D --> F
  E --> F
  F -->|onchain settlement| G[(Public testnet<br/>Base Sepolia / Ethereum Sepolia)]
  H[Loss certificate] -->|show bound| A
  I[Independent watcher<br/>IDEA-026 / IDE&#x2F;A-075] -->|detect & revoke| F
  classDef owner fill:#0b0e15,stroke:#9aa3b6,color:#e6e9ef,stroke-dasharray:4 3;
  classDef acc fill:#0b0e15,stroke:#22c55e,color:#e6e9ef;
  classDef llm fill:#0b0e15,stroke:#22b3c5,color:#22b3c5;
  classDef net fill:#0b0e15,stroke:#f0c46c,color:#e6e9ef;
  class A owner
  class B,C,D,E,F acc
  class X llm
  class G net
  class H,I acc
`;

export const MERMAID_FLOW_HYBRID_002R = `flowchart LR
  A[Owner key (offline)] -->|job budget, payee map| B[Task predicate<br/>global job allocation]
  A -->|optional delegation| C[Period-capped delegation<br/>top-up only]
  X[LLM agent<br/>untrusted] -->|choose quote, request| B
  X -->|pay| D[(x402 payer<br/>Option A: smart account EIP-1271<br/>Option B: hot wallet<br/>topped up by C)]
  D -->|one outstanding authorization| E[Service endpoint<br/>honest or faulty]
  E -->|result| F[Client-side predicate]
  F -- pass --> G[Continue spending]
  F -- fail --> H[Stop future spending<br/>return code]
  C --> D
  classDef owner fill:#0b0e15,stroke:#9aa3b6,color:#e6e9ef,stroke-dasharray:4 3;
  classDef llm fill:#0b0e15,stroke:#22b3c5,color:#22b3c5;
  classDef net fill:#0b0e15,stroke:#f0c46c,color:#e6e9ef;
  class A owner
  class B,C,D,F acc,fill:#0b0e15,stroke:#22c55e,color:#e6e9ef
  class X llm
  class E,G,H net
`;

export const MERMAID_FLOW_X1 = `sequenceDiagram
  participant O as Owner smart account
  participant TK as Test token faucet
  participant AG as Agent redeemer
  participant CT as MetaMask caveats
  participant CH as Public testnet
  O->>CT: deploy with delegation framework
  O->>AG: pin gas-only redeemer key
  O->>O: sign 3 exact delegations<br/>(vendor, amount, window, nonce)
  AG->>CH: redeem obligation 1
  CH-->>AG: 1 of 3 OK
  AG->>CH: redeem obligation 2
  CH-->>AG: 2 of 3 OK
  AG->>CH: redeem obligation 3
  CH-->>AG: 3 of 3 OK
  AG->>CH: try wrong amount
  CH-->>AG: revert
  AG->>CH: try before window
  CH-->>AG: revert
  AG->>CH: try wrong redeemer
  CH-->>AG: revert
  AG->>CH: try second redemption
  CH-->>AG: revert (nonce-consumed)
`;
