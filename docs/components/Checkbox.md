# Checkbox

This is a customizable checkbox component

## Examples

<Doc-Checkbox/>

## Code Example
```html
<ao-checkbox
  :checkbox-label="'Label'"
  :show-label="true"
  :checkbox-value="true"
/>
```

## Props

| Name         | Type     | Default | Description                                                           |
|:-------------|:---------|:---------|:----------------------------------------------------------------------|
| value | [Array, Boolean, Number, Object] | null | Defines the value associated with the input (this is also the value that is sent on submit). |
| checkboxValue | [String, Number, Boolean, Object], required | true | Defines the value associated with the input. |
| showLabel | Boolean | true | Hide or unhide the text label. |
| checkboxLabel | String, required | - | Text label next to the checkbox. |
| disabled | Boolean | false | Disables interaction with the component. |
