import apiClient from "../axiosInstance";
import { Article, ArticlePreview } from "../../types/entities/article";
import { ArticleCreateData } from "../../types/entities/form";

export const getArticles = async (url: string): Promise<ArticlePreview[]> => {
  const { data: articles } = await apiClient.get(url);
  return articles;
};

export const getArticle = async (id: string): Promise<Article> => {
  const { data: article } = await apiClient.get(`/articles/${id}`);
  return article;
};

export const createArticle = async (data: ArticleCreateData): Promise<Article> => {
  const { data: article } = await apiClient.post<Article>("/articles", data);
  return article;
};

export const updateArticle = async (id: string, data: ArticleCreateData): Promise<Article> => {
  const { data: article } = await apiClient.put<Article>(`/articles/${id}`, data);
  return article;
};

export const removeArticle = async (id: string) => {
  await apiClient.delete(`/articles/${id}`);
};
