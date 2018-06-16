import Vue from 'vue'
import PortfolioFooter from '@/components/PortfolioFooter'
import '@/icons'

describe('PortfolioFooter.vue', () => {
  it('should not crash', () => {
    // const mockStore = jest.fn()
    const Constructor = Vue.extend(PortfolioFooter)
    new Constructor({
      propsData: {}
    }).$mount()
  })
})
