<template>
  <span :class="computedClass">{{ text }}</span>
</template>

<script>
import { filterClasses } from './utils/component_utilities.js'
export default {
  props: {
    text: {
      type: String,
      required: true,
      default: ''
    },

    teal: {
      type: Boolean,
      default: false
    },

    green: {
      type: Boolean,
      default: false
    }
  },

  computed () {
    computedClass () {
      const classes = {
        'ao-badge': true,
        'ao-badge--teal': this.teal,
        'ao-basde--green': this.green
      }

      return filterClasses(classes)
    }
  }

}
</script>

<style lang="scss" scoped>

</style>

