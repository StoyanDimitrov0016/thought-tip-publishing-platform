export type PaginationSort = "latest" | "oldest";

export interface Pagination {
  page: number;
  size: number;
  sort: PaginationSort;
}

export const PARAM_KEYS = {
  page: "page",
  size: "size",
  sort: "sort",
};

export const LIMITS = {
  minPage: 1,
  maxPage: 100,
  minSize: 1,
  maxSize: 30,
};

export const DEFAULTS: Pagination = {
  page: 1,
  size: 10,
  sort: "latest",
};

export const SORT_VALUES: PaginationSort[] = ["latest", "oldest"];

export function buildPagination(searchParams: URLSearchParams): Pagination {
  const unparsedPage = Number(searchParams.get(PARAM_KEYS.page));
  const unparsedSize = Number(searchParams.get(PARAM_KEYS.size));
  const unparsedSort = searchParams.get(PARAM_KEYS.sort);

  const isPageNumber = !isNaN(unparsedPage);
  const isSizeNumber = !isNaN(unparsedSize);
  const isSortPresent = SORT_VALUES.includes(unparsedSort as PaginationSort);

  const parsedPage = isPageNumber ? unparsedPage : DEFAULTS.page;
  const parsedSize = isSizeNumber ? unparsedSize : DEFAULTS.size;
  const parsedSort = isSortPresent ? (unparsedSort as PaginationSort) : DEFAULTS.sort;

  const page = Math.min(Math.max(parsedPage, LIMITS.minPage), LIMITS.maxPage);
  const size = Math.min(Math.max(parsedSize, LIMITS.minSize), LIMITS.maxSize);
  const sort = parsedSort;

  const pagination: Pagination = { page, size, sort };
  return pagination;
}
