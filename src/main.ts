import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from "@/components/Nav.vue"
import layout from "@/components/Layout.vue"
import Icons from "@/components/Icon.vue"
Vue.config.productionTip = false;
Vue.component("Nav",Nav)
Vue.component('layout',layout)
Vue.component('Icons',Icons)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
