// Note: these are internal paths for react router dom, not external links
export const PATHS = {
  HOME: "",

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

  // For future implementa:
  ACCOUNT_SETTINGS: "/my-profile/account-settings",
  NOTIFICATIONS: "/my-profile/notifications",
};
