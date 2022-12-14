export const mainnetNetworks = {
  mainnet: {
    name: "Ethereum Mainnet",
    chainId: 1,
    rpcUrl: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    iconUrl: "./ETH.png",
    symbol: "ETH",
    blockExplorerUrl: "https://etherscan.io",
    tokenSymbolList: ["USDC", "USDT", "WETH", "BUSD", "DODO", "LYRA", "DOMI", "MCB", "oneDODO", "OLO", "BOBA", "PSP", "XTK", "Metis", "WXT", "PEOPLE", "SOS", "FRAX", "CEC", "STND", "WOO", "CELR", "KROM", "PERP", "SAFLE", "DAI", "PKEX", "WBTC", "GHX", "CONV", "TSD", "AAVE", "CRV", "SYS", "FXS", "DF", "USX", "AELIN", "REVA", "JPEG", "CGG", "AVG", "PERL", "WAGMIV1", "WAGMIV2", "MASK", "LUSD", "THALES", "MSU", "UCG", "MELOS", "REEF", "iZi", "ASTR", "MGH", "ANML", "HUH", "GOVI", "GEL", "DEVT", "DTR", "NFTY", "RLY", "AKRO", "iUSD", "SHI", "OOKI", "WAGMIV3", "PBR", "FLX", "PLOT", "XBP", "RAGE", "UMA", "SOLACE", "LFI", "cfUSDC", "GNO", "LUSD", "WING", "MUXLP", "muxUSD", "muxETH", "muxBTC", "GOV", "PSTAKE", "SEAN", "JPYC", "CERES", "DEO", "S2K", "LEAP", "NYM"],
    lqMintTokenSymbolBlackList: ["DOMI", "oneDODO", "OLO", "PSP", "WXT", "PEOPLE", "SOS", "FRAX", "CELR", "SAFLE", "DAI", "PKEX", "WBTC", "GHX", "CONV", "TSD", "AAVE", "CRV", "SYS", "FXS", "AELIN", "REVA", "CGG", "AVG", "WAGMIV1", "WAGMIV2", "MSU", "UCG", "MELOS", "ASTR", "MGH", "GEL", "DEVT", "DTR", "NFTY", "RLY", "AKRO", "WAGMIV3", "PBR", "FLX", "PLOT", "XBP", "RAGE", "UMA", "SOLACE", "LFI", "cfUSDC", "GNO", "MUXLP", "muxUSD", "muxETH", "muxBTC", "GOV", "PSTAKE", "SEAN", "CERES", "DEO", "S2K", "LEAP", "NYM"]
  },
  bsc: {
    name: "BNB Chain",
    chainId: 56,
    rpcUrl: "https://bscrpc.com/",
    iconUrl: "./bnbchain.png",
    symbol: "BNB",
    blockExplorerUrl: "https://bscscan.com",
    tokenSymbolList: ["USDC", "USDT", "WETH", "BUSD", "DODO", "DOMI", "MCB", "oneDODO", "OLO", "PSP", "ATL", "PEOPLE", "SOS", "FRAX", "CEC", "WOO", "PERP", "SAFLE", "WBNB", "BNB", "GHX", "TSD", "SYS", "FXS", "DF", "USX", "REVA", "JPEG", "AVG", "PERL", "MASK", "LUSD", "SWAY", "MSU", "UCG", "MELOS", "REEF", "MGH", "ANML", "HUH", "iZi", "DTR", "AKRO", "iUSD", "SHI", "OOKI", "PBR", "PEEL", "SHELL", "GNO", "OKSE", "WING", "WRT", "MUXLP", "muxUSD", "muxETH", "muxBTC", "muxBNB", "muxAVAX", "muxFTM", "GOV", "PSTAKE", "S2K", "LEAP", "NYM"],
    lqMintTokenSymbolBlackList: ["oneDODO", "OLO", "PSP", "ATL", "PEOPLE", "SOS", "FRAX", "SAFLE", "BNB", "GHX", "TSD", "SYS", "FXS", "REVA", "AVG", "LUSD", "SWAY", "MSU", "UCG", "MELOS", "MGH", "DTR", "AKRO", "OOKI", "PBR", "PEEL", "SHELL", "GNO", "OKSE", "WRT", "MUXLP", "muxUSD", "muxETH", "muxBTC", "muxBNB", "muxAVAX", "muxFTM", "GOV", "PSTAKE", "S2K", "LEAP", "NYM"]
  },
  polygon: {
    name: "Polygon (Matic)",
    chainId: 137,
    rpcUrl: "https://rpc.ankr.com/polygon",
    iconUrl: "./polygon.png",
    symbol: "MATIC",
    blockExplorerUrl: "https://polygonscan.com",
    tokenSymbolList: ["USDC", "USDT", "WETH", "WXT", "ATL", "FRAX", "WOO", "MAI", "SAFLE", "MATIC", "FXS", "REVA", "KROM", "SWAY", "USX", "DF", "ANML", "HUH", "GOVI", "DEVT", "THALES", "iUSD", "iZi", "GEL", "JPYC", "AX", "BIFI", "GREEN", "QI", "OOKI", "SOLACE", "OKSE"],
    lqMintTokenSymbolBlackList: ["WXT", "ATL", "FRAX", "MAI", "SAFLE", "MATIC", "FXS", "REVA", "SWAY", "DEVT", "GEL", "AX", "BIFI", "GREEN", "QI", "SOLACE", "OKSE"]
  },
  arbitrum: {
    name: "Arbitrum One",
    chainId: 42161,
    rpcUrl: "https://arb1.arbitrum.io/rpc",
    iconUrl: "./arbitrum.png",
    symbol: "ETH",
    blockExplorerUrl: "https://arbiscan.io",
    tokenSymbolList: ["USDC", "USDT", "WETH", "DODO", "MCB", "XTK", "FRAX", "WOO", "KROM", "PERP", "FXS", "DF", "USX", "AMY", "REVA", "iZi", "GOVI", "AKRO", "iUSD", "OOKI", "MUXLP", "muxUSD", "muxETH", "muxBTC", "muxBNB", "muxAVAX", "muxFTM", "OKSE"],
    lqMintTokenSymbolBlackList: ["FRAX", "FXS", "AMY", "REVA", "AKRO", "MUXLP", "muxUSD", "muxETH", "muxBTC", "muxBNB", "muxAVAX", "muxFTM", "OKSE"]
  },
  Avalanche: {
    name: "Avalanche",
    chainId: 43114,
    rpcUrl: "https://api.avax.network/ext/bc/C/rpc",
    iconUrl: "./avalanche.png",
    symbol: "AVAX",
    blockExplorerUrl: "https://snowtrace.io",
    tokenSymbolList: ["USDC", "USDT", "WETH", "WXT", "PEOPLE", "SOS", "FRAX", "WOO", "ATL", "MAI", "TSD", "DOMI", "FXS", "AVAX", "REVA", "CGG", "LUSD", "JPEG", "CRA", "CRAM", "TUS", "JPYC", "USX", "GNO", "OKSE", "MUXLP", "muxUSD", "muxETH", "muxBTC", "muxBNB", "muxAVAX", "muxFTM", "avaxUSDC"],
    lqMintTokenSymbolBlackList: ["WXT", "PEOPLE", "SOS", "FRAX", "ATL", "MAI", "TSD", "FXS", "AVAX", "REVA", "CGG", "LUSD", "CRA", "CRAM", "TUS", "GNO", "OKSE", "MUXLP", "muxUSD", "muxETH", "muxBTC", "muxBNB", "muxAVAX", "muxFTM", "avaxUSDC"]
  },
  Optimism: {
    name: "Optimism",
    chainId: 10,
    rpcUrl: "https://opt-mainnet.g.alchemy.com/v2/PmGpTd85SWGf8488jy5H1--I09WBEkIl",
    walletRpcUrl: "https://mainnet.optimism.io",
    iconUrl: "./optimism.png",
    symbol: "ETH",
    blockExplorerUrl: "https://optimistic.etherscan.io",
    tokenSymbolList: ["USDC", "USDT", "WETH", "LYRA", "KROM", "PERP", "FRAX", "FXS", "DF", "USX", "AELIN", "REVA", "THALES", "LUSD", "OKSE"],
    lqMintTokenSymbolBlackList: ["FRAX", "FXS", "AELIN", "REVA", "OKSE"]
  },
  Fantom: {
    name: "Fantom",
    chainId: 250,
    rpcUrl: "https://rpc.ankr.com/fantom",
    iconUrl: "./fantom.png",
    symbol: "FTM",
    blockExplorerUrl: "https://ftmscan.com",
    tokenSymbolList: ["USDC", "USDT", "WETH", "PEOPLE", "SOS", "FRAX", "WOO", "FXS", "FTM", "REVA", "LUSD", "GEL", "SOLACE", "GNO", "OKSE", "MUXLP", "muxUSD", "muxETH", "muxBTC", "muxBNB", "muxAVAX", "muxFTM"],
    lqMintTokenSymbolBlackList: ["PEOPLE", "SOS", "FRAX", "FXS", "FTM", "REVA", "LUSD", "GEL", "SOLACE", "GNO", "OKSE", "MUXLP", "muxUSD", "muxETH", "muxBTC", "muxBNB", "muxAVAX", "muxFTM"]
  },
  Moonriver: {
    name: "Moonriver",
    chainId: 1285,
    rpcUrl: "https://rpc.moonriver.moonbeam.network",
    iconUrl: "./moonriver.png",
    symbol: "MOVR",
    blockExplorerUrl: "https://moonriver.moonscan.io",
    tokenSymbolList: ["FRAX", "PEOPLE", "SOS", "MAI", "FXS", "DODO"],
    lqMintTokenSymbolBlackList: ["FRAX", "PEOPLE", "SOS", "MAI", "FXS", "DODO"]
  },
  Aurora: {
    name: "Aurora",
    chainId: 1313161554,
    rpcUrl: "https://mainnet.aurora.dev",
    iconUrl: "./Aurora.png",
    symbol: "aETH",
    blockExplorerUrl: "https://aurorascan.dev/",
    tokenSymbolList: ["USDC", "USDT", "FRAX", "FXS", "BUSD", "FTM", "AURORA", "SOLACE", "OKSE"],
    lqMintTokenSymbolBlackList: ["FRAX", "FXS", "BUSD", "FTM", "AURORA", "SOLACE", "OKSE"]
  },
  Celo: {
    name: "Celo",
    chainId: 42220,
    rpcUrl: "https://forno.celo.org",
    iconUrl: "./celo.png",
    symbol: "CELO",
    blockExplorerUrl: "https://explorer.celo.org",
    tokenSymbolList: ["PEOPLE", "SOS"],
    lqMintTokenSymbolBlackList: ["PEOPLE", "SOS"]
  },
  Moonbeam: {
    name: "Moonbeam",
    chainId: 1284,
    rpcUrl: "https://rpc.api.moonbeam.network",
    iconUrl: "./moonbeam.png",
    symbol: "GLMR",
    blockExplorerUrl: "https://moonbeam.moonscan.io",
    tokenSymbolList: ["USDC", "USDT", "CELR", "PEOPLE", "FRAX", "CONV", "WETH", "WBTC", "BUSD", "FXS", "ZLK"],
    lqMintTokenSymbolBlackList: ["USDC", "USDT", "CELR", "PEOPLE", "FRAX", "CONV", "WETH", "WBTC", "BUSD", "FXS"]
  },
  Oasis: {
    name: "Oasis Emerald",
    chainId: 42262,
    rpcUrl: "https://emerald.oasis.dev",
    iconUrl: "./oasis.png",
    symbol: "ROSE",
    blockExplorerUrl: "https://www.oasisscan.com",
    tokenSymbolList: ["USDC", "USDT", "WETH", "BNB", "AVAX", "FTM", "AMY", "DAI", "CELR"],
    lqMintTokenSymbolBlackList: ["USDC", "USDT", "WETH", "BNB", "AVAX", "FTM", "AMY", "DAI", "CELR"]
  },
  Evmos: {
    name: "Evmos",
    chainId: 9001,
    rpcUrl: "https://evmos-mainnet.public.blastapi.io",
    iconUrl: "./evmos.png",
    symbol: "EVMOS",
    blockExplorerUrl: "https://evm.evmos.org/",
    tokenSymbolList: ["USDT", "USDC", "DAI", "WETH", "WBTC", "CELR", "BNB", "BUSD", "AVAX", "FTM", "AURORA", "FRAX", "FXS"],
    lqMintTokenSymbolBlackList: ["USDT", "USDC", "DAI", "WETH", "WBTC", "CELR", "BNB", "BUSD", "AVAX", "FTM", "AURORA", "FRAX", "FXS"]
  },
  Klaytn: {
    name: "Klaytn",
    chainId: 8217,
    rpcUrl: "https://public-node-api.klaytnapi.com/v1/cypress",
    iconUrl: "./klaytn.png",
    symbol: "KLAY",
    blockExplorerUrl: "https://www.klaytnfinder.io",
    tokenSymbolList: ["USDC", "USDT", "DAI", "WETH", "WBTC"],
    lqMintTokenSymbolBlackList: ["USDC", "USDT", "DAI", "WETH", "WBTC"]
  },
};
