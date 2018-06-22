import Vue from 'vue'
import Vuex from 'vuex'
import SmartSupp from './smartSupp'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    SmartSupp
  }
})
export default store
