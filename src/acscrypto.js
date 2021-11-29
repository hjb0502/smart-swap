export const abii = [
  {
    name: "TokenExchange",
    inputs: [
      { type: "address", name: "buyer", indexed: true },
      { type: "int128", name: "sold_id", indexed: false },
      { type: "uint256", name: "tokens_sold", indexed: false },
      { type: "int128", name: "bought_id", indexed: false },
      { type: "uint256", name: "tokens_bought", indexed: false }
    ],
    anonymous: false,
    type: "event"
  },
  {
    name: "AddLiquidity",
    inputs: [
      { type: "address", name: "provider", indexed: true },
      { type: "uint256[4]", name: "token_amounts", indexed: false },
      { type: "uint256[4]", name: "fees", indexed: false },
      { type: "uint256", name: "invariant", indexed: false },
      { type: "uint256", name: "token_supply", indexed: false }
    ],
    anonymous: false,
    type: "event"
  },
  {
    name: "RemoveLiquidity",
    inputs: [
      { type: "address", name: "provider", indexed: true },
      { type: "uint256[4]", name: "token_amounts", indexed: false },
      { type: "uint256[4]", name: "fees", indexed: false },
      { type: "uint256", name: "token_supply", indexed: false }
    ],
    anonymous: false,
    type: "event"
  },
  {
    name: "RemoveLiquidityOne",
    inputs: [
      { type: "address", name: "provider", indexed: true },
      { type: "uint256", name: "token_amount", indexed: false },
      { type: "uint256", name: "coin_amount", indexed: false },
      { type: "uint256", name: "token_supply", indexed: false }
    ],
    anonymous: false,
    type: "event"
  },
  {
    name: "RemoveLiquidityImbalance",
    inputs: [
      { type: "address", name: "provider", indexed: true },
      { type: "uint256[4]", name: "token_amounts", indexed: false },
      { type: "uint256[4]", name: "fees", indexed: false },
      { type: "uint256", name: "invariant", indexed: false },
      { type: "uint256", name: "token_supply", indexed: false }
    ],
    anonymous: false,
    type: "event"
  },
  {
    name: "CommitNewAdmin",
    inputs: [
      { type: "uint256", name: "deadline", indexed: true },
      { type: "address", name: "admin", indexed: true }
    ],
    anonymous: false,
    type: "event"
  },
  {
    name: "NewAdmin",
    inputs: [{ type: "address", name: "admin", indexed: true }],
    anonymous: false,
    type: "event"
  },
  {
    name: "CommitNewFee",
    inputs: [
      { type: "uint256", name: "deadline", indexed: true },
      { type: "uint256", name: "fee", indexed: false },
      { type: "uint256", name: "admin_fee", indexed: false }
    ],
    anonymous: false,
    type: "event"
  },
  {
    name: "NewFee",
    inputs: [
      { type: "uint256", name: "fee", indexed: false },
      { type: "uint256", name: "admin_fee", indexed: false }
    ],
    anonymous: false,
    type: "event"
  },
  {
    name: "RampA",
    inputs: [
      { type: "uint256", name: "old_A", indexed: false },
      { type: "uint256", name: "new_A", indexed: false },
      { type: "uint256", name: "initial_time", indexed: false },
      { type: "uint256", name: "future_time", indexed: false }
    ],
    anonymous: false,
    type: "event"
  },
  {
    name: "StopRampA",
    inputs: [
      { type: "uint256", name: "A", indexed: false },
      { type: "uint256", name: "t", indexed: false }
    ],
    anonymous: false,
    type: "event"
  },
  {
    outputs: [],
    inputs: [
      { type: "address", name: "_owner" },
      { type: "address[4]", name: "_coins" },
      { type: "address", name: "_pool_token" },
      { type: "uint256", name: "_A" },
      { type: "uint256", name: "_fee" },
      { type: "uint256", name: "_admin_fee" },
      { type: "address", name: "_admin_fee_address" }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    name: "A",
    outputs: [{ type: "uint256", name: "" }],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 5199
  },
  {
    name: "A_precise",
    outputs: [{ type: "uint256", name: "" }],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 5161
  },
  {
    name: "get_virtual_price",
    outputs: [{ type: "uint256", name: "" }],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 1346183
  },
  {
    name: "calc_token_amount",
    outputs: [{ type: "uint256", name: "" }],
    inputs: [
      { type: "uint256[4]", name: "amounts" },
      { type: "bool", name: "is_deposit" }
    ],
    stateMutability: "view",
    type: "function",
    gas: 5357629
  },
  {
    name: "add_liquidity",
    outputs: [{ type: "uint256", name: "" }],
    inputs: [
      { type: "uint256[4]", name: "amounts" },
      { type: "uint256", name: "min_mint_amount" }
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: 8287631
  },
  {
    name: "get_dy",
    outputs: [{ type: "uint256", name: "" }],
    inputs: [
      { type: "int128", name: "i" },
      { type: "int128", name: "j" },
      { type: "uint256", name: "dx" }
    ],
    stateMutability: "view",
    type: "function",
    gas: 3099381
  },
  {
    name: "exchange",
    outputs: [{ type: "uint256", name: "" }],
    inputs: [
      { type: "int128", name: "i" },
      { type: "int128", name: "j" },
      { type: "uint256", name: "dx" },
      { type: "uint256", name: "min_dy" }
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: 3262485
  },
  {
    name: "remove_liquidity",
    outputs: [{ type: "uint256[4]", name: "" }],
    inputs: [
      { type: "uint256", name: "_amount" },
      { type: "uint256[4]", name: "min_amounts" }
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: 255557
  },
  {
    name: "remove_liquidity_imbalance",
    outputs: [{ type: "uint256", name: "" }],
    inputs: [
      { type: "uint256[4]", name: "amounts" },
      { type: "uint256", name: "max_burn_amount" }
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: 8286723
  },
  {
    name: "calc_withdraw_one_coin",
    outputs: [{ type: "uint256", name: "" }],
    inputs: [
      { type: "uint256", name: "_token_amount" },
      { type: "int128", name: "i" }
    ],
    stateMutability: "view",
    type: "function",
    gas: 1489
  },
  {
    name: "remove_liquidity_one_coin",
    outputs: [{ type: "uint256", name: "" }],
    inputs: [
      { type: "uint256", name: "_token_amount" },
      { type: "int128", name: "i" },
      { type: "uint256", name: "_min_amount" }
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: 4478633
  },
  {
    name: "ramp_A",
    outputs: [],
    inputs: [
      { type: "uint256", name: "_future_A" },
      { type: "uint256", name: "_future_time" }
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: 151774
  },
  {
    name: "stop_ramp_A",
    outputs: [],
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: 148535
  },
  {
    name: "commit_new_fee",
    outputs: [],
    inputs: [
      { type: "uint256", name: "new_fee" },
      { type: "uint256", name: "new_admin_fee" }
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: 110371
  },
  {
    name: "apply_new_fee",
    outputs: [],
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: 97152
  },
  {
    name: "revert_new_parameters",
    outputs: [],
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: 21805
  },
  {
    name: "commit_transfer_ownership",
    outputs: [],
    inputs: [{ type: "address", name: "_owner" }],
    stateMutability: "nonpayable",
    type: "function",
    gas: 74543
  },
  {
    name: "apply_transfer_ownership",
    outputs: [],
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: 60620
  },
  {
    name: "revert_transfer_ownership",
    outputs: [],
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: 21895
  },
  {
    name: "admin_balances",
    outputs: [{ type: "uint256", name: "" }],
    inputs: [{ type: "uint256", name: "i" }],
    stateMutability: "view",
    type: "function",
    gas: 3391
  },
  {
    name: "withdraw_admin_fees",
    outputs: [],
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: 31898
  },
  {
    name: "donate_admin_fees",
    outputs: [],
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: 147723
  },
  {
    name: "kill_me",
    outputs: [],
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: 37908
  },
  {
    name: "unkill_me",
    outputs: [],
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: 22045
  },
  {
    name: "set_admin_fee_address",
    outputs: [],
    inputs: [{ type: "address", name: "_admin_fee_address" }],
    stateMutability: "nonpayable",
    type: "function",
    gas: 37178
  },
  {
    name: "coins",
    outputs: [{ type: "address", name: "" }],
    inputs: [{ type: "uint256", name: "arg0" }],
    stateMutability: "view",
    type: "function",
    gas: 2160
  },
  {
    name: "balances",
    outputs: [{ type: "uint256", name: "" }],
    inputs: [{ type: "uint256", name: "arg0" }],
    stateMutability: "view",
    type: "function",
    gas: 2190
  },
  {
    name: "fee",
    outputs: [{ type: "uint256", name: "" }],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 2111
  },
  {
    name: "admin_fee",
    outputs: [{ type: "uint256", name: "" }],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 2141
  },
  {
    name: "admin_fee_address",
    outputs: [{ type: "address", name: "" }],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 2171
  },
  {
    name: "owner",
    outputs: [{ type: "address", name: "" }],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 2201
  },
  {
    name: "lp_token",
    outputs: [{ type: "address", name: "" }],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 2231
  },
  {
    name: "initial_A",
    outputs: [{ type: "uint256", name: "" }],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 2261
  },
  {
    name: "future_A",
    outputs: [{ type: "uint256", name: "" }],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 2291
  },
  {
    name: "initial_A_time",
    outputs: [{ type: "uint256", name: "" }],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 2321
  },
  {
    name: "future_A_time",
    outputs: [{ type: "uint256", name: "" }],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 2351
  },
  {
    name: "admin_actions_deadline",
    outputs: [{ type: "uint256", name: "" }],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 2381
  },
  {
    name: "transfer_ownership_deadline",
    outputs: [{ type: "uint256", name: "" }],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 2411
  },
  {
    name: "future_fee",
    outputs: [{ type: "uint256", name: "" }],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 2441
  },
  {
    name: "future_admin_fee",
    outputs: [{ type: "uint256", name: "" }],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 2471
  },
  {
    name: "future_owner",
    outputs: [{ type: "address", name: "" }],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 2501
  }
];
