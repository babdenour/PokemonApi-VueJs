<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
class PokemonCard extends Vue {
  @Prop()
  public name!: string;
  @Prop()
  public types!: string[];
  @Prop()
  public hp!: string;
  @Prop()
  public spriteUrl!: string;
}

export default PokemonCard;
</script>

<template>
  <div id="pokemon-page__card">
    <figure class="pokemon-page__card card--normal">
      <div class="pokemon-page__card__image-container">
        <img
          :src="spriteUrl"
          :alt="name"
          class="pokemon-page__card__image"
        >
      </div>
      <figcaption class="pokemon-page__card__caption">
        <h1 class="pokemon-page__card__name">
          {{ name }}
        </h1>
        <ul>
          <li
            v-for="type in types"
            :key="type.id"
            class="pokemon-page__card__type"
          >
            {{ type }}
          </li>
        </ul>
        <p> HP : {{ hp }}</p>
      </figcaption>
    </figure>
  </div>
</template>


<style lang="scss" scoped>
.pokemon-page__card {
  width: 100%;
  height: 100%;
}

img {
  max-height: 13rem;
  margin: auto;
  display: inline-block;
}

.pokemon-page__card {
  display: inline-block;
  width: 300px;
  padding: 1em;
  border-radius: 15px;
  margin: 10px;
  background: #ddd;
  text-align: left;

  &__caption {
    background-color: rgba(#ffffff, 0.65);
    padding: 1em;
    position: relative;
    border-radius: 0 0 3px 3px;
  }

  &__image-container {
    background-color: rgba(#000000, 0.7);
    text-align: center;
    padding: 1em 1em 0;
    border-radius: 3px 3px 0 0;
  }

  &__type {
    width: fit-content;
    color: #ffffff;
    text-transform: uppercase;
    padding: 0.25em;
    border-radius: 2px;
    background: #bbbbbb;
  }

  &__name {
    text-align: center;
    font-size: 1.5em;
    font-weight: 700;
    letter-spacing: 0.02em;
  }

  box-shadow: 0px 5px 20px -10px #111111;
}
</style>
