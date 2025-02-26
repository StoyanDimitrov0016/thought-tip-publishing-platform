// Authentication Forms
export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData extends LoginData {
  username: string;
  repass: string;
}

// Article Forms
export interface ArticleCreateData {
  title: string;
  thumbnail: string;
  preview: string;
  content: string;
  categoryId: string;
  topicId: string;
  tagId: string;
  charge: number;
  discussion: boolean;
}
