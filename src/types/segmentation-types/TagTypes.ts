import { ISegmentationBase } from "./ISegmentationBase";

export interface ITag extends ISegmentationBase {
  topicId: string;
}

export interface ITagAPIResponse {
  tag: ITag;
  relatedURLs: {
    tagURL: string;
    tagArticlesURL: string;
  };
}
