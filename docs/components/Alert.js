export default {
  header: 'Alert',
  description: 'This is a customizable alert component.',
  snippet:
        `<ao-alert
  v-if="showAlert"
  :show-alert="true"
  :icon-class="'md-icon__check'">
  <i
    slot="icon"
    class="material-icons"
  >
    check
  </i>
  Alert text goes here
</ao-alert>`,
  apiRows: [
    { name: 'showAlert', type: 'Boolean', default: 'false', description: 'Shows or hides the alert.' },
    { name: 'iconClass', type: 'String', default: 'null', description: 'Displays icon components eg. material icons. You can also use the name slot of "icon" as well' },
    { name: 'destructive', type: 'Boolean', default: 'false', description: 'Adds a class to indicate a destructive action eg. deletion, permanent irreversible action.' },
    { name: 'caution', type: 'Boolean', default: 'false', description: 'Adds a class to indicate a cautious action eg. reversible powerful change.' }
  ]
}
