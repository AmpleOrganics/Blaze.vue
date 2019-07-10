<template>
  <!-- not sure how to refector this into just a label and input TODO: Dan help-->
  <div class="ao-checkbox">
    <label
      :disabled="disabled"
      class="ao-checkbox__label"
    >
      <input
        v-model="checked"
        v-bind="$attrs"
        :value="checkboxValue"
        :disabled="disabled"
        type="checkbox"
        class="ao-checkbox__input"
        @change="check"
        @blur="emitBlur"
        @focus="emitFocus"
      >
      <div
        v-show="showLabel"
        class="ao-checkbox__content"
      >
        <span class="ao-checkbox__label-text">
          {{ checkboxLabel }}
        </span>
        <p
          v-if="infoText"
          class="ao-checkbox__info-text"
        >
          {{ infoText }}
        </p>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    // both this and checkboxValue needed to avoid vue issue
    value: {
      type: [Array, Boolean, Number, Object],
      default: null
    },

    checkboxValue: {
      type: [String, Number, Boolean, Object],
      required: true
    },

    showLabel: {
      type: Boolean,
      default: true
    },

    checkboxLabel: {
      type: String,
      required: true
    },

    disabled: {
      type: Boolean,
      default: false
    },

    infoText: {
      default: null,
      type: String,
      required: false
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
    check (value) {
      this.$emit('input', this.checkedModel)
    },

    emitFocus (event) {
      this.$emit('focus', event)
    },

    emitBlur (event) {
      this.$emit('blur', event)
    }
  }
}
</script>

<style lang='scss'>
@import '../assets/styles/mixins/shared-checkbox-styles.scss';
@include shared-checkbox-styles;
</style>
