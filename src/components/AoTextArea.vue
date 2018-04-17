<template>
  <div class="ao-form-group">
    <label :for="name">{{ label }}</label>
    <textarea
      class="ao-form-control"
      @input="inputEvent($event.target.value)"
      :value="value"
      :placeholder="placeholder"
      :name="name"
      :rows="rows"
      :maxlength="maxLength"
      :minlength="minLength"
      :required="required"
      :readonly="readonly"
      :disabled="disabled"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null
    },

    label: {
      type: String,
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

    maxLength: {
      type: Number,
      default: 100000
    },

    minLength: {
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

    rows: {
      type: Number,
      default: 5
    }
  },

  methods: {
    inputEvent (updatedValue) {
      this.$emit('input', updatedValue)
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../assets/styles/settings/_variables.scss';

.ao-form-group {
  margin-bottom: 15px;
}

label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: bold;
}

.ao-form-control {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  font-size: 16px;
  line-height: 1.4em;
  color: #585d60;
  background-color: $color-white;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;

  &disabled, &readonly{
    background-color: #ebecef;
    border-color: #d7d9df;
    opacity: 1;
  }

  &[disabled] {
    cursor: not-allowed;
  }
}
</style>
