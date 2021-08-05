import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first, map, switchMap } from 'rxjs/operators';
import { NewUser, User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public newUserForm!: FormGroup;
  public users: User[];

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email], [this.verifyUser()]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      avatar: ['', [Validators.required]],
    });
    this.getUsers();
  }

  verifyUser() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((userEmail) => this.userService.verifyUserExists(userEmail)),
        map((exist) => (exist ? { usuarioExistente: true } : null)),
        first()
      );
    };
  }

  register() {
    if (this.newUserForm.valid) {
      const newUser = this.newUserForm.getRawValue() as NewUser;

      this.userService.registerNewUser(newUser).subscribe(
        () => {
          this.router.navigate(['/login']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  getUsers() {
    this.userService.getUsers().subscribe((res: any) => {
      this.users = res.usersArray;
      console.log(this.users);
    });
  }
}
