import { BaseEntity } from "../common";
import { Author } from "./user";
import { Category, Topic, Tag } from "./segmentation";

export interface ArticlePreview extends BaseEntity {
  title: string;
  slug: string;
  thumbnail: string;
  summary: string;
  content: null;
  charge: number;
  readingTime: number;
  discussion: boolean;
  author: Author;
  category: Category;
  topic: Topic;
  tag: Tag;
  actions: ArticleActions;
  stats: ArticleStats;
}

export interface Article extends Omit<ArticlePreview, "content"> {
  content: string;
}

// COMPLEMENTARY AGGREGATED PROPERTIES
export interface ArticleActions {
  canEdit: boolean;
  canDelete: boolean;
  canBookmark: boolean;
  canLike: boolean;
  hasBookmarked: boolean;
  hasLiked: boolean;
}

export interface ArticleStats {
  likesCount: number;
  commentsCount: number;
}
