<template>
  <Layout>

    <template slot="description">
      <span v-html="description"/>
    </template>

    <div slot="example">
      <div class="component-example component-example__file-upload">
        <ao-file-upload
          :label="labelText"
          :show-label="showLabel"
          :disabled="disabled"
          :disable-all="disableAll"
          :invalid="invalid"
          :invalid-message="invalidMessage"
          name="'file'"
        />
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="labelText"
            :type="'text'"
            :label="'File Upload Label Text'"
          />
        </div>
        <div class="component-controls__group">
          <ao-input
            v-model="invalidMessage"
            :type="'text'"
            :label="'Invalid Message'"
          />
        </div>
        <div class="component-controls__group">
          <ao-checkbox
            v-model="showLabel"
            :checkbox-value="true"
            checkbox-label="showLabel"
          />
          <ao-checkbox
            v-model="disabled"
            :checkbox-value="true"
            checkbox-label="disabled"
          />
          <ao-checkbox
            v-model="disableAll"
            :checkbox-value="true"
            checkbox-label="disable all"
          />
          <ao-checkbox
            v-model="invalid"
            :checkbox-value="true"
            checkbox-label="invalid"
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
import FileUploadDocumentation from './FileUpload'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...FileUploadDocumentation,
      labelText: 'Upload File',
      showLabel: true,
      disabled: false,
      disableAll: false,
      invalid: false,
      invalidMessage: 'INVALID!'
    }
  }
}
</script>

<style lang="scss" scoped>
.component-example__file-upload {
  height: 100px;
}
</style>
