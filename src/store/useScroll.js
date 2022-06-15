import create from "zustand";
import { devtools } from "zustand/middleware";

const useScroll = create(
  devtools((set, get) => ({
    scroll: {},

    updateScroll: (_scroll) => {
      set({ scroll: _scroll });
    },
  }))
);

export default useScroll;
