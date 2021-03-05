import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from '@/routes/index'
import store from '@/store/index'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(VueResource)

Vue.http.options.root = 'https://vuejs-stock-trader-169c1.firebaseio.com/'

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
