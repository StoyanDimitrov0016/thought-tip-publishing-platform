import { IAuthorPreview } from "./IAuthor";

// Interface for creating an article (without server metadata)
export interface IArticleBase {
  title: string;
  thumbnail: string;
  previewText: string;
  content: string;
  tags: string[];
}

// Interface for previewing an article (without content, but with metadata)
export interface IArticlePreview extends Omit<IArticleBase, "content"> {
  id: string;
  averageReadingTime: string;
  publishedDate: Date;
  likesCount: number;
  author: IAuthorPreview;
}

export interface IArticleDetail extends IArticlePreview {
  content: string;
}
