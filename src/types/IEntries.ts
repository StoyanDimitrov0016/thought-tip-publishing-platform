interface IBaseEntry {
  id: string;
  createdAt: string; // ISO 8601 format
  updatedAt: string; // ISO 8601 format
}

// -- Status options for segmentation entries
enum SegmentationStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  IN_DEVELOPMENT = "in-development",
  ARCHIVED = "archived",
}

enum VerificationLevel {
  INITIAL = 0,
  PROFILE_COMPLETE = 1,
  SUPPORTER = 2,
}

enum UserRoles {
  REGULAR = "regular",
  MODERATOR = "moderator",
  ADMIN = "admin",
}

interface ISegmentationPartial {
  id: string; // Reference ID
  slug: string; // Slug for the referenced entry
}

interface ISegmentationEntryBase extends IBaseEntry {
  name: string;
  slug: string;
  description: string;
  status: SegmentationStatus;
}

export interface ICategoryEntry extends ISegmentationEntryBase {
  popularity: number;
  topicPartials: ISegmentationPartial[];
}

export interface ITopicEntry extends ISegmentationEntryBase {
  categoryId: string;
  popularity: number;
  tagPartials: ISegmentationPartial[];
}

export interface ITagEntry extends ISegmentationEntryBase {
  topicId: string;
}

export interface IUserEntry extends IBaseEntry {
  externalUserId: string | null;
  email: string;
  username: string;
  role: UserRoles;
  verificationLevel: VerificationLevel;
}

export interface IProfileEntry extends IBaseEntry {
  id: string;
  userId: string; // Link to the corresponding user from IUserEntry
  firstName: string | null;
  lastName: string | null;
  profilePicture: string | null;
  bio: string | null;
  followers: number;
  followings: number;
  articleLimit: number;
  publishedArticles: number;
  walletId: string | null;
}

export interface IArticleEntry {
  title: string;
  slug: string;
  thumbnail: string;
  hook: string;
  content: string;
  category: string;
  topics: string[];
  tags: string[];
  readingTime: number;
  author: string;
  paywalled: boolean;
  discussion: boolean;
}

export interface IArticleFullEntry {
  title: string;
  slug: string;
  thumbnail: string;
  hook: string;
  content: string;
  category: string;
  topics: string[];
  tags: string[];
  readingTime: number;
  author: string;
  paywalled: boolean;
  discussion: boolean;
}
export interface IArticlePartialEntry {
  id: string;
  title: string;
  slug: string;
  thumbnail: string;
  hook: string;
  content: string;
  author: string; // ---
  category: string;
  topics: string[];
  tags: string[];
  readingTime: number;
  charge: number;
  discussion: boolean;
}
