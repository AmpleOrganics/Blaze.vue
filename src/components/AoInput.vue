<template>
  <div class="ao-form-group">
    <div class="ao-input__label">
      <label
        v-show="showLabel"
        :for="name">{{ label }}</label>
      <ao-tooltip
        v-if="tooltip"
        right
        :text="tooltip"/>
    </div>
    <div :class="{ 'ao-input-group': hasInputGroup }">
      <input
        :class="{'ao-form-control--has-error': hasError }"
        :type="type"
        :placeholder="placeholder"
        :name="name"
        :value="value"
        :maxlength="maxlength"
        :minlength="minlength"
        :max="max"
        :min="min"
        :required="required"
        :readonly="readonly"
        :disabled="disabled"
        :step="step"
        class="ao-form-control"
        @input="updateValue($event.target.value)"
      >
      <span
        v-if="hasIconAddon"
        :class="iconClass"
        class="ao-input-group__addon"
        v-html="iconHtml"
      />
      <span
        v-if="hasAddOn"
        class="ao-input-group__addon">
        {{ addOn }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
      default: 'text',
      validator: function (inputType) {
        // Used to determine if the input type prop used is found in this array and therefore valid
        return ['text', 'number', 'email', 'password', 'date', 'search'].indexOf(inputType) !== -1
      }
    },

    value: {
      type: [String, Number],
      default: null
    },

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

    placeholder: {
      type: String,
      default: null
    },

    iconHtml: {
      type: String,
      default: null
    },

    iconClass: {
      type: String,
      default: null
    },

    addOn: {
      type: String,
      default: null
    },

    maxlength: {
      type: Number,
      default: 100000
    },

    minlength: {
      type: Number,
      default: 0
    },

    required: {
      type: Boolean,
      default: false
    },

    readonly: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    },

    min: {
      type: Number,
      default: 0
    },

    max: {
      type: Number,
      default: 100000
    },

    step: {
      type: Number,
      default: 1
    },

    hasError: {
      type: Boolean,
      default: false
    },

    tooltip: {
      type: String,
      default: null
    }
  },

  computed: {
    hasInputGroup () {
      return this.hasIconAddon || this.hasAddOn
    },

    hasIconAddon () {
      return this.iconHtml || this.iconClass
    },

    hasAddOn () {
      return this.addOn
    }
  },

  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang='scss' scoped>

@import '../assets/styles/mixins/shared-input-styles.scss';
@include shared-input-styles;

</style>
