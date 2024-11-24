export interface IRegisterCredentials {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginCredentials {
  usernameOrEmail: string;
  password: string;
}

export interface ICreateArticleInputs {
  title: string;
  thumbnail: string;
  hook: string;
  content: string;
  category: string;
  topics: string[];
  tags: string[];
  author: string;
  paywalled: boolean;
  discussion: boolean;
}
