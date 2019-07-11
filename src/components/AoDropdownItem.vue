<template functional>
  <button
    :class="['ao-dropdown__item', {disabled: props.disabled}]"
    v-on="listeners"
  >
    <p class="ao-dropdown__item__label">
      <slot />
    </p>
    <p
      v-if="props.infoText"
      class="ao-dropdown__item__info-text"
    >
      {{ props.infoText }}
    </p>
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    infoText: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
.ao-dropdown__item {
  /* Strip button styles */
  cursor: pointer;
  vertical-align: middle;
  border: 0;
  text-align: left;
  background-image: none;
  background-color: transparent;

  color: $color-gray-10;
  padding: $spacer/4 $spacer;
  text-decoration: none;
  font-family: $font-family-primary;
  font-size: $font-size-base;
  display: block;
  width: 100%;

  &:hover,
  &:focus {
    text-decoration: none;
    color: $color-gray-10;
    background: $color-gray-90;
  }

  &.disabled,
  &:disabled,
  &[disabled] {
    color: $color-gray-60;
    cursor: not-allowed;

    &:hover,
    &:focus {
      background: transparent;
    }
  }

  &__label {
    font-weight: normal;
    margin-bottom: 0;
  }

  &__info-text {
    line-height: 1.1;
    font-size: $font-size-sm;
    color: $color-gray-30;
    margin-top: $spacer-micro;
    margin-bottom: 0;
  }

  &.disabled &__info-text,
  &:disabled &__info-text,
  &[disabled] &__info-text {
    color: $color-gray-50;
  }
}

</style>
