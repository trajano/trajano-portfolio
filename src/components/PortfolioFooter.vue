<template>
    <footer class="page-footer" id="contact" v-scroll-spy>
        <div class="container">
            <div class="row">
                <bio-or-blog class="col m6 l8 hide-on-small-only" />
                <div class="col m6 l4 s12">
                    <h5 class="white-text">Contact me</h5>
                    <p>
                        <a class="white-text waves-effect btn-flat" v-deobfuscate href="mailto:archie...trajano...net">
                            <font-awesome-icon :icon="['far', 'envelope']" :fixed-width="true" /> archie...trajano...net</a>
                    </p>
                    <p>
                        <a class="white-text waves-effect btn-flat" v-deobfuscate href="tel:+One FourOneSix-EightFiveSix-SixSixFiveFive">
                            <font-awesome-icon icon="mobile-alt" :fixed-width="true" /> FourOneSix-EightFiveSix-SixSixFiveFive</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div>© 2016-{{currentYear}} Trajano.
                <a class="yellow-text" href="https://trajano.net/privacy-policy">Privacy policy</a>
                <div id="152146877" class="right hide-on-small-only"></div>
            </div>
        </div>
    </footer>
</template>
<script>
import BioOrBlog from './BioOrBlog'
export default {
  name: 'PortfolioFooter',
  components: {
    BioOrBlog
  },
  computed: {
  },
  methods: {
  },
  data() {
    const currentYear = new Date().getFullYear()
    const yearsWorked = currentYear - 1996
    return {
      currentYear,
      yearsWorked
    }
  }
}
</script>
<style lang="scss">

</style>
