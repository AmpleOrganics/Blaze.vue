<template>
  <div>
    <div class="component-example">
      <ao-table
        :headers="headers"
        :is-clickable="isClickable"
        :sort-by="sortBy"
        :order="order"
        @sortTable="sortTable"
        class="fixed-widths">
        <tr
          v-for="user in users"
          :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
        </tr>
      </ao-table>
    </div>
  </div>
</template>

<script>
import orderBy from 'lodash.orderby'

export default {
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
      order: 'asc',
      isClickable: false
    }
  },

  methods: {
    sortTable (sortBy, order) {
      this.users = orderBy(this.users, sortBy, order)
    }
  }
}
</script>

<style lang="scss" scoped>
.fixed-widths td {
  width: 200px;

  &:first-child {
    width: 50px;
  }
}
</style>
