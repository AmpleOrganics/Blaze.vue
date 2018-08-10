# Text Area

This is a customizable textarea component

## Examples

<Doc-TextArea/>


## Code Example
```html
<ao-text-area
  label="'Text Area'"
  placeholder="'Ever since I was a kid, I've had a fear of being scared.'"
  rows="3"
  minLength="10">
</ao-text-area>
```

## Props

| Name         | Type     | Default | Description                                                           |
|:-------------|:---------|:---------|:----------------------------------------------------------------------|
| value |    String |    null |    This prop defines the text area value. |
| label |    String, required |    null |  This prop defines the label of the text area. |
| name |    String |    null |    This prop defines the text area’s html name. |
| placeholder |    String |    null |    This prop defines the placeholder within the text area. |
| maxLength |    Number |    100000 |    This prop defines the max length of characters within a text area. |
| minLength |    Number |    0 |    This prop defines the minimum length of characters within a text area. |
| disabled |    Boolean |    false |    This prop defines if the text area should be disabled or not. |
| rows |    Number |    5 |    This prop defines the number of rows the text area has. |
| invalid |    Boolean |    false |    This prop defines if the text area is invalid. |
| showLabel |    Boolean |    true |    This prop defines if the label for the text area should be shown or not. |