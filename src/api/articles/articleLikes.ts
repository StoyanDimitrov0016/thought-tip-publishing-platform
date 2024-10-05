import apiClient from "../axiosInstance";

const COLLECTION = "likes";

const ARTICLE_LIKES_ENDPOINTS = {
  getLikeCountEndpoint(articleId: string): string {
    return `/${COLLECTION}/${articleId}/count`;
  },
  likeArticleEndpoint(): string {
    return `/${COLLECTION}`;
  },
  removeLikeFromArticleEndpoint(articleId: string): string {
    return `/${COLLECTION}/${articleId}/remove`;
  },
  isLikedEndpoint(articleId: string): string {
    return `/${COLLECTION}/${articleId}/status`;
  },
};

export const getLikeCount = async (articleId: string) => {
  try {
    const url = ARTICLE_LIKES_ENDPOINTS.getLikeCountEndpoint(articleId);
    const apiResponse = await apiClient.get(url);
    return apiResponse.data;
  } catch (error: any) {
    console.error(
      `Error fetching like count for article ${articleId}:`,
      error.response?.data?.message || error
    );
    throw new Error("Failed to fetch like count.");
  }
};

export const likeArticle = async (articleId: string) => {
  try {
    const url = ARTICLE_LIKES_ENDPOINTS.likeArticleEndpoint();
    const apiResponse = await apiClient.post(url, { articleId });
    return apiResponse.data;
  } catch (error: any) {
    console.error("Error liking article:", error.response?.data?.message || error);
    throw new Error("Failed to like the article.");
  }
};

export const removeLikeFromArticle = async (articleId: string) => {
  try {
    const url = ARTICLE_LIKES_ENDPOINTS.removeLikeFromArticleEndpoint(articleId);
    const apiResponse = await apiClient.delete(url);
    return apiResponse.data;
  } catch (error: any) {
    console.error(
      `Error removing like from article ${articleId}:`,
      error.response?.data?.message || error
    );
    throw new Error("Failed to remove like from the article.");
  }
};

export const isLiked = async (articleId: string) => {
  try {
    const url = ARTICLE_LIKES_ENDPOINTS.isLikedEndpoint(articleId);
    const apiResponse = await apiClient.get(url);
    return apiResponse.data;
  } catch (error: any) {
    console.error(
      `Error checking if article ${articleId} is liked:`,
      error.response?.data?.message || error
    );
    throw new Error("Failed to check like status.");
  }
};
