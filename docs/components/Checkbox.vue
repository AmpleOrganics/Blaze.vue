<template>
  <Layout>

    <template slot="description">
      <span v-html="description"/>
    </template>

    <div slot="example">

      <div class="component-example">
        <ao-checkbox
          :checkbox-label="checkboxLabel"
          :show-label="showLabel"
          :disabled="disabled"
          :checkbox-value="true"
        />
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="checkboxLabel"
            :type="'text'"
            :label="'Checkbox Label Text'"
          />
        </div>
        <div class="component-controls__group">
          <ao-checkbox
            v-model="showLabel"
            :checkbox-label="'showLabel'"
            :checkbox-value="true"
          />
        </div>
        <div class="component-controls__group">
          <ao-checkbox
            v-model="disabled"
            :checkbox-label="'disabled'"
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
