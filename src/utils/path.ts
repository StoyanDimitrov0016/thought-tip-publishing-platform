import { Nullable } from "../types/common";

const defaultAvatarPath = "https://placehold.co/80";
const defaultThumbnailPath = "https://placehold.co/400x250";

export const getAvatarPath = (avatar: Nullable<string>) => avatar || defaultAvatarPath;
export const getThumbnailPath = (thumbnail: Nullable<string>) => thumbnail || defaultThumbnailPath;

export const getAuthorPath = (authorId: string) => `/authors/${authorId}`;
export const getArticlePath = (articleId: string) => `/articles/${articleId}`;
