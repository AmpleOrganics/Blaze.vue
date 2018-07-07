<template>
  <div
    :class="[computedClasses]"
  >
    <slot/>
    <div class="ao-tooltip__text-container">
      <span class="ao-tooltip__text">{{ text }}</span>
      <div class="ao-tooltip__triangle"/>
    </div>
  </div>
</template>

<script>
import { filterClasses } from './utils/component_utilities.js'
export default {
  props: {
    text: {
      type: String,
      required: true,
      default: null
    },

    top: {
      type: Boolean,
      default: false
    },

    bottom: {
      type: Boolean,
      default: false
    },

    left: {
      type: Boolean,
      default: false
    },

    right: {
      type: Boolean,
      default: false
    }

  },

  computed: {
    computedClasses () {
      const computedClasses = {
        'ao-tooltip': true,
        'ao-tooltip--top': this.top,
        'ao-tooltip--bottom': this.bottom,
        'ao-tooltip--left': this.left,
        'ao-tooltip--right': this.right
      }
      return filterClasses(computedClasses)
    }
  }
}
</script>

<style lang='scss' scoped>

$tooltip-distance: 4px;//Defining a consistent distance from the object;
$tooltip-background-color: $color-gray-10;

.ao-tooltip {
  position: relative;
  display: inline-block;

  &__text {
    display: inline-block;
    position: absolute;
    background: $tooltip-background-color;
    font-size: $font-size-sm;
    color: $color-white;
    opacity: 0;
    padding: $spacer-micro $spacer-micro*2;
    border-radius: $border-radius-base;
  }

  &__text-container {
    position: absolute;
    width: 0;
    height: 0;
  }

  &:hover {
    .ao-tooltip__text,
    .ao-tooltip__triangle {
      opacity: 1;
    }
  }

  &__triangle {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: $tooltip-distance $tooltip-distance 0 $tooltip-distance ;
    border-color: $tooltip-background-color transparent transparent transparent;
  }

  &--left &__text-container {
    left: 0;
    top: 50%;

    .ao-tooltip__text {
      right: 0;
      transform: translateY(-50%);
      margin-right: $tooltip-distance;
    }

    .ao-tooltip__triangle {
      right: 0;
      transform: rotate(-90deg) translate(($tooltip-distance/2), 50%);
    }
  }
 
  &--right &__text-container {
    right: 0;
    top: 50%;

    .ao-tooltip__text {
      transform: translateY(-50%);
      margin-left: $tooltip-distance;
    }

    .ao-tooltip__triangle {
      transform: rotate(90deg) translate(-($tooltip-distance/2), 50%);
    }
  }

  &--top &__text-container {
    top: 0;
    right: 50%;

    .ao-tooltip__text {
      bottom: 0;
      transform: translateX(-50%);
      margin-bottom: $tooltip-distance;
    }

    .ao-tooltip__triangle {
      bottom: 0;
      transform: translateX(-50%);
    }
  }

  &--bottom &__text-container {
    bottom: 0;
    right: 50%;

    .ao-tooltip__text {
      transform: translateX(-50%);
      margin-top: $tooltip-distance;
    }

    .ao-tooltip__triangle {
      top: 0;
      transform: rotate(180deg) translateX(50%);
    }
  }
}
</style>
