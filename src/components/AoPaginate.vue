<template>
  <div class="ao-pagination">
    <a
      :disabled="page === 1"
      class="ao-pagination__button"
      @click="changePage('prev')"
    >
      &laquo;
    </a>
    <a
      :disabled="page === totalPages"
      class="ao-pagination__button"
      @click="changePage('next')"
    >
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

<style lang='scss'>
.ao-pagination {
  display: flex;
  width: 88px;

  &__button {
    height: $input-height-base;
    width: $input-height-base;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: $color-gray-10;
    border: 1px solid $input-border-color;
    background: $color-white;
    z-index: $zindex-base;
    user-select: none;
    font-weight: $font-weight-bold;

    &[disabled] {
      cursor: not-allowed !important;
      opacity: 0.65;
      filter: alpha(opacity=65);
      box-shadow: none;
      color: $color-gray-60;
      background: $color-white !important;
      z-index: $zindex-base - 1;
    }

    &:first-child {
      border-radius: $border-radius-base 0 0 $border-radius-base;
      border-right: 0;
    }

    &:last-child {
      border-radius: 0 $border-radius-base $border-radius-base 0;
    }

    &:hover {
      text-decoration: none;
    }

    &:hover:not([disabled]) {
      background: $color-gray-90;
      color: $color-gray-20;
      cursor: pointer;
    }
  }
}
</style>
