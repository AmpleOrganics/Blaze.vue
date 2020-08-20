<template>
  <div :class="['ao-form-group', {'ao-form-group--disabled': disableAll}, {'ao-form-group--has-feedback': hasFeedbackText }]">
    <div
      v-show="showLabel"
      class="ao-form-group__label"
    >
      <label :for="uniqId">
        {{ label }}
      </label>
      <slot name="tooltip" />
    </div>
    <div :class="['ao-input', { 'ao-input--has-addon': hasInputGroup, 'ao-input--has-prepend': hasPrependGroup }]">
      <span
        v-if="hasIconPrepend"
        :class="prependClass"
        class="ao-input__prepend"
        v-html="prependHtml"
      />
      <span
        v-if="hasPrepend"
        class="ao-input__prepend"
      >
        {{ prepend }}
      </span>
      <input
        :id="uniqId"
        v-bind="$attrs"
        :class="['ao-form-control', {'ao-form-control--invalid': invalid }, computedSize]"
        :disabled="disabled || disableAll"
        :value="value"
        :type="type"
        :name="name"
        :aria-label="showLabel ? null : label"
        @change="emitChange"
        @input="emitInput"
        @blur="emitBlur"
        @focus="emitFocus"
      >
      <span
        v-if="hasIconAddon"
        :class="[iconClass, { 'ao-input__icon--clickable': hasIconClickableClass }]"
        class="ao-input__addon"
        @click="emitIconClicked"
        v-html="iconHtml"
      />
      <span
        v-if="hasAddOn"
        class="ao-input__addon"
      >
        {{ addOn }}
      </span>
    </div>
    <slot name="below-input" />
    <span
      v-show="invalidMessage && invalid"
      class="ao-form-group__invalid-message"
    >
      {{ invalidMessage }}
    </span>
    <span
      v-if="instructionText"
      class="ao-form-group__instruction-text"
    >
      {{ instructionText }}
    </span>
  </div>
</template>

<script>
import { filterClasses } from './utils/component_utilities.js'
import uniqueId from 'lodash.uniqueid'

export default {
  inheritAttrs: false,
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

    iconHtml: {
      type: String,
      default: null
    },

    iconClass: {
      type: String,
      default: null
    },

    isIconClickable: {
      type: Boolean,
      default: false
    },

    addOn: {
      type: String,
      default: null
    },

    prepend: {
      type: String,
      default: null
    },

    prependHtml: {
      type: String,
      default: null
    },

    prependClass: {
      type: String,
      default: null
    },

    disabled: {
      type: Boolean,
      default: false
    },

    disableAll: {
      type: Boolean,
      default: false
    },

    invalid: {
      type: Boolean,
      default: false
    },

    invalidMessage: {
      type: String,
      default: null
    },

    size: {
      type: String,
      default: null,
      validator: function (size) {
        return [null, 'small'].includes(size)
      }
    },

    instructionText: {
      type: String,
      default: null
    }
  },

  computed: {
    uniqId () {
      return this.name ? uniqueId(`${this.name}_`) : uniqueId()
    },

    hasInputGroup () {
      return this.hasIconAddon || this.hasAddOn
    },

    hasIconAddon () {
      return this.iconHtml || this.iconClass
    },

    hasAddOn () {
      return this.addOn
    },

    hasPrependGroup () {
      return this.hasIconPrepend || this.hasPrepend
    },

    hasIconPrepend () {
      return this.prependHtml || this.prependClass
    },

    hasPrepend () {
      return this.prepend
    },

    hasFeedbackText () {
      return this.instructionText || (this.invalidMessage && this.invalid)
    },

    hasIconClickableClass () {
      return this.isIconClickable && !(this.disabled || this.disableAll)
    },

    computedSize () {
      const activeClasses = {
        'ao-form-control--small': this.size === 'small'
      }
      return filterClasses(activeClasses)
    }
  },

  methods: {
    emitInput (event) {
      this.$emit('input', event.target.value)
    },

    emitBlur (event) {
      this.$emit('blur', event)
    },

    emitFocus (event) {
      this.$emit('focus', event)
    },

    emitChange (event) {
      this.$emit('change', event.target.value)
    },

    emitIconClicked (event) {
      this.hasIconClickableClass && this.$emit('icon-clicked')
    }
  }
}
</script>

<style lang='scss'>

@import '../assets/styles/mixins/shared-input-styles.scss';
@include shared-input-styles;

.ao-input__icon--clickable {
  cursor: pointer;
}
</style>
