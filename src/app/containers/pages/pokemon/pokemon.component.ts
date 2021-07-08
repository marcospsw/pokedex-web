import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpecificPokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  public pokemonId: number = 0;
  public isLoading: boolean = false;
  public pokemon: any;


  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.pokemonId = parseInt(param.id);
    });

    this.getPokemonById(this.pokemonId);
  }

  getPokemonById(id: number){
    this.isLoading = true;
    this.pokemonService.getPokemonById(id).subscribe((pokemon: SpecificPokemon) => {
      this.pokemon = pokemon;
      this.isLoading = false;
      console.log(this.pokemon);
    });
  }

  goBack(){
    this.router.navigate(['']);
  }


}
