import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/styles/base-style.scss";
import "./assets/styles/style.scss";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBP9zWYG0_s7O9nQhh3oyqL9lIJX6prFtU",
    libraries: "places",
  },
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
