import { create } from "zustand";
type DisplayNav = {
  displayNav: boolean;
  toggleDisplay: () => void;
};

export const useDisplayNav = create<DisplayNav>((set) => ({
  displayNav: false,
  toggleDisplay: () => set((state) => ({ displayNav: !state.displayNav })),
}));
