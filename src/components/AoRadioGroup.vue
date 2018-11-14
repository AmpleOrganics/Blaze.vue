<template>
  <div class="ao-radio-group">
    <label
      v-for="option in options"
      :class="[ {'ao-radio-group__option--active': isActive(option.value)}, 'ao-radio-group__option']"
      :key="option.value">
      <input
        v-bind="$attrs"
        :value="option.value"
        :checked="currentValue === option.value"
        type="radio"
        @input="select(option.value)">
      {{ option.name }}
    </label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
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

  created () {
    this.currentValue = this.value
  },

  methods: {
    select (value) {
      this.currentValue = value
      this.$emit('input', value)
    },

    isActive (value) {
      return value === this.currentValue
    }
  }
}
</script>

<style lang="scss">
.ao-radio-group {

  &__option {
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

    &:active {
      box-shadow: $shadow-inset;
    }

    &:active, &:hover:not([disabled]) {
      background-color: darken($color-white, 3%);
      border-color: darken($color-gray-50, 3%);
      color: darken($font-color-base, 3%);
    }

    &--active,
    &--active:active,
    &--active:hover:not([disabled]) {
      background-color: $color-success;
      box-shadow: $shadow-none;
      color: white;
    }

    & > input {
      position: absolute;
      opacity: 0;
    }
  }
  :first-of-type{
    border-top-left-radius: $border-radius-base;
    border-bottom-left-radius: $border-radius-base;
  }

  :last-of-type {
    border-top-right-radius: $border-radius-base;
    border-bottom-right-radius: $border-radius-base;
    border-right-width: 1px;
  }
}
</style>
