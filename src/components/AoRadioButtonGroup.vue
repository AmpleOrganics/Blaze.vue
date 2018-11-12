<template>
  <div class="ao-radio-button-group">
    <div
      v-for="option in options"
      :key="option.value"
      class="ao-radio-button-group__option">
      <input
        v-bind="$attrs"
        :value="option.value"
        :checked="isChecked(option.value)"
        :id="option.value"
        :name="name"
        type="radio"
        class="ao-radio-button-group__option-input"
        @input="select(option.value)">
      <label
        :for="option.value"
        class="ao-radio-button-group__option-input-label">
        {{ option.name }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      required: true
    },

    options: {
      type: Array,
      required: true
    },

    value: {
      type: [Number, String, Boolean],
      required: true
    }
  },

  data () {
    return {
      currentValue: null
    }
  },

  watch: {
    value (val) {
      this.currentValue = val
    }
  },

  created () {
    this.currentValue = this.value
  },

  methods: {
    select (value) {
      this.$emit('input', value)
    },

    isChecked (val) {
      return this.currentValue === val
    }
  }
}
</script>

<style lang="scss">
.ao-radio-button-group {
  &__option {
    display: inline-block;
  }

  &__option-input-label {
    display: inline-flex;
    align-items: center;
    margin-bottom: 0;
    text-align: center;
    font-weight: $font-weight-bold;
    font-family: $font-family-primary;
    border: $input-border-width solid transparent;
    border-right-width: 0;
    padding: $spacer-micro $spacer-sm;
    font-size: $font-size-base;
    line-height: $line-height-base;
    min-height: $input-height-base;
    box-shadow: $shadow-subtle;
    cursor: pointer;
    background-color: $color-white;
    border-color: $color-gray-50;
    color: $font-color-base;
  }

  &__option:first-of-type > &__option-input-label {
    border-top-left-radius: $border-radius-base;
    border-bottom-left-radius: $border-radius-base;
  }

  &__option:last-of-type > &__option-input-label {
    border-top-right-radius: $border-radius-base;
    border-bottom-right-radius: $border-radius-base;
    border-right-width: 1px;
  }

  &__option-input{
    position: absolute;
    opacity: 0;

    &:focus + &-label {
      box-shadow: $shadow-inset;
      background-color: darken($color-white, 3%);
      border-color: darken($color-gray-50, 3%);
      color: darken($font-color-base, 3%);
    }

    &:disabled + &-label {
      background-color: $color-white !important;
      border-color: $color-gray-50 !important;
      color: $color-gray-40 !important;
      cursor: not-allowed !important;
    }

    &:checked + &-label,
    &:checked:active + &-label,
    &:checked:hover + &-label {
      background-color: $color-success;
      border-color: $color-success;
      box-shadow: $shadow-none;
      color: white;
    }
  }
}
</style>
