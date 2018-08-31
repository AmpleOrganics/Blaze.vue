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
.ao-dropdown {
  z-index: $zindex-dropdown;
  background: $color-white;
  display: flex;
  flex-direction: column;
  border: $border-gray-50;
  border-bottom: 0;
  width: 140px;
  text-align: left;
  position: absolute;
  top: 100%;
  right: 0px;
  margin-top: 3px;

  & * {
    color: $color-gray-30;
    padding-left: 15px;
    border-bottom: $border-gray-50;
    text-decoration: none !important;
    line-height: 33px;

    &:hover {
      color: $color-gray-10;
    }
  }
}

.ao-header-toolbar__controls > * > .ao-dropdown {
  right: -1px;
}
</style>
