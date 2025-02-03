// Note: these are internal paths for react router dom, not external links
export const PATHS = {
  HOME: "",

  // Author paths:
  AUTHOR: (authorId: string) => `/authors/${authorId}`,

  // Article paths:
  ARTICLE: (articleId: string) => `/articles/${articleId}`,
  CREATE_ARTICLE: "/create-article",
  UPDATE_ARTICLE: (articleId: string) => `/update-article/${articleId}`,

  // Auth paths:
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  LOGOUT: "/auth/logout",

  // Profile paths:
  MY_PROFILE: "/my-profile",
  MY_ARTICLES: "/my-profile/my-articles",
  MY_BOOKMARKS: "/my-profile/my-bookmarks",
  ACCOUNT_SETTINGS: "/my-profile/account-settings", // Renamed from MY_SETTINGS
  NOTIFICATIONS: "/my-profile/notifications",
};
