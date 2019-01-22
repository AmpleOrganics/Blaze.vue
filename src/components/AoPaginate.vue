<template>
  <div class="ao-paginate">
    <button
      v-show="currentPage !== 1"
      class="ao-paginate__button"
      @click="changePage(currentPage - 1)"
    >
      <i class="left-chevron ao-paginate__chevron" />
    </button>
    <button
      v-if="totalPages > 6"
      :class="{ 'ao-paginate__button--active': isCurrentPage(1) }"
      class="ao-paginate__button"
      @click="changePage(1)"
    >
      1
    </button>
    <span
      v-if="firstDots"
      class="ao-paginate__first-dots"
    >
      ...
    </span>
    <button
      v-for="page in displayPages"
      :key="page"
      :class="{ 'ao-paginate__button--active': isCurrentPage(page) }"
      class="ao-paginate__button ao-paginate__page"
      @click="changePage(page)"
    >
      {{ page }}
    </button>
    <span
      v-if="lastDots"
      class="ao-paginate__last-dots"
    >
      ...
    </span>
    <button
      v-show="totalPages > 6"
      :class="{ 'ao-paginate__button--active': isCurrentPage(totalPages) }"
      class="ao-paginate__button"
      @click="changePage(totalPages)"
    >
      {{ totalPages }}
    </button>
    <button
      v-if="currentPage !== totalPages"
      class="ao-paginate__button"
      @click="changePage(currentPage + 1)"
    >
      <i class="right-chevron ao-paginate__chevron" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      default: 1
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },

  computed: {
    displayPages () {
      if (this.totalPages > 6) {
        if (this.currentPage < 4) {
          return [2, 3, 4]
        } else if (this.currentPage > this.totalPages - 3) {
          return [this.totalPages - 3, this.totalPages - 2, this.totalPages - 1]
        } else {
          return [this.currentPage - 1, this.currentPage, this.currentPage + 1]
        }
      } else {
        return this.totalPages
      }
    },

    isCurrentPage () {
      return page => this.currentPage === page
    },

    firstDots () {
      return (this.currentPage > this.totalPages - 3 || this.currentPage >= 4) && this.totalPages > 6
    },

    lastDots () {
      return (this.currentPage < 4 || this.currentPage <= this.totalPages - 3) && this.totalPages > 6
    }
  },

  methods: {
    changePage (page) {
      this.$emit('update:currentPage', page)
    }
  }
}
</script>

<style lang="scss">
.ao-paginate {
  &__button {
    border-radius: $border-radius-base;
    border: 1px solid $color-gray-60;
    height: 2rem;
    min-width: 2rem;
    padding-right: $spacer-xs;
    padding-left: $spacer-xs;
    margin: $spacer-micro/2;
    font-family: $font-family-primary;
    font-size: $font-size-sm;
    color: $font-color-base;

    &:hover {
      background-color: darken($color-white, 3%);
      border-color: darken($color-gray-60, 3%);
      color: darken($font-color-base, 3%);
    }

    &--active,
    &--active:hover {
      background: $color-gray-40;
      color: $color-white;
      padding-right: $spacer-xs;
      padding-left: $spacer-xs;
      font-size: $font-size-sm;
      min-width: 2rem;
      border: 1px solid $color-gray-40;
      cursor: default;
    }
  }

  &__chevron {
    font-size: $font-size-base;
    display: flex;
    align-items: center;
  }
}
</style>
