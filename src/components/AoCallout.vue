<template>
  <div :class="[computedClasses, 'ao-callout']">
    <slot />
  </div>
</template>

<script>
import { filterClasses } from './utils/component_utilities.js'
export default {
  props: {
    info: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    },
    caution: {
      type: Boolean,
      default: false
    },
    destructive: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    computedClasses () {
      const computedClasses = {
        'ao-callout--info': this.info,
        'ao-callout--success': this.success,
        'ao-callout--caution': this.caution,
        'ao-callout--destructive': this.destructive
      }
      return filterClasses(computedClasses)
    }
  }
}
</script>

<style lang='scss' scoped>
  .ao-callout {
    padding: $spacer;
    margin-bottom: $spacer;
    background: $color-gray-90;

    *:last-child {
      margin-bottom: 0;
    }

    &--info {
      background: $color-info-light;
      color: $color-info-dark;
    }

    &--success {
      background: $color-success-light;
      color: $color-success-dark;
    }

    &--caution {
      background: $color-caution-light;
      color: $color-caution-dark;
    }

    &--destructive {
      background: $color-destructive-light;
      color: $color-destructive-dark;
    }
  }

</style>
