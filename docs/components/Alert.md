# Alert

This is a customizable alert component

## Examples

<Doc-Alert/>

## Code Example
```html
<ao-alert
  v-if="showAlert"
  :showAlert="true"
  <span slot="alert-icon"> Icon </span>
  <span> New </span>
</ao-alert>
```

## Props

| Name         | Type     | Default | Description                                                           |
|:-------------|:---------|:---------|:----------------------------------------------------------------------|
| showAlert | Boolean | false | This prop defines the alert to be shown or not. |
| iconClass | String | null | This prop defines the alert icon class. |
| destructive | Boolean | false | This prop defines the alert to be a destructive alert. |
| caution | Boolean | false | This prop defines the alert to be a cautious alert. |
