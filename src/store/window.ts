import { ActionContext, Module } from "vuex";
interface WindowState {
  scrollTop: number;
  windowHeight: number;
}
export const Window: Module<WindowState, WindowState> = {
  namespaced: true,
  state: {
    scrollTop: 0,
    windowHeight: window.innerHeight,
  },
  getters: {
    windowBottom({ scrollTop, windowHeight }: WindowState) {
      return scrollTop + windowHeight;
    },
  },
  mutations: {
    onScroll(state: WindowState, { scrollTop }: WindowState) {
      state.scrollTop = scrollTop;
    },
    onResize(state: WindowState, { scrollTop, windowHeight }: WindowState) {
      state.scrollTop = scrollTop;
      state.windowHeight = windowHeight;
    },
  },
  actions: {
    onScroll({ commit }: ActionContext<WindowState, WindowState>) {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      commit("onScroll", { scrollTop });
    },
    onResize({ commit }: ActionContext<WindowState, WindowState>) {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      const windowHeight = window.innerHeight;
      commit("onResize", { scrollTop, windowHeight });
    },
  },
};
export default Window;
