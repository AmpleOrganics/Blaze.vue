<template>
  <!-- investigate min max length -->
  <div class="ao-form-group">
    <label
      v-show="showLabel"
      :for="name">{{ label }}</label>
    <textarea
      :class="{'ao-form-control--invalid': invalid }"
      :value="value"
      :placeholder="placeholder"
      :name="name"
      :rows="rows"
      :maxlength="maxLength"
      :minlength="minLength"
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

    disabled: {
      type: Boolean,
      default: false
    },

    rows: {
      type: Number,
      default: 5
    },

    invalid: {
      type: Boolean,
      default: false
    },

    showLabel: {
      type: Boolean,
      default: true
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
@import '../shared-input-styles.scss';
@include shared-input-styles;

.ao-form-control {
  height: auto;
  min-height: $input-height-base;
  min-width: 100%;
}

</style>
