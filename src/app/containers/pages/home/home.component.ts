import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon, Pokemons, UniquePokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public pokemons: Pokemon[] = [] ;
  public pokemon: string = '';
  public pokemonSvg: string = '';
  public nextUrl: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0%26limit=20';
  public isLoading: boolean = false;
  public types: Array<string> = [
    'fire',
    'grass',
    'water',
    'bug',
    'electric',
    'psychic',
    'poison',
    'ground',
    'fairy',
    'rock',
    'ghost',
    'normal',
    'fighting',
    'dragon',
    'ice',
    'dark',
    'flying',
    'steel',
  ]
  public isFiltered: boolean = false;
  public timer: NodeJS.Timeout = setTimeout(() => {}, 0);
  public filterName: string = '';
  public filterId: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.getPokemons(this.nextUrl);
  }

  getPokemons(url: string) {
    this.isLoading = true;
    this.pokemonService.getPokemons(url).subscribe( async (pokemons: Pokemons) => {
      const nextLoadPokemons = this.pokemons.concat(pokemons.completePokemons);
      this.pokemons = nextLoadPokemons;
      pokemons.next_url ? this.nextUrl = pokemons.next_url.replace('&', '%26') : this.nextUrl = pokemons.next_url;
      this.isLoading = false;
    });
  }

  getPokemonsByType(type: string){
    this.isFiltered = true;
    this.isLoading = true;
    this.pokemonService.getPokemonsByType(type).subscribe(async (pokemon) => {
      this.pokemons = pokemon;
      this.isLoading = false;
    });
  }

  getReset(){
    this.filterName = '';
    this.filterId = '';
    this.nextUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0%26limit=20';
    this.pokemons = [];
    this.isFiltered = false;
    this.getPokemons(this.nextUrl);
  }

  getPokemonsByFilter(event: any){
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if(event.target.value && event.target.value !== ' '){
        this.isFiltered = true;
        this.isLoading = true;
        this.pokemonService.getPokemonsByFilter(event.target.value).subscribe((pokemon) => {
          this.pokemons = pokemon;
          this.isLoading = false;
        });
      }
    }, 500);
  }

  getPokemonById(id: number){
    this.pokemonService.getPokemonById(id).subscribe((pokemon: UniquePokemon) => {
      this.pokemon = pokemon.name;
      this.pokemonSvg = pokemon.sprite;
    });
  }
}



  //CASO USE ALGUM TIPO DE INTERAÇÃO DE COR COM OS TIPOS

  // getBlankTypes(){
  //   this.pokemons.map(pokemon => {
  //     if(pokemon.types.length === 1) {
  //       pokemon.types[1] = {
  //         slot: 0,
  //         type: {
  //           name: 'blank',
  //           url: '',
  //         }
  //       }
  //     }
  //   })
  // }
