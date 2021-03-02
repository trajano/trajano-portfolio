import { ActionContext, Module } from "vuex";

interface ScrollSpyState {
  scrollElements: HTMLElement[];
}
export const ScrollSpy: Module<ScrollSpyState, ScrollSpyState> = {
  namespaced: true,
  state: {
    scrollElements: []
  },
  mutations: {
    addScrollSpy(state, { el }) {
      state.scrollElements.push(el);
    }
  },
  actions: {
    addScrollSpy({ commit }, payload) {
      commit("addScrollSpy", { el: payload.el });
    }
  }
};
export default ScrollSpy;
