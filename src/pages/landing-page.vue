<script lang="ts">
import SearchBar from '@/components/search-bar.vue';
import { Component, Vue } from 'vue-property-decorator';
import PokemonListComponent from '../components/pokemon-list.vue';

@Component({
  components: {
    'pokemon-list': PokemonListComponent,
    'search-bar': SearchBar,
  },
})
class LandingPage extends Vue {
  public pokemonNames: string[] = [];

  public async mounted() {
    this.pokemonNames = await this.$pokemonService.fetchPokemonList();
  }

  public goToPokemonPage(pokemonName: string) {
    this.$router.push({ name: 'PokemonPage', params: { name: pokemonName } });
  }
}

export default LandingPage;
</script>

<template>
  <div class="landing-page">
    <div class="landing-page__hero-section">
      <h1>🔥 Amazing Pokemon Dashboard</h1>
      <h3>Scrool down some POKET MONSTER are waiting you.</h3>
    </div>
    <div class="landing-page__search-bar">
      <search-bar @search-performed="goToPokemonPage" />
    </div>
    <div class="landing-page__pokemon-list">
      <pokemon-list
        :pokemon-names="pokemonNames"
        @pokemon-selected="goToPokemonPage"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.landing-page {
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: center;
  flex: 1;

  &__hero-section {
    height: 100vh;
    width: 100vw;
    background-image: url('../../public/assets/hero-pokemon.jpg');
  }
}
</style>
