<template>
  <Layout>
    <template slot="description">
      <span v-html="description" />
    </template>

    <div slot="example">
      <div class="component-example">
        <ao-navbar>
          <li
            v-for="route in routes"
            :key="route.path"
          >
            <router-link :to="route.path">
              {{ route.name }}
            </router-link>
          </li>
        </ao-navbar>
      </div>
    </div>
    <template slot="snippet">{{ snippet }}</template>
    <template slot="api">
      <ApiTable :rows="apiRows" />
    </template>
  </Layout>
</template>

<script>
import Layout from '../layout/Layout'
import ApiTable from '../helpers/ApiTable'
import NavbarDocumentation from './Navbar'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...NavbarDocumentation,
      routes: [
        { path: '#examples', name: 'Examples' },
        { path: '#code-example', name: 'Code Example' },
        { path: '#props', name: 'Props' }
      ]
    }
  }
}
</script>
