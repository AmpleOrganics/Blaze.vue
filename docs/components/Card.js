export default {
  header: 'Card',
  description: 'The Card component allows you to group and organize related content - text, actions, even other Blaze components - into one seamless display.',
  snippet:
`<ao-card title="Seashell Day">
  <ao-button
    slot="card-header-action"
    subtle
    small
  >
    <i class="material-icons">more_horiz</i>
  </ao-button>
  <ao-callout
    slot="card-callout"
    success
  >
    Great day for seashells
  </ao-callout>
  <div slot="card-header-toolbar">
    <ao-checkbox
      :checkbox-value="true"
      checkbox-label="filter"
    />
  </div>
  <p>She sells seashells by the sea shore</p>
  <template slot="cardFooter">
    <ao-button primary>
      Action 1
    </ao-button>
    <ao-button>
      Action 2
    </ao-button>
  </template>
</ao-card>`,
  apiRows: [
    { name: 'title', type: 'String, required', default: 'null', description: 'Displays title text within the card header.' }
  ]
}
