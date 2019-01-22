<template>
  <Layout>
    <template slot="description">
      <span v-html="description" />
    </template>

    <div slot="example">
      <div class="component-example">
        <ao-paginate
          :total-pages="totalPages"
          :current-page.sync="currentPage"
        />
        <p>Current Page: {{ currentPage }}</p>
        <p>Total Pages: {{ totalPages }}</p>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model.number="totalPages"
            :type="'number'"
            :label="'Total Pages'"
          />
        </div>
      </div>
    </div>
    <template slot="snippet">
      {{ snippet }}
    </template>
    <template slot="api">
      <ApiTable :rows="apiRows" />
    </template>
  </Layout>
</template>

<script>
import Layout from '../layout/Layout'
import ApiTable from '../helpers/ApiTable'
import PaginateDocumentation from './Paginate'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...PaginateDocumentation,
      totalPages: 10,
      currentPage: 1
    }
  },

  methods: {
    paginate (page) {
      this.currentPage = page
    }
  }
}
</script>

<style lang="scss" scoped>
.ao-pagination {
  width: fit-content !important;
}
</style>
