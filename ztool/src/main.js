// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from '@/router'
import { LoadingPlugin } from 'vux'
import { sync } from 'vuex-router-sync'
import store from './store'

Vue.use(LoadingPlugin)

FastClick.attach(document.body)

sync(store, router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
