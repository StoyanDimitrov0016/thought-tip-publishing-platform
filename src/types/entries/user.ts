import { IBaseEntity } from "./helpers";

export interface IRegisterUserInputs {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginUserInputs {
  usernameOrEmail: string;
  password: string;
}

export interface IAuthorArticlePopulated extends Omit<IBaseEntity, "updatedAt"> {
  username: string;
  firstName: string | null;
  lastName: string | null;
  profilePicture: string | null;
  verified: boolean;
}

export interface IAuthorArticleAggregated extends IAuthorArticlePopulated {
  interactions: {
    canFollow: boolean;
  };
  statistics: {
    followers: number;
  };
}
