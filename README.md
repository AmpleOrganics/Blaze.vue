# Blaze.vue
Ample Organics Component Library

## Installation Instructions

Install the package using npm/yarn

``` sh
  yarn add blaze-vue
```
``` sh
  npm i blaze-vue
```

## Using in your application
Currently the only tested measure is using vue-cli/webpack based project

In your main.js/index.js add the following lines

```javascript
import Blaze from 'blaze-vue'
import 'blaze-vue/dist/blaze-vue.css'

Vue.use(Blaze)
```