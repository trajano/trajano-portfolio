import Vue from 'vue'
import Vuex from 'vuex'
import ScrollSpy from './scrollSpy'
import Window from './window'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    ScrollSpy,
    Window
  }
})
export default store
