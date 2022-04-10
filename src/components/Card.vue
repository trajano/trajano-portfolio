<template>
  <div class="card small hoverable" @click.prevent="click">
    <div class="card-image waves-effect waves-block waves-light">
      <img :src="dataSrc" :alt="alt" :class="bgClass" />
      <span class="card-title">
        <slot name="title" />
      </span>
    </div>
    <div class="card-content">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Card",
  props: {
    bgSrc: {
      type: [String, Object],
      required: true,
    },
    alt: String,
    bgClass: String,
    href: {
      type: [String, Object],
      required: true,
    },
  },
  data() {
    return {
      img: undefined,
      dataSrc: "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
    };
  },
  mounted() {
    if (!global.__PRERENDER_INJECTED) {
      this.dataSrc = this.bgSrc;
    }
  },
  methods: {
    click() {
      global.location.href = this.href;
    },
  },
};
</script>
