<template>
  <div class="ao-form-group">
    <div
      v-show="showLabel"
      class="ao-form-group__label">
      <label
        :for="name">{{ label }}</label>
      <slot name="tooltip"/>
    </div>
    <div :class="{ 'ao-input-group': hasInputGroup }">
      <input
        :class="['ao-form-control', {'ao-form-control--invalid': invalid }, computedSize]"
        :type="type"
        :placeholder="placeholder"
        :name="name"
        :value="value"
        :disabled="disabled"
        :step="step"
        @input="updateValue($event.target.value)">
      <span
        v-if="hasIconAddon"
        :class="iconClass"
        class="ao-input-group__addon"
        v-html="iconHtml"/>
      <span
        v-if="hasAddOn"
        class="ao-input-group__addon">
        {{ addOn }}
      </span>
    </div>
  </div>
</template>

<script>
import { filterClasses } from './utils/component_utilities.js'

export default {
  props: {
    type: {
      type: String,
      default: 'text',
      validator: function (inputType) {
        // Used to determine if the input type prop used is found in this array and therefore valid
        return ['text', 'number', 'email', 'password', 'date', 'search'].includes(inputType)
      }
    },

    value: {
      type: [String, Number],
      default: null
    },

    label: {
      type: String,
      required: true
    },

    showLabel: {
      type: Boolean,
      default: true
    },

    name: {
      type: String,
      default: null
    },

    placeholder: {
      type: String,
      default: null
    },

    iconHtml: {
      type: String,
      default: null
    },

    iconClass: {
      type: String,
      default: null
    },

    addOn: {
      type: String,
      default: null
    },

    disabled: {
      type: Boolean,
      default: false
    },

    step: {
      type: Number,
      default: 1
    },

    invalid: {
      type: Boolean,
      default: false
    },

    size: {
      type: String,
      default: null,
      validator: function (size) {
        return [null, 'small'].includes(size)
      }
    }
  },

  computed: {
    hasInputGroup () {
      return this.hasIconAddon || this.hasAddOn
    },

    hasIconAddon () {
      return this.iconHtml || this.iconClass
    },

    hasAddOn () {
      return this.addOn
    },

    computedSize () {
      const activeClasses = {
        'ao-form-control--small': this.size === 'small'
      }
      return filterClasses(activeClasses)
    }
  },

  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang='scss'>

@import '../assets/styles/mixins/shared-input-styles.scss';
@include shared-input-styles;

</style>
