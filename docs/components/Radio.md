# Radio

This is a customizable radio component.

## Examples

<Doc-Radio/>

## Code Example
```html
<ao-radio
  v-for="radio in radios"
  :key="radio.value"
  :val="radio.value"
  :name="radio.name"
  :label="radio.name"
  v-model="selectedRadio"
/>
```

```js
data() {
  return {
    radios: [
      { name: 'Tandy', value: 'Tandy' },
      { name: 'Carol', value: 'Carol' },
      { name: 'Gail', value: 'Gail' },
      { name: 'Erica', value: 'Erica' },
      { name: 'Todd', value: 'Todd' }
    ],
    selectedRadio: 'Tandy'
  }
}
```

## Props

| Name         | Type     | Default | Description                                                           |
|:-------------|:---------|:---------|:----------------------------------------------------------------------|
| val | [String, Number], required | null | This prop defines the actual value of a radio button. |
| disabled | Boolean | false | This prop defines if the modal will ve disabled. |
| label | Boolean | false | This prop defines the label of the radio button. |


