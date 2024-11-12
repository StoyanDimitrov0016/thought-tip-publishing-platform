export interface IAuthUser {
  id: string;
  externalUserId: string | null;
  email: string;
  username: string;
  role: "regular" | "moderator" | "admin";
  profilePicture: string | null;
  verificationLevel: number;
  articleLimit: number;
  userArticleCount: number;
}
