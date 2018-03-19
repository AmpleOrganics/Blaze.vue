<template>
  <button
    :type="type"
    :form="formName"
    :class="computedButtonClass"
    :disabled="disabled"
  >
    <slot/>
  </button>
</template>

<script>
import { filterClasses } from './utilities/component_utilities.js'

export default {
  name: 'AoButton',
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
        'ao-button--default': true,
        'ao-button--primary': this.primary,
        'ao-button--destructive': this.destructive,
        'ao-button--caution': this.caution,
        'ao-button--subtle': this.subtle,
        'ao-button--jumbo': this.jumbo
      }
      return filterClasses(activeClasses)
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
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 16px;
  line-height: 1.42857;
  border-radius: 3px;
  user-select: none;
  outline: none;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);

  &:not(:first-of-type) {
    margin-left: 5px;
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

  &--default {
    background-color: #ffffff;
    border-color: #cccccc;
    color:#000000;

    &:hover {
      color: #333;
      background: #f7f7f9;
      border-color: #adadad;
      border-bottom-color: #adadad;
    }

    &:active {
      color: #333;
      background-color: #e6e6e6;
      border-color: #adadad;
      border-bottom-color: #adadad;
    }
  }

  &--primary {
    background-color: #00A38B;
    color: #ffffff;
    border: 1px solid #00A38B;
    border-bottom: 2px solid #008a75;

    &:hover, :active {
      color: #ffffff;
      border: 1px solid #009982;
      border-bottom: 2px solid #007f6d;
      background-color: #009982;
    }
  }

  &--destructive {
    background-color: #d93240;
    border: 1px solid #d93240;
    border-bottom: 2px solid #b6222e;
    color: #ffffff;
    outline: none;

    &:hover, :active{
      background-color: #b6222e;
      border-color: #b6222e;
      border-bottom-color: #8b1a23;
    }
  }

  &--caution {
    background-color: #f9d615;
    border: 1px solid #f9d615;
    border-bottom: 2px solid #eecb06;
    color: #726103;
    outline:none;

    &:hover, :active {
      background-color: #f9d40b;
      border-color: #f9d40b;
      border-bottom-color: #eecb06;
      color: #403702;
    }
  }

  &--subtle {
    background-color: #f7f7f9;
    border: 1px solid #dcdedf;

    &:hover, :active {
      border-color: #d4d6d8;
      background-color: #eeeef2;
    }
  }

  &--jumbo {
    width: 100%;
    height: 80px;
    margin-left: 0;
  }
}
</style>
