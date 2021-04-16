import Vue from 'vue';
import App from './app.vue';
import router from './router';
import { PokemonService } from '../src/services/pokemon-service';

Vue.config.productionTip = false;
Vue.prototype.$pokemonService = new PokemonService();

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
