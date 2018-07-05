# Section Header

This is a customizable section header component containing a title, and optional subtitle and icon/html props.

## Examples

<Doc-SectionHeader/>

## Code Example
```html
<ao-section-header
  :icon-class="'custom-glyph-clients'"
  :title="'This is the section header title'"
  :subtitle="'The subtitle goes here'"
/>
```

## Props

| Name         | Type     | Default | Description                                                           |
|:-------------|:---------|:---------|:----------------------------------------------------------------------|
| title | String, required | null | Defines the title of the section header. |
| subtitle | String | null | Defines the subtitle of the section header. |
| iconHtml | String | null | Accepts html elements or html codes for icons. |
| iconClass | String | null | Accepts icon class components e.g. glyphicons. |

