import { WalletAddress } from "@/types/WalletAddress";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface WalletStore {
  wallet: WalletAddress;
  signature: string;
  jwt: string;
  setWallet: (wallet: WalletAddress) => void;
  setSignature: (signature: string) => void;
  setJwt: (jwt: string) => void;
}

export const useWalletStore = create(
  persist<WalletStore>(
    (set): WalletStore => ({
      wallet: undefined,
      signature: "",
      jwt: "",
      setWallet: (wallet: WalletAddress) => set({ wallet }),
      setSignature: (signature: string) => set({ signature }),
      setJwt: (jwt: string) => set({ jwt }),
    }),
    {
      name: "wallet-storage",
    }
  )
);
