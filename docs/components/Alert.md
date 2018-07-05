# Alert

This is a customizable alert component.

## Examples

<Doc-Alert/>

## Code Example
```html
<ao-alert
  v-if="showAlert"
  :show-alert="true"
  :icon-class="'glyphicon glyphicon-ok'">
  Alert text goes here
</ao-alert>
```

## Props

| Name         | Type     | Default | Description                                                           |
|:-------------|:---------|:---------|:----------------------------------------------------------------------|
| showAlert | Boolean | false | Shows or hides the alert. |
| iconClass | String | null | Displays icon components ie. glyphicons. |
| destructive | Boolean | false | Adds a class to indicate a destructive action ie. deletion, permanent irreversible action etc. |
| caution | Boolean | false | Adds a class to indicate a cautious action ie. reversible powerful change etc. |
