# Input

This is a customizable input component

## Examples

<Doc-Input/>

## Code Example
```html
<ao-input
  :label="'Label'"
  :placeholder="'placeholder'"
  :showLabel="true"
  :addOn="'mL'"
/>
```

## Props

| Name         | Type     | Default | Description                                                           |
|:-------------|:---------|:---------|:----------------------------------------------------------------------|
| type | String | text | This prop defines the input's type. Types that are included are: text, number, email, password, date, and search. |
| value | [String, Number] | null | This prop defines the value of the input. |
| label | String | - | This prop defines the input label which is required. |
| showLabel | Boolean | true | This prop defines if the label should be shown or not. |
| name | String | null | This prop defines the html name property and has no functional purpose on its own. |
| placeholder | String | null | This prop defines the placeholder inside of the input. |
| iconHtml | String | null | This prop defines the icon's html. |
| iconClass | String | null | This prop defines the icon's class. |
| addOn | String | null | This prop renders a string that appears after the input. |
| disabled | Boolean | false | This prop defines if the input is disabled or not. |
| step | Number | 1 | If the input's type is a number this prop defines the amount of changes per click. |
| invalid | Boolean | false | This prop defines if the input is invalid or not. |
