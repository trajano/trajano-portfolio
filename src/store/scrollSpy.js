export const ScrollSpy = {
  namespaced: true,
  state: {
    scrollElements: []
  },
  mutations: {
    addScrollSpy (state, { el }) {
      state.scrollElements.push(el)
    }
  },
  actions: {
    addScrollSpy({ commit }, payload) {
      commit('addScrollSpy', { el: payload.el })
    }
  }
}
export default ScrollSpy
