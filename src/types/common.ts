export type NullableString = string | null;

export type Nullable<T> = T | null;

export interface BaseEntity {
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export interface BaseInteractions {
  canEdit: boolean;
  canDelete: boolean;
}
