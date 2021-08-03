import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
	selector: 'app-evolutions',
	templateUrl: './evolutions.component.html',
	styleUrls: ['./evolutions.component.scss'],
})
export class EvolutionsComponent implements OnInit {
	@Input() pokemons: Pokemon[];
	@Output() newPokemon = new EventEmitter<number>();

	constructor(private router: Router) {}

	ngOnInit(): void {}

	getNewPokemon(id: number) {
		this.router.navigate(['pokemon', id]);
		this.newPokemon.emit(id);
	}
}
