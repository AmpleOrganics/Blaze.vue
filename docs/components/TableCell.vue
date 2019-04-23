<template>
  <Layout>
    <template slot="description">
      <span v-html="description" />
    </template>

    <div slot="example">
      <div class="component-example">
        <ao-table
          :headers="headers"
          :is-clickable="true"
          :sort-by="sortBy"
          :order="order"
          class="component-example-table"
          @sortTable="sortTable"
        >
          <tr
            v-for="user in users"
            :key="user.id"
          >
            <td>{{ user.first_name }}</td>
            <ao-table-cell content="input">
              <ao-input
                label="Weight"
                :show-label="false"
                add-on="g"
              />
            </ao-table-cell>
            <ao-table-cell content="button">
              <ao-tooltip text="Archive">
                <ao-button>
                  <i class="md-icon__archive" />
                </ao-button>
              </ao-tooltip>
              <ao-tooltip text="Download PDF">
                <ao-button>
                  <i class="md-icon__get_app" />
                </ao-button>
              </ao-tooltip>
              <ao-tooltip text="Actions">
                <ao-button>
                  <i class="md-icon__more_horiz" />
                </ao-button>
              </ao-tooltip>
            </ao-table-cell>
            <ao-table-cell :align-right="alignRight">
              Test
            </ao-table-cell>
          </tr>
        </ao-table>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-checkbox
            v-model="alignRight"
            :checkbox-value="false"
            checkbox-label="alignRight"
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
import TableDocumentation from './TableCell'
import orderBy from 'lodash.orderby'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...TableDocumentation,
      headers: [
        { field: 'first_name', title: 'First Name', sortable: true },
        { field: 'nickname', title: 'Weight', sortable: false },
        { field: 'actions', title: 'Actions', sortable: true },
        { field: 'example', title: 'Align Right Example', sortable: false }
      ],
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
      alignRight: false
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
