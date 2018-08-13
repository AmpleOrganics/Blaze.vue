<template>
  <div class="ao-form-group">
    <label
      v-show="showLabel"
      :disabled="disabled">
      {{ label }}
    </label>
    <div>
      <select
        v-model="selected"
        :class="[{'ao-form-control--invalid': invalid }, 'ao-form-control']"
        :disabled="disabled">
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
  watch: {
    selected (newValue) {
      this.$emit('input', newValue)
    }
  },

  mounted () {
    this.selected = this.value
  }

}
</script>

<style lang='scss' scoped>
@import '../assets/styles/mixins/shared-input-styles.scss';
@include shared-input-styles;
</style>
