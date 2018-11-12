<template>
  <div class="ao-radio-group">
    <label
      v-for="option in options"
      :class="[ {'ao-radio-group--option__active': isActive(option.value)}, 'ao-radio-group--option']"
      :key="option.value">
      <input
        v-show="false"
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

  &--option {
    border-style: solid;
    border-width: 2px;
    border-color: $color-primary;
    color: $color-primary;
    padding: 5px;

    &__active {
      background-color: $color-primary;
      color: white;
    }
  }
  :first-of-type{
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  :last-of-type {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
</style>
