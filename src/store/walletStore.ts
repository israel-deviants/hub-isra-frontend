import { WalletAddress } from "@/types/WalletAddress";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface WalletStore {
  wallet: WalletAddress;
  setWallet: (wallet: WalletAddress) => void;
}

export const useWalletStore = create(
  persist<WalletStore>(
    (set): WalletStore => ({
      wallet: undefined,
      setWallet: (wallet: WalletAddress) => set({ wallet }),
    }),
    {
      name: "wallet-storage",
    }
  )
);
