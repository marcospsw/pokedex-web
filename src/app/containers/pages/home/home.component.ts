import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon, Pokemons, UniquePokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public pokemons: Pokemon[] = [] ;
  public pokemon: string = '';
  public pokemonSvg: string = '';
  public nextUrl: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0%26limit=50';
  public colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
  };

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons(this.nextUrl);
  }

  getPokemons(url: string) {
    this.pokemonService.getPokemons(url).subscribe((pokemons: Pokemons) => {
      const nextLoadPokemons = this.pokemons.concat(pokemons.completePokemons);
      this.pokemons = nextLoadPokemons;
      this.nextUrl = pokemons.next_url.replace('&', '%26');
    });
  }

  getPokemonById(id: number){
    this.pokemonService.getPokemonById(id).subscribe((pokemon: UniquePokemon) => {
      this.pokemon = pokemon.name;
      this.pokemonSvg = pokemon.sprite;
    });
  }
}
