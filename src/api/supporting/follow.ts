import apiClient from "../axiosInstance";

export async function follow(followingId: string) {
  await apiClient.post(`/followings/${followingId}`);
}

export async function unfollow(followingId: string) {
  await apiClient.delete(`/followings/${followingId}`);
}
