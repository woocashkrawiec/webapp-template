import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from '@/pages/FirstPage.vue'
import SecondPage from '@/pages/SecondPage.vue'


Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'firstPage',
      component: FirstPage,
    },
    {
      path: '/second',
      name: 'secondPage',
      component: SecondPage,
    }
  ]
});

export default router;
