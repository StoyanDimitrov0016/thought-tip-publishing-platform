import apiClient from "../axiosInstance";

// TODO: export type to a separate type file:
export type LikeResourceType = "article" | "comment" | "reply";

export async function like(itemId: string, itemType: LikeResourceType) {
  await apiClient.post(`/likes/${itemType}/${itemId}`);
}

export async function unlike(itemId: string, itemType: LikeResourceType) {
  await apiClient.delete(`/likes/${itemType}/${itemId}`);
}
