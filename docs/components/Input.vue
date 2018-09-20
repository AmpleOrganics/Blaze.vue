<template>
  <Layout>

    <template slot="description">
      <span v-html="description"/>
    </template>

    <div slot="example">
      <h3>Text Input Example</h3>
      <div class="component-example">
        <ao-input
          :label="textLabel"
          :placeholder="textPlaceholder"
          :show-label="showLabel"
          :icon-html="iconHtml"
          :disabled="disabled"
          :invalid="invalid"
        />
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="textLabel"
            :type="'text'"
            :label="'Input Label Text'"
          />
        </div>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="textPlaceholder"
            :type="'text'"
            :label="'Placeholder Text'"
          />
        </div>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="iconHtml"
            :type="'text'"
            :label="'iconHtml'"
          />
        </div>
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
          :checkbox-value="false"
          checkbox-label="disabled"
        />
      </div>
      <div class="component-controls__group">
        <ao-checkbox
          v-model="invalid"
          :checkbox-value="true"
          checkbox-label="invalid"
        />
      </div>
      <h3 class="component-sub-example">Number Input Example</h3>
      <div class="component-example">
        <ao-input
          :label="numberLabel"
          :step="step"
          :add-on="addOn"
          type="number"
        />
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="numberLabel"
            :type="'text'"
            :label="'Input Label Text'"
          />
        </div>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="step"
            :type="'number'"
            :label="'Step Amount'"
          />
        </div>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="addOn"
            :type="'text'"
            :label="'addOn'"
          />
        </div>
      </div>
      <h3 class="component-sub-example">Date Input Example</h3>
      <div class="component-example">
        <ao-input
          :label="dateLabel"
          type="date"
        />
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="dateLabel"
            :type="'text'"
            :label="'Input Label Text'"
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
import InputDocumentation from './Input'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...InputDocumentation,
      textLabel: 'Enter your name',
      textPlaceholder: 'e.g. Tandy Miller',
      showLabel: true,
      iconHtml: '&#10004;',
      addOn: 'years',
      disabled: false,
      invalid: false,
      numberLabel: 'Enter your age',
      step: 1,
      dateLabel: 'Enter your date of birth'
    }
  }
}
</script>

<style scoped>
.component-sub-example {
  border-top: 1px solid #eaecef;
  padding-top: 5px;
  margin-top: 50px;
}
</style>
