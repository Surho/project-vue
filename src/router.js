import Vue from 'vue'
import Router from 'vue-router'
import UserList from './views/UserList.vue'
import UserDetail from './views/UserDetail.vue'
import AddUser from './views/AddUser.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/userDetail/:userId',
      name: 'UserDetail',
      component: UserDetail
    },
    {
      path: '/addUser',
      name: 'AddUser',
      component: AddUser
    }
  ]
})
