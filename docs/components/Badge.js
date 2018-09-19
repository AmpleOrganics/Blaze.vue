export default {
  header: 'Badge',
  description: 'This is a customizable badge component.',
  snippet:
        `<ao-badge
  :text="'new'"
  success
/>`,
  apiRows: [
    { name: 'text', type: 'String', default: 'false', description: 'The text to display within the badge component.' },
    { name: 'success', type: 'Boolean', default: 'null', description: 'Adds a class to display a green badge.' },
    { name: 'info', type: 'Boolean', default: 'false', description: 'Adds a class to display a blue badge.' },
    { name: 'subtle', type: 'Boolean', default: 'false', description: 'Adds a class to display a grey badge.' }
  ]
}
