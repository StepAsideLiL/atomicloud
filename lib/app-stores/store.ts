import { create } from "zustand";

type ProductStore = {
  inViewProduct: string | null;
  setInViewProduct: (product: string | null) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  inViewProduct: "1",
  setInViewProduct: (product: string | null) =>
    set(() => ({ inViewProduct: product })),
}));
