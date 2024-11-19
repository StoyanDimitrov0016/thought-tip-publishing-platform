interface IBaseEntry {
  id: string;
  createdAt: string; // ISO 8601 format
  updatedAt: string; // ISO 8601 format
}

// -- Status options for segmentation entries
enum SegmentationStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  IN_DEVELOPMENT = "in-development",
  ARCHIVED = "archived",
}

// -- Segmentation Partial Interface
interface ISegmentationPartial {
  id: string; // Reference ID
  slug: string; // Slug for the referenced entry
}

interface ISegmentationEntryBase extends IBaseEntry {
  name: string;
  slug: string;
  description: string;
  status: SegmentationStatus;
}

export interface ICategoryEntry extends ISegmentationEntryBase {
  popularity: number;
  topicPartials: ISegmentationPartial[];
}

export interface ITopicEntry extends ISegmentationEntryBase {
  categoryId: string;
  popularity: number;
  tagPartials: ISegmentationPartial[];
}

export interface ITagEntry extends ISegmentationEntryBase {
  topicId: string;
}
