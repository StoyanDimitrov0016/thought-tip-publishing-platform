import apiClient from "../axiosInstance";

type queryType = Record<string, any>;

const COLLECTION = "comments";

const ARTICLE_COMMENTS_ENDPOINTS = {
  getCommentEndpoint(commentId: string): string {
    return `/${COLLECTION}/${commentId}`;
  },
  getCommentsWithQueryEndpoint(query: queryType): string {
    const searchParams = new URLSearchParams(query).toString();
    return `/${COLLECTION}?${searchParams}`;
  },
  createCommentEndpoint(): string {
    return `/${COLLECTION}`;
  },
  updateCommentEndpoint(commentId: string): string {
    return `/${COLLECTION}/${commentId}`;
  },
  deleteCommentEndpoint(commentId: string): string {
    return `/${COLLECTION}/${commentId}`;
  },
};

export const getCommentById = async (commentId: string) => {
  try {
    const url = ARTICLE_COMMENTS_ENDPOINTS.getCommentEndpoint(commentId);
    const apiResponse = await apiClient.get(url);
    return apiResponse.data;
  } catch (error: any) {
    console.error(`Error fetching comment ${commentId}:`, error.response?.data?.message || error);
    throw new Error("Failed to fetch the comment.");
  }
};

export const getCommentsByQuery = async (query: queryType) => {
  try {
    const url = ARTICLE_COMMENTS_ENDPOINTS.getCommentsWithQueryEndpoint(query);
    const apiResponse = await apiClient.get(url);
    return apiResponse.data;
  } catch (error: any) {
    console.error(`Error fetching comments with query:`, error.response?.data?.message || error);
    throw new Error("Failed to fetch comments.");
  }
};

export const createComment = async (data: queryType) => {
  try {
    const url = ARTICLE_COMMENTS_ENDPOINTS.createCommentEndpoint();
    const apiResponse = await apiClient.post(url, data);
    return apiResponse.data;
  } catch (error: any) {
    console.error(`Error creating comment:`, error.response?.data?.message || error);
    throw new Error("Failed to create the comment.");
  }
};

export const updateCommentById = async (commentId: string, data: queryType) => {
  try {
    const url = ARTICLE_COMMENTS_ENDPOINTS.updateCommentEndpoint(commentId);
    const apiResponse = await apiClient.put(url, data);
    return apiResponse.data;
  } catch (error: any) {
    console.error(`Error updating comment ${commentId}:`, error.response?.data?.message || error);
    throw new Error("Failed to update the comment.");
  }
};

export const deleteCommentById = async (commentId: string) => {
  try {
    const url = ARTICLE_COMMENTS_ENDPOINTS.deleteCommentEndpoint(commentId);
    const apiResponse = await apiClient.delete(url);
    return apiResponse.status;
  } catch (error: any) {
    console.error(`Error deleting comment ${commentId}:`, error.response?.data?.message || error);
    throw new Error("Failed to delete the comment.");
  }
};
