import { ISegmentationBase } from "./ISegmentationBase";

export interface ITopic extends ISegmentationBase {
  categoryId: string;
  popularity: number;
}

export interface ITopicAPIResponse {
  topic: ITopic;
  relatedURLs: {
    topicURL: string;
    topicTagsURL: string;
    topicArticlesURL: string;
  };
}
