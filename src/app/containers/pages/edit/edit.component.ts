import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first, map, switchMap } from 'rxjs/operators';
import { EditUser, NewUser, User } from 'src/app/models/user';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';
import { passwordConfirmationEditValidator } from './password-confirmation-edit.validator';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  public user: User = this.authService.returnUserObject();
  public editUserForm!: FormGroup;
  public users: User[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authService: AuthenticateService,
    private tokenService: TokenService
  ) {}

  async ngOnInit(): Promise<void> {
    this.editUserForm = this.formBuilder.group(
      {
        id: [`${this.user.id}`],
        email: [``, [Validators.required, Validators.email], this.verifyUser()],
        name: [`${this.user.name}`, [Validators.required]],
        oldPassword: ['', [Validators.required]],
        newPassword: ['', [Validators.minLength(8)]],
        newPasswordConfirmation: [''],
        avatar: [`${this.user.avatar ? this.user.avatar : ''}`],
      },
      {
        validators: [passwordConfirmationEditValidator],
      }
    );
    this.getUsers();
  }

  verifyUser() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((email) => this.userService.verifyUserExists(email)),
        map((exist) => (exist === true && control.value !== this.user.email ? { usuarioExistente: true } : null)),
        first()
      );
    };
  }

  editUser() {
    if (this.editUserForm.valid) {
      const editUser = this.editUserForm.getRawValue() as EditUser;
      if (editUser.avatar === '') {
        editUser.avatar = undefined;
      }

      this.userService.editUser(editUser).subscribe(
        (res: any) => {
          this.tokenService.saveToken(res.token);
          this.authService.decodeJWT();
          this.router.navigate(['']);
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
    });
  }

  getForm() {
    console.log(this.editUserForm);
  }
}
