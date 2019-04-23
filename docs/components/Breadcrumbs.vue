<template>
  <Layout>
    <template slot="description">
      <span v-html="description" />
    </template>

    <div slot="example">
      <div class="component-example">
        <ao-breadcrumbs :paths="paths" />
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
import BreadcrumbDocumentation from './Breadcrumbs'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...BreadcrumbDocumentation,
      paths: [
        { name: 'Home', path: '/' },
        { name: 'Badge', path: 'badge' },
        { name: 'Breadcrumbs', active: true }
      ]
    }
  }
}
</script>
