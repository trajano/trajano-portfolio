export const ScrollSpy = {
  namespaced: true,
  state: {
    scrollPoints: []
  },
  mutations: {
    addScrollPoint (state, { el }) {
      state.scrollPoints.push({
        id: el.id,
        offsetTop: el.offsetTop
      })
    }
  },
  actions: {
    addScrollSpy({ commit }, payload) {
      commit('addScrollPoint', { el: payload.el })
    }
  }
}
export default ScrollSpy
