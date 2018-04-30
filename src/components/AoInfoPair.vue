<template>
  <p class="ao-info-pair">
    <span class="ao-info-pair__label">{{ label }}</span>
    <br>
    <span class="ao-info-pair__value">
      <slot name="value"/>
    </span>
  </p>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang='scss' scoped>

.ao-info-pair {
  
  &__label {
    font-weight: $font-weight-bold;
    font-size: $font-size-xs;
    text-transform: uppercase;
    color: $color-gray-30;
  }
}

</style>
