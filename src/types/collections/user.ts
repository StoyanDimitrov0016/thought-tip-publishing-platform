// Reusable common types (consider moving to /types/common.ts)
export type OptionalString = string | null;

export interface IDocument {
  id: string;
  createdAt: string;
  updatedAt: string;
}

// Login & Registration Types
export interface ILoginData {
  email: string;
  password: string;
}

export interface IRegisterData extends ILoginData {
  username: string;
}

// Base User Model
export interface IUser extends IDocument {
  email: string;
  username: string;
  wallet: OptionalString;
  avatar: OptionalString;
  firstName: OptionalString;
  lastName: OptionalString;
  bio: OptionalString;
}

// Comment Author (Lightweight User)
export interface ICommentAuthor {
  id: string;
  username: string;
  avatar: OptionalString;
}

// Article Author (Extends User with More Data)
export interface IArticleAuthor extends IUser {
  interactions: {
    canEdit: boolean;
    canDelete: boolean;
    hasFollowed: boolean;
    canFollow: boolean;
  };
  statistics: {
    followersCount: number;
  };
}
