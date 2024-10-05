import apiClient from "../axiosInstance";

type queryType = Record<string, any>;

const COLLECTION = "articles";

const ARTICLE_CORE_ENDPOINTS = {
  getArticleEndpoint(articleId: string): string {
    return `/${COLLECTION}/${articleId}`;
  },
  getArticlesWithQueryEndpoint(query: queryType): string {
    const searchParams = new URLSearchParams(query).toString();
    return `/${COLLECTION}?${searchParams}`;
  },
  createArticleEndpoint(): string {
    return `/${COLLECTION}`;
  },
  updateArticleEndpoint(articleId: string): string {
    return `/${COLLECTION}/${articleId}`;
  },
  deleteArticleEndpoint(articleId: string): string {
    return `/${COLLECTION}/${articleId}`;
  },
};

export const getArticleById = async (articleId: string) => {
  try {
    const url = ARTICLE_CORE_ENDPOINTS.getArticleEndpoint(articleId);
    const apiResponse = await apiClient.get(url);
    return apiResponse.data;
  } catch (error: any) {
    console.error(`Error fetching article ${articleId}:`, error.response?.data?.message || error);
    throw new Error("Failed to fetch the article.");
  }
};

export const getArticlesByQuery = async (query: queryType) => {
  try {
    const url = ARTICLE_CORE_ENDPOINTS.getArticlesWithQueryEndpoint(query);
    const apiResponse = await apiClient.get(url);
    return apiResponse.data;
  } catch (error: any) {
    console.error(`Error fetching articles with query:`, error.response?.data?.message || error);
    throw new Error("Failed to fetch articles.");
  }
};

export const createArticle = async (data: queryType) => {
  try {
    const url = ARTICLE_CORE_ENDPOINTS.createArticleEndpoint();
    const apiResponse = await apiClient.post(url, data);
    return apiResponse.data;
  } catch (error: any) {
    console.error(`Error creating article:`, error.response?.data?.message || error);
    throw new Error("Failed to create the article.");
  }
};

export const updateArticleById = async (articleId: string, data: queryType) => {
  try {
    const url = ARTICLE_CORE_ENDPOINTS.updateArticleEndpoint(articleId);
    const apiResponse = await apiClient.put(url, data);
    return apiResponse.data;
  } catch (error: any) {
    console.error(`Error updating article ${articleId}:`, error.response?.data?.message || error);
    throw new Error("Failed to update the article.");
  }
};

export const deleteArticleById = async (articleId: string) => {
  try {
    const url = ARTICLE_CORE_ENDPOINTS.deleteArticleEndpoint(articleId);
    const apiResponse = await apiClient.delete(url);
    return apiResponse.status;
  } catch (error: any) {
    console.error(`Error deleting article ${articleId}:`, error.response?.data?.message || error);
    throw new Error("Failed to delete the article.");
  }
};
