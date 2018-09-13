<template>
  <table
    :class="[{ 'ao-table--clickable': isClickable }, 'ao-table']">
    <thead>
      <tr>
        <th
          v-for="columnHeader in headers"
          :key="columnHeader.field"
          :class="isSortableClass(columnHeader.sortable)"
          @click="sortByHeader(columnHeader.field, columnHeader.sortable)">
          <span class="ao-table__header">{{ columnHeader.title }}<span :class="isChevroned(columnHeader.field, columnHeader.sortable)"/></span>
        </th>
      </tr>
    </thead>
    <tbody :class=" { clickable: isClickable }">
      <slot />
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      default: null
    },

    isClickable: {
      type: Boolean,
      default: false
    },

    sortBy: {
      type: String,
      default: null
    },

    order: {
      type: String,
      default: 'desc',
      validator: function (order) {
        return ['asc', 'desc'].includes(order)
      }
    }
  },

  data () {
    return {
      lastSelectedHeader: this.sortBy,
      sortProxy: this.sortBy,
      orderProxy: this.order
    }
  },

  methods: {
    sortByHeader (header, sortable) {
      // undefined is used so you do not have to set searchable
      if (sortable === true || sortable === undefined) {
        if (header === this.lastSelectedHeader) {
          this.orderProxy = this.toggleOrder(this.orderProxy)
        } else {
          this.lastSelectedHeader = header
          this.orderProxy = 'desc'
          this.sortProxy = header
        }
        this.$emit('sortTable', this.sortProxy, this.orderProxy)
      }
    },

    isSortableClass (sortable) {
      return sortable === true || sortable === undefined ? 'ao-table__th--sortable' : null
    },

    isChevroned (name, sortable) {
      if (name === this.sortProxy && (sortable === true || sortable === undefined)) {
        return this.orderProxy === 'desc' ? 'glyphicon glyphicon-chevron-down ao-table__sort-icon' : 'glyphicon glyphicon-chevron-up ao-table__sort-icon'
      }
    },

    toggleOrder (order) {
      return order === 'asc' ? 'desc' : 'asc'
    }
  }
}
</script>

<style lang="scss" scoped>

.ao-table {
  font-size: $font-size-sm;
  width: 100%;
  max-width: 100%;
  margin-bottom: $spacer;
  background: transparent;
  overflow-x: auto;
  min-height: 0.01%;

  tr {
    border-bottom: 1px solid $color-gray-60;
  }

  &--clickable {
    tbody > tr {
      cursor: pointer;
    }

    & > tbody > tr:hover {
      background: $color-gray-80;
    }
  }

  & > tbody > tr:nth-of-type(odd) {
    background-color: $color-gray-90;
  }

  & > tbody /deep/ tr > td {
    padding: 8px;
    vertical-align: middle;
  }

  & th {
    font-weight: $font-weight-bold;
    text-align: left;
  }

  & thead > tr > th {
    color: $color-gray-10;
    vertical-align: bottom;
    border-bottom: 2px solid $color-grey-light;
    padding: 8px;
    line-height: 1.4;
  }

  &__th--sortable > span {
    cursor: pointer;
    border-bottom: 1px dotted $color-gray-10;
  }

  &__sort-icon {
    margin-left: 0.5rem;
    font-size: 11px;
    top: 0;
  }

  /deep/ &__action-column {
    text-align: right;
  }

  /deep/ & tr &__row-button {
    opacity: 0.25;
    height: $input-height-sm;
    font-size: $font-size-xs;
    padding-left: $spacer-xs;
    padding-right: $spacer-xs;
  }

  /deep/ & tr:hover &__row-button {
    opacity: 1;
  }
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
