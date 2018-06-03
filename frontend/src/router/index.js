import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage,
      meta: {requiresAuth: true}
    }
  ]
});

export default router;
