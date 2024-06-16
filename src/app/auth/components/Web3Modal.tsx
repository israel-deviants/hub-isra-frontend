"use client";

import {
  createWeb3Modal,
  defaultConfig,
  useWeb3ModalAccount,
} from "@web3modal/ethers/react";
import type { ProviderType } from "@web3modal/scaffold-utils/ethers";
import { useWalletStore } from "@/store/walletStore";
import { WalletStore } from "@/store/walletStore";

// 1. Get projectId from https://cloud.walletconnect.com
const projectID = "180a8763c1f780200c0fcc88b85b717f";

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

// 3. Create a metadata object
const metadata = {
  name: "Hub.xyz",
  description: "Your dashboard for tokens and NFTs",
  url: "https://hub.xyz", // origin must match your domain & subdomain
  icons: ["https://avatars.hub.xyz/"],
};
// 4. Create Ethers config
const ethersConfig: ProviderType = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: "...", // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
});

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId: projectID,
  enableAnalytics: false, // Optional - defaults to your Cloud configuration
  enableOnramp: false, // Optional - false as default
});

import React, { ReactNode, useEffect } from "react";

export function Web3Modal({ children }: { children: ReactNode }) {
  const { address, chainId, isConnected } = useWeb3ModalAccount();

  useEffect(() => {
    const walletStore = useWalletStore.getState() as WalletStore;
    if (isConnected) {
      walletStore.setWallet(address);
    } else {
      walletStore.setWallet(undefined);
    }
  }, [address, chainId, isConnected]);

  return <>{children}</>;
}
