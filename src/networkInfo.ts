export interface INetworkInfo {
  displayName: string;
  getTransactionURL: (arg: string) => string;
  getThumbnailURL: (arg: string) => string;
}

const ravencoinMainnet: INetworkInfo = {
  displayName: "AITT Mainnet",
  getTransactionURL: (id: string) => {
    return (
      "https://rvn-explorer-mainnet.ting.finance/index.html?route=TRANSACTION&id=" +
      id
    );
  },
  getThumbnailURL(assetName: string) {
    const baseURL =
      "https://rvn-explorer-mainnet.ting.finance/thumbnail?assetName=";
    return baseURL + encodeURIComponent(assetName);
  },
};

// const ravencoinTestnet: INetworkInfo = {
//   displayName: "AITTCoinWallet Testnet",
//   getThumbnailURL: (assetName) => {
//     const baseURL = "https://testnet.ting.finance/thumbnail?assetName=";
//     return baseURL + encodeURIComponent(assetName);
//   },
//   getTransactionURL: (id: string) => {
//     return "https://rvnt.cryptoscope.io/tx/?txid=" + id;
//   },
// };

// const evrmoreMainnet: INetworkInfo = {
//   displayName: "Evrmore Mainnet",
//   getThumbnailURL(assetName) {
//     const baseURL =
//       "https://evr-explorer-mainnet.ting.finance/thumbnail?assetName=";
//     return baseURL + encodeURIComponent(assetName);
//   },
//   getTransactionURL: (id: string) => {
//     return (
//       "https://evr-explorer-mainnet.ting.finance/index.html?route=TRANSACTION&id=" +
//       id
//     );
//   },
// };

export interface INetworks {
  rvn: INetworkInfo;
  // "rvn-test": INetworkInfo;
  // evr: INetworkInfo;
}

const asdf: INetworks = {
  rvn: ravencoinMainnet,
  // "rvn-test": ravencoinTestnet,
  // evr: evrmoreMainnet,
};

export default asdf;
