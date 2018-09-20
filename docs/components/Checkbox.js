export default {
  header: 'Checkbox',
  description: 'This is a customizable checkbox component.',
  snippet:
        `<ao-checkbox
  checkbox-label="Label"
  :show-label="true"
  :checkbox-value="true"
/>`,
  apiRows: [
    { name: 'value', type: '[Array, Boolean, Number, Object]', default: 'null', description: 'Defines the value associated with the input (this is also the value that is sent on submit).' },
    { name: 'checkboxValue', type: '[String, Number, Boolean, Object], required', default: 'true', description: 'Defines the value associated with the input.' },
    { name: 'showLabel', type: 'Boolean', default: 'true', description: 'Hide or unhide the text label.' },
    { name: 'checkboxLabel', type: 'String, required', default: '-', description: 'Text label next to the checkbox.' },
    { name: 'disabled', type: 'Boolean', default: 'false', description: 'Disables interaction with the component.' }
  ]
}
