<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import PokemonListItem from './pokemon-list-item.vue';

enum EmittedEvents {
  POKEMON_SELECTED = 'pokemon-selected',
}

@Component({
  components: {
    'pokemon-list-item': PokemonListItem,
  },
})
class PokemonList extends Vue {
  @Prop()
  public pokemonNames!: string[];

  public selectedPokemon(name: string): void {
    this.$emit(EmittedEvents.POKEMON_SELECTED, name);
  }
}
export default PokemonList;
</script>

<template>
  <div class="pokemon-list">
    <pokemon-list-item
      v-for="name in pokemonNames"
      :key="name.id"
      :name="name"
      @click.native="selectedPokemon(name)"
    />
  </div>
</template>

<style lang="scss" scoped>
.pokemon-list {
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: center;
  width: 100%;
}
</style>
