import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SpecificType, Type } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class TypesService {
  constructor(
    private httpClient: HttpClient,
  ) {}

  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os tipos
  getTypes(): Observable<Type[]> {
    return this.httpClient.get<Type[]>(environment.URL_SERVER + 'types')
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Obtem tipo específico
  getSpecificType(id: number): Observable<SpecificType> {
    return this.httpClient.get<SpecificType>(environment.URL_SERVER + 'types/specific?id=' + id)
      .pipe(
        retry(2),
        catchError(this.handleError));
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
