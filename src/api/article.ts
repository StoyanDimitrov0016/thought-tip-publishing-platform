import apiClient from "./axiosInstance";
import {
  ICreateSingleApiResponse,
  IOkPaginatedApiResponse,
  IOkSingleApiResponse,
} from "../types/api-responses/responses";
import {
  IArticleCreateUserInputs,
  IArticlePreviewAggregated,
  IArticleFullAggregated,
  IArticleUpdateUserInputs,
  IArticle,
} from "../types/entries/article";

// TODO: Add "getFeed" and pagination

export const getFeed = async (): Promise<IArticlePreviewAggregated[]> => {
  const response = await apiClient.get<IOkPaginatedApiResponse<IArticlePreviewAggregated>>(
    "/articles/feed"
  );
  return response.data.data;
};

export const getByAuthorId = async (authorId: string): Promise<IArticlePreviewAggregated[]> => {
  const response = await apiClient.get<IOkPaginatedApiResponse<IArticlePreviewAggregated>>(
    `/articles/authors/${authorId}`
  );
  return response.data.data;
};

export const getById = async (articleId: string): Promise<IArticleFullAggregated> => {
  const response = await apiClient.get<IOkSingleApiResponse<IArticleFullAggregated>>(
    `/articles/${articleId}`
  );
  return response.data.data;
};

export const createOne = async (createData: IArticleCreateUserInputs): Promise<IArticle> => {
  const response = await apiClient.post<ICreateSingleApiResponse<IArticle>>(
    "/articles",
    createData
  );

  return response.data.data;
};

export const updateById = async (
  articleId: string,
  updateData: IArticleUpdateUserInputs
): Promise<IArticle> => {
  const response = await apiClient.put<IOkSingleApiResponse<IArticle>>(
    `/articles/${articleId}`,
    updateData
  );

  return response.data.data;
};

export const removeById = async (articleId: string): Promise<boolean> => {
  const response = await apiClient.delete(`/articles/${articleId}`);
  return response.status === 204;
};
