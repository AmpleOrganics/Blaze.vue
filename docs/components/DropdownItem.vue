<template>
  <Layout>
    <template slot="description">
      <span v-html="description" />
    </template>

    <div slot="example">
      <div class="component-example">
        <ao-dropdown-item
          :disabled="isDisabled"
          :info-text="infoText"
        >
          This is an item
        </ao-dropdown-item>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-checkbox
            v-model="isDisabled"
            :checkbox-value="false"
            checkbox-label="isDisabled"
          />
        </div>
        <div class="component-controls__group">
          <ao-input
            v-model="infoText"
            :type="'text'"
            :label="'Drop Down Item Information Text'"
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
import DropdownItemDocumentation from './DropdownItem'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...DropdownItemDocumentation,
      isDisabled: false,
      infoText: 'Help text'
    }
  }
}
</script>
