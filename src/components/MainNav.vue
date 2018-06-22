<template>
    <div id="mainnav" class="scrollspy" v-scroll-spy>
        <nav role="navigation" id="mainnav-nav">
            <div class="nav-wrapper">
                <a id="logo-container" href="#" class="brand-logo left">
                    <img src="../assets/portfolio-logo.png" alt="Trajano">
                </a>
                <ul id="nav-desktop" class="right hide-on-med-and-down table-of-contents">
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
                        <a href="#contact">Contact Me</a>
                    </li>
                </ul>
                <ul id="nav-mobile" class="side-nav table-of-contents">
                    <li>
                        <div class="userView z-depth-1">
                            <div class="background">
                                <d-img :src="require('../assets/snow-in-scarborough.jpg?size=500')" alt="Snow in Scarborough" class="darken" />
                            </div>
                            <d-img :src="require('../assets/avatar.jpg?size=250')" alt="Archimedes Trajano gravatar" class="circle" />
                            <span class="white-text name">Archie</span>
                            <a href="mailto:archie...trajano...net" v-deobfuscate>
                                <span class="white-text email">archie...trajano...net</span>
                            </a>
                            <a href="tel:+One FourOneSix-EightFiveSix-SixSixFiveFive" v-deobfuscate>
                                <span class="white-text tel">FourOneSix-EightFiveSix-SixSixFiveFive</span>
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
                        <a href="https://trajano.net/blog/" title="Archimedes Trajano Blog">Blog</a>
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
import $ from 'jquery'
import DImg from './DImg'
export default {
  name: 'MainNav',
  components: {
    DImg
  },
  mounted() {
    if (global.__PRERENDER_INJECTED) {
      return
    }
    $('#mainnav-nav').pushpin({
      top: this.$el.getBoundingClientRect().top
    })
  }}
</script>
