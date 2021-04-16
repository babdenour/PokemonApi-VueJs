import Vue from 'vue';
import { PokemonService } from './services/pokemon-service';

declare module 'vue/types/vue' {
  interface Vue {
    $pokemonService: PokemonService;
  }
}
