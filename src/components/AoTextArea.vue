<template>
  <div :class="['ao-form-group', {'ao-form-group--disabled': disableAll}, {'ao-form-group--has-feedback': hasFeedbackText }]">
    <div
      v-show="showLabel"
      class="ao-form-group__label"
    >
      <label :for="name">
        {{ label }}
      </label>
      <slot name="tooltip" />
    </div>
    <textarea
      v-bind="$attrs"
      :class="{'ao-form-control--invalid': invalid }"
      :value="value"
      :disabled="disabled || disableAll"
      :name="name"
      class="ao-form-control"
      @input="emitInput"
      @blur="emitBlur"
      @focus="emitFocus"
      @change="emitChange"
    />
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
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: null
    },

    label: {
      type: String,
      default: null
    },

    name: {
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

    showLabel: {
      type: Boolean,
      default: true
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
    emitInput (event) {
      this.$emit('input', event.target.value)
    },

    emitBlur (event) {
      this.$emit('blur', event)
    },

    emitChange (event) {
      this.$emit('change', event.target.value)
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

textarea.ao-form-control {
  height: auto;
  min-height: $input-height-base;
  min-width: 100%;
}

</style>
