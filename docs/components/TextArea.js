export default {
  header: 'Text Area',
  description: 'This is a customizable textarea component.',
  snippet:
        `<ao-text-area
  :label="'Text Area'"
  :placeholder="'e.g. Ever since I was a kid, I've had a fear of being scared.'"
  :rows="3"
  :min-length="10"
/>`,
  apiRows: [
    { name: 'value', type: 'String', default: 'null', description: 'Defines the value of the input.' },
    { name: 'name', type: 'String', default: 'null', description: 'Defines the text area html name.' },
    { name: 'label', type: 'String, required', default: 'null', description: 'Defines the text label above the text area.' },
    { name: 'placeholder', type: 'String', default: 'null', description: 'Defines the placeholder within the text area.' },
    { name: 'showLabel', type: 'Boolean', default: 'true', description: 'Hide or unhide the text label.' },
    { name: 'maxLength', type: 'Number', default: '100000', description: 'Defines the max length of characters within the text area.' },
    { name: 'minLength', type: 'Number', default: '0', description: 'Defines the minimum length of characters within the text area.' },
    { name: 'rows', type: 'Number', default: '5', description: 'Defines the number of rows of the text area.' },
    { name: 'disabled', type: 'Boolean', default: 'false', description: 'Disables interaction with the component.' },
    { name: 'disableAll', type: 'Boolean', default: 'false', description: 'Disables interaction with the component, greys out label and instruction text.' },
    { name: 'instructionText', type: 'String', default: 'null', description: 'Instruction text to show below the input.' },
    { name: 'invalid', type: 'Boolean', default: 'false', description: 'Adds a class to display a red border around the component to indicate an invalid entry.' },
    { name: 'invalidMessage', type: 'String', default: 'false', description: 'Adds invalid messages below input' }
  ]
}
