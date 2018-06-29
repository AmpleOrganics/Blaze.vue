import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Blaze from './blaze-plugin'

Vue.use(Blaze)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
