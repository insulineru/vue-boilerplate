import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import NotFound from './views/NotFound.vue';
import store from './store/';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      name: 'notFount',
      component: NotFound
    }
  ],
  beforeEach(to, _, next) {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const user = store.state.user;

    if (requiresAuth && !user) {
      next('/');
    } else {
      if (to.path === '/' && user) {
        next('/cabinet');
      } else {
        next();
      }
    }
  }
});
