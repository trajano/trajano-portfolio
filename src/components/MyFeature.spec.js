import Vue from 'vue'
import MyFeature from '@/components/MyFeature'
import '@/icons'

describe('MyFeature.vue', () => {
  it('should not crash', () => {
    const Constructor = Vue.extend(MyFeature)
    new Constructor({
      propsData: {
        heading: 'test',
        icon: 'building'
      }
    }).$mount()
  })

  it('should not crash with an icon array', () => {
    const Constructor = Vue.extend(MyFeature)
    new Constructor({
      propsData: {
        heading: 'test',
        icon: ['fab', 'github']
      }
    }).$mount()
  })
})
