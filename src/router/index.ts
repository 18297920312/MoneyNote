import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from "@/views/Money.vue"
import labels from "@/views/Labels.vue"
import Statistics from "@/views/Statistics.vue"
import NotFound from "@/views/NotFound.vue"
Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    component: Money,
    redirect: "Money"
  },
  {
    path: '/Money',   // 访问路径
    component: Money  // 访问后要显示的内容
  },
  {
    path: '/Labels',
    component: labels
  },
  {
    path: '/Statistics',
    component: Statistics
  },
  {
    path: '*',
    component: NotFound
  }
];
const router = new VueRouter({
  routes
})

export default router
