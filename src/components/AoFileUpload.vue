<template>
  <label
    v-show="showLabel"
    class="ao-form-group">
    {{ label }}
    <input
      :class="[{'ao-form-control--invalid': invalid }, 'ao-form-control']"
      :name="name"
      :disabled="disabled"
      type="file"
      @change="updateFile($event.target.files)">
  </label>
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
