import { create } from "zustand";
import axios from "axios";
import { axiosInstance } from "@/utils/axiosInstance";
interface ProductState {
  products: any;
  fetchProduct: (products: any) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  fetchProduct: (products) => {
    set({ products });
  },
}));
