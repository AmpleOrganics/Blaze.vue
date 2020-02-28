<template>
  <Layout>
    <template slot="description">
      <span v-html="description" />
    </template>

    <div slot="example">
      <div class="component-example">
        <ao-dropdown
          :size="size"
          :show-dropdown="showDropdown"
        >
          <ao-dropdown-item
            v-for="(link, index) in links"
            slot="dropdown-items"
            :key="index"
            :href="link.url"
            :info-text="link.infoText"
          >
            {{ link.title }}
          </ao-dropdown-item>
          <hr slot="dropdown-items">
          <ao-dropdown-item
            slot="dropdown-items"
            disabled
          >
            Not Me
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
        <div class="component-controls__group">
          <ao-select
            v-model="dropdownSize"
            label="Size"
          >
            <option
              v-for="size in sizes"
              :key="size.name"
              :value="size.value"
            >
              {{ size.name }}
            </option>
          </ao-select>
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
        { url: 'https://facebook.com', title: 'Facebook', infoText: 'This is a really fun website, you will love it.' }
      ],
      dropdownSize: 'large',
      sizes: [
        { value: 'medium', name: 'Medium' },
        { value: 'large', name: 'Large' }
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
  }
}
</style>
