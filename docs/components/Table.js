export default {
  header: 'Table',
  description: 'This is a customizable table component.',
  snippet:
`<ao-table
  :headers="headers"
  :is-clickable="isClickable"
  :is-scrollable="isScrollable"
  :max-height="maxHeight"
  :show-no-data-text="showNoDataText"
  :no-data-text="noDataText"
  :sort-by="sortBy"
  :order="order"
  :selectable-table="selectableTable"
  :is-partially-selected="partialSelection"
  class="component-example-table"
  @sortTable="sortTable"
  @selectAll="selectAll($event)"
>
  <tr
    v-for="user in filteredUsers"
    :key="user.id"
  >
    <td v-if="selectableTable">
      <input
        v-model="user.selected"
        type="checkbox"
      >
    </td>
    <td>{{ user.id }}</td>
    <td>{{ user.first_name }}</td>
    <td>{{ user.last_name }}</td>
    <td>{{ user.friends }}</td>
  </tr>
</ao-table>
data () {
  return {
    headers: [
      { field: 'id', title: 'ID', sortable: true },
      { field: 'first_name', title: 'First Name', sortable: true, hidden: true },
      { field: 'last_name', title: 'Last Name', sortable: true, alignRight: true },
      { field: 'friends', title: 'Friends', sortable: true, tooltip: { text: 'Friendly friends', multiline: false, position: 'top' } }
    ],
    users: [
      { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'friends': '44', selected: false },
      { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'friends': '5', selected: false },
      { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'friends': '2', selected: false },
      { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'friends': '8', selected: false },
      { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'friends': '10', selected: false },
      { 'id': 6, 'first_name': 'Rick', 'last_name': 'Potter', 'friends': '102', selected: false },
      { 'id': 7, 'first_name': 'Harry', 'last_name': 'Sanchez', 'friends': '23', selected: false },
      { 'id': 8, 'first_name': 'Joy', 'last_name': 'Mann', 'friends': '1', selected: false },
      { 'id': 9, 'first_name': 'Adam', 'last_name': 'Hansen', 'friends': '0', selected: false },
      { 'id': 10, 'first_name': 'Marge', 'last_name': 'Grey', 'friends': '55', selected: false }
    ],
    sortBy: 'id',
    order: 'asc',
    isClickable: true,
    isScrollable: false,
    showNoDataText: false,
    noDataText: 'No Data',
    selectableTable: false,
    maxHeight: '200px'
  }
},
computed: {
  filteredUsers () {
    return this.showNoDataText ? [] : this.users
  },
  partialSelection () {
    return [...new Set(this.users.map(user => user.selected))].length > 1
  }
},
methods: {
  sortTable (sortBy, order) {
    this.users = orderBy(this.users, sortBy, order)
  },
  selectAll (select) {
    for (let user of this.users) {
      user['selected'] = select
    }
  }
}`,
  apiRows: [
    { name: 'condensed', type: 'Boolean', default: 'false', description: 'When set to true, this prop reduces appropriate styling to make table look condensed.' },
    { name: 'headers', type: 'Array', default: 'null', description: 'This prop contains an array of objects with header title, field and a sortable boolean to determine if your data should be sorted by that header.' },
    { name: 'headers > alignRight,<br /> hidden,<br /> tooltip', type: 'Boolean, Boolean, Object', default: 'false', description: 'Include the <strong>alignRight</strong> property to align the header to the right side of the space given. <br />Include a <strong>hidden</strong> property to hide a given \'th\' header. <br />Include the <strong>tooltip</strong> component beside the header with its own props.' },
    { name: 'isClickable', type: 'Boolean', default: 'false', description: 'When set to true, this prop adds appropriate styling to signify that the table and table rows are clickable.' },
    { name: 'isScrollable', type: 'Boolean', default: 'false', description: 'When set to true, this prop adds appropriate styling to make table body scroll on the y-axis if it hits a max-height.' },
    { name: 'maxHeight', type: 'String', default: '', description: 'Defines the max height of a table in pixels when <strong>isScrollable</strong> is true.' },
    { name: 'noDataText', type: 'String', default: '', description: 'Text to show when table has no data.' },
    { name: 'order', type: 'String ("asc" or "desc")', default: 'desc', description: 'This prop defines which order (ascending or decending) is the default.' },
    { name: 'showNoDataText', type: 'Boolean', default: 'false', description: 'When set to true, this prop displays the value of prop noDataText.' },
    { name: 'sortBy', type: 'String', default: 'null', description: 'This prop defines the default header to sort by.' },
    { name: 'vAlign', type: 'String ("top" or "middle")', default: 'top', description: 'This prop defines which vertical alignment (top or middle) is the default.' },
    { name: 'selectableTable', type: 'Boolean', default: 'false', description: 'This prop determines if the table header contains a checkbox to emit selectAll events.' },
    { name: 'isPartiallySelected', type: 'Boolean', default: 'false', description: 'When true, overrides the header checkbox to display the indeterminate value (hyphen).' }
  ]
}
