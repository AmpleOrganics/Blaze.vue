<template>
  <div class="ao-navbar__menu">
    <ul>
      <slot/>
    </ul>
  </div>
</template>

<style lang='scss' scoped>

.ao-navbar {
  &__menu {
    padding: 0 $spacer ($spacer/2);

    & > ul {
      padding: 0;
      list-style-type: none;

      & > li {
        display: inline;
        position: relative;
        cursor: pointer;

        & /deep/ .router-link-exact-active, .router-link-active, .active {
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
}
</style>
