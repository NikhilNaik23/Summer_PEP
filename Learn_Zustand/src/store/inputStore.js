import { create } from "zustand";
export const useInputStore = create((set) => ({
  name: "User",
  updateName: (name) => set({ name }),
}));
