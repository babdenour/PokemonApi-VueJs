import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import LandingPage from '../pages/landing-page.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
