<template>
  <div class="vue-parallax-container">
    <slot />
    <div class="vue-parallax">
      <img
        :src="dataSrc"
        :alt="alt"
        :class="imageClass"
        :style="{ transform }"
        @load="imageLoaded"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "VParallax",
  props: {
    src: {
      type: [String, Object],
      required: true,
    },
    alt: String,
    imageClass: String,
  },
  data() {
    return {
      imgHeight: 1,
      img: undefined,
      dataSrc: "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
      transform: "translate(-50%, 0px)",
    };
  },
  beforeDestroy() {
    this.unwatchVuex();
  },
  mounted() {
    if (global.__PRERENDER_INJECTED) {
      return;
    }
    this.dataSrc = this.src;
    this.img = this.$el.children
      .item(this.$el.children.length - 1)
      .children.item(0);
    this.img.style.display = "block";
    this.unwatchVuex = this.$store.watch(
      (state) => {
        return state.Window;
      },
      (windowState) => {
        this.updateParallax(windowState);
      },
      { deep: true }
    );
  },
  methods: {
    imageLoaded() {
      this.img.style.opacity = 1;

      this.updateParallax(this.$store.state.Window);
    },
    updateParallax({ scrollTop, windowHeight }) {
      if (!this.img) {
        return;
      }
      const containerTop = this.$el.offsetTop;
      const containerHeight = this.$el.offsetHeight;
      const containerBottom = containerTop + containerHeight;

      const imgHeight = this.img.offsetHeight;
      const windowBottom = scrollTop + windowHeight;
      const parallaxDist = imgHeight - containerHeight;

      const percentScrolled =
        (windowBottom - containerTop) / (containerHeight + windowHeight);
      const parallax = parallaxDist * percentScrolled;
      if (scrollTop <= containerBottom && containerTop <= windowBottom) {
        this.transform = `translate(-50%, ${parallax}px)`;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.vue-parallax-container {
  position: relative;
  overflow: hidden;
  min-height: 380px;
  line-height: 0;
  height: auto;
  color: rgba(255, 255, 255, 0.9);

  .vue-parallax {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    img {
      position: absolute;
      left: 50%;
      bottom: 0;
      min-width: 100%;
      min-height: 100%;
    }
  }
}
@media screen and (max-height: 950px) {
  .vue-parallax-container {
    min-height: 40vh;
  }
}
</style>
