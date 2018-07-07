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
        :class="[{'ao-form-control--invalid': invalid }, 'ao-form-control']"
        :disabled="disabled"
        @change="updateInput">
        <option
          v-if="placeholder"
          :value="null"
          disabled
          selected>{{ placeholder }}</option>
        <slot/>
      </select>
    </div>
  </div>
</template>

<script>
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
    }
  },

  data () {
    return {
      selected: null
    }
  },

  created () {
    this.selected = this.value
  },

  methods: {
    updateInput (e) {
      this.selected = e.target.value
      this.$emit('input', e.target.value)
    }
  }

}
</script>

<style lang='scss' scoped>
@import '../assets/styles/mixins/shared-input-styles.scss';
@include shared-input-styles;
</style>
