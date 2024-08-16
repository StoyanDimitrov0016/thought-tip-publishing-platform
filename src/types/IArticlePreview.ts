import { IAuthorDetailsExtended, IAuthorDetailsPreview } from "./IAuthor";

export interface IArticleDetailsPreview {
  title: string;
  thumbnail: string;
  previewText: string;
  averageReadingTime: string;
  tags: string[];
  publishedDate: Date;
  author: IAuthorDetailsPreview;
}

export interface IArticleDetailsFull extends IArticleDetailsPreview {
  content: string;
  likesCount: number;
  author: IAuthorDetailsExtended;
}
