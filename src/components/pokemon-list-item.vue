<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
class PokemonListItem extends Vue {
  @Prop()
  public name!: string;
}

export default PokemonListItem;
</script>

<template>
  <div class="pokemon-list-item">
    <p>
      {{ name }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.pokemon-list-item {
  border: 1px solid black;
}
</style>
