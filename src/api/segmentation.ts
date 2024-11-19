import apiClient from "./axiosInstance";
import { IOkListApiResponse, IOkSingleApiResponse } from "../types/IApiResponses";
import { ICategoryEntry, ITopicEntry, ITagEntry } from "../types/IEntries";

const categoryPath = "/segmentation/categories";
const topicPath = "/segmentation/topics";
const tagPath = "/segmentation/tags";

export const getAllCategories = async (): Promise<ICategoryEntry[]> => {
  const response = await apiClient.get<IOkListApiResponse<ICategoryEntry>>(categoryPath);
  return response.data.data;
};

export const getOneCategory = async (categorySlug: string): Promise<ICategoryEntry> => {
  const response = await apiClient.get<IOkSingleApiResponse<ICategoryEntry>>(
    `${categoryPath}/${categorySlug}`
  );
  return response.data.data;
};

export const getAllTopics = async (categorySlug: string): Promise<ITopicEntry[]> => {
  const response = await apiClient.get<IOkListApiResponse<ITopicEntry>>(
    `${topicPath}?category=${categorySlug}`
  );
  return response.data.data;
};

export const getOneTopic = async (topicSlug: string): Promise<ITopicEntry> => {
  const response = await apiClient.get<IOkSingleApiResponse<ITopicEntry>>(
    `${topicPath}/${topicSlug}`
  );
  return response.data.data;
};

export const getAllTags = async (topicSlug: string): Promise<ITagEntry[]> => {
  const response = await apiClient.get<IOkListApiResponse<ITagEntry>>(
    `${tagPath}?topic=${topicSlug}`
  );
  return response.data.data;
};

export const getOneTag = async (tagSlug: string): Promise<ITagEntry> => {
  const response = await apiClient.get<IOkSingleApiResponse<ITagEntry>>(`${tagPath}/${tagSlug}`);
  return response.data.data;
};
