# File Upload

This is a customizable file upload component.

## Examples

<Doc-FileUpload/>


## Code Example
```html
<ao-file-upload
  :label="'Upload File'"
  :name="'File'"
/>
```

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| label       | String, required | -     | Displays a text label above the button to describe the action |
| name        | String, required | -     | Specifies the name of the &lt;label&gt; element |
| showLabel   | Boolean          | true  | Hide or unhide the text label |
| disabled    | Boolean          | false | Disables interaction with the component |
| invalid     | Boolean          | false | Adds a class to display a red border around the component to indicate an invalid entry |
