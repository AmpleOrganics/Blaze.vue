<template>
  <label class="ao-checkbox">
    <input
      v-model="checked"
      v-bind="$attrs"
      :value="val"
      type="radio"
      @change="toggle"
      @blur="emitBlur"
      @focus="emitFocus"
    >
    <span>{{ label }}</span>
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    // consistant naming and proxy for vue magic
    value: {
      type: [String, Number, Boolean],
      required: true
    },

    val: {
      type: [String, Number, Boolean],
      required: true
    },

    label: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      proxy: null
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

<style lang="scss">
.ao-checkbox {
  &:not(:last-of-type) {
    margin-right: $spacer-sm;
  }
}
</style>
