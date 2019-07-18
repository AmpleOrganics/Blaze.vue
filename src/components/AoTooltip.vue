<template>
  <div :class="[computedClasses, `ao-tooltip--${this.position}`]">
    <slot>
      <svg
        class="ao-tooltip__icon"
        width="16px"
        height="16px"
        viewBox="0 0 16 16"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g
          stroke="none"
          fill="none"
          fill-rule="evenodd"
        >
          <g class="ao-tooltip__graphic">
            <circle
              class="ao-tooltip__graphic__background"
              fill="#000000"
              cx="8"
              cy="8"
              r="8"
            />
            <path
              d="M5.00346749,6.04375 C4.9146003,4.01347656 6.54838936,3.2 8.23686592,3.2 C9.95268624,3.2 11.401905,4.04765625 11.401905,5.7703125 C11.401905,6.98710938 10.6841315,7.51347656 10.0210456,7.96464844 C9.22124092,8.5046875 8.89995186,8.71660156 8.89995186,9.44804688 L8.89995186,9.77617188 L6.97905342,9.77617188 L6.96538155,9.46171875 C6.86284249,8.40898438 7.30717842,7.71171875 8.13432686,7.18535156 C8.77690499,6.76835938 9.19389717,6.48125 9.19389717,5.8796875 C9.19389717,5.18925781 8.66752999,4.88847656 8.10698311,4.88847656 C7.38920967,4.88847656 6.99956124,5.3875 6.9927253,6.04375 L5.00346749,6.04375 Z M6.65776436,11.7244141 C6.65776436,11.0408203 7.17729561,10.5896484 7.99760811,10.5896484 C8.83159249,10.5896484 9.35795967,11.0408203 9.35795967,11.7244141 C9.35795967,12.3943359 8.83842842,12.8455078 7.99760811,12.8455078 C7.18413155,12.8455078 6.65776436,12.3943359 6.65776436,11.7244141 Z"
              class="ao-tooltip__graphic__question-mark"
              fill="#FFFFFF"
              fill-rule="nonzero"
            />
          </g>
        </g>
      </svg>
    </slot>
    <div class="ao-tooltip__tip-container">
      <span class="ao-tooltip__text">
        {{ text }}
      </span>
      <div class="ao-tooltip__triangle" />
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
      default: 'bottom'
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

$tooltip-distance: $spacer-micro; /* Defining a consistent distance from the object; */
$tooltip-background-color: $color-gray-10;
$tooltip-transition: opacity .2s ease-in-out;

.ao-tooltip {
  position: relative;
  display: inline-block;

  &__graphic__background {
    fill: $color-blue-dark;
  }

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
    font-weight: normal;
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
    color: $color-gray-50;
    font-size: $font-size-base;
  }

  &--multiline &__text {
    white-space: normal;
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

  &:hover &__tip-container {
    overflow: visible;
  }

  &:hover &__text,
  &:hover &__triangle {
    visibility: visible;
    opacity: 1;
  }
}
</style>
