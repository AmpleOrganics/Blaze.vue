<template>
  <span
    :class="[computedClasses]"
  >
    <slot/>
  </span>
</template>

<script>
import { filterClasses } from './utils/component_utilities.js'
export default {
  props: {
    error: {
      type: Boolean,
      default: false
    },

    small: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    computedClasses () {
      const computedClasses = {
        'ao-text--error': this.error,
        'ao-text--small': this.small
      }
      return filterClasses(computedClasses)
    }
  }
}
</script>

<style lang='scss' scoped>
  .ao-text--error {
    color: $font-color-error;
  }

  .ao-text--small {
    font-size: $font-size-xs;
  }
</style>
