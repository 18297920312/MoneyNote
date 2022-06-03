import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Money from "@/views/money.vue"
import labels from "@/views/labels.vue"
import Statistics from "@/views/statistics.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: './',
    component: Money,
    redirect: "Money"
  },
  {
    path: '/money',   // 访问路径
    component: Money  // 访问后要显示的内容
  },
  {
    path: '/labels',
    component: labels
  },
  {
    path: '/statistics',
    component: Statistics
  }
];
// const routes: Array<RouteConfig> = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

const router = new VueRouter({
  routes
})

export default router
