import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SerialPage from '../views/SerialPage.vue'
import Registration from '../views/Registration.vue'
import AddSerialPage from '../views/AddSerialPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: "404",
    component: Home
  },

  {
    path: '/Home',
    name: 'Home',
    component: Home,
  },

  {
    path: '/Login',
    name: 'Login',
    component: Login
  },

  {
    path: '/Serials',
    name: 'Serials',
    component: SerialPage
  },

  {
    path: '/Registration',
    name: 'Registration',
    component: Registration
  },

  {
    path: '/AddSerial',
    name: 'AddSerial',
    component: AddSerialPage
  }

]

const router = new VueRouter({
  routes: routes,
})


export default router
