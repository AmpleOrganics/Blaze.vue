<template>
  <Layout>

    <template slot="description">
      <span v-html="description"/>
    </template>

    <div slot="example">
      <div class="component-example">
        <ao-dropdown :show-dropdown="showDropdown">
          <a
            v-for="(link, index) in links"
            slot="dropdown-items"
            :key="index"
            :href="link.url"
            class="ao-dropdown__link">
            {{ link.title }}
          </a>
        </ao-dropdown>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-checkbox
            v-model="showDropdown"
            :checkbox-label="'showDropdown'"
            :checkbox-value="true"
          />
        </div>
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
  position: relative;
}
</style>
