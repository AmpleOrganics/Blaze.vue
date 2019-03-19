<template>
  <div
    v-if="showDropdown"
    class="ao-dropdown"
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
  right: 0px;
  margin-top: 3px;
  white-space: nowrap;
}

.ao-header-toolbar__controls > * > .ao-dropdown {
  right: -1px;
}
</style>
