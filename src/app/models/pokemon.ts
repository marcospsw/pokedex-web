

export interface UniquePokemon {
  name: string;
  sprite: string;
}

export interface Pokemons {
  next_url: string;
  completePokemons: Pokemon[];
}

export interface Pokemon {
  id: number;
  name: string;
  sprite: string;
  url: string;
  types: PokemonTypes[];
}

export interface PokemonTypes {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}
