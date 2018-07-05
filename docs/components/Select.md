# Select

This is a customizable select component.

## Examples

<Doc-Select/>


## Code Example
```html
<ao-select
  v-model="selected"
  :label="'Label'"
  :placeholder="'Placeholder'">
  <option
    v-for="option in options"
    :value="option.value">
    {{option.name}}
  </option>
</ao-select>
```
```js
data () {
  return{
    selected: null,
    options: [
      { value: 'Charmander', name: 'Charmander' },
      { value: 'Pikachu', name: 'Pikachu' },
      { value: 'Squirtle', name: 'Squirtle' },
      { value: 'Bulbasaur', name: 'Bulbasaur' }
    ]
  }
}
```

## Props

| Name         | Type     | Default | Description                                                           |
|:-------------|:---------|:---------|:----------------------------------------------------------------------|
| value     | String | null | This prop defines the selected value                     |
| label | String, required | null | This prop defines the label of the select. |
| showLabel | Boolean | true | This prop defines if the select label will be shown or not.                 |
| invalid      | Boolean | false | This prop defines the select to be invalid.                              |
| disabled    | Boolean | false | This prop disables the select.                                                                                |
| placeholder       | String | null | This prop defines the placeholder of the select.                                                                      |
