import { AbstractControl } from '@angular/forms';

export function passwordConfirmationRegisterValidator(formGroup: AbstractControl) {
  const password = formGroup.get('password')?.value ?? '';
  const passwordConfirmation = formGroup.get('passwordConfirmation')?.value ?? '';

  if (password !== passwordConfirmation) {
    return { passwordConfirmation: true };
  } else {
    return null;
  }
}
