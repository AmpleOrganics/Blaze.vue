<template>
  <div>
    <div class="component-example">
      <ao-button @click.native="toggleModal">Open Modal</ao-button>
      <ao-modal
        v-if="showModal"
        :header-text="headerText"
        :destructive="selectedRadio === 'destructive'"
        :caution="selectedRadio === 'caution'"
        @modalClose="toggleModal">
        <div slot="modal-body">
          <p>{{ contentText }}</p>
        </div>
        <div slot="modal-footer">
          <ao-button
            primary
            @click.native="toggleModal">
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
          v-for="radio in radios"
          :key="radio.value"
          :val="radio.value"
          :name="radio.name"
          :label="radio.name"
          v-model="selectedRadio" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      showModal: false,
      headerText: 'This is the modal title',
      contentText: 'And I live in the body of the modal',
      radios: [
        { name: 'default', value: 'default' },
        { name: 'destructive', value: 'destructive' },
        { name: 'caution', value: 'caution' }
      ],
      selectedRadio: 'default'
    }
  },

  methods: {
    toggleModal () {
      this.showModal = !this.showModal
    }
  }
}
</script>
