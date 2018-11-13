<template>
  <!-- investigate min max length -->
  <div :class="['ao-form-group', {'ao-form-group--disabled': disableAll}, {'ao-form-group--has-feedback': hasFeedbackText }]">
    <div
      v-show="showLabel"
      class="ao-form-group__label">
      <label :for="name">{{ label }}</label>
      <slot name="tooltip"/>
    </div>
    <textarea
      :class="{'ao-form-control--invalid': invalid }"
      :value="value"
      :placeholder="placeholder"
      :name="name"
      :rows="rows"
      :maxlength="maxLength"
      :minlength="minLength"
      :disabled="disabled || disableAll"
      class="ao-form-control"
      @input="inputEvent($event.target.value)"
    />
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

    placeholder: {
      type: String,
      default: null
    },

    maxLength: {
      type: Number,
      default: 100000
    },

    minLength: {
      type: Number,
      default: 0
    },

    disabled: {
      type: Boolean,
      default: false
    },

    disableAll: {
      type: Boolean,
      default: false
    },

    rows: {
      type: Number,
      default: 5
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
    inputEvent (updatedValue) {
      this.$emit('input', updatedValue)
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
