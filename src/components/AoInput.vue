<template>
  <div class="ao-form-group">
    <label :for="name">{{ label }}</label>
    <div :class="{ 'ao-input-group': hasInputGroup }">
      <input
        class="ao-form-control"
        :class="{'ao-input--has-error': hasError }"
        :type="type"
        @input="updateValue($event.target.value)"
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
      >
      <span
        class="ao-input-group__addon"
        v-if="hasIconAddon"
        v-html="iconHtml"
        :class="iconClass"
      />
      <span class="ao-input-group__addon" v-if="hasAddOn">
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
        return ['text', 'number', 'tel', 'email', 'password'].indexOf(inputType) !== -1
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

.ao-form-group {
  margin-bottom: $spacer;
}

label {
  display: inline-block;
  max-width: 100%;
  margin: $input-label-margin;
  font-weight: $font-weight-bold;
}

.ao-form-control {
  display: block;
  width: 100%;
  max-width: 100%;
  height: $input-height-base;
  font-size: $font-size-base;
  line-height: $line-height-base;
  color: $input-color;
  background-color: $color-white;
  background-image: none;
  border: $input-border-width solid $input-border-color;
  border-radius: $input-border-radius;
  padding: $spacer-micro  $spacer-sm;
  transition: border-color $transition-base;

  &:active:not([disabled]), &:focus {
    outline: 0;
    box-shadow: $input-focus-shadow;
    border-color: $input-focus-border-color;
  }

  &[disabled], &[readonly]{
    background-color: #ebecef;
    border-color: #d7d9df;
    opacity: 1;
  }

  &[disabled] {
    cursor: not-allowed;
  }

  &--has-error {
    border-color: $input-border-color-error;
  }
}

.ao-input-group {
  display: table;
  border-collapse: separate;

  & .ao-form-control {
    display: table-cell;
    width: 100%;
    margin-bottom: 0;

    &:first-child {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
  }

  &__addon {
    align-items: center;
    height: $input-height-base;
    padding: $spacer-micro $spacer-sm;
    font-size: $font-size-base;
    font-weight: normal;
    color: $color-gray-20;
    text-align: center;
    background-color: $color-gray-80;
    border: 1px solid $input-border-color;
    border-radius: $input-border-radius;
    width: 1%;
    white-space: nowrap;
    vertical-align: middle;
    display: table-cell;

    &:last-child {
      border-left: 0;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
  }
}

</style>
