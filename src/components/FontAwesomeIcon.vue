<template>
    <fa-icon v-if="!prerendering" :icon="icon" :size="size" :fixed-width="fixedWidth"/>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'FontAwesomeIcon',
  props: {
    icon: [String, Array],
    size: String,
    fixedWidth: Boolean
  },
  components: {
    faIcon: FontAwesomeIcon
  },
  data() {
    return {
      prerendering: !!global.__PRERENDER_INJECTED
    }
  }
}
</script>

