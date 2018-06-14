<template>
  <div class="ao-form-group">
    <label :for="name">{{ label }}</label>
    <textarea
      :value="value"
      :placeholder="placeholder"
      :name="name"
      :rows="rows"
      :maxlength="maxLength"
      :minlength="minLength"
      :required="required"
      :readonly="readonly"
      :disabled="disabled"
      class="ao-form-control"
      @input="inputEvent($event.target.value)"
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

@import '../assets/styles/mixins/shared-input-styles.scss';
@include shared-input-styles;

.ao-form-control {
  height: auto;
  min-height: $input-height-base;
  min-width: 100%;
}

</style>
