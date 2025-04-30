import { create } from "zustand";

interface IsIosState {
  isIos: boolean;
  setIsIos: (isIos: boolean) => void;
}

export const useIsIosStore = create<IsIosState>((set) => ({
  isIos: false,
  setIsIos: (isIos) => set({ isIos }),
}));
