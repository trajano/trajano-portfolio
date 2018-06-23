export const Window = {
  namespaced: true,
  state: {
    scrollTop: 0,
    windowHeight: 0
  },
  getters: {
  },
  mutations: {
    onScroll (state, { scrollTop }) {
      state.scrollTop = scrollTop
    },
    onResize (state, { windowHeight }) {
      state.windowHeight = windowHeight
    }
  },
  actions: {
    onScroll({ commit }) {
      const scrollTop =
      global.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop

      commit('onScroll', { scrollTop })
    },
    onResize({ commit }) {
      const windowHeight = global.innerHeight
      commit('onResize', { windowHeight })
    }
  }
}
export default Window
