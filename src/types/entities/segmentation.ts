import { BaseEntity } from "../common";

export interface Segmentation extends BaseEntity {
  name: string;
  slug: string;
  description: string;
}

export interface Category extends Segmentation {}

export interface Topic extends Segmentation {
  categoryId: string;
}

export interface Tag extends Segmentation {
  topicId: string;
}
