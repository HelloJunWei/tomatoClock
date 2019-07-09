import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes/routes'
import store from './store'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
Vue.use(Vuetify)
Vue.use(VueRouter)
export const router = new VueRouter({
  routes
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
