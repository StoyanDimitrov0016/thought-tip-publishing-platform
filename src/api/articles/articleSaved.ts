import apiClient from "../axiosInstance";

const COLLECTION = "saved-articles";

const ARTICLE_SAVED_ENDPOINTS = {
  saveArticleEndpoint(): string {
    return `/${COLLECTION}`;
  },
  removeSavedArticleEndpoint(articleId: string): string {
    return `/${COLLECTION}/${articleId}/remove`;
  },
  getSavedArticlesEndpoint(): string {
    return `/${COLLECTION}`;
  },
  isSavedArticleEndpoint(articleId: string): string {
    return `/${COLLECTION}/${articleId}/status`;
  },
};

export const saveArticleForLater = async (articleId: string) => {
  try {
    const url = ARTICLE_SAVED_ENDPOINTS.saveArticleEndpoint();
    const apiResponse = await apiClient.post(url, { articleId });
    return apiResponse.data;
  } catch (error: any) {
    console.error(
      `Error saving article ${articleId} for later:`,
      error.response?.data?.message || error
    );
    throw new Error("Failed to save article for later.");
  }
};

export const removeArticleFromLater = async (articleId: string) => {
  try {
    const url = ARTICLE_SAVED_ENDPOINTS.removeSavedArticleEndpoint(articleId);
    const apiResponse = await apiClient.delete(url);
    return apiResponse.data;
  } catch (error: any) {
    console.error(
      `Error removing article ${articleId} from saved articles:`,
      error.response?.data?.message || error
    );
    throw new Error("Failed to remove article from saved articles.");
  }
};

export const getArticlesForLater = async () => {
  try {
    const url = ARTICLE_SAVED_ENDPOINTS.getSavedArticlesEndpoint();
    const apiResponse = await apiClient.get(url);
    return apiResponse.data;
  } catch (error: any) {
    console.error("Error fetching saved articles:", error.response?.data?.message || error);
    throw new Error("Failed to fetch saved articles.");
  }
};

export const isSavedArticleForLater = async (articleId: string) => {
  try {
    const url = ARTICLE_SAVED_ENDPOINTS.isSavedArticleEndpoint(articleId);
    const apiResponse = await apiClient.get(url);
    return apiResponse.data;
  } catch (error: any) {
    console.error(
      `Error checking if article ${articleId} is saved for later:`,
      error.response?.data?.message || error
    );
    throw new Error("Failed to check saved status.");
  }
};
