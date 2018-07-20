<template>
  <label class="ao-checkbox">
    <input
      v-model="checked"
      :value="val"
      :name="name"
      :disabled="disabled"
      :required="required"
      type="radio"
      @change="toggle">
    <span>
      <slot/>
    </span>
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      required: true
    },

    val: {
      type: [String, Number],
      required: true
    },

    name: {
      type: String,
      required: true
    },

    disabled: {
      type: Boolean,
      default: false
    },

    required: {
      type: Boolean,
      default: false
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
