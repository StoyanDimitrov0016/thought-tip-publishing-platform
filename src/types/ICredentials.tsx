export interface ISignUpCredentials {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface ISignInCredentials {
  usernameOrEmail: string;
  password: string;
}
