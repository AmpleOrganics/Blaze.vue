<template>
  <Layout>
    <template slot="description">
      <span v-html="description" />
    </template>

    <div slot="example">
      <div class="component-example">
        <ao-dropdown :show-dropdown="showDropdown">
          <ao-dropdown-item
            v-for="(link, index) in links"
            slot="dropdown-items"
            :key="index"
            :href="link.url"
          >
            {{ link.title }}
          </ao-dropdown-item>
        </ao-dropdown>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-checkbox
            v-model="showDropdown"
            :checkbox-value="true"
            checkbox-label="showDropdown"
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
import DropdownDocumentation from './Dropdown'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...DropdownDocumentation,
      links: [
        { url: 'https://google.com', title: 'Google' },
        { url: 'https://facebook.com', title: 'Facebook' }
      ],

      showDropdown: true
    }
  }
}
</script>

<style lang="scss" scoped>
.component-example {
  .ao-dropdown {
    position: inherit;
    max-width: 200px;
  }
}
</style>
