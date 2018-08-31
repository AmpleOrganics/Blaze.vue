<template>
  <div
    v-if="showDropdown"
    class="ao-dropdown">
    <slot name="dropdown-items"/>
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
@import '../_variables.scss';

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

  & * {
    color: $color-gray-30;
    padding: $spacer/2 $spacer;
    text-decoration: none !important;
    display: flex;
    align-items: center;

    &:hover {
      background: $color-gray-90;
      color: $color-gray-10;
    }
  }
}

.ao-header-toolbar__controls > * > .ao-dropdown {
  right: -1px;
}
</style>
