<template>
  <table :class="[computedClasses, computedVAlign]">
    <thead>
      <tr>
        <th
          v-if="selectableTable"
          class="ao-table__header--select-all"
        >
          <input
            v-model="selectAll"
            type="checkbox"
            :indeterminate.prop="isPartiallySelected"
            @change="$emit('selectAll', selectAll)"
          >
        </th>
        <th
          v-for="columnHeader in headers"
          :key="columnHeader.field"
          :class="['ao-table__header', isSortableClass(columnHeader.sortable), {'ao-table__header--text-right' : columnHeader.alignRight}]"
        >
          <span
            v-show="!columnHeader.hidden"
            class="ao-table__header-text"
            @click="sortByHeader(columnHeader.field, columnHeader.sortable, columnHeader.hidden)"
          >
            {{ columnHeader.title }}<span :class="isChevroned(columnHeader.field, columnHeader.sortable, columnHeader.hidden)" />
          </span>
          <ao-tooltip
            v-if="hasTooltip(columnHeader.tooltip)"
            class="ao-table__tooltip-icon"
            :text="columnHeader.tooltip.text"
            :position="columnHeader.tooltip.position"
            :multiline="columnHeader.tooltip.multiline"
          />
        </th>
      </tr>
    </thead>
    <tbody
      :class=" { clickable: isClickable }"
      :style="getMaxHeight(maxHeight)"
    >
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
import AoTooltip from './AoTooltip.vue'

export default {
  components: {
    AoTooltip
  },

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
    },

    selectableTable: {
      type: Boolean,
      default: false
    },

    isPartiallySelected: {
      type: Boolean,
      default: false
    },

    isScrollable: {
      type: Boolean,
      default: false
    },

    maxHeight: {
      type: String,
      default: 'none'
    }
  },

  data () {
    return {
      lastSelectedHeader: this.sortBy,
      sortProxy: this.sortBy,
      orderProxy: this.order,
      selectAll: false
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
        'ao-table--condensed': this.condensed,
        'ao-table--scrollable': this.isScrollable
      }
      return filterClasses(activeClasses)
    },

    computedVAlign () {
      return `ao-table--vertical-align-${this.vAlign}`
    }
  },

  methods: {
    sortByHeader (header, sortable = true, hidden = false) {
      if (this.isSortable(sortable, hidden)) {
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

    isSortableClass (sortable = true, hidden = false) {
      return this.isSortable(sortable, hidden) ? 'ao-table__th--sortable' : null
    },

    isChevroned (name, sortable = true, hidden = false) {
      if (name === this.sortProxy && this.isSortable(sortable, hidden)) {
        return this.orderProxy === 'desc' ? 'md-icon__arrow_drop_down ao-table__sort-icon' : 'md-icon__arrow_drop_up ao-table__sort-icon'
      }
    },

    toggleOrder (order) {
      return order === 'asc' ? 'desc' : 'asc'
    },

    isSortable (sortable, hidden) {
      return sortable === true && hidden === false
    },

    hasTooltip (tooltip) {
      return tooltip && tooltip['text']
    },

    getMaxHeight () {
      return {
        'max-height': this.maxHeight
      }
    }
  }
}
</script>

<style lang="scss">

$table-row-background-shaded: $color-gray-90;

.ao-table {
  border-collapse: collapse;
  border-spacing: 0;
  font-size: $font-size-sm;
  width: 100%;
  max-width: 100%;
  margin-bottom: $spacer;
  background: transparent;
  overflow-x: auto;
  min-height: 0.01%;

  tr {
    border-bottom: 1px solid $color-gray-70;
  }

  th, td {
    padding: $table-cell-padding;
  }

  &__th--sortable > span {
    cursor: pointer;
    border-bottom: 1px dotted $color-gray-10;
  }

  th {
    font-weight: $font-weight-bold;
    text-align: left;

    &.ao-table__header--text-right {
      text-align: right;
    }

    &.ao-table__header--hidden > span {
      display: none;
    }
  }

  &--condensed {
    th, td {
      padding: $spacer-micro;
    }
  }

  & > tbody > tr:nth-of-type(odd) {
    background-color: $color-gray-90;
  }

  &--vertical-align-top {
    & > tr > td {
      vertical-align: top;
    }
  }

  &--vertical-align-middle {
    & > tr > td {
      vertical-align: middle;
    }
  }

  & tr > td {
    padding: .5rem;
    vertical-align: middle;
    border-bottom: 1px solid $table-border-color;
  }

  & > thead > tr > th {
    vertical-align: bottom;
    border-bottom: 2px solid $table-border-color;
  }

  & > tfoot > tr > td {
    border-top: 1px solid $table-border-color;
  }

  & > tfoot > tr ~ tr > td {
    border-top: 0;
  }

  &__sort-icon {
    margin-left: $spacer-micro;
    top: 0;
  }

  &__tooltip-icon {
    margin-left: $spacer-micro;
    top: .2rem;
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

  .ao-table__header--select-all {
    width: 2rem;
  }
}

$fake-scrollbar-color: $color-gray-90;

.ao-table.ao-table--scrollable {
  display: flex;
  flex-direction: column;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: $browser-scrollbar-width;
    background: $fake-scrollbar-color;
    border-left: 1px solid $color-gray-80;
  }

  ::-webkit-scrollbar-thumb {
    width: 2px;
    background-color: $color-gray-40;
    -webkit-box-shadow: inset 4px 0 0px $fake-scrollbar-color, inset -5px 0 0px $fake-scrollbar-color;
    border-left: 1px solid $color-gray-80;
  }

  tbody {
    overflow-y: scroll;
  }

  & > thead > tr,
  & > tbody > tr,
  & > tfoot > tr {
        display: flex;
  }

  & > thead > tr > th,
  & > tbody > tr > td,
  & > tfoot > tr > td {
    flex: 1 1 0;
    overflow-x: hidden;
  }

  & thead th:last-child,
  & tfoot td:last-child {
    padding-right: $table-cell-padding + $browser-scrollbar-width;
  }
}

.ao-table.ao-table--clickable {
  tbody > tr {
    cursor: pointer;
  }

  & > tbody > tr:hover {
    background: $color-gray-80;
  }
}
</style>
