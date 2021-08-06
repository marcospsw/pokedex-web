import { AbstractControl } from '@angular/forms';

export function passwordConfirmationEditValidator(formGroup: AbstractControl) {
  const password = formGroup.get('newPassword')?.value ?? '';
  const passwordConfirmation = formGroup.get('newPasswordConfirmation')?.value ?? '';

  if (password !== passwordConfirmation) {
    return { passwordConfirmation: true };
  } else {
    return null;
  }
}
