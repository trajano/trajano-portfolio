<template>
    <parallax>
        <img src="/assets/hiro.jpg" alt="Hiro close-up" v-parallax="0.2">>
        <div id="top-banner">
            <div class="section">
                <div class="container">
                    <br class="hide-on-small-only"><br class="hide-on-small-only">
                    <h1 class="header center -text text-lighten-2 thin">
                        [[ htmlWebpackPlugin.options.data.name ]]
                    </h1>
                    <div class="row center">
                        <p class="col s12">
                            [[ htmlWebpackPlugin.options.data.jobTitle ]]
                        </p>
                    </div>
                    <div class="row hide-on-med-and-down center">
                        <a class="call-to-action" href="#resume">[[icon "download" "fw"]] View My Resume and Contact Info</a>
                        <button class="call-to-action chatbutton" hidden>[[icon "comment" "fw"]] Chat with me, I'm online</button>
                    </div>
                    <div class="row hide-on-large-only center">
                        <a class="white-text obfuscate btn-flat" href="mailto:archie...trajano...net">[[icon "envelope-o" "fw" "left"]] archie...trajano...net</a>
                        <br class="hide-on-med-only">
                        <a class="white-text obfuscate btn-flat" href="tel:+One FourOneSix-EightFiveSix-SixSixFiveFive">[[icon "phone" "fw" "left"]] FourOneSix-EightFiveSix-SixSixFiveFive</a>
                    </div>
                    <div id="skip-to-content">
                        <a class="btn-floating btn-large waves-effect waves-light hoverable" href="#mainnav">[[icon "arrow-down"]]</a>
                    </div>
                </div>
            </div>
        </div>
    </parallax>
</template>


<script>
import Parallax from "vue-parallaxy";
export default {
  name: "top-banner",
  components: {
    Parallax
  }
};
</script>

<style>
</style>