<template>
    <v-parallax id="top-banner" src="/assets/hiro.jpg" alt="Hiro close-up" :height="parallaxHeight">
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
      parallaxHeight: window.innerHeight - 64,
    }
  },
  mounted() {
    let that = this;
    this.$nextTick(function() {
      window.addEventListener('resize', function(e) {
        that.parallaxHeight = window.innerHeight - 64
      });
    })
  }
}
</script>

<style>
#top-banner {
    border: 1px solid yellow;
}
</style>