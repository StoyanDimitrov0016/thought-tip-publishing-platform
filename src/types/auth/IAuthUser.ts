// Partial user data returned in the auth API response.
// Contains only essential fields for local storage, excluding less critical info like bio.

enum UserRole {
  Regular = "regular",
  Moderator = "moderator",
  Admin = "admin",
}

export interface IAuthUser {
  id: string;
  externalUserId: string | null;
  email: string;
  username: string;
  role: UserRole;
  profilePicture: string | null;
  verificationLevel: number;
  articleLimit: number;
  userArticleCount: number;
}
