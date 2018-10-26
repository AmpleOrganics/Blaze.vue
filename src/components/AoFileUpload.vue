<template>
  <div :class="['ao-form-group', {'ao-form-group--disabled': disableAll}, {'ao-form-group--has-feedback': hasFeedbackText }]">
    <div
      v-show="showLabel"
      class="ao-form-group__label">
      <label :for="name">{{ label }}</label>
      <slot name="fileUploadLabelTooltip"/>
    </div>
    <input
      :class="[{'ao-form-control--invalid': invalid }, 'ao-form-control']"
      :name="name"
      :disabled="disabled || disableAll"
      type="file"
      @change="updateFile($event.target.files)"
      @blur="emitBlur($event)">
    <span
      v-show="invalidMessage && invalid"
      class="ao-form-group__invalid-message">
      {{ invalidMessage }}
    </span>
    <span
      v-if="instructionText"
      class="ao-form-group__instruction-text">
      {{ instructionText }}
    </span>
  </div>
</template>

<script>
export default {
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
    hasFeedbackText () {
      return this.instructionText || (this.invalidMessage && this.invalid)
    }
  },

  methods: {
    updateFile (value) {
      this.$emit('change', value[0])
    },

    emitBlur (event) {
      this.$emit('blur', event)
    }
  }
}
</script>

<style lang='scss'>

@import '../assets/styles/mixins/shared-input-styles.scss';

@include shared-input-styles;

</style>
