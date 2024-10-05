export const API_COLLECTIONS = {
  articlesCore: "articles",
  articlesComments: "article-comments",
  articlesReplyComments: "reply-comments",
  articlesLikes: "likes",
  articlesSaved: "saved-articles",
  resources: "resources",
};

const getQueryString = (query: Record<string, any> = {}): string => {
  return new URLSearchParams(query).toString();
};

export const ARTICLE_CORE_ENDPOINTS = {
  getArticleById: (articleId: string) => `/${API_COLLECTIONS.articlesCore}/${articleId}`,
  getArticlesByQuery: (query: Record<string, any> = {}) =>
    `/${API_COLLECTIONS.articlesCore}?${getQueryString(query)}`,
  createArticle: () => `/${API_COLLECTIONS.articlesCore}`,
  updateArticleById: (articleId: string) => `/${API_COLLECTIONS.articlesCore}/${articleId}`,
  deleteArticleById: (articleId: string) => `/${API_COLLECTIONS.articlesCore}/${articleId}`,
};

export const COMMENT_ENDPOINTS = {
  getCommentById: (commentId: string) => `/${API_COLLECTIONS.articlesComments}/${commentId}`,
  getCommentsByQuery: (query: Record<string, any> = {}) =>
    `/${API_COLLECTIONS.articlesComments}?${getQueryString(query)}`,
  createComment: () => `/${API_COLLECTIONS.articlesComments}`,
  updateCommentById: (commentId: string) => `/${API_COLLECTIONS.articlesComments}/${commentId}`,
  deleteCommentById: (commentId: string) => `/${API_COLLECTIONS.articlesComments}/${commentId}`,
};

export const LIKE_ENDPOINTS = {
  getLikeCount: (articleId: string) => `/${API_COLLECTIONS.articlesLikes}/${articleId}/count`,
  likeArticle: (articleId: string) => `/${API_COLLECTIONS.articlesLikes}/${articleId}`,
  removeLikeFromArticle: (articleId: string) => `/${API_COLLECTIONS.articlesLikes}/${articleId}`,
  isLiked: (articleId: string) => `/${API_COLLECTIONS.articlesLikes}/${articleId}/status`,
};

export const REPLY_COMMENTS_ENDPOINTS = {
  getReplyCommentById: (replyCommentId: string) =>
    `/${API_COLLECTIONS.articlesReplyComments}/${replyCommentId}`,
  getReplyCommentsByQuery: (query: Record<string, any> = {}) =>
    `/${API_COLLECTIONS.articlesReplyComments}?${getQueryString(query)}`,
  createReplyComment: () => `/${API_COLLECTIONS.articlesReplyComments}`,
  updateReplyCommentById: (replyCommentId: string) =>
    `/${API_COLLECTIONS.articlesReplyComments}/${replyCommentId}`,
  deleteReplyCommentById: (replyCommentId: string) =>
    `/${API_COLLECTIONS.articlesReplyComments}/${replyCommentId}`,
};

export const SAVED_ARTICLES_ENDPOINTS = {
  saveArticleForLater: (articleId: string) => `/${API_COLLECTIONS.articlesSaved}/${articleId}`,
  removeArticleFromLater: (articleId: string) => `/${API_COLLECTIONS.articlesSaved}/${articleId}`,
  getSavedArticles: () => `/${API_COLLECTIONS.articlesSaved}`,
  isSavedArticleForLater: (articleId: string) =>
    `/${API_COLLECTIONS.articlesSaved}/${articleId}/status`,
};

export const TOPICS_AND_TAGS_ENDPOINTS = {
  getTopics: () => `/${API_COLLECTIONS.resources}/topics`,
  getTagsByTopic: (topic: string) => `/${API_COLLECTIONS.resources}/tags?topic=${topic}`,
};
