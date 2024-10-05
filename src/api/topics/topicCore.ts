import apiClient from "../axiosInstance";

const RESOURCE_ENDPOINTS = {
  getTopicsEndpoint(): string {
    return "/resources/topics";
  },
  getTagsEndpoint(topic: string): string {
    const searchParams = new URLSearchParams({ topic }).toString();
    return `/resources/tags?${searchParams}`;
  },
};

export const getTopics = async () => {
  try {
    const apiResponse = await apiClient.get(RESOURCE_ENDPOINTS.getTopicsEndpoint());
    return apiResponse.data;
  } catch (error: any) {
    console.error("Error fetching topics:", error.response?.data?.message || error);
    throw new Error("Failed to fetch topics.");
  }
};

export const getTopicTags = async (topic: string) => {
  try {
    const apiResponse = await apiClient.get(RESOURCE_ENDPOINTS.getTagsEndpoint(topic));
    return apiResponse.data;
  } catch (error: any) {
    console.error(
      `Error fetching tags for topic ${topic}:`,
      error.response?.data?.message || error
    );
    throw new Error("Failed to fetch topic tags.");
  }
};
