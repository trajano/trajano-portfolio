import Vue from 'vue'
import App from '@/components/App'
import '@/icons'

describe('App.vue', () => {
  it('should not crash', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor({
      propsData: {}
    }).$mount()
  })
})
