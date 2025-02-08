import apiClient from "../axiosInstance";
import { Category, Topic, Tag } from "../../types/entities/segmentation";

export const getCategories = async (): Promise<Category[]> => {
  const { data: categories } = await apiClient.get("/categories");
  return categories;
};

export const getCategory = async (categoryId: string): Promise<Category> => {
  const { data: category } = await apiClient.get(`/categories/${categoryId}`);
  return category;
};

export const getTopics = async (categoryId: string): Promise<Topic[]> => {
  const { data: topics } = await apiClient.get(`/categories/${categoryId}/topics`);
  return topics;
};

export const getTopic = async (categoryId: string, topicId: string): Promise<Topic> => {
  const { data: topic } = await apiClient.get(`/categories/${categoryId}/topics/${topicId}`);
  return topic;
};

export const getTags = async (categoryId: string, topicId: string): Promise<Tag[]> => {
  const { data: tags } = await apiClient.get(`/categories/${categoryId}/topics/${topicId}/tags`);
  return tags;
};

export const getTag = async (categoryId: string, topicId: string, tagId: string): Promise<Tag> => {
  const { data: tag } = await apiClient.get(
    `/categories/${categoryId}/topics/${topicId}/tags/${tagId}`
  );
  return tag;
};
