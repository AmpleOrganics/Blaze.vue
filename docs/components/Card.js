export default {
  header: 'Card',
  description: 'The Card component allows you to group and organize related content - text, actions, even other Blaze components - into one seamless display.',
  snippet:
        `<ao-card
  :title="'Title goes here'">
  <p>She sells seashells by the sea shore</p>
  <ao-button primary>
    Action 1
  </ao-button>
  <ao-button>
    Action 2
  </ao-button>
</ao-card>`,
  apiRows: [
    { name: 'title', type: 'String, required', default: 'null', description: 'Displays title text within the card header.' }
  ]
}
