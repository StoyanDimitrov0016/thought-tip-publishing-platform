import apiClient from "../axiosInstance";

export interface IComment {
  id: string;
  articleId: string;
  author: {
    id: string;
    username: string;
    avatar: string | null;
  };
  content: string;
  createdAt: string;
  updatedAt: string;
  actions: {
    canEdit: boolean;
    canDelete: boolean;
    hasLiked: boolean;
    canLike: boolean;
    canComment: boolean;
    canReply: boolean;
  };
  stats: {
    likesCount: number;
    repliesCount: number;
  };
}

export const getComments = async (articleId: string): Promise<IComment[]> => {
  const { data: comment } = await apiClient.get(`/comments?article=${articleId}`);
  return comment;
};

export const getComment = async (commentId: string) => {
  const { data: comment } = await apiClient.get(`/comments/${commentId}`);
  return comment;
};

export const createComment = async (createData: { content: string; articleId: string }) => {
  const { data: comment } = await apiClient.post("/comments", createData);
  return comment;
};

export const updateComment = async (commentId: string, updatedContent: string) => {
  const { data: comment } = await apiClient.put(`/comments/${commentId}`, {
    content: updatedContent,
  });
  return comment;
};

export const removeComment = async (commentId: string) => {
  await apiClient.delete(`/comments/${commentId}`);
};
