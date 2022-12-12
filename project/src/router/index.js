import Vue from 'vue'
import VueRouter from 'vue-router'
const LoginView = () => import("../views/LoginView.vue");
const MapView = () => import("../views/MapView.vue");



Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
    meta: { title: "Login" },
  },
  {
    path: "/map",
    name: "map",
    component: MapView,
    meta: { title: "Map" },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
