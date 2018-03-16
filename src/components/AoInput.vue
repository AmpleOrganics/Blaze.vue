<template>
  <div class="form-group">
    <label :for="name">{{ label }}</label>
    <div :class="{ 'input-group': hasInputGroup }">
      <input
        class="form-control"
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
        class="input-group-addon"
        v-if="hasIconAddon"
        v-html="iconHtml"
        :class="iconClass"
      />
      <span
        class="input-group-addon"
        v-if="hasAddOn">
        {{ addOn }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AoInput',
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
.form-group {
  margin-bottom: 15px;
}

label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-control {
  display: block;
  width: 100%;
  max-width: 100%;
  height: 36px;
  font-size: 16px;
  line-height: 1.4em;
  color: #585d60;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;

  &[disabled], &[readonly]{
    background-color: #ebecef;
    border-color: #d7d9df;
    opacity: 1;
  }

  &[disabled] {
    cursor: not-allowed;
  }
}

.input-group {
  position: relative;
  display: table;
  border-collapse: separate;

  & .form-control {
    display: table-cell;
    position: relative;
    z-index: 2;
    float: left;
    width: 100%;
    margin-bottom: 0;

    &:first-child {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
  }
}
.input-group-addon {
  padding: 6px 12px;
  font-size: 16px;
  font-weight: normal;
  line-height: 1;
  color: #585d60;
  text-align: center;
  background-color: #dcdedf;
  border: 1px solid #ccc;
  border-radius: 3px;
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

.is-danger {
  color: red;
  input {
    border: 1px solid red;
  }
}
</style>
