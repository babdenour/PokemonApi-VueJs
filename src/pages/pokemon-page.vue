<script lang="ts">
import PokemonCardComponent from '@/components/pokemon-card.vue';
import { Pokemon } from '@/domains/pokemon';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    'pokemon-card': PokemonCardComponent,
  },
})
export default class PokemonPage extends Vue {
  public pokemonInfo: Pokemon = {
    name: '',
    types: [],
    hp: '',
    spriteUrl: '',
  };

  get pokemonName(): string {
    return this.$route.params.name;
  }

  public async mounted() {
    this.pokemonInfo = await this.$pokemonService.fetchPokemonInfoByName(
      this.pokemonName
    );
  }
}
</script>


<template>
  <div class="pokemon-page">
    <pokemon-card
      :name="pokemonInfo.name"
      :types="pokemonInfo.types"
      :hp="pokemonInfo.hp"
      :sprite-url="pokemonInfo.spriteUrl"
    />
  </div>
</template>

<style lang="scss" scoped>
.pokemon-page {
  background-color: rgba(127, 145, 145, 0.522);
}
</style>
