<template>
  <div
    v-if="showDropdown"
    :class="['ao-dropdown', computedDropdownDirection]"
  >
    <slot name="dropdown-items" />
  </div>
</template>

<script>
export default {
  props: {
    showDropdown: {
      type: Boolean,
      default: false
    },

    direction: {
      type: String,
      default: 'left',
      validator: (value) => {
        return ['left', 'right'].indexOf(value) !== -1
      }
    }
  },

  computed: {
    computedDropdownDirection () {
      return `ao-dropdown--${this.direction}`
    }
  }
}
</script>

<style lang="scss">
.ao-dropdown {
  z-index: $zindex-dropdown;
  background: $color-white;
  box-shadow: $shadow, $shadow-subtle;
  display: flex;
  flex-direction: column;
  border: $border-gray-50;
  min-width: 140px;
  text-align: left;
  position: absolute;
  top: 100%;
  margin-top: 3px;
  white-space: nowrap;

  &--left {
    right: 0;
  }

  &--right {
    left: 0;
  }
}

.ao-header-toolbar__controls > * > .ao-dropdown {
  right: -1px;
}
</style>
