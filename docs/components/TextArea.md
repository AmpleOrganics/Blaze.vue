# Text Area

This is a customizable textarea component

## Examples

<Doc-TextArea/>


## Code Example
```html
<ao-text-area
  label="'Text Area'"
  placeholder="'e.g. Ever since I was a kid, I've had a fear of being scared.'"
  rows="3"
  minLength="10" />
```

## Props

| Name         | Type     | Default | Description                                                           |
|:-------------|:---------|:---------|:----------------------------------------------------------------------|
| value |    String |    null |    Defines the value of the input. |
| name |    String |    null |    Defines the text area html name. |
| label |    String, required |    null |  Defines the text label above the text area. |
| placeholder |    String |    null |    Defines the placeholder within the text area. |
| showLabel |    Boolean |    true |    Hide or unhide the text label. |
| maxLength |    Number |    100000 |    Defines the max length of characters within the text area. |
| minLength |    Number |    0 |    Defines the minimum length of characters within the text area. |
| rows |    Number |    5 | Defines the number of rows of the text area. |
| disabled |    Boolean |    false |    Disables interaction with the component. |
| invalid |    Boolean |    false |    Adds a class to display a red border around the component to indicate an invalid entry. |
