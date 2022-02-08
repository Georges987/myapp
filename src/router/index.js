import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/composantes/profil.vue'
import Friends from '../views/composantes/friends.vue'
import Message from '../views/composantes/message.vue'
import Dashboard from '../views/composantes/dashboard.vue'
import Settings from '../views/composantes/settings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/my-profile',
    name: 'My Profile',
    component: Profile
  },
  {
    path: '/friends',
    name: 'Friends',
    component: Friends
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
