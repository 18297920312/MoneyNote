import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from "@/components/Nav.vue"
import layout from "@/components/Layout.vue"
import Icons from "@/components/Icon.vue"
import tagListModel from "@/models/tagListModel";
Vue.config.productionTip = false;
Vue.component("Nav",Nav)
Vue.component('layout',layout)
Vue.component('Icons',Icons)

// window.tagList = tagListModel.fetch() // 全局的对象


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount( '#app')

if(document.documentElement.clientWidth >= 500){
  window.alert('请使用手机扫描二维码访问')
  const img = document.createElement('img')
  img.src = '/qrcode.png'
  img.style.position = 'fixed'
  img.style.left = '50%'
  img.style.top = '50%'
  img.style.transform = 'translate(-50%,-50%)'
  document.body.appendChild(img)
}









