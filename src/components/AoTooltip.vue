<template>
  <div
    :class="[computedClasses, `ao-tooltip--${this.position}`]">
    <slot>
      <i class="ao-tooltip__default-icon glyphicon glyphicon-info-sign"/>
    </slot>
    <div class="ao-tooltip__tip-container">
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

    position: {
      type: String,
      required: false,
      default: "bottom"
    },

    multiline: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    computedClasses () {
      const activeClasses = {
        'ao-tooltip': true,
        'ao-tooltip--multiline': this.multiline
      }
      return filterClasses(activeClasses)
    }
  }
}
</script>

<style lang='scss' scoped>

$tooltip-distance: $spacer-micro; //Defining a consistent distance from the object;
$tooltip-background-color: $color-gray-10;
$tooltip-transition: opacity .2s ease-in-out;

.ao-tooltip {
  position: relative;
  display: inline-block;

  &__tip-container {
    position: absolute;
    width: 0;
    height: 0;
    z-index: $zindex-tooltip;
    overflow: hidden;
  }

  &__text {
    visibility: hidden;
    position: absolute;
    background: $tooltip-background-color;
    font-size: $font-size-sm;
    color: $color-white;
    opacity: 0;
    padding: $spacer-micro $spacer-micro*2;
    border-radius: $border-radius-base;
    white-space: nowrap;
    transition: $tooltip-transition;
  }

  &__triangle {
    visibility: hidden;
    position: absolute;
    opacity: 0;
    transition: $tooltip-transition;
    border-style: solid;
    border-width: $tooltip-distance $tooltip-distance 0 $tooltip-distance ;
    border-color: $tooltip-background-color transparent transparent transparent;
  }

  &__default-icon {
    color: $color-gray-40;
    font-size: $font-size-sm;
  }

  &:hover &__tip-container {
    overflow: visible;
  }

  &:hover &__text,
  &:hover &__triangle {
    visibility: visible;
    opacity: 1;
  }

  &--multiline &__text {
    white-space: pre-wrap;
    width: 200px;
  }

  &--left &__tip-container {
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

  &--right &__tip-container {
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

  &--top &__tip-container {
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

  &--bottom &__tip-container {
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
