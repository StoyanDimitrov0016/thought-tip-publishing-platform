export interface IAuthorDetailsPreview {
  firstName: string;
  lastName: string;
  profilePicture: string;
  rank: string;
}

export interface IAuthorDetailsExtended extends IAuthorDetailsPreview {
  badges: string[];
  bio: string;
  followersCount: number;
  followingCount: number;
}
