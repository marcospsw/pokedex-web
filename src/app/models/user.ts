export interface NewUser {
  name: string;
  email: string;
  avatar?: string;
  password: string;
  passwordConfirmation: string;
}

export interface User {
  id?: number;
  name: string;
  email: string;
  avatar: string;
}

export interface EditUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  oldPassword: string;
  newPassword?: string;
  newPasswordConfirmation?: string;
}
