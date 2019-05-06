<template>
  <Layout>
    <template slot="description">
      <span v-html="description" />
    </template>

    <div slot="example">
      <h3>Date Picker Example</h3>
      <div class="component-example">
        <ao-date-picker
          v-model="selectedDate"
          :label="label"
          :placeholder="placeholder"
          :show-label="showLabel"
          :icon-class="iconClass"
          :is-icon-clickable="true"
          :icon-html="iconHtml"
          :disabled="disabled"
          :disable-all="disableAll"
          :invalid="invalid"
          :invalid-message="invalidMessage"
          :instruction-text="instructionText"
        />
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="label"
            :type="'text'"
            :label="'Label Text'"
          />
        </div>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="placeholder"
            :type="'text'"
            :label="'Placeholder Text'"
          />
        </div>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="iconClass"
            :type="'text'"
            :label="'iconClass'"
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
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="invalidMessage"
            :type="'text'"
            :label="'Invalid Message'"
          />
        </div>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="instructionText"
            :type="'text'"
            :label="'Instruction Text'"
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
          v-model="disableAll"
          :checkbox-value="false"
          checkbox-label="disable all"
        />
      </div>
      <div class="component-controls__group">
        <ao-checkbox
          v-model="invalid"
          :checkbox-value="true"
          checkbox-label="invalid"
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
import DatePickerDocumentation from './DatePicker'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...DatePickerDocumentation,
      selectedDate: null,
      label: 'Selected Date',
      placeholder: 'YYYY-MM-DD',
      showLabel: true,
      iconHtml: null,
      iconClass: 'md-icon__date_range',
      disabled: false,
      disableAll: false,
      invalid: false,
      invalidMessage: 'INVALID!',
      instructionText: 'Format: YYYY-MM-DD'
    }
  },
  methods: {
    onIconClicked () {
      console.log('icon clicked')
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
