# Card

The Card component allows you to group and organize related content - text, actions, even other Blaze components - into one seamless display.

## Examples

<Doc-Card/>


## Code Example
```html
<ao-card
  :title="'Title goes here'">
  <p>She sells seashells by the sea shore</p>
  <ao-button
    primary>
    Action 1
  </ao-button>
  <ao-button>
    Action 2
  </ao-button>
</ao-card>
```

## Props

| Name         | Type             | Default       | Attribute                            |
|:-------------|:-----------------|:--------------|:-------------------------------------|
| title        | String, required | null          | Displays title text within the card header. |
