<template>
  <div class="ao-pagination">
    <a class="ao-pagination__button" @click="changePage('prev')">
      &laquo;
    </a>
    <a class="ao-pagination__button" @click="changePage('next')">
      &raquo;
    </a>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      default: 1
    }
  },

  data () {
    return {
      page: 1
    }
  },

  computed: {
    nextConditions () {
      return (this.totalPages && this.page < this.totalPages) || !this.totalPages
    }
  },

  methods: {
    changePage (direction) {
      const page = this.page || 1

      if (direction === 'next') {
        if (this.nextConditions) {
          this.page += 1
        }
      } else if (direction === 'prev') {
        // set this.page as null if you can't go back at all
        this.page = this.page <= 1 ? 1 : (this.page - 1)
      }
      // if this.page is null then don't do anything at all
      // handy guard against api calls/more expensive pagination actions
      if (this.page &&
          this.page !== page &&
          (!this.totalPages || this.page <= this.totalPages)
      ) {
        this.$emit('paginate', this.page, direction)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.ao-pagination {
  display: flex;
  border: 1px solid $color-gray-50;
  border-radius: $border-radius-base;

  &__button {
    height: $input-height-base;
    width: $input-height-base;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: $color-gray-20;

    &:last-child {
      border-left: 1px solid $color-gray-50;
    }

    &:hover {
      background: $color-gray-90;
      cursor: pointer;
    }
  }
}
</style>
