<template>
  <div id="mainnav" v-scroll-spy class="scrollspy">
    <nav id="mainnav-nav" role="navigation" :class="{ pinned }">
      <div class="nav-wrapper">
        <a id="logo-container" href="#" class="brand-logo left">
          <img src="../assets/portfolio-logo.png" alt="Trajano" />
        </a>
        <ul
          id="nav-desktop"
          class="right hide-on-med-and-down table-of-contents"
        >
          <li>
            <a
              href="#mainnav"
              :class="{ active: on('mainnav') }"
              @click.prevent="scrollTo('mainnav')"
              >About Archie</a
            >
          </li>
          <li>
            <a
              href="#projects"
              :class="{ active: on('projects') }"
              @click.prevent="scrollTo('projects')"
              >Personal Projects</a
            >
          </li>
          <li>
            <a
              href="#social"
              :class="{ active: on('social') }"
              @click.prevent="scrollTo('social')"
              >Social</a
            >
          </li>
          <li>
            <a
              href="#resume"
              :class="{ active: on('resume') }"
              @click.prevent="scrollTo('resume')"
              >Resume</a
            >
          </li>
          <li>
            <a href="/blog/" title="Archimedes Trajano Blog">Blog</a>
          </li>
          <li>
            <a
              href="#contact"
              :class="{ active: on('contact') }"
              @click.prevent="scrollTo('contact')"
              >Contact Me</a
            >
          </li>
        </ul>
        <ul id="nav-mobile" class="side-nav table-of-contents">
          <li>
            <div class="userView z-depth-1">
              <div class="background">
                <d-img
                  :src="require('../assets/snow-in-scarborough.jpg?size=500')"
                  alt="Snow in Scarborough"
                  class="darken"
                />
              </div>
              <d-img
                :src="require('../assets/avatar.jpg?size=250')"
                alt="Archimedes Trajano gravatar"
                class="circle"
              />
              <span class="white-text name">Archie</span>
              <a v-deobfuscate href="mailto:archie...trajano...net">
                <span class="white-text email">archie...trajano...net</span>
              </a>
              <a
                v-deobfuscate
                href="tel:+One FourOneSix-EightFiveSix-SixSixFiveFive"
              >
                <span class="white-text tel"
                  >FourOneSix-EightFiveSix-SixSixFiveFive</span
                >
              </a>
            </div>
          </li>
          <li>
            <a href="#mainnav">About Archie</a>
          </li>
          <li>
            <a href="#projects">Personal Projects</a>
          </li>
          <li>
            <a href="#social">Social</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="/blog/" title="Archimedes Trajano Blog">Blog</a>
          </li>
          <li>
            <div class="divider"></div>
          </li>
        </ul>
        <a href="#" data-activates="nav-mobile" class="button-collapse right">
          <font-awesome-icon icon="bars" />
        </a>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapState } from "vuex";
import DImg from "./DImg";

export default {
  name: "MainNav",
  components: {
    DImg,
  },
  data() {
    return {
      pinned: false,
      currentId: "mainnav",
    };
  },
  computed: {
    ...mapState({
      scrollTop: (state) => state.Window.scrollTop,
    }),
  },
  mounted() {
    if (global.__PRERENDER_INJECTED) {
      return;
    }
    this.unwatchVuex = this.$store.watch(
      (state) => {
        return state.Window.scrollTop;
      },
      (scrollTop) => {
        this.updateCurrentId(scrollTop);
      }
    );
    this.updateCurrentId(this.scrollTop);
  },
  beforeDestroy() {
    this.unwatchVuex();
  },
  methods: {
    on(id) {
      return id === this.currentId;
    },
    scrollTo(id) {
      this.$store.state.ScrollSpy.scrollElements.forEach((v) => {
        if (v.id === id) {
          global.scroll({
            top: v.offsetTop,
            left: 0,
            behavior: "smooth",
          });
        }
      });
    },
    updateCurrentId(scrollTop) {
      const top = this.$el.offsetTop;
      this.$store.state.ScrollSpy.scrollElements.forEach((v) => {
        if (scrollTop + this.$el.offsetHeight >= v.offsetTop) {
          this.currentId = v.id;
        }
      });
      this.pinned = scrollTop >= top;
    },
  },
};
</script>
<style lang="scss" scoped>
.pinned {
  position: fixed !important;
  top: 0px;
}
</style>
