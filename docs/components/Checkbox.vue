<template>
  <Layout>
    <template slot="description">
      <span v-html="description" />
    </template>

    <div slot="example">
      <div class="component-example">
        <ao-checkbox
          :show-label="showLabel"
          :disabled="disabled"
          :checkbox-value="true"
          :checkbox-label="checkboxLabel"
          :info-text="infoText"
        />
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="checkboxLabel"
            :type="'text'"
            :label="'Checkbox Label Text'"
          />
          <ao-input
            v-model="infoText"
            :type="'text'"
            :label="'Checkbox Informational Text'"
          />
        </div>
        <div class="component-controls__group">
          <ao-checkbox
            v-model="showLabel"
            :checkbox-value="true"
            checkbox-label="showLabel"
          />
        </div>
        <div class="component-controls__group">
          <ao-checkbox
            v-model="disabled"
            :checkbox-value="true"
            checkbox-label="disabled"
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
import CheckboxDocumentation from './Checkbox'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...CheckboxDocumentation,
      disabled: false,
      showLabel: true,
      infoText: 'This is some informative text',
      checkboxLabel: 'This is the checkbox label'
    }
  },
  methods: {
    activateProp (compare) {
      return compare === this.selectedType
    }
  }
}
</script>
