<template>
  <div class="pagination">
    <a
      class="pagination-button"
      @click="paginatePage('prev')">
      &laquo;
    </a>
    <a
      class="pagination-button"
      @click="paginatePage('next')">
      &raquo;
    </a>
  </div>
</template>

<script>
export default {
  name: 'AoPaginate',
  methods: {
    paginatePage (direction) {
      this.$emit('paginate', direction)
    }
  }
}
</script>

<style lang='scss' scoped>
.pagination {
  display: flex;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.pagination-button {
  padding: 6px 12px;

  &:last-child {
    border-left: 1px solid #ccc;
  }

  &:hover {
    background: #ebecef
  }
}
</style>
