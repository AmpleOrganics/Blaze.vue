export default {
  header: 'Checkbox',
  description: 'This is a customizable checkbox component.',
  snippet:
        `<ao-checkbox
  checkbox-label="Label"
  :show-label="true"
  :checkbox-value="true"
  info-text="This is some informative text"
/>`,
  apiRows: [
    { name: 'value', type: 'Array, Number, Boolean, Object', default: 'null', description: 'Defines the value associated with the input (this is also the value that is sent on submit).' },
    { name: 'checkboxValue', type: 'String, Number, Boolean, Object', required: true, default: '', description: 'Defines the value associated with the input.' },
    { name: 'showLabel', type: 'Boolean', default: 'true', description: 'Hide or unhide the text label.' },
    { name: 'checkboxLabel', type: 'String', required: true, default: '', description: 'Text label next to the checkbox.' },
    { name: 'infoText', type: 'String', default: 'null', description: 'For instructional UI copy pertaining to the checkbox option' },
    { name: 'disabled', type: 'Boolean', default: 'false', description: 'Disables interaction with the component.' }
  ]
}
