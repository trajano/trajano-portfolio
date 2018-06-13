<template>
    <footer class="page-footer scrollspy" id="contact">
        <div class="container">
            <div class="row">
                <div class="col m6 l8 hide-on-small-only">
                    <h5 class="white-text">Bio</h5>
                    <p class="grey-text text-lighten-4">Archie has been working professionally over {{yearsWorked}} years. He enjoys programming and playing Heroes of the Storm. About the only "normal" thing he likes doing is eating food.
                    </p>
                </div>
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
                    <p>
                        <button class="white-text waves-effect btn-flat chatbutton" hidden>
                            <font-awesome-icon icon="comment" :fixed-width="true" /> Chat with me I'm online</button>
                    </p>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div>© 2016-{{currentYear}} Trajano.
                <a class="yellow-text" href="https://trajano.net/privacy-policy">Privacy policy</a>
                <div id="152146877" class="right"></div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'PortfolioFooter',
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
footer.page-footer {
  .footer-copyright {
    background-color: color("green", "darken-4");
    padding: 0 1.6rem;
  }
  .footer-copyright > div {
    width: 100%;
  }
}
</style>
