import { create } from "zustand";

const useStyleStore = create((set) => ({
  selectedColor: {
    title: "Yellow",
    color: "bg-yellow-400",
    dark: "bg-yellow-600",
    border: "border-yellow-400",
  },
  highlightColors: [
    {
      title: "Yellow",
      color: "bg-yellow-400",
      dark: "bg-yellow-600",
      border: "border-yellow-400",
    },
    {
      title: "Orange",
      color: "bg-orange-400",
      dark: "bg-orange-600",
      border: "border-orange-400",
    },
    {
      title: "Red",
      color: "bg-red-400",
      dark: "bg-red-600",
      border: "border-red-400",
    },
    {
      title: "Pink",
      color: "bg-pink-400",
      dark: "bg-pink-600",
      border: "border-pink-400",
    },
    {
      title: "Purple",
      color: "bg-purple-400",
      dark: "bg-purple-600",
      border: "border-purple-400",
    },
  ],
  changeColor: (color) =>
    set((state) => {
      const selected = state.highlightColors.find((highlightColor) => {
        return highlightColor.color === color;
      });
      return { selectedColor: selected };
    }),
}));

export { useStyleStore };
