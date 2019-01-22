<template>
  <table :class="[computedClasses, computedVAlign]">
    <thead>
      <tr>
        <th
          v-for="columnHeader in headers"
          :key="columnHeader.field"
          :class="['ao-table__header', isSortableClass(columnHeader.sortable), {'ao-table__header--text-right' : columnHeader.alignRight}]"
          @click="sortByHeader(columnHeader.field, columnHeader.sortable)"
        >
          <span class="ao-table__header-text">
            {{ columnHeader.title }}<span :class="isChevroned(columnHeader.field, columnHeader.sortable)" />
          </span>
        </th>
      </tr>
    </thead>
    <tbody :class=" { clickable: isClickable }">
      <slot />
      <tr
        v-if="showNoDataText"
        class="ao-table__nodata"
      >
        <td :colspan="headers.length">
          {{ noDataText }}
        </td>
      </tr>
    </tbody>
    <tfoot v-if="hasTableFooterSlot">
      <slot name="table-footer" />
    </tfoot>
  </table>
</template>

<script>
import { filterClasses } from './utils/component_utilities.js'

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

    condensed: {
      type: Boolean,
      default: false
    },

    showNoDataText: {
      type: Boolean,
      default: false
    },

    noDataText: {
      type: String,
      default: ''
    },

    sortBy: {
      type: String,
      default: null
    },

    vAlign: {
      type: String,
      default: 'top',
      validator (vAlign) {
        return ['top', 'middle'].indexOf(vAlign) !== -1
      }
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

  computed: {
    hasTableFooterSlot () {
      return !!this.$slots['table-footer']
    },

    computedClasses () {
      const activeClasses = {
        'ao-table': true,
        'ao-table--clickable': this.isClickable,
        'ao-table--condensed': this.condensed
      }
      return filterClasses(activeClasses)
    },

    computedVAlign () {
      return `ao-table--vertical-align-${this.vAlign}`
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

<style lang="scss">

.ao-table {
  border-collapse: collapse;
  border-spacing: 0;
  font-size: $table-font-size;
  width: 100%;
  max-width: 100%;
  margin-bottom: $spacer;
  background: transparent;
  overflow-x: auto;
  min-height: 0.01%;

  table {
    line-height: $table-line-height;
  }

  tr {
    border-bottom: 1px solid $color-gray-70;
  }

  th, td {
    padding: $table-cell-padding;
    vertical-align: middle;
  }

  th {
    font-weight: $font-weight-bold;
    text-align: left;

    &.ao-table__header--text-right {
      text-align: right;
    }
  }

  &--condensed {
    th, td {
      padding: $spacer-micro;
    }
  }

  & > thead > tr {
    background-color: $color-white;
  }

  & > tbody > tr:nth-of-type(even) {
    background-color: $color-white;
  }

  & > tbody > tr:nth-of-type(odd) {
    background-color: $table-row-background-shaded;
  }

  &.ao-table--clickable {
    tbody > tr {
      cursor: pointer;
    }

    & > tbody > tr:hover {
      background: $color-gray-80;
    }
  }

  &--vertical-align-top {
    td {
      vertical-align: top;
    }
  }

  &--vertical-align-middle {
    td {
      vertical-align: middle;
    }
  }

  & > tbody tr > td {
    border-top: 1px solid $table-border-color;
  }

  & > thead > tr > th {
    vertical-align: bottom;
    border-bottom: 2px solid $table-border-color;
  }

  & tfoot tr > td {
    border-top-width: 2px;
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

  &__action-column {
    text-align: right;
  }

  & tr &__row-button {
    opacity: 0.25;
    height: $input-height-sm;
    font-size: $font-size-xs;
    padding-left: $spacer-xs;
    padding-right: $spacer-xs;
  }

  & tr:hover &__row-button {
    opacity: 1;
  }

  &__nodata {
    text-align: center;
    color: $color-gray-30;

    &:hover {
      cursor: inherit !important;
      background-color: $table-row-background-shaded !important;
    }
  }

  td.ao-table__input-cell {
    padding-top: $table-input-vertical-cell-padding;
    padding-bottom: $table-input-vertical-cell-padding;
  }

  td.ao-table__row-actions {
    text-align: right;
    padding-top: $table-input-vertical-cell-padding;
    padding-bottom: $table-input-vertical-cell-padding;
  }

  td.ao-table__row-actions > * {
    &:first-child,
    &:first-child .ao-button {
      border-top-left-radius: $border-radius-base;
      border-bottom-left-radius: $border-radius-base;
      border-right: 0;
    }
    &:last-child,
    &:last-child .ao-button {
      border-top-right-radius: $border-radius-base;
      border-bottom-right-radius: $border-radius-base;
    }
  }
  td.ao-table__row-actions > * + * {
    // margin-left: 2px;
  }

  // @media (hover: hover) {
  //   td.ao-table__row-actions > * {
  //     opacity: 0;
  //   }

  //   & > tbody > tr:hover > &__row-actions > * {
  //     opacity: 1;
  //   }
  // }

  & td > *:last-child {
    margin-bottom: 0;
  }
}
</style>
