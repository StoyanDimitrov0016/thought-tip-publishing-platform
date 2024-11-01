import { ITopicAPIResponse } from "../../types/segmentation-types/TopicTypes";
import apiClient from "../axiosInstance";

export const fetchTopics = async (categorySlug: string): Promise<ITopicAPIResponse[]> => {
  try {
    const response = await apiClient.get<ITopicAPIResponse[]>(
      `/resources/topics?category=${categorySlug}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching topics with category slug ${categorySlug}:`, error);
    return [];
  }
};

export const fetchOneTopic = async (topicSlug: string): Promise<ITopicAPIResponse | null> => {
  try {
    const response = await apiClient.get<ITopicAPIResponse>(`/resources/topics/${topicSlug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching topic with topic slug ${topicSlug}:`, error);
    return null;
  }
};
