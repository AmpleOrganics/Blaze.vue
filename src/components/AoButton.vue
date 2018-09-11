<template>
  <button
    :type="type"
    :form="formName"
    :class="computedButtonClass"
    :disabled="disabled">
    <slot/>
  </button>
</template>

<script>
import { filterClasses } from './utils/component_utilities.js'

export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'button',
      validator: function (buttonType) {
        return ['button', 'submit'].indexOf(buttonType) !== -1
      }
    },

    formName: {
      type: String,
      default: null
    },

    small: {
      type: Boolean,
      default: false
    },

    large: {
      type: Boolean,
      default: false
    },

    primary: {
      type: Boolean,
      default: false
    },

    destructive: {
      type: Boolean,
      default: false
    },

    caution: {
      type: Boolean,
      default: false
    },

    subtle: {
      type: Boolean,
      default: false
    },

    naked: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    },

    jumbo: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    computedButtonClass () {
      const activeClasses = {
        'ao-button': true,
        'ao-button--primary': this.primary,
        'ao-button--destructive': this.destructive,
        'ao-button--caution': this.caution,
        'ao-button--subtle': this.subtle,
        'ao-button--naked': this.naked,
        'ao-button--small': this.small,
        'ao-button--large': this.large,
        'ao-button--jumbo': this.jumbo
      }
      return filterClasses(activeClasses)
    }
  }
}
</script>

<style lang='scss' scoped>
@mixin ao-button-colors($color, $background-color, $border-color, $darken-delta) {
 background: $background-color;
 border-color: $border-color;
 color: $color;

 &:active, &:hover:not([disabled]) {
   background-color: darken($background-color, $darken-delta);
   border-color: darken($border-color, $darken-delta);

   color: $color;
   @if $color != $color-white {
     color: darken($color, $darken-delta);
   }
 }
}

.ao-button {
 display: inline-block;
 margin-bottom: 0;
 text-align: center;
 font-weight: $font-weight-bold;
 font-family: $font-family-primary;
 border: $input-border-width solid transparent;
 padding: $spacer-micro $spacer-sm;
 font-size: $font-size-base;
 line-height: $line-height-base;
 border-radius: $border-radius-base;
 min-height: $input-height-base;
 box-shadow: $shadow-subtle;
 cursor: pointer;

/* Default styles, overridden by special classes */
 background-color: $color-white;
 border-color: $color-gray-50;
 color: $font-color-base;

/* Default hover/active styles, overridden by special classes */
 &:active {
   box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
 }

 &:active, &:hover:not([disabled]) {
   background-color: darken($color-white, 3%);
   border-color: darken($color-gray-50, 3%);
   color: darken($font-color-base, 3%);
 }

 & + &:not(.ao-btn--block) {
   margin-left: $spacer-micro;
 }

 &[disabled] {
   cursor: not-allowed;
   opacity: 0.65;
   box-shadow: none;
 }

 &--primary {
   @include ao-button-colors($color-white, $color-primary, $color-primary, 3%);
 }

 &--destructive {
   @include ao-button-colors($color-white, $color-destructive, $color-destructive, 5%);
 }

 &--caution {
   @include ao-button-colors(darken($color-caution, 50%), $color-caution, $color-caution, 5%);

   &:active, &:hover:not([disabled]) {
     color: darken($color-caution, 60%);
   }
 }

 &--subtle {
   @include ao-button-colors($font-color-base, $color-gray-90, $color-gray-60, 5%);
 }

 &--naked {
   background-color: transparent;
   border-color: transparent;
   box-shadow: $shadow-none;

   &:active, &:hover:not([disabled]) {
     border-color: transparent;
     background-color: transparent;
     box-shadow: $shadow-none;
   }
   }

 &--small {
   height: $input-height-sm;
   font-size: $font-size-xs;
   padding-left: $spacer-xs;
   padding-right: $spacer-xs;
 }

 &--large {
   height: $input-height-lg;
   font-size: $font-size-lg;
 }

 &--jumbo {
   width: 100%;
   height: 80px;
   margin-left: 0;
 }
}
</style>
