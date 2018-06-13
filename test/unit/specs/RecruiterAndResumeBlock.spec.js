import Vue from 'vue'
import RecruiterAndResumeBlock from '@/components/RecruiterAndResumeBlock'
import '@/icons'

describe('RecruiterAndResumeBlock.vue', () => {
    it('should show the proper rate', () => {
      const Constructor = Vue.extend(RecruiterAndResumeBlock)
      const vm = new Constructor({
        propsData: {
        }
      }).$mount()
      expect(vm.rate)
        .toEqual(125)
    })
  })
  