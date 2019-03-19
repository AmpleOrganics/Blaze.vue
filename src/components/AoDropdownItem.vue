<template functional>
  <div
    :class="{ disabled: props.disabled}"
    class="ao-dropdown__item"
    v-on="listeners"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.ao-dropdown__item {
  color: $color-gray-30;
  padding: $spacer/2 $spacer;
  text-decoration: none !important;
  display: flex;
  align-items: center;

  &:hover {
    background: $color-gray-90;
    color: $color-gray-10;
  }

  &.disabled {
    color: $color-gray-60;
    cursor: default;
    pointer-events: none;
  }
}

</style>
