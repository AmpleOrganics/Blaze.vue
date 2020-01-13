<template>
  <Layout>
    <template slot="description">
      <span v-html="description" />
    </template>

    <div slot="example">
      <div class="component-example">
        <div class="component-example__display">
          My favourite character is {{ selectedRadio }}
        </div>
        <ao-radio-button-group
          v-model="selectedRadio"
          :options="radioButtons"
          :subtle="subtle"
          name="test"
        />
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-checkbox
            v-model="subtle"
            :checkbox-value="true"
            checkbox-label="Subtle"
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
import RadioButtonGroupDocumentation from './RadioButtonGroup'

export default {
  components: {
    Layout,
    ApiTable
  },

  data () {
    return {
      ...RadioButtonGroupDocumentation,
      radioButtons: [
        { name: 'Tandy', value: 'Tandy' },
        { name: 'Other Guy', value: 'Other Guy' },
        { name: 'Todd', value: 'Todd' }
      ],
      selectedRadio: '',
      subtle: false
    }
  }
}
</script>

<style>

</style>
