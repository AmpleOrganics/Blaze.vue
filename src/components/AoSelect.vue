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
      <select
        :value="selected"
        :class="[{'ao-form-control--invalid': invalid }, 'ao-form-control', computedSize]"
        :disabled="disabled"
        @change="updateInput"
        @blur="emitBlur($event)">
        <option
          v-if="placeholder"
          :value="null"
          disabled
          selected>{{ placeholder }}</option>
        <slot/>
      </select>
    </div>
    <span
      v-if="instructionText"
      class="ao-form-group__instruction-text">
      {{ instructionText }}
    </span>
  </div>
</template>

<script>
import { filterClasses } from './utils/component_utilities.js'

export default {
  props: {
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

    invalid: {
      type: Boolean,
      default: false
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
    }
  },

  created () {
    this.selected = this.value
  },

  methods: {
    updateInput (e) {
      this.selected = e.target.value
      this.$emit('input', e.target.value)
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
