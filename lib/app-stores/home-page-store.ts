import { create } from "zustand";

type ProductStore = {
  inViewProduct: string | null;
  setInViewProduct: (product: string | null) => void;
  selectedHosting: string | null;
  setSeletedHosting: (hosting: string | null) => void;
};

export const useHomePageStore = create<ProductStore>((set) => ({
  inViewProduct: "1",
  setInViewProduct: (product: string | null) =>
    set(() => ({ inViewProduct: product })),
  selectedHosting: "1",
  setSeletedHosting: (hosting: string | null) =>
    set(() => ({ selectedHosting: hosting })),
}));
