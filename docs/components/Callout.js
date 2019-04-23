export default {
  header: 'Callout',
  description: 'This is a customizable callout component.',
  snippet:
        `<ao-callout
  v-if="showCallout"
  success
  dismissible
  :icon-class="'md-icon__check'"
  @hideCallout="hideCallout"
>
  Callout text goes here
</ao-callout>`,
  apiRows: [
    { name: 'iconClass', type: 'String', default: 'null', description: 'Displays icon components eg. material icons.' },
    { name: 'dismissible', type: 'Boolean', default: 'false', description: 'Displays a close icon on right side of callout' },
    { name: 'destructive', type: 'Boolean', default: 'false', description: 'Adds a class to indicate a destructive action eg. deletion, permanent irreversible action.' },
    { name: 'caution', type: 'Boolean', default: 'false', description: 'Adds a class to indicate a cautious action eg. reversible powerful change.' },
    { name: 'success', type: 'Boolean', default: 'false', description: 'Adds a class to indicate a success action.' },
    { name: 'info', type: 'Boolean', default: 'false', description: 'Adds a class to indicate an informative action.' },
    { name: '@hideCallout', type: 'Event', default: 'null', description: 'Event emitted to allow the callout to be shown or hidden' }
  ]
}
