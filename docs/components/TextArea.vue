<template>
  <Layout>

    <template slot="description">
      <span v-html="description"/>
    </template>

    <div slot="example">
      <div class="component-example">
        <ao-text-area
          :show-label="showLabel"
          :label="textAreaText"
          :placeholder="placeholderText"
          :rows="rowLength"
          :max-length="maxCharacters"
          :disabled="disabled"
          :invalid="invalid" />
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="textAreaText"
            :type="'text'"
            :label="'Text Area Label Text'"
          />
        </div>
        <div class="component-controls__group">
          <ao-input
            v-model="placeholderText"
            :type="'text'"
            :label="'Text Area Placeholder Text'"
          />
        </div>
        <div class="component-controls__group">
          <ao-input
            v-model.number="rowLength"
            :type="'number'"
            :label="'Text Area Number of Rows'"
          />
        </div>
        <div class="component-controls__group">
          <ao-input
            v-model.number="maxCharacters"
            :type="'number'"
            :label="'Text Area Maximum Character Length'"
          />
        </div>
        <div class="component-controls__group">
          <ao-checkbox
            v-model="showLabel"
            :checkbox-label="'showLabel'"
            :checkbox-value="true" />
        </div>
        <div class="component-controls__group">
          <ao-checkbox
            v-model="disabled"
            :checkbox-label="'disabled'"
            :checkbox-value="true" />
        </div>
        <div class="component-controls__group">
          <ao-checkbox
            v-model="invalid"
            :checkbox-label="'invalid'"
            :checkbox-value="true" />
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
import TextAreaDocumentation from './TextArea'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...TextAreaDocumentation,
      placeholderText:
        "e.g. Ever since I was a kid, I've had a fear of being scared.",
      rowLength: 5,
      maxCharacters: 100000,
      disabled: false,
      invalid: false,
      showLabel: true,
      textAreaText: 'Tell us your favourite funny quote'
    }
  }
}
</script>
