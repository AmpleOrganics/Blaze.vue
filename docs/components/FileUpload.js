export default {
  header: 'File Upload',
  description: 'This is a customizable file upload component.',
  snippet:
    `<ao-file-upload
  :label="'Upload File'"
  :name="'File'"
/>`,
  apiRows: [
    { name: 'label', type: 'String, required', default: '-', description: 'Displays a text label above the button to describe the action.' },
    { name: 'name', type: 'String, required', default: '-', description: 'Specifies the name of the &lt;label&gt; element.' },
    { name: 'showLabel', type: 'Boolean', default: 'true', description: 'Hide or unhide the text label.' },
    { name: 'disabled', type: 'Boolean', default: 'false', description: 'Disables interaction with the component.' },
    { name: 'disableAll', type: 'Boolean', default: 'false', description: 'Disables interaction with the component, greys out label.' },
    { name: 'instructionText', type: 'String', default: 'null', description: 'Instruction text to show below the input.' },
    { name: 'invalid', type: 'Boolean', default: 'false', description: 'Adds a class to display a red border around the component to indicate an invalid entry.' },
    { name: 'invalidMessage', type: 'String', default: 'null', description: 'Adds invalid messages below input' }
  ]
}
