import Vue from 'vue'
import PortfolioFooter from '@/components/PortfolioFooter'
import '@/icons'

describe('PortfolioFooter.vue', () => {
  it('should not crash', () => {
    const Constructor = Vue.extend(PortfolioFooter)
    const vm = new Constructor({
      propsData: {}
    }).$mount()
  })
})
