<template>
  <img :src="dataSrc" />
</template>
<script>
/**
 * Deferred image.  This will load up the image when the component after the
 * component is mounted, in it place is a single pixel PNG place holder image
 * encded as a data URL to make it load without any network.
 *
 * It does some detection of __PRERENDER_INJECTED which is set when
 * prerendering is being performed.
 */
export default {
  name: "DImg",
  props: {
    src: {
      type: [String, Object],
      required: true,
    },
  },
  data() {
    return {
      dataSrc: "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
    };
  },
  mounted() {
    //if (!global.__PRERENDER_INJECTED) {
    this.dataSrc = this.src;
    //}
  },
};
</script>
