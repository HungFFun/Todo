import { createStore } from "./store";

export const AppStore = createStore({
  isLogin: false,
  isWaiting: false,
});

export const useAppStore = AppStore.useStore;
