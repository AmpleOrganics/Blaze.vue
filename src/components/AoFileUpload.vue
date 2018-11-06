<template>
  <div class="ao-form-group">
    <div
      v-show="showLabel"
      class="ao-form-group__label">
      <label
        :for="name">{{ label }}</label>
      <slot name="fileUploadLabelTooltip"/>
    </div>
    <input
      :class="[{'ao-form-control--invalid': invalid }, 'ao-form-control']"
      :name="name"
      :disabled="disabled"
      type="file"
      @change="updateFile($event.target.files)"
      @blur="emitBlur($event)">
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

    invalid: {
      type: Boolean,
      default: false
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
