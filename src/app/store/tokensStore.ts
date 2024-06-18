import { Token } from "@/types/Token";
import { create } from "zustand";

export interface TokensStore {
  tokens: Token[];
  setTokens: (projects: Token[]) => void;
}

export const useTokenStore = create<TokensStore>((set) => ({
  tokens: [],
  setTokens: (tokens) => set({ tokens }),
}));
