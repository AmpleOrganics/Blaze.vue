# Button

This is a customizable button component

## Examples

<Doc-Button/>


## Code Example
```html
<ao-button
  primary
  large>
  I'm a button
</ao-button>
```

## Props

| Name        | Type    | Default | Description |
|:------------|:--------|:------|:--------------|
| primary     | Boolean | false | Adds a class to indicate a primary action ie. submission, confirmation etc.                    |
| destructive | Boolean | false | Adds a class to indicate a destructive action ie. deletion, permanent irreversible action etc. |
| caution     | Boolean | false | Adds a class to indicate a cautious action ie. reversible powerful change etc.                 |
| subtle      | Boolean | false | Displays a more subtle version of the default button                                           |
| small       | Boolean | false | Displays a small sized button                                                                  |
| large       | Boolean | false | Displays a large sized button                                                                  |
| jumbo       | Boolean | false | Displays a jumbo sized button                                                                  |
| naked       | Boolean | false | Displays a style that lacks the visual properties of a button                                  |
| disabled    | Boolean | false | Disables the button                                                                            |
