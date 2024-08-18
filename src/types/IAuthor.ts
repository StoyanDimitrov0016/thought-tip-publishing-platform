export interface IAuthorPreview {
  id: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  rank: string;
  username: string;
}

export interface IAuthorDetail extends IAuthorPreview {
  avatarPicture: string;
  bio: string;
  accountCreationDate: Date;
  articles: string[];
  followersCount: number;
  followingCount: number;
}
