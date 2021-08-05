import { Injectable } from '@angular/core';

const KEY = 'Pokedex-Token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
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
}
