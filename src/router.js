import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('@/views/Home.vue')
const Edit = () => import('@/views/Edit.vue')
const Add = () => import('@/views/Add.vue')

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/UserEdit/:userId',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/addUser',
      name: 'Add',
      component: Add
    }
  ]
})
