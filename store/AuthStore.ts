import { create } from "zustand";

interface AuthState {
  isAuth: boolean;
  user: any;
  setIsAuth: (isAuth: boolean) => void;
  setUser: (user: any) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuth: true,
  user: null,
  setIsAuth: (isAuth) => set({ isAuth }),
  setUser: (user) => {
    set({ user });
  },
}));
