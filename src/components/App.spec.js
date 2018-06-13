import Vue from 'vue'
import App from '@/components/App'
import '@/icons'

describe('App.vue', () => {
  it('should not crash when prerendering', () => {
    global.__PRERENDER_INJECTED = {}
    const Constructor = Vue.extend(App)
    new Constructor({
      propsData: {}
    }).$mount()
  })
  afterEach(() => {
    delete global.__PRERENDER_INJECTED
  })
})
