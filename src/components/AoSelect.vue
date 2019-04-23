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
    <div class="ao-input">
      <select
        :value="selected"
        :class="[{'ao-form-control--invalid': invalid }, 'ao-form-control', computedSize]"
        :disabled="disabled || disableAll"
        :name="name"
        @change="emitChange"
        @blur="emitBlur"
        @focus="emitFocus"
      >
        <option
          v-if="placeholder"
          :value="null"
          disabled
          selected
        >
          {{ placeholder }}
        </option>
        <slot />
      </select>
    </div>
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

export default {
  props: {
    value: {
      type: [String, Number, Boolean],
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

    invalid: {
      type: Boolean,
      default: false
    },

    invalidMessage: {
      type: String,
      default: null
    },

    disabled: {
      type: Boolean,
      default: false
    },

    placeholder: {
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
    },

    disableAll: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      selected: null
    }
  },

  computed: {
    computedSize () {
      const activeClasses = {
        'ao-form-control--small': this.size === 'small'
      }
      return filterClasses(activeClasses)
    },

    hasFeedbackText () {
      return this.instructionText || (this.invalidMessage && this.invalid)
    }
  },

  watch: {
    value: {
      handler (val) {
        this.selected = val
      },
      immediate: true
    }
  },

  methods: {
    emitChange (event) {
      this.$emit('input', event.target.value)
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
