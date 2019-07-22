<template>
  <div :class="[computedClasses, `ao-popover--${this.position}`]">
    <slot />
    <div class="ao-popover__container">
      <span class="ao-popover__text">
        {{ text }}
      </span>
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
    }
  },

  computed: {
    computedClasses () {
      const activeClasses = {
        'ao-popover': true
      }
      return filterClasses(activeClasses)
    }
  }
}
</script>

<style lang='scss' scoped>
$popover-distance: $spacer-micro; /* Defining a consistent distance from the object; */
$popover-background-color: $color-white;
$popover-transition: opacity .2s ease-in-out;
$popover-width: 260px !default; /* Possible improvement would be the use its sibling's width */

.ao-popover {
  position: relative;
  display: inline-block;
  outline: none;

  &__container {
    position: absolute;
    z-index: $zindex-popover;
    width: 0;
    height: 0;
    overflow: hidden;
  }

  &__text {
    visibility: hidden;
    position: absolute;
    background: $popover-background-color;
    font-size: $font-size-sm;
    font-style: italic;
    width: $popover-width;
    color: $color-gray-20;
    opacity: 0;
    padding: 9px 14px;
    transition: $popover-transition;
    border-radius: $border-radius-base;
    border: 1px solid $color-gray-60;
  }

  &--left &__container {
    left: 0;
    top: 50%;

    .ao-popover__text {
      right: 0;
      transform: translateY(-50%);
      margin-right: $popover-distance;
    }
  }

  &--right &__container {
    right: 0;
    top: 50%;

    .ao-popover__text {
      left: 0;
      transform: translateY(-50%);
      margin-left: $popover-distance;
    }
  }

  &--top &__container {
    top: 0;

    .ao-popover__text {
      bottom: 0;
      margin-bottom: $popover-distance;
    }
  }

  &--bottom &__container {
    bottom: 0;
    margin-top: $spacer-micro !important;

    .ao-popover__text {
      top: 0;
      margin-top: $popover-distance;
    }
  }

  & * {
    margin-bottom: 0;
  }

  &:focus-within &__container {
    overflow: visible;
  }

  &:focus-within &__text {
    visibility: visible;
    opacity: 1;
  }
}
</style>
