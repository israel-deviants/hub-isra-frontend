import { create } from "zustand";

interface PricesStoreState {
  prices: Map<string, number>;
  setPrice: (item: string, price: number) => void;
}

const usePricesStore = create<PricesStoreState>((set) => ({
  prices: new Map<string, number>(),
  setPrice: (item: string, price: number) => {
    set((state: PricesStoreState) => {
      const newPrices = new Map(state.prices);
      newPrices.set(item, price);
      return { prices: newPrices };
    });
  },
}));

export default usePricesStore;
