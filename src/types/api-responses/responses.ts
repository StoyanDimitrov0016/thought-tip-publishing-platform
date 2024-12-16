import {
  ResponseFormats,
  IBaseMetadata,
  IListMetadata,
  IPaginatedMetadata,
  SingleError,
} from "./helpers";

export interface IBaseApiResponse {
  status: number;
  success: boolean;
  timestamp: string;
  type: string;
  format: ResponseFormats;
  title: string;
  detail: string;
  instance: string;
}

// = Error responses:
export interface IErrorApiResponse extends IBaseApiResponse {
  success: false;
  format: ResponseFormats.ERROR;
  callstack: string | null;
}

export interface IValidationErrorApiResponse extends IErrorApiResponse {
  errors: SingleError[];
}

// = Success responses:
// - Base Success responses:
export interface IBaseSuccessApiResponse extends IBaseApiResponse {
  success: true;
  format: ResponseFormats.SINGLE | ResponseFormats.LIST | ResponseFormats.PAGINATED;
}

export interface IOkApiResponse extends IBaseSuccessApiResponse {
  status: 200;
}

export interface ICreateApiResponse extends IBaseSuccessApiResponse {
  status: 201;
}

// - Single Success Responses
export interface IOkSingleApiResponse<T> extends IOkApiResponse {
  data: T;
  metadata: IBaseMetadata;
}

export interface ICreateSingleApiResponse<T> extends ICreateApiResponse {
  data: T;
  metadata: IBaseMetadata;
}

// - List Success Responses
export interface IOkListApiResponse<T> extends IOkApiResponse {
  data: T[];
  metadata: IListMetadata;
}

// - Paginated Success Responses
export interface IOkPaginatedApiResponse<T> extends IOkApiResponse {
  data: T[];
  metadata: IPaginatedMetadata;
}
