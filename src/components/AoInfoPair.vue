<template>
  <div class="ao-info-pair">
    <h4 class="ao-info-pair__label">{{ label }}</h4>
    <div class="ao-info-pair__value">
      <slot/>
    </div>
  </div>
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
  margin-bottom: $spacer;
  
  &__label {
    margin-bottom: 0;
    margin-top: 0;
    font-weight: $font-weight-bold;
    font-size: $font-size-xs;
    text-transform: uppercase;
    color: $color-gray-30;
  }
}

</style>
