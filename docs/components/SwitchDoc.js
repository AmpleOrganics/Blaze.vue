export default {
  header: 'Switch',
  description: 'This is a customizable switch component.',
  snippet:
        `<ao-switch
  switch-label="Label"
  :show-label="true"
  :switch-value="true"
  info-text="This is some informative text"
/>`,
  apiRows: [
    { name: 'value', type: 'Array, Number, Boolean, Object', default: 'null', description: 'Defines the value associated with the input (this is also the value that is sent on submit).' },
    { name: 'switchValue', type: 'String, Number, Boolean, Object', required: true, default: 'true', description: 'Defines the value associated with the input.' },
    { name: 'showLabel', type: 'Boolean', default: 'true', description: 'Hide or unhide the text label.' },
    { name: 'switchLabel', type: 'String', required: true, default: '', description: 'Text label next to the switch.' },
    { name: 'infoText', type: 'String', default: 'null', description: 'For instructional UI copy pertaining to the switch option' },
    { name: 'disabled', type: 'Boolean', default: 'false', description: 'Disables interaction with the component.' }
  ]
}
