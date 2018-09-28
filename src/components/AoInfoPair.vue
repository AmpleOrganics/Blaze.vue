<template>
  <div class="ao-info-pair">
    <div class="ao-info-pair__label">
      <h4 class="ao-info-pair__label-text">
        {{ label }}
      </h4>
      <slot name="tooltip"/>
    </div>
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
      required: true
    }
  }
}
</script>

<style lang='scss'>

.ao-info-pair {
  margin-bottom: $spacer;

  &__label-text {
    margin-bottom: 0;
    margin-top: 0;
    font-weight: $font-weight-bold;
    font-size: $font-size-xs;
    text-transform: uppercase;
    color: $color-gray-30;
    display: inline-block;
  }

  &__label .ao-tooltip {
    display: inline-block;
    margin-left: $spacer-micro;
    font-size: $font-size-sm;
  }
}

</style>
