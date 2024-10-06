import { parseQueryToSearchParams } from "../../utils/parseQueryToSearchParams";
import { API_COLLECTIONS } from "../apiCollections";

export const ARTICLE_COLLECTIONS = {
  articlesCore: API_COLLECTIONS.articlesCore,
  articlesComments: API_COLLECTIONS.articlesComments,
  articlesReplyComments: API_COLLECTIONS.articlesReplyComments,
  articlesLikes: API_COLLECTIONS.articlesLikes,
  articlesSaved: API_COLLECTIONS.articlesSaved,
};

export const ARTICLE_CORE_ENDPOINTS = {
  getArticleById: (articleId: string) => `/${ARTICLE_COLLECTIONS.articlesCore}/${articleId}`,
  getArticlesByQuery: (query: Record<string, any> = {}) =>
    `/${ARTICLE_COLLECTIONS.articlesCore}?${parseQueryToSearchParams(query)}`,
  createArticle: () => `/${ARTICLE_COLLECTIONS.articlesCore}`,
  updateArticleById: (articleId: string) => `/${ARTICLE_COLLECTIONS.articlesCore}/${articleId}`,
  deleteArticleById: (articleId: string) => `/${ARTICLE_COLLECTIONS.articlesCore}/${articleId}`,
};

export const COMMENT_ENDPOINTS = {
  getCommentById: (commentId: string) => `/${ARTICLE_COLLECTIONS.articlesComments}/${commentId}`,
  getCommentsByQuery: (query: Record<string, any> = {}) =>
    `/${ARTICLE_COLLECTIONS.articlesComments}?${parseQueryToSearchParams(query)}`,
  createComment: () => `/${ARTICLE_COLLECTIONS.articlesComments}`,
  updateCommentById: (commentId: string) => `/${ARTICLE_COLLECTIONS.articlesComments}/${commentId}`,
  deleteCommentById: (commentId: string) => `/${ARTICLE_COLLECTIONS.articlesComments}/${commentId}`,
};

export const LIKE_ENDPOINTS = {
  getLikeCount: (articleId: string) => `/${ARTICLE_COLLECTIONS.articlesLikes}/${articleId}/count`,
  likeArticle: (articleId: string) => `/${ARTICLE_COLLECTIONS.articlesLikes}/${articleId}`,
  removeLikeFromArticle: (articleId: string) =>
    `/${ARTICLE_COLLECTIONS.articlesLikes}/${articleId}`,
  isLiked: (articleId: string) => `/${ARTICLE_COLLECTIONS.articlesLikes}/${articleId}/status`,
};

export const REPLY_COMMENTS_ENDPOINTS = {
  getReplyCommentById: (replyCommentId: string) =>
    `/${ARTICLE_COLLECTIONS.articlesReplyComments}/${replyCommentId}`,
  getReplyCommentsByQuery: (query: Record<string, any> = {}) =>
    `/${ARTICLE_COLLECTIONS.articlesReplyComments}?${parseQueryToSearchParams(query)}`,
  createReplyComment: () => `/${ARTICLE_COLLECTIONS.articlesReplyComments}`,
  updateReplyCommentById: (replyCommentId: string) =>
    `/${ARTICLE_COLLECTIONS.articlesReplyComments}/${replyCommentId}`,
  deleteReplyCommentById: (replyCommentId: string) =>
    `/${ARTICLE_COLLECTIONS.articlesReplyComments}/${replyCommentId}`,
};

export const SAVED_ARTICLES_ENDPOINTS = {
  saveArticleForLater: (articleId: string) => `/${ARTICLE_COLLECTIONS.articlesSaved}/${articleId}`,
  removeArticleFromLater: (articleId: string) =>
    `/${ARTICLE_COLLECTIONS.articlesSaved}/${articleId}`,
  getSavedArticles: () => `/${ARTICLE_COLLECTIONS.articlesSaved}`,
  isSavedArticleForLater: (articleId: string) =>
    `/${ARTICLE_COLLECTIONS.articlesSaved}/${articleId}/status`,
};
