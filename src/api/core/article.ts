import apiClient from "../axiosInstance";
import { Article, ArticlePreview } from "../../types/entities/article";
import { ArticleCreateData } from "../../types/entities/form";

export const getArticles = async (url: string): Promise<ArticlePreview[]> => {
  const { data: articles } = await apiClient.get(url);
  return articles;
};

export const getArticle = async (articleId: string): Promise<Article> => {
  const { data: article } = await apiClient.get(`/articles/${articleId}`);
  return article;
};

export const createArticle = async (createData: ArticleCreateData) => {
  const { data: article } = await apiClient.post("/articles", createData);
  return article;
};

export const updateArticle = async () => {};

export const removeArticle = async (articleId: string) => {
  await apiClient.delete(`/articles/${articleId}`);
};
