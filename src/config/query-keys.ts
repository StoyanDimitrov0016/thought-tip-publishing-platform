export const QUERY_KEYS = {
  AUTH: "auth-user",
  ARTICLES: {
    HOME: "articles-home",
    PROFILE: "articles-profile",
  },
  BOOKMARKS: {
    PROFILE: "bookmarks-profile",
  },
} as const;

export const QUERY_STALE_TIMES = {
  AUTH: 5 * 60 * 1000, // 5 minutes in ms
  ARTICLES: 2 * 60 * 1000, // 2 minutes in ms
} as const;
