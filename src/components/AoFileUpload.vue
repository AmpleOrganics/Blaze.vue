<template>
  <div class="ao-form-group">
    <label v-show="showLabel" :for="name">{{ label }}</label>
    <input
      class="ao-form-control"
      :class="{'ao-form-control--has-error': hasError }"
      type="file"
      @change="updateFile($event.target.files)"
      :name="name"
      :required="required"
      :disabled="disabled"
    >
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
      default: null
    },

    showLabel: {
      type: Boolean,
      default: true
    },

    name: {
      type: String,
      default: null
    },

    disabled: {
      type: Boolean,
      default: false
    },

    hasError: {
      type: Boolean,
      default: false
    },

    required: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    updateFile (value) {
      this.$emit('change', value[0])
    }
  }
}
</script>

<style lang='scss' scoped>

@import '../assets/styles/mixins/shared-input-styles.scss';
@include shared-input-styles;

</style>
