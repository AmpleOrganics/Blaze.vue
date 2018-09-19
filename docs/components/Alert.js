export default {
  header: 'Alert',
  description: 'This is a customizable alert component.',
  snippet:
        `<ao-alert
  v-if="showAlert"
  :show-alert="true"
  :icon-class="'glyphicon glyphicon-ok'">
  Alert text goes here
</ao-alert>`,
  apiRows: [
    { name: 'showAlert', type: 'Boolean', default: 'false', description: 'Shows or hides the alert.' },
    { name: 'iconClass', type: 'String', default: 'null', description: 'Displays icon components eg. glyphicons.' },
    { name: 'destructive', type: 'Boolean', default: 'false', description: 'Adds a class to indicate a destructive action eg. deletion, permanent irreversible action.' },
    { name: 'caution', type: 'Boolean', default: 'false', description: 'Adds a class to indicate a cautious action eg. reversible powerful change.' }
  ]
}
