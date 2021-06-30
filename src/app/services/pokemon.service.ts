import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Pokemon, Pokemons, UniquePokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public pokemons = 'http://localhost:4000/pokemons';

  constructor(private httpClient: HttpClient) {}

  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os pokemons
  getPokemons(url: string): Observable<Pokemons> {
    return this.httpClient.get<Pokemons>('http://localhost:4000/pokemons?url=' + url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  //Obtem um pokemon pelo id
  getPokemonById(id: number): Observable<UniquePokemon> {
    return this.httpClient.get<UniquePokemon>('http://localhost:4000/pokemons/id?pokemon=' + id)
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
