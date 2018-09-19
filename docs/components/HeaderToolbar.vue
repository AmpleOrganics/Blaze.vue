<template>
  <Layout>

    <template slot="description">
      <span v-html="description"/>
    </template>

    <div slot="example">
      <div class="component-example">
        <ao-header-toolbar
          :title="titleText"
          :icon-html="iconHtml"
          :icon-url="iconUrl">
          <span class="icon">🍔</span>
          <span>Logout</span>
        </ao-header-toolbar>
      </div>
      <div class="component-controls">
        <ao-input
          v-model="titleText"
          :label="'Header Toolbar Title Text'"/>
        <ao-input
          v-model="iconHtml"
          :label="'iconHtml'"/>
        <ao-input
          v-model="iconUrl"
          :label="'iconUrl'"
          :placeholder="'https://vignette.wikia.nocookie.net/2007scape/images/7/7f/Chompy_bird.png/revision/latest?cb=20160714233624'"/>
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
import HeaderToolbarDocumentation from './HeaderToolbar'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...HeaderToolbarDocumentation,
      titleText: 'Ribbitting Technologies',
      iconHtml: '🐸',
      iconUrl: null
    }
  }
}
</script>

<style scoped>
.icon {
  font-size: 1.5rem;
}
</style>
