<template>
  <div class="col s12 m4">
    <div class="icon-block">
      <h2 class="center brown-text">
        <font-awesome-icon :icon="icon" size="lg" />
      </h2>
      <h5 class="center">{{heading}}</h5>
      <p>
        <slot></slot>
      </p>
    </div>
  </div>
</template>
<script>
/**
 * My Feature.
 */
export default {
  name: 'MyFeature',
  props: {
    heading: {
      type: String,
      required: true
    },
    icon: {
      type: [String, Array],
      required: true
    }
  },
  data() {
    return {
    }
  }
}
</script>
