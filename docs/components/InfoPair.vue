<template>
  <Layout>
    <template slot="description">
      <span v-html="description" />
    </template>

    <div slot="example">
      <div class="component-example">
        <ao-info-pair
          :label="label"
          :label-html="labelHtml"
        >
          {{ info }}
        </ao-info-pair>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="label"
            :type="'text'"
            :label="'Info Pair Label Text'"
          />
        </div>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="labelHtml"
            :type="'text'"
            :label="'Info Pair Label HTML'"
          />
        </div>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="info"
            :type="'text'"
            :label="'Info Pair Text'"
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
import InfoPairDocumentation from './InfoPair'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...InfoPairDocumentation,
      label: 'Info Label',
      labelHtml: '- Area (m<sup>2</sup>)',
      info: 'Information goes here'
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ sup {
  font-size: 10px;
  vertical-align: super;
}
</style>
