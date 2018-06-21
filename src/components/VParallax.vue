<template>
  <div class="parallax-container">
    <slot />
    <div class="parallax">
      <img :src="src" :alt="alt" @load="imageLoaded" :class="imageClass"/>
    </div>
  </div>
</template>
<script>
import DImg from './DImg'
export default {
  name: 'VParallax',
  components: {
    DImg
  },
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
      img: undefined
    }
  },
  methods: {
    imageLoaded() {
      this.img.style.opacity = 1
      this.imgHeight = this.img.offsetHeight
      this.updateParallax()
    },
    updateParallax() {
      const scrollTop =
        global.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop

      const windowHeight = global.innerHeight
      const windowBottom = scrollTop + windowHeight

      const parallaxDist = this.imgHeight - this.containerHeight

      const percentScrolled =
        (windowBottom - this.top) / (this.containerHeight + windowHeight)
      const parallax = parallaxDist * percentScrolled

      if (this.bottom > scrollTop && this.top < scrollTop + windowHeight) {
        this.img.style.transform = `translate3D(-50%, ${parallax}px, 0)`
      }
      this.scrollTop = scrollTop
    }
  },
  created() {
    global.addEventListener('scroll', this.updateParallax)
    global.addEventListener('resize', this.updateParallax)
  },
  destroyed() {
    global.removeEventListener('scroll', this.updateParallax)
    global.removeEventListener('resize', this.updateParallax)
  },
  mounted() {
    this.containerHeight = this.$el.offsetHeight || 500
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
