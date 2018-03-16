<template>
  <div class="spinner">
    <div class="spinner-icon"/>
  </div>
</template>

<script>
export default {
  name: 'AoSpinner'
}
</script>

<style lang='scss' scoped>
.spinner {
  pointer-events: none;
  top: 60px;
  z-index: 501;
  display: block;
  position: fixed;
  right: 15px;

  & .spinner-icon {
    width: 40px;
    height: 40px;
    border: solid 4px transparent;
    border-top-color: #00A38B;
    border-left-color: #00A38B;
    border-radius: 50%;
    animation: progress-spinner 600ms linear infinite;
  }
}

@keyframes progress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
