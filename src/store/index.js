import Vue from 'vue'
import Vuex from 'vuex'
import SmartSupp from './smartSupp'
import Window from './window'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    SmartSupp,
    Window
  }
})
export default store
