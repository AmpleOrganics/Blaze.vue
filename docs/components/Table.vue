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
          <tr slot="table-footer">
            <td>
              <strong>Total</strong>
            </td>
            <td />
            <td />
            <td>
              <strong>230</strong>
            </td>
          </tr>
        </ao-table>
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
            v-model="isClickable"
            :checkbox-value="false"
            checkbox-label="isClickable"
          />
        </div>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-checkbox
            v-model="isScrollable"
            :checkbox-value="false"
            checkbox-label="isScrollable"
          />
        </div>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-checkbox
            v-model="selectableTable"
            :checkbox-value="false"
            checkbox-label="selectableTable"
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
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="maxHeight"
            :type="'text'"
            label="maxHeight"
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
      isScrollable: false,
      isClickable: true,
      alignRight: true,
      hidden: true,
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
    headers () {
      return [
        { field: 'id', title: 'ID', sortable: true },
        { field: 'first_name', title: 'First Name', sortable: true, hidden: this.hidden },
        { field: 'last_name', title: 'Last Name', sortable: true, alignRight: this.alignRight },
        { field: 'friends', title: 'Friends', sortable: true }
      ]
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
  }
}
</script>

<style lang="scss">
.component-example-table {
  table-layout: fixed;
}

table tbody {
  max-height: 200px;
}
</style>
