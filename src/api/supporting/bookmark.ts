import apiClient from "../axiosInstance";

export async function bookmark(articleId: string): Promise<void> {
  await apiClient.post(`/bookmarks/${articleId}`);
}

export async function unbookmark(articleId: string): Promise<void> {
  await apiClient.delete(`/bookmarks/${articleId}`);
}

export async function getBookmarkedArticles() {
  const { data: bookmarks } = await apiClient.get("/bookmarks");
  return bookmarks;
}
