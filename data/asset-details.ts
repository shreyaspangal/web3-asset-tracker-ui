export const STAT_DETAILS = [
    { id: 1, title: "Asset price", value: "$3.13K" },
    { id: 2, title: "Borrow APY", value: "11.70%" },
    { id: 3, title: "Reserve size", value: "7.28K" },
    { id: 4, title: "Available liquidity", value: "1.44K" },
    { id: 5, title: "Utilization rate", value: "80.22%" },
];

export const TABS = [
    { id: 1, label: "Deposit", value: "deposit" },
    { id: 2, label: "Borrow", value: "borrow" },
    // { id: 3, label: "Withdraw", value: "withdraw" },
    // { id: 4, label: "Repay", value: "repay" },
    { id: 3, label: "Unwind", value: "unwind" },
]

export const DEPOSIT_SUMMARY = [
    { id: 1, title: "Health Factor", value: "0.00" },
    { id: 2, title: "RDNT APR", value: "44.81%", imgSrc: "/images/coins/eth-coin.svg" },
    { id: 3, title: "ETH APR", value: "0%", imgSrc: "/images/coins/eth-coin.svg" },
    { id: 4, title: "Projected APR", value: "0%" },
]

export const UNWIND_SUMMARY = [
    { id: 1, title: "Amount Deposited", value: "0.00ETH" },
    { id: 2, title: "Amount Borrowed", value: "0.00ETH" },
]

export const SUB_CARDS_DATA = [
    {
        id: 1, title: "Your deposited assets", content: [
            { id: 1, title: "Your wallet balance", value: "0.00 ETH" },
            { id: 2, title: "Amount deposited", value: "0.00 ETH" },
            { id: 3, title: "Amount borrowed", value: "0.00 ETH" },
            { id: 4, title: "Maximum borrow amount", value: "0.00 ETH" },
            {
                id: 5, title: "Health factor", value: "0.00", info: {
                    title: "Health factor",
                    description: "The health factor represents the safety of your loan derived from the proportion of collateral versus amount borrowed. Keep it above 1 to avoid liquidation."
                }
            },
            { id: 6, title: "Loan to value", value: "0%" },
        ]
    },
    {
        id: 2, title: "Overview", content: [
            { id: 1, title: "Your wallet balance", value: "0.00 ETH" },
            { id: 2, title: "Amount deposited", value: "0.00 ETH" },
            { id: 3, title: "Amount borrowed", value: "0.00 ETH" },
            { id: 4, title: "Maximum borrow amount", value: "0.00 ETH" },
            {
                id: 5, title: "Health factor", value: "0.00", info: {
                    title: "Health factor",
                    description: "The health factor represents the safety of your loan derived from the proportion of collateral versus amount borrowed. Keep it above 1 to avoid liquidation."
                }
            },
            { id: 6, title: "Loan to value", value: "0%" },
        ]
    },
    {
        id: 3, title: "Other stats", content: [
            {
                id: 1, title: "Max LTV", value: "80%", info: {
                    title: "Loan to value (LTV) ratio",
                    description: "The Maximum Loan-to-Value ratio represents the maximum borrowing power of a specific collateral. For example, if a collateral has a LTV of 75%, the user can borrow up to 0.75 worth of ETH in the principal currency for every 1 ETH worth of collateral."
                }
            },
            {
                id: 2, title: "Liquidation threshold", value: "82.5%", info: {
                    title: "Liquidation threshold",
                    description: "This represents the threshold at which a borrow position will be considered undercollateralized and subject to liquidation for each collateral. For example, if a collateral has a liquidation threshold of 80%, it means that the loan will be liquidated when the debt value is worth 80% of the collateral value."
                }
            },
            {
                id: 3, title: "Liquidation penalty", value: "15%", info: {
                    title: "Liquidation penalty",
                    description: "When a liquidation occurs, liquidators repay part or all of the outstanding borrowed amount on behalf of the borrower. In return, they can buy the collateral at a discount and keep the difference as a bonus for maintaining a helathy debt-to-collateral ratio for the protocol."
                }
            },
        ]
    },
];

export const COINS_LIST = [
    { id: 1, symbol: "weETH", title: "Wrapped eETH", },
    { id: 2, symbol: "gmBTC-USD", title: "gmBTC-USD", },
    { id: 3, symbol: "gmETH-USD", title: "gmETH-USD", },
    { id: 4, symbol: "USDT", title: "USD Coin", }
]

