import { create } from "zustand";
type TimelineSlide = {
  currentSlide: number;
  nextSlide: () => void;
  prevSlide: () => void;
};

export const useTimeline = create<TimelineSlide>((set) => ({
  currentSlide: 0,
  nextSlide: () => set((state) => ({ currentSlide: state.currentSlide + 1 })),
  prevSlide: () => set((state) => ({ currentSlide: state.currentSlide - 1 })),
}));
