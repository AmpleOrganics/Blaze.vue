<template>
  <nav class="ao-navbar">
    <ul>
      <slot />
    </ul>
  </nav>
</template>

<style lang='scss'>

.ao-navbar {
  padding-top: $spacer;

  & > ul {
    padding: 0;
    list-style-type: none;

    & > li {
      display: inline;
      position: relative;
      cursor: pointer;

      & .router-link-exact-active, .router-link-active, .active {
        color: $color-gray-20;
        background-color: $color-gray-80;
      }

      & > * {
        text-decoration: none;
        line-height: $line-height-base;
        border-radius: $border-radius-base;
        display: inline-flex;
        align-items: center;
        color: $color-gray-30;
        padding: $spacer-micro $spacer-sm;
        margin-bottom: $spacer/2;
        height: $input-height-base;
        text-transform: capitalize;
      }
    }
  }
}
</style>
