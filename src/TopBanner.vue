<template>
    <v-parallax id="top-banner" src="/assets/hiro.jpg" alt="Hiro close-up" v-bind:height="windowHeight">
        <v-layout column align-center justify-center>           
                        [[ htmlWebpackPlugin.options.data.name ]]
        </v-layout>
    </v-parallax>
</template>


<script>
export default {
  name: "top-banner",
  data() {
    return {
      windowHeight: window.innerHeight,
    }
  },
  mounted() {
    let that = this;
    this.$nextTick(function() {
      window.addEventListener('resize', function(e) {
        that.windowHeight = window.innerHeight
      });
    })
  }
}
</script>

<style>
</style>