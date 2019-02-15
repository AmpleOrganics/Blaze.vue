<template>
  <Layout>
    <template slot="description">
      <span v-html="description" />
    </template>

    <div slot="example">
      <div class="component-example">
        <ao-section-header
          :title="title"
          :subtitle="subtitle"
          :icon-html="iconHtml"
        >
          <template slot="section-header-title">
            <span class="icon">
              🍔
            </span>
          </template>
        </ao-section-header>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="title"
            :type="'text'"
            :label="'Section Header Title'"
          />
        </div>
        <div class="component-controls__group">
          <ao-input
            v-model="subtitle"
            :type="'text'"
            :label="'Section Header Subtitle'"
          />
        </div>
        <div class="component-controls__group">
          <ao-input
            v-model="iconHtml"
            :type="'text'"
            :label="'iconHtml'"
          />
        </div>
      </div>
    </div>
    <template slot="snippet">
      {{ snippet }}
    </template>
    <template slot="api">
      <ApiTable :rows="apiRows" />
    </template>
  </Layout>
</template>

<script>
import Layout from '../layout/Layout'
import ApiTable from '../helpers/ApiTable'
import SectionHeaderDocumentation from './SectionHeader'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...SectionHeaderDocumentation,
      title: 'This is the section header title',
      subtitle: 'The subtitle goes here',
      iconHtml: 'Hello!'
    }
  }
}
</script>
