import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import 'bootstrap/dist/css/bootstrap.css'
// import NProgress from 'vue-nprogress'

Vue.config.productionTip = false
// Vue.use(NProgress)

// const nprogress = new NProgress({ parent: '.nprogress-container' })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
