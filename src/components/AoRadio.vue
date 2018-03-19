<template>
  <label>
    <input
      type="radio"
      v-model="checked"
      :value="val"
      :name="name"
      @change="toggle"
      :disabled="disabled"
      :required="required"
    >
    <span>
      <slot/>
    </span>
  </label>
</template>

<script>
export default {
  name: 'AoRadio',
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
