import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { NewUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  registerNewUser(newUser: NewUser) {
    return this.httpClient.post(environment.URL_SERVER + 'user', newUser).pipe(retry(2), catchError(this.handleError));
  }

  verifyUserExists(userEmail: string): Observable<any> {
    return this.httpClient
      .get(environment.URL_SERVER + `user/exists?userEmail=${userEmail}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  getUsers() {
    return this.httpClient.get(environment.URL_SERVER + 'user').pipe(retry(2), catchError(this.handleError));
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
  }
}
