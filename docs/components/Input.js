export default {
  header: 'Input',
  description: 'This is a customizable input component.',
  snippet:
        `<ao-input
  type="text"
  :label="'Enter your name'"
  :placeholder="'e.g. Tandy Miller'"
  :show-label="true"
  :icon-html="'&#10004;'"
/>

<ao-input
  type="number"
  :label="'Enter your age'"
  :step="1"
  :add-on="'years'"
/>

<ao-input
  type="date"
  :label="'Enter your date of birth'"
/>`,
  apiRows: [
    { name: 'type', type: 'String', default: 'text', description: 'Defines the input type. <br /><strong>Accepted types: text, number, email, password, date, search.</strong>' },
    { name: 'value', type: '[String, Number]', default: 'null', description: 'Defines the value of the input.' },
    { name: 'label', type: 'String, required', default: '-', description: 'Displays the text label above the input.' },
    { name: 'showLabel', type: 'Boolean', default: 'true', description: 'Hide or unhide the text label.' },
    { name: 'name', type: 'String', default: 'null', description: 'Defines the html name property and has no functional purpose on its own.' },
    { name: 'placeholder', type: 'String', default: 'null', description: 'Defines the placeholder text inside of the input.' },
    { name: 'iconHtml', type: 'String', default: 'null', description: 'Accepts html elements or html codes for icons.' },
    { name: 'iconClass', type: 'String', default: 'null', description: 'Accepts icon class components e.g. glyphicons.' },
    { name: 'addOn', type: 'String', default: 'null', description: 'Appends text to the input.' },
    { name: 'step', type: 'Number', default: '1', description: 'Valid for input type "number". Defines the amount of changes per click.' },
    { name: 'disabled', type: 'Boolean', default: 'false', description: 'Disables interaction with the component.' },
    { name: 'disableAll', type: 'Boolean', default: 'false', description: 'Disables interaction with the component, greys out label and instruction text.' },
    { name: 'instructionText', type: 'String', default: 'null', description: 'Instruction text to show below the input.' },
    { name: 'invalid', type: 'Boolean', default: 'false', description: 'Adds a class to display a red border around the component to indicate an invalid entry.' },
    { name: 'invalidMessage', type: 'String', default: 'null', description: 'Adds invalid messages below input' },
    { name: 'size', type: 'String (null or small)', default: 'null', description: 'Pass in \'small\' to decrease the size of the input field.' },
    { name: 'min', type: '[String, Number]', default: 'null', description: 'Min date or min number' }
  ]
}
