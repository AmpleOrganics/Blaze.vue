export default {
  header: 'Text Style',
  description: 'This is a simple customizable text component to compliment other components.',
  snippet:
        `<ao-text-style
  error
  small>
  This is some sample text
</ao-text-style>`,
  apiRows: [
    { name: 'error', type: 'Boolean', default: 'false', description: 'Adds a class to change the font colour to red to indicate an error.' },
    { name: 'small', type: 'Boolean', default: 'false', description: 'Converts font-size to 0.75rem, given a base of font-size 16px.' }
  ]
}
