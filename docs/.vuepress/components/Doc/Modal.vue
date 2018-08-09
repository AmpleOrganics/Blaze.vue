<template>
  <div>
    <div class="component-example">
      <ao-button @click.native="toggleModal">Open Modal</ao-button>
      <ao-modal
        v-if="showModal"
        :header-text="headerText"
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
  </div>
</template>

<script>

export default {
  data() {
    return {
      showModal: false,
      headerText: 'Header Text',
      contentText: 'I am context'
    }
  },

  methods: {
    toggleModal () {
      this.showModal = !this.showModal
    }
  }
}
</script>
