export default {
  header: 'DatePicker',
  description: 'This is a customizable date picker component.',
  snippet:
  `<ao-date-picker
  v-model="selectedDate"
  :label="label"
  :placeholder="placeholder"
  :show-label="showLabel"
  :icon-class="iconClass"
  :is-icon-clickable="true"
  :icon-html="iconHtml"
  :disabled="disabled"
  :disable-all="disableAll"
  :invalid="invalid"
  :invalid-message="invalidMessage"
  :instruction-text="instructionText"
/>`,
  apiRows: [
    { name: 'value', type: 'String', default: 'null', description: 'Defines the value of the date picker.' },
    { name: 'label', type: 'String, required', default: '-', description: 'Displays the text label above the date picker.' },
    { name: 'showLabel', type: 'Boolean', default: 'true', description: 'Hide or unhide the text label.' },
    { name: 'name', type: 'String', default: 'null', description: 'Defines the html name property and has no functional purpose on its own.' },
    { name: 'placeholder', type: 'String', default: 'null', description: 'Defines the placeholder text inside of the date picker.' },
    { name: 'disabled', type: 'Boolean', default: 'false', description: 'Disables interaction with the component.' },
    { name: 'disableAll', type: 'Boolean', default: 'false', description: 'Disables interaction with the component, greys out label and instruction text.' },
    { name: 'instructionText', type: 'String', default: 'null', description: 'Instruction text to show below the date picker.' },
    { name: 'invalid', type: 'Boolean', default: 'false', description: 'Adds a class to display a red border around the component to indicate an invalid entry.' },
    { name: 'invalidMessage', type: 'String', default: 'null', description: 'Adds invalid messages below date picker' },
    { name: 'size', type: 'String (null or small)', default: 'null', description: 'Pass in \'small\' to decrease the size of the date picker field.' }
  ]
}
