import Vue from 'vue'
import App from './App.vue'
import {router} from '../routes/index.js'

Vue.config.productionTip = false
require('@/components/main.scss')

new Vue({
  render: h => h(App),
  router : router
}).$mount('#app')

