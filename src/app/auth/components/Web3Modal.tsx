"use client";

import React, { ReactNode, useEffect } from "react";
import {
  createWeb3Modal,
  defaultConfig,
  useDisconnect,
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import type { ProviderType } from "@web3modal/scaffold-utils/ethers";
import { useWalletStore } from "@/app/store/walletStore";
import { WalletStore } from "@/app/store/walletStore";
import { BrowserProvider } from "ethers";
import useAuth from "@/app/hooks/useAuth";

// 1. Get projectId from https://cloud.walletconnect.com
const projectID = process.env.NEXT_PUBLIC_WALLET_PROJECT_ID ?? "";
const message = "Only sign this message if you are logging into HUB.xyz";

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

export function Web3Modal({ children }: { children: ReactNode }) {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const walletStore = useWalletStore.getState() as WalletStore;
  const wallet = useWalletStore((state: any) => state.wallet);
  const signature = useWalletStore((state: any) => state.signature);
  const { disconnect } = useDisconnect();
  const { user, handleLogin }: { user: any; handleLogin: any } = useAuth();

  // Connect wallet
  useEffect(() => {
    if (isConnected) {
      walletStore.setWallet(address);
    }
  }, [address, chainId, isConnected]);

  // If wallet is connected, sign message
  useEffect(() => {
    if (!wallet) return;

    async function fetchData() {
      if (isConnected && !walletStore.signature) {
        const ethersProvider = walletProvider
          ? new BrowserProvider(walletProvider)
          : undefined;
        const signer = ethersProvider
          ? await ethersProvider.getSigner()
          : undefined;

        if (!signer) return walletStore.setWallet(undefined);
        const signature = await signer.signMessage(message);

        if (signature) {
          walletStore.setSignature(signature);

          console.log("we have signature", signature);
        } else {
          console.log("no signature");
          walletStore.setWallet(undefined);
          disconnect();
        }
      }
    }
    if (isConnected) fetchData();
  }, [wallet]);

  // if message is signed, login
  useEffect(() => {
    async function fetchData() {
      if (!wallet || !signature) return;

      await handleLogin(message, signature, wallet);
      if (user) {
        walletStore.setJwt(user.access_token);
      }
    }
    if (signature) fetchData();
  }, [signature]);

  return <>{children}</>;
}
