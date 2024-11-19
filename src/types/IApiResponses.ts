// -- Enums
export enum ApiMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export enum ApiResponseFormats {
  SINGLE = "single",
  LIST = "list",
  PAGINATED = "paginated",
  ERROR = "error",
}

export enum CollectionTypes {
  RESTRICTED = "restricted",
  SELF_MANAGED = "self-managed",
  PUBLIC = "public",
}

// -- Interfaces for links
export interface Link {
  href: string;
  method: ApiMethods;
}

export interface MetadataLinks {
  [key: string]: Link;
}

// -- Metadata Interfaces
export interface IBaseMetadata {
  collectionName: string;
  collectionType: CollectionTypes;
  links: MetadataLinks;
}

export interface IListMetadata extends IBaseMetadata {
  totalCount: number;
}

export interface IPaginatedMetadata extends IListMetadata {
  pagination: {
    page: number;
    size: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
}

// -- Single Error Interface
export interface SingleError {
  field: string;
  message: string;
}

// -- API Response Interfaces
export interface IBaseApiResponse {
  status: number;
  success: boolean;
  timestamp: string; // ISO 8601 string representation
  type: string;
  format: ApiResponseFormats;
  title: string;
  detail: string;
  instance: string; // URI to identify the specific instance (e.g., request path)
}

export interface IErrorApiResponse extends IBaseApiResponse {
  success: false;
  format: ApiResponseFormats.ERROR;
  errors: SingleError[];
  callstack: string | null;
}

export interface ISuccessApiResponse extends IBaseApiResponse {
  success: true;
  format: ApiResponseFormats.SINGLE | ApiResponseFormats.LIST | ApiResponseFormats.PAGINATED;
}

export interface IOkSingleApiResponse<T> extends ISuccessApiResponse {
  data: T;
  metadata: IBaseMetadata;
}

export interface IOkListApiResponse<T> extends ISuccessApiResponse {
  data: T[];
  metadata: IListMetadata;
}

export interface IOkPaginatedApiResponse<T> extends ISuccessApiResponse {
  data: T[];
  metadata: IPaginatedMetadata;
}

export interface ICreatedApiResponse<T> extends ISuccessApiResponse {
  data: T;
  metadata: IBaseMetadata;
}
