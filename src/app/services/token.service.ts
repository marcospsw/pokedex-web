import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const KEY = 'Pokedex-Token';

@Injectable({
  providedIn: 'root',
})
export class TokenService implements HttpInterceptor {
  returnToken() {
    return localStorage.getItem(KEY) ?? '';
  }

  saveToken(token: string) {
    return localStorage.setItem(KEY, token);
  }

  deleteToken() {
    localStorage.removeItem(KEY);
  }

  haveToken() {
    return !!this.returnToken();
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        authorization: `Bearer ${this.returnToken()}`,
      },
    });

    return next.handle(request);
  }
}
