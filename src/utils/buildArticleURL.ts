import { buildPagination } from "./buildPagination";

export interface ArticleFilter {
  search?: string;
  category?: string;
  topic?: string;
  tag?: string;
  charge?: string; // free: "[0, 0]" , paid: "[5, 10]"
  discussion?: string;
}

export const PARAM_KEYS = {
  search: "search",
  category: "category",
  topic: "topic",
  tag: "tag",
  charge: "charge",
  discussion: "discussion",
};

export function buildArticleFilter(searchParams: URLSearchParams): ArticleFilter {
  const filter: ArticleFilter = {
    search: searchParams.get(PARAM_KEYS.search) || undefined,
    category: searchParams.get(PARAM_KEYS.category) || undefined,
    topic: searchParams.get(PARAM_KEYS.topic) || undefined,
    tag: searchParams.get(PARAM_KEYS.tag) || undefined,
    charge: searchParams.get(PARAM_KEYS.charge) || undefined,
    discussion: searchParams.get(PARAM_KEYS.discussion) === "true" ? "true" : undefined,
  };

  return filter;
}

export function buildArticleURL(searchParams: URLSearchParams) {
  const pagination = buildPagination(searchParams);
  const filter = buildArticleFilter(searchParams);

  const entries = Object.entries({ ...filter, ...pagination })
    .filter(([_, value]) => value !== undefined)
    .map(([key, value]) => [key, String(value)]);

  const queryParams: Record<string, string> = Object.fromEntries(entries);
  const queryString = new URLSearchParams(queryParams).toString();

  const articleURL = `/articles?${queryString}`;
  return articleURL;
}
