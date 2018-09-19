export default {
  header: 'Table',
  description: 'This is a customizable table component.',
  snippet:
        `<ao-table
  :headers="headers"
  :is-clickable="isClickable"
  :sort-by="sortBy"
  :order="order"
  @sortTable="sortTable">
  <tr
    v-for="user in users"
    :key="user.id">
    <td>{{ user.id }}</td>
    <td>{{ user.first_name }}</td>
    <td>{{ user.last_name }}</td>
  </tr>
</ao-table>

data () {
  return {
    headers: [
        { field: 'id', title: 'ID', sortable: true },
        { field: 'first_name', title: 'First Name', sortable: true },
        { field: 'last_name', title: 'Last Name', sortable: true }
      ],
      users: [
        { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons'},
        { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs'},
        { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert'},
        { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores'},
        { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee'},
        { 'id': 6, 'first_name': 'Rick', 'last_name': 'Potter'},
        { 'id': 7, 'first_name': 'Harry', 'last_name': 'Sanchez'},
        { 'id': 8, 'first_name': 'Joy', 'last_name': 'Mann'},
        { 'id': 9, 'first_name': 'Adam', 'last_name': 'Hansen'},
        { 'id': 10, 'first_name': 'Marge', 'last_name': 'Grey'}
      ],
      sortBy: 'id',
      order: 'desc',
      isClickable: false
  },

  methods: {
    sortTable (sortBy, order) {
      this.users = orderBy(this.users, sortBy, order)
    }
  }
}`,
  apiRows: [
    { name: 'headers', type: 'Array', default: 'null', description: 'This prop contains an array of objects with header title, field and a sortable boolean to determine if your data should be sorted by that header.' },
    { name: 'isClickable', type: 'Boolean', default: 'false', description: 'When set to true, this prop adds appropriate styling to signify that the table and table rows are clickable.' },
    { name: 'condensed', type: 'Boolean', default: 'false', description: 'When set to true, this prop reduces appropriate styling to make table look condensed.' },
    { name: 'sortBy', type: 'String', default: 'null', description: 'This prop defines the default header to sort by.' },
    { name: 'vAlign', type: 'String ("top" or "middle")', default: 'top', description: 'This prop defines which vertical alignment (top or middle) is the default.' },
    { name: 'order', type: 'String ("asc" or "desc")', default: 'desc', description: 'This prop defines which order (ascending or decending) is the default.' }
  ]
}
