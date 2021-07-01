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
  public isLoading: boolean = false;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons(this.nextUrl);
  }

  getPokemons(url: string) {
    this.isLoading = true;
    this.pokemonService.getPokemons(url).subscribe( async (pokemons: Pokemons) => {
      const nextLoadPokemons = this.pokemons.concat(pokemons.completePokemons);
      this.pokemons = nextLoadPokemons;
      this.nextUrl = pokemons.next_url.replace('&', '%26');
      this.getBlankTypes();
      this.isLoading = false;
    });
  }

  getBlankTypes(){
    this.pokemons.map(pokemon => {
      if(pokemon.types.length === 1) {
        pokemon.types[1] = {
          slot: 0,
          type: {
            name: 'blank',
            url: '',
          }
        }
      }
    })
  }

  getPokemonById(id: number){
    this.pokemonService.getPokemonById(id).subscribe((pokemon: UniquePokemon) => {
      this.pokemon = pokemon.name;
      this.pokemonSvg = pokemon.sprite;
    });
  }
}
