<template>
  <table
    :class=" { 'ao-table--clickable': isClickable }"
    class="ao-table">
    <thead>
      <tr>
        <th
          v-for="columnHeader in headers"
          :key="columnHeader.field"
          :class="isSortableClass(columnHeader.sortable)"
          @click="sortByHeader(columnHeader.field, columnHeader.sortable)">
          <span>{{ columnHeader.title }}<span :class="isChevroned(columnHeader.field, columnHeader.sortable)"/></span>
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
      required: false,
      default: null
    },

    isClickable: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data () {
    return {
      sortBy: null,
      reverse: false,
      lastSelectedHeader: null
    }
  },

  created () {
    this.sortBy = this.headers[0].field
    this.lastSelectedHeader = this.headers[0].field
    this.reverse = true
  },

  methods: {
    sortByHeader (header, sortable) {
      // undefined is used so you do not have to set searchable
      if (sortable === true || sortable === undefined) {
        if (header === this.lastSelectedHeader) {
          this.reverse = !this.reverse
        } else {
          this.lastSelectedHeader = header
          this.reverse = true
          this.sortBy = header
        }
        this.$emit('sortTable', this.sortBy, this.reverse)
      }
    },
    isSortableClass (sortable) {
      return sortable === true || sortable === undefined ? 'ao-table__th--sortable' : ''
    },

    isChevroned (name, sortable) {
      if (name === this.sortBy && (sortable === true || sortable === undefined)) {
        return this.reverse ? 'glyphicon glyphicon-chevron-down ao-table__sort-icon' : 'glyphicon glyphicon-chevron-up ao-table__sort-icon'
      }
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

  & > tbody > tr:nth-of-type(odd) {
    background-color: $color-gray-90;
  }

  &--clickable {
    tbody > tr {
      cursor: pointer;
    }

    & > tbody > tr:hover  {
      background: $color-gray-80;
    }
  }

  & > tbody /deep/ tr > td {
    padding: .5rem;
    vertical-align: middle;
    border-top: 1px solid $color-gray-60;
  }

  & th {
    font-weight: $font-weight-bold;
    text-align: left;
  }

  & thead > tr > th {
    color: $color-gray-10;
    vertical-align: bottom;
    border-bottom: 2px solid #ddd;
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
