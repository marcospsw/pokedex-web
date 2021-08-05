import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public user$ = this.authService.returnUser();

  constructor(private router: Router, private authService: AuthenticateService) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
