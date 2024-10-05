import apiClient from "../axiosInstance";

const COLLECTION = "reply-comments";

type queryType = Record<string, any>;

const ARTICLE_REPLY_COMMENTS_ENDPOINTS = {
  getReplyCommentEndpoint(replyCommentId: string): string {
    return `/${COLLECTION}/${replyCommentId}`;
  },
  getReplyCommentsWithQueryEndpoint(query: queryType): string {
    const searchParams = new URLSearchParams(query).toString();
    return `/${COLLECTION}?${searchParams}`;
  },
  createReplyCommentEndpoint(): string {
    return `/${COLLECTION}`;
  },
  updateReplyCommentEndpoint(replyCommentId: string): string {
    return `/${COLLECTION}/${replyCommentId}`;
  },
  deleteReplyCommentEndpoint(replyCommentId: string): string {
    return `/${COLLECTION}/${replyCommentId}`;
  },
};

export const getReplyCommentById = async (replyCommentId: string) => {
  try {
    const url = ARTICLE_REPLY_COMMENTS_ENDPOINTS.getReplyCommentEndpoint(replyCommentId);
    const apiResponse = await apiClient.get(url);
    return apiResponse.data;
  } catch (error: any) {
    console.error(
      `Error fetching reply comment ${replyCommentId}:`,
      error.response?.data?.message || error
    );
    throw new Error("Failed to fetch the reply comment.");
  }
};

export const getReplyCommentsByQuery = async (query: queryType) => {
  try {
    const url = ARTICLE_REPLY_COMMENTS_ENDPOINTS.getReplyCommentsWithQueryEndpoint(query);
    const apiResponse = await apiClient.get(url);
    return apiResponse.data;
  } catch (error: any) {
    console.error("Error fetching reply comments:", error.response?.data?.message || error);
    throw new Error("Failed to fetch reply comments.");
  }
};

export const createReplyComment = async (data: queryType) => {
  try {
    const url = ARTICLE_REPLY_COMMENTS_ENDPOINTS.createReplyCommentEndpoint();
    const apiResponse = await apiClient.post(url, data);
    return apiResponse.data;
  } catch (error: any) {
    console.error("Error creating reply comment:", error.response?.data?.message || error);
    throw new Error("Failed to create reply comment.");
  }
};

export const updateReplyCommentById = async (replyCommentId: string, data: queryType) => {
  try {
    const url = ARTICLE_REPLY_COMMENTS_ENDPOINTS.updateReplyCommentEndpoint(replyCommentId);
    const apiResponse = await apiClient.put(url, data);
    return apiResponse.data;
  } catch (error: any) {
    console.error(
      `Error updating reply comment ${replyCommentId}:`,
      error.response?.data?.message || error
    );
    throw new Error("Failed to update reply comment.");
  }
};

export const deleteReplyCommentById = async (replyCommentId: string) => {
  try {
    const url = ARTICLE_REPLY_COMMENTS_ENDPOINTS.deleteReplyCommentEndpoint(replyCommentId);
    const apiResponse = await apiClient.delete(url);
    return apiResponse.status;
  } catch (error: any) {
    console.error(
      `Error deleting reply comment ${replyCommentId}:`,
      error.response?.data?.message || error
    );
    throw new Error("Failed to delete reply comment.");
  }
};
