import Vue from 'vue'
import VueRouter from 'vue-router'
const LoginView = () => import("../views/LoginView.vue");
const MapView = () => import("../views/MapView.vue");



Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/map",
    name: "Map",
    component: MapView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
