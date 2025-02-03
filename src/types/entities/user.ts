import { BaseEntity, Nullable } from "../common";

export interface User extends BaseEntity {
  email: string;
  username: string;
  wallet: Nullable<string>;
  avatar: Nullable<string>;
  firstName: Nullable<string>;
  lastName: Nullable<string>;
  bio: Nullable<string>;
}

export interface Author extends User {
  actions: AuthorActions;
  stats: AuthorStats;
}

// COMPLEMENTARY AGGREGATED PROPERTIES
export interface AuthorActions {
  canEdit: boolean;
  canDelete: boolean;
  hasFollowed: boolean;
  canFollow: boolean;
}

export interface AuthorStats {
  followersCount: number;
  followingCount: number;
}
