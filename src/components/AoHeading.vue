<template>
  <h3
    :class="[computedClasses]">
    {{ text }}
  </h3>
</template>

<script>
import { filterClasses } from './utils/component_utilities.js'
export default {
  props: {
    text: {
      type: String,
      default: null
    },

    cardSectionHeading: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    computedClasses () {
      const computedClasses = {
        'ao-heading--card-section-heading': this.cardSectionHeading
      }
      return filterClasses(computedClasses)
    }
  }
}
</script>

<style lang='scss'>
  .ao-heading--card-section-heading {
    font-size: $font-size-sm;
    text-transform: uppercase;
    color: $color-gray-30;
    font-weight: $font-weight-bold;
    margin-bottom: $spacer-lg;
  }
</style>
