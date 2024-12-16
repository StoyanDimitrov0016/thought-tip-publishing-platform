export enum ResponseMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export enum ResponseFormats {
  SINGLE = "single",
  LIST = "list",
  PAGINATED = "paginated",
  ERROR = "error",
}

export interface Link {
  method: ResponseMethods;
  href: string;
}

export interface Pagination {
  page: number;
  size: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface MetadataLinks {
  [key: string]: Link;
}

export interface IBaseMetadata {
  collectionName: string;
  links: MetadataLinks;
}

export interface IListMetadata extends IBaseMetadata {
  totalCount: number;
}

export interface IPaginatedMetadata extends IListMetadata {
  pagination: Pagination;
}

export interface SingleError {
  field: string;
  message: string;
}
