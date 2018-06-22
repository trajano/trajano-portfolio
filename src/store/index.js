import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    smartSuppOnline: false,
    scrollSpies: []
  },
  getters: {
    smartSuppOnline: state => {
      return state.smartSuppOnline && !global.__PRERENDER_INJECTED
    }
  },
  mutations: {
    smartSuppOnline (state) {
      state.smartSuppOnline = true
    },
    smartSuppOffline (state) {
      state.smartSuppOnline = false
    },
    addScrollSpy (state, { scrollSpyElement }) {
      state.scrollSpies.push(scrollSpyElement)
    }
  }
})
export default store
