<template>
  <span :class="computedClasses">{{ text }}</span>
</template>

<script>
import { filterClasses } from '../../../src/components/utils/component_utilities.js'

export default {
  props: {
    text: {
      type: String,
      required: true,
      default: null
    },

    success: {
      type: Boolean,
      default: false
    },

    info: {
      type: Boolean,
      default: false
    },

    subtle: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    computedClasses () {
      const classes = {
        'ao-badge': true,
        'ao-badge--success': this.success,
        'ao-badge--info': this.info,
        'ao-badge--subtle': this.subtle
      }
      return filterClasses(classes)
    }
  }

}
</script>

<style lang="scss" scoped>
@import '../../../src/assets/styles/settings/_variables.scss';

.ao-badge {
  display: inline;
  padding: 0.3em 0.6em 0.35em;
  font-size: $font-size-xs;
  font-weight: $font-weight-bold;
  line-height: 1;
  color: $color-white;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: $border-radius-base;
  text-transform: uppercase;
  background: $color-primary;

  &--success {
    background-color: $color-success;
  }

  &--info {
    background-color: $color-info;
  }

  &--subtle {
    background: $color-gray-80;
    color: $color-gray-20;
  }
}
</style>
