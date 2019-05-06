<template>
  <Layout>
    <template slot="description">
      <span v-html="description" />
    </template>

    <div slot="example">
      <div class="component-example">
        <ao-card
          :title="titleText"
        >
          <p>{{ slotText }}</p>
          <template slot="cardFooter">
            <ao-button primary>
              Action 1
            </ao-button>
            <ao-button>
              Action 2
            </ao-button>
          </template>
        </ao-card>
      </div>
      <div class="component-controls__group">
        <ao-input
          v-model="titleText"
          :type="'text'"
          label="Card Title Text"
        />
        <ao-input
          v-model="slotText"
          :type="'text'"
          label="Card Content Text"
        />
      </div>
    </div>
    <template slot="snippet">{{ snippet }}</template>
    <template slot="api">
      <ApiTable :rows="apiRows" />
    </template>
  </Layout>
</template>

<script>
import Layout from '../layout/Layout'
import ApiTable from '../helpers/ApiTable'
import CardDocumentation from './Card'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...CardDocumentation,
      titleText: 'Title goes here',
      slotText: 'She sells seashells by the sea shore'
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
