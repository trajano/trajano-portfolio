<template>
  <div class="parallax-container">
    <slot />
    <div class="parallax">
      <img :src="dataSrc" :alt="alt" @load="imageLoaded" :class="imageClass"/>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'

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
      dataSrc: 'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
    }
  },
  computed: {
    ...mapState({
      scrollTop: state => state.Window.scrollTop
    })
  },
  methods: {
    imageLoaded() {
      this.img.style.opacity = 1
      this.imgHeight = this.img.offsetHeight
      this.updateParallax()
    },
    updateParallax() {
      const scrollTop = this.scrollTop

      const windowHeight = global.innerHeight
      const windowBottom = scrollTop + windowHeight

      const parallaxDist = this.imgHeight - this.containerHeight

      const percentScrolled =
        (windowBottom - this.top) / (this.containerHeight + windowHeight)
      const parallax = parallaxDist * percentScrolled

      if (this.bottom > scrollTop && this.top < scrollTop + windowHeight) {
        this.img.style.transform = `translate3D(-50%, ${parallax}px, 0)`
      }
    }
  },

  beforeMount() {
    if (!global.__PRERENDER_INJECTED) {
      this.dataSrc = this.src
    }
  },
  mounted() {
    if (global.__PRERENDER_INJECTED) {
      return
    }
    this.containerHeight = this.$el.offsetHeight
    this.top = this.$el.getBoundingClientRect().top
    this.bottom = this.top + this.containerHeight
    this.img = this.$el.children
      .item(this.$el.children.length - 1)
      .children.item(0)
    this.img.style.display = 'block'
    this.updateParallax()
  }
}
</script>
