<template>
  <div :class="['ao-form-group', {'ao-form-group--disabled': disableAll}, {'ao-form-group--has-feedback': hasFeedbackText }]">
    <div
      v-show="showLabel"
      class="ao-form-group__label"
    >
      <label :for="uniqId">
        {{ label }}
      </label>
      <slot name="fileUploadLabelTooltip" />
    </div>
    <input
      :id="uniqId"
      v-bind="$attrs"
      :class="[{'ao-form-control--invalid': invalid }, 'ao-form-control']"
      :name="name"
      :aria-label="showLabel ? null : label"
      :disabled="disabled || disableAll"
      type="file"
      @change="emitChange"
      @blur="emitBlur"
      @focus="emitFocus"
    >
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
import uniqueId from 'lodash.uniqueid'

export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true
    },

    showLabel: {
      type: Boolean,
      default: true
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

    name: {
      type: String,
      required: true
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

    hasFeedbackText () {
      return this.instructionText || (this.invalidMessage && this.invalid)
    }
  },

  methods: {
    emitChange (event) {
      this.$emit('change', event.currentTarget.files[0])
    },

    emitBlur (event) {
      this.$emit('blur', event)
    },

    emitFocus (event) {
      this.$emit('focus', event)
    }
  }
}
</script>

<style lang='scss'>

@import '../assets/styles/mixins/shared-input-styles.scss';

@include shared-input-styles;

</style>
