<template>
  <Layout>
    <template slot="description">
      <span v-html="description" />
    </template>

    <div slot="example">
      <div class="component-example">
        <ao-table
          :headers="headers"
          :is-clickable="isClickable"
          :show-no-data-text="showNoDataText"
          :no-data-text="noDataText"
          :sort-by="sortBy"
          :order="order"
          class="component-example-table"
          @sortTable="sortTable"
        >
          <tr
            v-for="user in filteredUsers"
            :key="user.id"
          >
            <td>{{ user.id }}</td>
            <td>{{ user.first_name }}</td>
            <td>{{ user.last_name }}</td>
          </tr>
        </ao-table>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-checkbox
            v-model="isClickable"
            :checkbox-value="false"
            checkbox-label="isClickable"
          />
        </div>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-checkbox
            v-model="hidden"
            :checkbox-value="false"
            checkbox-label="hidden (First Name column)"
          />
        </div>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-checkbox
            v-model="alignRight"
            :checkbox-value="false"
            checkbox-label="alignRight (Last Name column)"
          />
        </div>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-checkbox
            v-model="showNoDataText"
            :checkbox-value="false"
            checkbox-label="showNoDataText"
          />
        </div>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="noDataText"
            :type="'text'"
            label="noDataText"
          />
        </div>
      </div>
    </div>
    <template slot="snippet">
      <code>{{ snippet }}</code>
    </template>
    <template slot="api">
      <ApiTable :rows="apiRows" />
    </template>
  </Layout>
</template>

<script>
import Layout from '../layout/Layout'
import ApiTable from '../helpers/ApiTable'
import TableDocumentation from './Table'
import orderBy from 'lodash.orderby'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...TableDocumentation,
      users: [
        { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons' },
        { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs' },
        { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert' },
        { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores' },
        { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee' },
        { 'id': 6, 'first_name': 'Rick', 'last_name': 'Potter' },
        { 'id': 7, 'first_name': 'Harry', 'last_name': 'Sanchez' },
        { 'id': 8, 'first_name': 'Joy', 'last_name': 'Mann' },
        { 'id': 9, 'first_name': 'Adam', 'last_name': 'Hansen' },
        { 'id': 10, 'first_name': 'Marge', 'last_name': 'Grey' }
      ],
      sortBy: 'id',
      order: 'asc',
      isClickable: true,
      alignRight: true,
      hidden: true,
      showNoDataText: false,
      noDataText: 'No Data'
    }
  },

  computed: {
    filteredUsers () {
      return this.showNoDataText ? [] : this.users
    },
    headers () {
      return [
        { field: 'id', title: 'ID', sortable: true },
        { field: 'first_name', title: 'First Name', sortable: true, hidden: this.hidden },
        { field: 'last_name', title: 'Last Name', sortable: true, alignRight: this.alignRight }
      ]
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
.component-example-table {
  table-layout: fixed;
}
</style>
