# Header Toolbar

This is a header toolbar component intended for top-level display, containing all app-wide controls.

## Example

<Doc-HeaderToolbar/>

## Code Example

```html
<ao-header-toolbar
  :title="'Ribbitting Technologies'"
  :icon-html="'🐸'"
  fixed>
  <span>🍔</span>
  <span>Logout</span>
</ao-header-toolbar>
```

## Props

| Name         | Type     | Default | Description                                                           |
|:-------------|:---------|:---------|:----------------------------------------------------------------------|
|title        |String, required   | null |Defines the header toolbar title. |
|iconHtml     |String       | null    |Accepts html elements or html codes for icons. |
|iconUrl      |String       | null    |Accepts an image URL. |
|iconClass    |String       | null    |Accepts icon class components e.g. glyphicons. |
|fixed        |Boolean      | false   |Adds a class to fix the header toolbar in position. |
