import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { User } from '../models/user';
import jwt_decode from 'jwt-decode';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  constructor(private httpClient: HttpClient, private tokenService: TokenService) {
    if (this.tokenService.haveToken()) {
      this.decodeJWT();
    }
  }

  private userSubject = new BehaviorSubject<User>({
    name: '',
    email: '',
    avatar: '',
  });

  autheticate(email: string, password: string): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        environment.URL_SERVER + 'login',
        {
          email,
          password,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((res) => {
          const response: any = res && res.body && res.body;
          const authToken = response && response.token ? response.token : '';
          this.saveToken(authToken);
        })
      );
  }

  private decodeJWT() {
    const token = this.tokenService.returnToken();
    const user = jwt_decode(token) as User;
    this.userSubject.next(user);
  }

  returnUser() {
    return this.userSubject.asObservable();
  }

  saveToken(token: string) {
    this.tokenService.saveToken(token);
    this.decodeJWT();
  }

  logout() {
    this.tokenService.deleteToken();
    this.userSubject.next({ id: 0, name: '', email: '', avatar: '' });
  }

  isLogged() {
    return this.tokenService.haveToken();
  }
}
