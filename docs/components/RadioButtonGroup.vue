<template>
  <Layout>

    <template slot="description">
      <span v-html="description"/>
    </template>

    <div slot="example">
      <div class="component-example">
        <div class="component-example__display"> My favourite character is {{ selectedRadio }} </div>
        <ao-radio-button-group
          :options="radioButtons"
          v-model="selectedRadio"
          name="test"/>
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
        { name: 'Other Guy', value: 'Other' },
        { name: 'Todd', value: 'Todd' }
      ],
      selectedRadio: 'Tandy'
    }
  }
}
</script>

<style>

</style>
