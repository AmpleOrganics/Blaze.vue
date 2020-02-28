export default {
  header: 'Modal',
  description: 'This is a customizable modal component.',
  snippet:
        `<ao-modal
  v-if="showModal"
  :header-text="'This is the modal title'"
  @modalClose="toggleModal"
>
  <div slot="modal-body">
    <p>And I live in the body of the modal</p>
  </div>
  <div slot="modal-footer">
    <ao-button
      primary
      @click.native="toggleModal"
    >
      Close
    </ao-button>
  </div>
</ao-modal>`,
  apiRows: [
    { name: 'headerText', type: 'String', required: true, default: '', description: 'Defines the modal title.' },
    { name: 'destructive', type: 'Boolean', default: 'false', description: 'Adds a class to indicate a destructive action eg. deletion, permanent irreversible action.' },
    { name: 'caution', type: 'Boolean', default: 'false', description: 'Adds a class to indicate a cautious action eg. reversible powerful change.' },
    { name: 'size', type: 'String (small, medium or large)', default: 'medium', description: 'Defines the modal size.' }
  ]
}
