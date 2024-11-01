import { ISegmentationBase } from "./ISegmentationBase";

export interface ICategory extends ISegmentationBase {
  popularity: number;
}

export interface ICategoryAPIResponse {
  category: ICategory;
  relatedURLs: {
    categoryURL: string;
    categoryTopicsURL: string;
    categoryArticlesURL: string;
  };
}
