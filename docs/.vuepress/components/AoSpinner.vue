<template>
  <div class="ao-spinner">
    <div class="ao-spinner__icon"/>
  </div>
</template>

<style lang='scss' scoped>

@import '../../../src/assets/styles/settings/_variables.scss';

.ao-spinner {
  pointer-events: none;
  top: $spacer-lg;
  z-index: 501;
  display: block;
  // removed so that is stays in the box
  // position: fixed;
  right: $spacer-lg;

  &__icon {
    width: 40px;
    height: 40px;
    border: solid 4px transparent;
    border-top-color: $color-primary;
    border-left-color: $color-primary;
    border-radius: 50%;
    animation: progress-spinner 600ms linear infinite;
  }
}

@keyframes progress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
