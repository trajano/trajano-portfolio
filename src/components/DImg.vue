<!-- Deferred image -->
<template>
    <img :src="dataSrc" />
</template>
<script>
export default {
  name: "DImg",
  props: {
    src: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      dataSrc: "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
    };
  },
  mounted() {
    if (!window.__PRERENDER_INJECTED) {
      this.dataSrc = this.src;
    }
  }
};
</script>
