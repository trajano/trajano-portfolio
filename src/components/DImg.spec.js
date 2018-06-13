import Vue from 'vue'
import DImg from '@/components/DImg'

describe('DImg.vue', () => {
  it('should change to the src url after the next tick', () => {
    const Constructor = Vue.extend(DImg)
    const vm = new Constructor({
      propsData: {
        src: 'https://trajano.net/'
      }
    }).$mount()
    expect(vm.$el.src)
      .toEqual('data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=')
    vm.$nextTick(() => {
      expect(vm.$el.src)
        .toEqual('https://trajano.net/')
    })
  })

  it('should not change to the src url after the next tick when prerendering', () => {
    global.__PRERENDER_INJECTED = {}
    const Constructor = Vue.extend(DImg)
    const vm = new Constructor({
      propsData: {
        src: 'https://trajano.net/'
      }
    }).$mount()
    expect(vm.$el.src)
      .toEqual('data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=')
    vm.$nextTick(() => {
      expect(vm.$el.src)
        .toEqual('data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=')
    })
  })

  afterEach(() => {
    delete global.__PRERENDER_INJECTED
  })
})
