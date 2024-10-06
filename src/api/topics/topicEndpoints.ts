import { API_COLLECTIONS } from "../apiCollections";

export const TOPICS_AND_TAGS_ENDPOINTS = {
  getTopics: () => `/${API_COLLECTIONS.resources}/topics`,
  getTagsByTopic: (topic: string) => `/${API_COLLECTIONS.resources}/tags?topic=${topic}`,
};
