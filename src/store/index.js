import Vue from 'vue'
import Vuex from 'vuex'
import ScrollSpy from './scrollSpy'
import SmartSupp from './smartSupp'
import Window from './window'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    ScrollSpy,
    SmartSupp,
    Window
  }
})
export default store
