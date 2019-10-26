import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/UserEdit/:userId',
      name: 'Edit',
      component: () => import('@/views/Edit.vue')
    },
    {
      path: '/addUser',
      name: 'Add',
      component: () => import('@/views/Add.vue')
    }
  ]
});
