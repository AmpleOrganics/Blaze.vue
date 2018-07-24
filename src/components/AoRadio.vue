<template>
  <label class="ao-checkbox">
    <input
      v-model="checked"
      :value="val"
      :disabled="disabled"
      type="radio"
      @change="toggle">
    <span>{{ label }}</span>
  </label>
</template>

<script>
export default {
  props: {
    // consistant naming and proxy for vue magic
    value: {
      type: [String, Number],
      required: true
    },

    val: {
      type: [String, Number],
      required: true
    },

    disabled: {
      type: Boolean,
      default: false
    },

    label: {
      type: String,
      required: true
    }
  },

  computed: {
    checked: {
      get () { return this.value },
      set (val) {
        this.proxy = val
        return this.proxy
      }
    }
  },

  methods: {
    toggle () {
      this.$emit('input', this.proxy)
    }
  }
}
</script>

<style lang="scss" scoped>
.ao-checkbox {
  &:not(:last-of-type) {
    margin-right: $spacer-sm;
  }
}
</style>
