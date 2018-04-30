<template>
  <div
    class="ao-checkbox"
    :disabled="disabled"
  >
    <label>
      <input
        type="checkbox"
        :name="name"
        :value="checkboxValue"
        v-model="checked"
        @change="choose"
        :required="required"
        :disabled="disabled"
      >
      <span v-show="showLabel">{{ checkboxLabel }}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [Array, Boolean, Number, Object],
      default: null
    },

    checkboxValue: {
      type: [String, Number, Boolean, Object],
      required: false,
      default: null
    },

    showLabel: {
      type: Boolean,
      default: true
    },

    checkboxLabel: {
      type: String,
      default: null,
      required: true
    },

    name: {
      type: String,
      default: null
    },

    required: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      checkedModel: false
    }
  },

  computed: {
    // Sets the v-model as the v-model from the parent, updates the v-model in this component
    checked: {
      get () {
        return this.value
      },
      set (value) {
        this.checkedModel = value
      }
    }
  },

  methods: {
    choose (value) {
      this.$emit('input', this.checkedModel)
    }
  }
}
</script>

<style lang='scss' scoped>
input[type='checkbox'] {
  line-height: normal;
  box-sizing: border-box;
  padding: 0;
}

.ao-checkbox {
  position: relative;
  display: block;
  margin-bottom: 10px;

  & > label {
    min-height: 22px;
    margin-bottom: 0;
    font-weight: normal;
    cursor: pointer;
  }
}
</style>
