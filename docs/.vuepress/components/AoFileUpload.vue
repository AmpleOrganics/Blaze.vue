<template>
  <div class="ao-form-group">
    <label v-show="showLabel">
      {{ label }}
    </label>
    <input
      :class="[{'ao-form-control--invalid': invalid }, 'ao-form-control']"
      :name="name"
      :disabled="disabled"
      type="file"
      @change="updateFile($event.target.files)">
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

@import '../shared-input-styles.scss';
@include shared-input-styles;

</style>
