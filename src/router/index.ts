import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import LandingPage from '../pages/landing-page.vue';
import PokemonPage from '../pages/pokemon-page.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/pokemon/:name',
    name: 'PokemonPage',
    component: PokemonPage,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
