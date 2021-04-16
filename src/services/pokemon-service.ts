import { Pokemon } from '@/domains/pokemon';
import { random } from 'lodash';

interface PokemonListItemApi {
  name: string;
  url: string;
}

export class PokemonService {
  public async fetchPokemonList(): Promise<string[]> {
    const randmonlyCall = random(1, 932);
    const api: string = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${randmonlyCall}`;

    try {
      const res = await fetch(api);
      const data = await res.json();

      const pokemonListApi: PokemonListItemApi[] = data.results as PokemonListItemApi[];

      const pokemonNames: string[] = pokemonListApi.map(
        (pokemonListItemApi: PokemonListItemApi) => {
          return pokemonListItemApi.name;
        }
      );

      return pokemonNames;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async fetchPokemonInfoByName(name: string): Promise<Pokemon> {
    const pokemonInfo: Pokemon = {
      name: '',
      types: [],
      hp: '',
      spriteUrl: '',
    };

    const api: string = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    try {
      const res = await fetch(api);
      const data = await res.json();
      const types = data.types;

      pokemonInfo.name = name;
      types.forEach((els: any) => {
        pokemonInfo.types.push(els.type.name);
      });
      pokemonInfo.hp = data.stats[0].base_stat;
      pokemonInfo.spriteUrl = data.sprites.front_default;

      return pokemonInfo;
    } catch (error) {
      throw new Error(error);
    }
  }
}
