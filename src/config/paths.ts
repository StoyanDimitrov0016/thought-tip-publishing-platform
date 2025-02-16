export const PATHS = {
  HOME: "/",

  // Author paths:
  AUTHOR: `/authors/:authorId`,

  // Article paths:
  ARTICLE: "/articles/:articleId",
  CREATE_ARTICLE: "/create-article",
  UPDATE_ARTICLE: "/update-article/:articleId",

  // Auth paths:
  LOGIN: "/login",
  REGISTER: "/register",
  LOGOUT: "/logout",

  // Profile paths:
  MY_PROFILE: "/my-profile",
  MY_ARTICLES: "/my-profile/my-articles",
  MY_BOOKMARKS: "/my-profile/my-bookmarks",
  MY_DETAILS: "/my-profile/details",

  // Profile nested paths considering react router dom requirements
  MY_PROFILE_MY_ARTICLES: "my-articles",
  MY_PROFILE_MY_BOOKMARKS: "my-bookmarks",
  MY_PROFILE_MY_DETAILS: "details",

  // For future implementation:
  ACCOUNT_SETTINGS: "/my-profile/account-settings",
  NOTIFICATIONS: "/my-profile/notifications",
} as const;

export const REDIRECT_PATHS = {
  // Auth redirect paths:
  AFTER_LOGIN: PATHS.HOME,
  AFTER_REGISTER: PATHS.HOME,
  AFTER_LOGOUT: PATHS.HOME,

  // Guard redirect paths:
  GUEST_GUARD_REDIRECT: PATHS.HOME,
  AUTH_GUARD_REDIRECT: PATHS.LOGIN,

  // Specific resource paths:
  ARTICLE_PAGE: (articleId: string) => `/articles/${articleId}`,
  AUTHOR_PAGE: (authorId: string) => `/authors/${authorId}`,
} as const;

export const API_ENDPOINTS = {
  // Auth API paths:
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  LOGOUT: "/auth/logout",
  ME: "/auth/me",
} as const;
