# Checkbox

This is a customizable checkbox component

## Examples

<Doc-Checkbox/>

## Code Example
```html
<ao-checkbox
  :checkbox-label="'Label'"
  :show-label="true"
/>
```

## Props

| Name         | Type     | Default | Description                                                           |
|:-------------|:---------|:---------|:----------------------------------------------------------------------|
| value | [Array, Boolean, Number, Object] | null | This prop defines if the checkbox is activated or not. |
| checkboxValue | [String, Number, Boolean, Object] | null | This prop defines the value of the checkbox. |
| showLabel | Boolean | true | This prop defines if the label should be shown or not. |
| checkboxLabel | String | - | This prop defines the checkbox label and is required. |
| disabled | Boolean | false | This prop defines if the checkbox is disabled or not. |
