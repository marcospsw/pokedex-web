import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public email: string;
  public password: string;

  constructor(private authService: AuthenticateService, private router: Router) {}

  login() {
    this.authService.autheticate(this.email, this.password).subscribe(
      () => {
        this.router.navigate(['pokemons']);
      },
      (error) => {
        alert('Usuario ou senha invalido');
        console.log(error);
      }
    );
  }
}
