# Input

This is a customizable input component.

## Examples

<Doc-Input/>

## Code Example
```html
<ao-input
  type="text"
  :label="'Enter your name'"
  :placeholder="'e.g. Tandy Miller'"
  :show-label="true"
  :icon-html="'&#10004;'"
/>
```

```html
<ao-input
  type="number"
  :label="'Enter your age'"
  :step="1"
  :add-on="'years'"
/>
```

```html
<ao-input
  type="date"
  :label="'Enter your date of birth'"
/>
```

## Props

| Name         | Type     | Default | Description                                                           |
|:-------------|:---------|:---------|:----------------------------------------------------------------------|
| type | String | text | Defines the input type. <br /><strong>Accepted types: text, number, email, password, date, search.</strong> |
| value | [String, Number] | null | Defines the value of the input. |
| label | String, required | - | Displays the text label above the input. |
| showLabel | Boolean | true | Hide or unhide the text label. |
| name | String | null | Defines the html name property and has no functional purpose on its own. |
| placeholder | String | null | Defines the placeholder text inside of the input. |
| iconHtml | String | null | Accepts html elements or html codes for icons. |
| iconClass | String | null | Accepts icon class components e.g. glyphicons. |
| addOn | String | null | Appends text to the input. |
| step | Number | 1 | Valid for input type 'number'. Defines the amount of changes per click. |
| disabled | Boolean | false | Disables interaction with the component. |
| invalid | Boolean | false | Adds a class to display a red border around the component to indicate an invalid entry. |
