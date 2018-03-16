<template>
  <div class="navbar-menu">
    <ul>
      <slot/>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AoNavbar'
}
</script>

<style lang='scss' scoped>
  .navbar-menu {
    padding: 0 16px 16px;

    & > ul {
      padding: 0;
      list-style-type: none;
      margin: 0 0 -8px;

      & > li {
        display: inline;
        position: relative;
        cursor: pointer;

        & /deep/ .router-link-exact-active, .router-link-active, .active {
          color: #585d60;
          background-color: #ebecef;
        }

        & > * {
          text-decoration: none;
          line-height: 1;
          border-radius: 3px;
          display: inline-block;
          color: #818a91;
          padding: 8px 10px;
          margin-bottom: 8px;
        }
      }
    }
  }
</style>
