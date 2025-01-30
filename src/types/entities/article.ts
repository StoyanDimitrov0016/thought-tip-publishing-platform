import { BaseEntity } from "../common";
import { Author } from "./user";
import { Category, Topic, Tag } from "./segmentation";

// ENTITIES
export interface ArticlePreview extends BaseEntity {
  title: string;
  slug: string;
  thumbnail: string;
  summary: string;
  content: null;
  author: Author;
  category: Category;
  topic: Topic;
  tag: Tag;
  charge: number;
  readingTime: number;
  discussion: boolean;
  interactions: ArticleInteractions;
  statistics: ArticleStatistics;
}

export interface Article extends Omit<ArticlePreview, "content"> {
  content: string;
}

// COMPLEMENTARY AGGREGATED PROPERTIES
export interface ArticleInteractions {
  canEdit: boolean;
  canDelete: boolean;
  canBookmark: boolean;
  canLike: boolean;
  hasBookmarked: boolean;
  hasLiked: boolean;
}

export interface ArticleStatistics {
  likesCount: number;
  commentsCount: number;
}
