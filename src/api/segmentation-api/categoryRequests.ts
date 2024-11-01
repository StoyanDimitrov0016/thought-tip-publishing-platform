import { ICategoryAPIResponse } from "../../types/segmentation-types/CategoryTypes";
import apiClient from "../axiosInstance";

export const fetchCategories = async (): Promise<ICategoryAPIResponse[]> => {
  try {
    const response = await apiClient.get<ICategoryAPIResponse[]>("/resources/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const fetchOneCategory = async (
  categorySlug: string
): Promise<ICategoryAPIResponse | null> => {
  try {
    const response = await apiClient.get<ICategoryAPIResponse>(
      `/resources/categories?category=${categorySlug}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching category with category slug ${categorySlug}:`, error);
    return null;
  }
};
