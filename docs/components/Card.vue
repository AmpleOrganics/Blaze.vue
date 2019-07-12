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
          <ao-button
            v-if="showCardAction"
            slot="card-header-action"
            subtle
            small
          >
            <i class="material-icons">more_horiz</i>
          </ao-button>
          <ao-callout
            v-if="showCardCallout"
            slot="card-callout"
            success
          >
            {{ calloutText }}
          </ao-callout>
          <div
            v-if="showCardToolbar"
            slot="card-header-toolbar"
          >
            <ao-checkbox
              :checkbox-value="true"
              checkbox-label="filter"
            />
          </div>
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
        <div class="component-controls__group">
          <ao-checkbox
            v-model="showCardAction"
            :checkbox-value="true"
            checkbox-label="Show Card Action Slot"
          />
        </div>
        <div class="component-controls__group">
          <ao-checkbox
            v-model="showCardToolbar"
            :checkbox-value="true"
            checkbox-label="Show Card Toolbar Slot"
          />
        </div>
        <div class="component-controls__group">
          <ao-checkbox
            v-model="showCardCallout"
            :checkbox-value="true"
            checkbox-label="Show Card Callout Slot"
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
import CardDocumentation from './Card'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...CardDocumentation,
      titleText: 'Seashell Day',
      calloutText: 'Great day for seashells',
      slotText: 'She sells seashells by the sea shore',
      showCardAction: true,
      showCardToolbar: true,
      showCardCallout: true
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
