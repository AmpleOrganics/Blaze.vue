import Vue from 'vue'
import Router from 'vue-router'
import Demo from './views/Demo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Demo',
      component: Demo
    }
  ]
})
