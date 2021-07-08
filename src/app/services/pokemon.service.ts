import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Pokemon, Pokemons, SpecificPokemon, UniquePokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os pokemons
  getPokemons(url: string): Observable<Pokemons> {
    return this.httpClient.get<Pokemons>(environment.URL_SERVER + 'pokemons?url=' + url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  //Obtem um pokemon pelo id
  getPokemonById(id: number): Observable<SpecificPokemon> {
    return this.httpClient.get<SpecificPokemon>(environment.URL_SERVER + 'pokemons/id?pokemon=' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getPokemonsByType(type: string): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>(environment.URL_SERVER + 'pokemons/bytype?type=' + type)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getPokemonsByFilter(search: string): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>(environment.URL_SERVER + 'pokemons/filter?search=' + search)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
