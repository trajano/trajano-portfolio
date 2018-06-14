<template>
</template>

<script>
/**
 * Smartsupp Live Chat script
 */
import $script from 'scriptjs'
import store from '../store'
export default {
  name: 'SmartSupp',
  props: {
    clientKey: {
      type: String,
      required: true
    }
  },
  mounted() {
    global._smartsupp = global._smartsupp || {}
    global._smartsupp.key = this.clientKey

    $script('//www.smartsuppchat.com/loader.js', () => {
      global.smartsupp('on', 'status', status => {
        if (status === 'online') {
          store.commit('smartSuppOnline')
        } else {
          store.commit('smartSuppOffline')
        }
      })
    })
  }
}
</script>