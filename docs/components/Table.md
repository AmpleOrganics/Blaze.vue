# Table

This is a customizable table component

## Examples

<Doc-Table/>


## Code Example
```html
<ao-table
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
```

```js
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
}
```

## Props

| Name         | Type     | Default | Description                                                           |
|:-------------|:---------|:---------|:----------------------------------------------------------------------|
|headers     |Array   | null |This prop contains an array of objects with header title, field and a sortable boolean to determine if your data should be sorted by that header. |
|isClickable |Boolean | false |When set to true, this prop adds appropriate styling to signify that the table and table rows are clickable. |
|sortBy      |String  | null |This prop defines the default header to sort by. |
|order |String ('asc' or 'desc')|'desc' |This prop defines which order (ascending or decending) is the default. |
