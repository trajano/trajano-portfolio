export const Window = {
  namespaced: true,
  state: {
    scrollTop: 0,
    windowHeight: global.innerHeight
  },
  getters: {
    windowBottom({ scrollTop, windowHeight }) {
      return scrollTop + windowHeight
    }
  },
  mutations: {
    onScroll (state, { scrollTop }) {
      state.scrollTop = scrollTop
    },
    onResize (state, { scrollTop, windowHeight }) {
      state.scrollTop = scrollTop
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
      const scrollTop =
      global.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop

      const windowHeight = global.innerHeight
      commit('onResize', { scrollTop, windowHeight })
    }
  }
}
export default Window
