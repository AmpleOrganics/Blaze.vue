<template>
  <button
    :type="type"
    :form="formName"
    :class="[computedButtonClass, computedSize]"
    :disabled="disabled"
  >
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

    nano: {
      type: Boolean,
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
        'ao-button--jumbo': this.jumbo
      }
      return filterClasses(activeClasses)
    },

    computedSize () {
      const sizes = {
        'ao-button--nano': this.nano,
        'ao-button--small': this.small,
        'ao-button--large': this.large
      }
      return filterClasses(sizes)
    }
  }
}
</script>

<style lang='scss' scoped>

.ao-button {
  display: inline-block;
  margin-bottom: 0;
  font-weight: bold;
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
  outline: none;

  //Default styles, overridden by special classes
  background-color: $color-white;
  border-color: $color-gray-50;
  color: $font-color-base;

  //Default hover/active styles, overridden by special classes
  &:hover, &:active {
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
    filter: alpha(opacity=65);
    box-shadow: none;
  }

  &:active {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  }

  &--primary {
    background-color: $color-ao-primary;
    border-color: $color-ao-primary;
    color: $color-white;

    &:hover, &:active {
      border-color: darken($color-ao-primary, 3%);
      background-color: darken($color-ao-primary, 3%);
      color: $color-white;
    }
  }

  &--destructive {
    background-color: $color-destructive;
    border: 1px solid $color-destructive;
    color: $color-white;

    &:hover, &:active{
      background-color: darken($color-destructive, 5%);
      border-color: darken($color-destructive, 5%);
      color: $color-white;
    }
  }

  &--caution {
    background-color: $color-caution;
    border: 1px solid $color-caution;
    color: darken($color-caution, 50%);
    outline:none;

    &:hover, :active {
      background-color: darken($color-caution, 5%);
      border-color: darken($color-caution, 5%);
      color: darken($color-caution, 60%);
    }
  }

  &--subtle {
    background-color: $color-gray-90;
    border: 1px solid $color-gray-60;

    &:hover, :active {
      border-color: darken($color-gray-60, 5%);
      background-color: darken($color-gray-90, 5%);
    }
  }

  &--naked {
    background-color: transparent;
    border-color: transparent;
    box-shadow: 0 0 0 rgba(0,0,0,0);

    &:hover, :active {
      border-color: transparent;
      background-color: transparent;
      box-shadow: 0 0 0 rgba(0,0,0,0);
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

  &--nano {
    padding: 0.25rem 0.50rem;
    min-height: 0;
  }
}
</style>
