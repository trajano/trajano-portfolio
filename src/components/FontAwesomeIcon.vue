<template>
  <fa-icon
    v-if="!prerendering"
    :icon="icon"
    :size="size"
    :fixed-width="fixedWidth"
  />
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "FontAwesomeIcon",
  components: {
    faIcon: FontAwesomeIcon
  },
  props: {
    icon: [String, Array],
    size: String,
    fixedWidth: Boolean
  },
  data() {
    return {
      prerendering: !!global.__PRERENDER_INJECTED
    };
  }
};
</script>
