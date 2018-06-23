<template>
  <div class="parallax-container">
    <slot />
    <div class="parallax">
      <img :src="dataSrc" :alt="alt" @load="imageLoaded" :class="imageClass" :style="{transform}"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VParallax',
  props: {
    src: {
      type: [String, Object],
      required: true
    },
    alt: String,
    imageClass: String
  },
  data() {
    return {
      imgHeight: 1,
      img: undefined,
      dataSrc: 'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
      transform: undefined
    }
  },
  beforeDestroy() {
    if (this.unwatchVuex) {
      this.unwatchVuex()
    }
  },
  methods: {
    imageLoaded() {
      this.img.style.opacity = 1
      this.imgHeight = this.img.offsetHeight

      this.updateParallax(this.$store.state.Window)
    },
    updateParallax({scrollTop, windowHeight}) {
      const windowBottom = scrollTop + windowHeight
      const parallaxDist = this.imgHeight - this.containerHeight

      const percentScrolled =
        (windowBottom - this.top) / (this.containerHeight + windowHeight)
      const parallax = parallaxDist * percentScrolled

      this.transform = `translate3D(-50%, ${parallax}px, 0)`
    }
  },
  mounted() {
    if (global.__PRERENDER_INJECTED) {
      return
    }
    this.dataSrc = this.src
    this.containerHeight = this.$el.offsetHeight
    this.top = this.$el.getBoundingClientRect().top
    this.bottom = this.top + this.containerHeight
    this.img = this.$el.children
      .item(this.$el.children.length - 1)
      .children.item(0)
    this.img.style.display = 'block'
    this.unwatchVuex = this.$store.watch(
      state => {
        return state.Window
      },
      windowState => {
        const scrollTop = windowState.scrollTop

        const windowHeight = windowState.windowHeight

        this.updateParallax({scrollTop, windowHeight})
      },
      { deep: true }
    )
  }
}
</script>
