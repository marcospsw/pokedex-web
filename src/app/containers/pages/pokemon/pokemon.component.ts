import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon, SpecificPokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  public pokemonId: number = 0;
  public isLoading: boolean = false;
  public pokemon: SpecificPokemon;
  public pokemonEvolutions: Pokemon[];


  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(param => {
      this.pokemonId = parseInt(param.id);
    });
    this.getPokemonById(this.pokemonId);
  }

  getPokemonById(id: number){
    this.isLoading = true;
    this.pokemonService.getPokemonById(id).subscribe((pokemon: SpecificPokemon) => {
      this.pokemon = pokemon;
      this.pokemonEvolutions = [
        this.pokemon.firstEvolution,
        this.pokemon.secondEvolution,
        this.pokemon.thirdEvolution
      ].filter(Boolean);
      this.isLoading = false;
    });
  }

  goBack(){
    this.router.navigate(['']);
  }

  getNewPokemon(id: number){
    console.log(id);
  }


}
