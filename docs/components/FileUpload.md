# File Upload

This is a customizable file upload component

## Examples

<Doc-FileUpload/>


## Code Example
```html
<ao-file-upload
  label="'Upload File'"
  name="'File'"
/>
```

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| label       | String, required | null  | Displays a text label above the button to describe the action |
| name        | String, required | null  | Specifies the name of the &lt;label&gt; element |
| showLabel   | Boolean          | True  | Hide or unhide the text label |
| disabled    | Boolean          | False | Disables interaction with the component |
| invalid     | Boolean          | False | Adds a class to display a red border around the component to indicate a file type that does not meet your desired criteria |
