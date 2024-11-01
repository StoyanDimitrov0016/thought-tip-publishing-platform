import { ITagAPIResponse } from "../../types/segmentation-types/TagTypes";
import apiClient from "../axiosInstance";

export const fetchTags = async (topicSlug: string): Promise<ITagAPIResponse[]> => {
  try {
    const response = await apiClient.get<ITagAPIResponse[]>(`/resources/tags?topic=${topicSlug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching tags with topic slug: ${topicSlug}:`, error);
    return [];
  }
};

export const fetchOneTag = async (tagSlug: string): Promise<ITagAPIResponse | null> => {
  try {
    const response = await apiClient.get<ITagAPIResponse>(`/resources/tags/${tagSlug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching tag with tag slug: ${tagSlug}:`, error);
    return null;
  }
};
