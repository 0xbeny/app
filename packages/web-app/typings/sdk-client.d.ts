// import * as Aragon from '@aragon/sdk-client'
import * as Aragon from '@aragon/sdk-client-common'

declare module "wagmi/chains"{
  export const apothem: {
    readonly id: 51;
    readonly name: "apothem";
    readonly network: "apothem";
    readonly nativeCurrency: {
        readonly name: "TXDC";
        readonly symbol: "TXDC";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://apothem.xdcrpc.com"];
        };
        readonly public: {
          readonly http: readonly ["https://apothem.xdcrpc.com"];
      };
    };
    readonly blockExplorers: {
        readonly default: {
            readonly name: "Apothem scan";
            readonly url: "https://apothem.blocksscan.io";
        };
        
    };
  readonly testnet: true;
};
}
declare module "@aragon/sdk-client"{
  export const SupportedNetworksArray: readonly ["homestead", "goerli", "matic", "maticmum", 'apothem'];
  export type SupportedNetworks = typeof SupportedNetworksArray[number];
  MultisigClient.encoding.getPluginInstallItem =function() {
    console.log("hello");
    
  }
} 
declare module "@aragon/sdk-client-common" {
  export const SupportedNetworksArray: readonly ["homestead", "goerli", "matic", "maticmum", 'apothem'];
  export type SupportedNetworks = typeof SupportedNetworksArray[number];
  export declare const LIVE_CONTRACTS: {
    [K in SupportedNetworks]: NetworkDeployment;
  } = {
    apothem: {
      "managingDAOImplemenation": "0xB8Aefd187ba04a4e782b9d2DD74bCCc58A90FdD4",
      "managingDAO": "0xb2229aE25B22725a64A0FBcFF92e7693c94336e1",
      "ENSRegistry": "0x7dD18E1ea0369c874071E3E40939E84c1f464E38",
      "PublicResolver": "0xF673f80eD59BfBB7e715191B409C35DaA52899A5",
      "DAO_ENSSubdomainRegistrar_Implementation": "0x38AD245EFBaE1ac10b9D669B616dd8a8550ca06b",
      "DAO_ENSSubdomainRegistrar": "0x6aC5a664d4dC0300aFE3DDD3dC39dF41EdcEc886",
      "Plugin_ENSSubdomainRegistrar_Implementation": "0xa59076073768ee7B83199F636747d4C8dbFFCC98",
      "Plugin_ENSSubdomainRegistrar": "0xbB12E2D1d116886c3b3Ea576330433f8722afa53",
      "DAORegistry_Implementation": "0xFF611C2945c48540428A772A0E95DdC66A399A1E",
      "DAORegistry": "0xfa0C2517Be914dA9c84692C1cC165085E6360ed6",
      "PluginRepoRegistry_Implementation": "0x88edECB0B888b62b78203FE0C23854fFBB993cBB",
      "PluginRepoRegistry": "0x41C805322E16D67f4a5B68718bDE529CE389231b",
      "PluginRepoFactory": "0x2740133c59d69494Fd3477F7D6a14B8476Abc44e",
      "PluginSetupProcessor": "0x81e6C6168beDdf523dE459552c4E184e5A975831",
      "DAOFactory": "0x43F7037658269BCEADA262f07E9ef2f833150F36",
      "AddresslistVotingSetup": "0x5F81E981945B972D12a9313D50e4651dcb97dfEb",
      "AdminSetup": "0x4F19d7B23a7A1d623d4839920B8859AC4775CBF0",
      "MultisigSetup": "0x08043d7d0F0C2cfA00f9395Bccc3d90E89b77345",
      "PlaceholderSetup": "0x08aa093dd4932e7D00D84C8FFEab1dd40CAa4253",
      "address-list-voting-repo": "0xe723265AFCF863460784193992b2D52E919e5852",
      "token-voting-repo": "",
      "admin-repo": "0x539094A0988b6fd1ccb4287EF926224b5313E4c5",
      "multisig-repo": "0xF1BC31816816a2113fb10f5dFf923A63f412a29E"
    }
  }
}
// declare module '@aragon/sdk-client' {
//   export const SupportedNetworksArray: readonly ["homestead", "goerli", "matic", "maticmum", 'apothem'];
//   export type SupportedNetworks = typeof SupportedNetworksArray[number];
// }
