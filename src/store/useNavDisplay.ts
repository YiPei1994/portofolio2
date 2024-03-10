import { create } from "zustand";
type DisplayNav = {
  displayNav: boolean;
  toggleDisplay: () => void;
};

export const useDisplayNav = create<DisplayNav>((set) => ({
  displayNav: true,
  toggleDisplay: () => set((state) => ({ displayNav: !state.displayNav })),
}));
