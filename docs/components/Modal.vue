<template>
  <Layout>
    <template slot="description">
      <span v-html="description" />
    </template>

    <div slot="example">
      <div class="component-example">
        <ao-button @click.native="toggleModal">
          Open Modal
        </ao-button>
        <ao-modal
          v-if="showModal"
          :size="selectedModalSize"
          :header-text="headerText"
          :destructive="selectedModalType === 'destructive'"
          :caution="selectedModalType === 'caution'"
          @modalClose="toggleModal"
        >
          <div slot="modal-body">
            <p>{{ contentText }}</p>
          </div>
          <div slot="modal-footer">
            <ao-button
              primary
              @click.native="toggleModal"
            >
              Close
            </ao-button>
          </div>
        </ao-modal>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="headerText"
            :type="'text'"
            :label="'Header Text'"
          />
        </div>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="contentText"
            :type="'text'"
            :label="'Context Text'"
          />
        </div>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-radio
            v-for="radio in modalTypes"
            :key="radio.value"
            v-model="selectedModalType"
            :val="radio.value"
            :name="radio.name"
            :label="radio.name"
          />
        </div>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-radio
            v-for="radio in modalSizes"
            :key="radio.value"
            v-model="selectedModalSize"
            :val="radio.value"
            :name="radio.name"
            :label="radio.name"
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
import ModalDocumentation from './Modal'

export default {
  components: {
    Layout,
    ApiTable
  },
  data () {
    return {
      ...ModalDocumentation,
      showModal: false,
      headerText: 'This is the modal title',
      contentText: 'And I live in the body of the modal',
      modalTypes: [
        { name: 'default', value: 'default' },
        { name: 'destructive', value: 'destructive' },
        { name: 'caution', value: 'caution' }
      ],
      selectedModalType: 'default',
      modalSizes: [
        { name: 'small', value: 'small' },
        { name: 'medium', value: 'medium' },
        { name: 'large', value: 'large' }
      ],
      selectedModalSize: 'medium'
    }
  },

  methods: {
    toggleModal () {
      this.showModal = !this.showModal
    }
  }
}
</script>
