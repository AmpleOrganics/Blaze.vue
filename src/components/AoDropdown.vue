<template>
  <div
    v-if="showDropdown"
    :class="['ao-dropdown', computedSize, computedDropdownDirection]"
  >
    <slot name="dropdown-items" />
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'medium'
    },
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
    },
    computedSize () {
      return `ao-dropdown--${this.size}`
    }
  }
}
</script>

<style lang="scss">
.ao-dropdown {
  z-index: $zindex-dropdown;
  background: $color-white;
  box-shadow: $shadow, $shadow-subtle;
  border: $border-gray-50;
  min-width: 9rem;
  text-align: left;
  position: absolute;
  top: 100%;
  margin-top: 3px;
  white-space: nowrap;
  border-radius: $border-radius-base;
  padding-top: $spacer-xs;
  padding-bottom: $spacer-xs;

  &--left {
    right: 0;
  }

  &--right {
    left: 0;

  }

  &--medium {
    width: 15rem;
  }

  &--large {
    width: 20rem;
  }

  & > hr {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    height: 1px;
    border-top: 1px solid $border-gray-50;
  }
}

.ao-header-toolbar__controls > * > .ao-dropdown {
  right: -1px;
}
</style>
