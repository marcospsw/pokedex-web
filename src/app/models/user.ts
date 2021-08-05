export interface NewUser {
  name: string;
  email: string;
  avatar: string;
  password: string;
}

export interface User {
  id?: number;
  name: string;
  email: string;
  avatar: string;
}
