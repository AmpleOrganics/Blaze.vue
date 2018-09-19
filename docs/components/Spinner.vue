<template>
  <Layout>

    <template slot="description">
      <span v-html="description"/>
    </template>

    <div slot="example">

      <div class="component-example">
        <ao-spinner/>
      </div>
    </div>
    <template slot="snippet">{{ snippet }}</template>
    <template slot="api">
      <ApiTable
        :rows="apiRows"
      />
    </template>
  </Layout>
</template>

<script>
import Layout from '../layout/Layout'
import ApiTable from '../helpers/ApiTable'
import SpinnerDocumentation from './Spinner'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...SpinnerDocumentation
    }
  }
}
</script>
