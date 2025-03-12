import apiClient from "../axiosInstance";
import { Author } from "../../types/entities/user";
import { ArticlePreview } from "../../types/entities/article";

export const getAuthor = async (id: string): Promise<Author> => {
  const url = `/authors/${id}`;
  const { data: author } = await apiClient.get<Author>(url);
  return author;
};

export const getAuthorArticles = async (id: string): Promise<ArticlePreview[]> => {
  const url = `/authors/${id}/articles`;
  const { data: articles } = await apiClient.get<ArticlePreview[]>(url);
  return articles;
};
