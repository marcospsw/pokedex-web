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
  url?: string;
  types: PokemonTypes[];
}

export interface PokemonTypes {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface SpecificPokemon {
  name: string;
  id: number;
  sprite: string;
  height: number;
  types: Type[];
  stats: Stat[];
  firstEvolution: Pokemon;
  secondEvolution: Pokemon;
  thirdEvolution: Pokemon;
}

export interface Type {
  name: string;
  advantages: Advantage[];
  weaknesses: Weaknes[];
}

export interface Advantage {
  name: string;
  url: string;
}

export interface Weaknes {
  name: string;
  url: string;
}
export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}
