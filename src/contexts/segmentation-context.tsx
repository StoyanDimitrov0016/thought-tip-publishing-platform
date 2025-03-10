import { useQuery, useQueries } from "@tanstack/react-query";
import React, { createContext, useContext, useMemo } from "react";
import { Category, Segmentation, Tag, Topic } from "../types/entities/segmentation";
import { getCategories, getTopics, getTags } from "../api/core/segmentation";
import { QUERY_KEYS, QUERY_STALE_TIMES } from "../config/query-keys";

interface SegmentationContextType {
  segmentation: Segmentation;
  isLoading: boolean;
}

interface SegmentationProviderProps {
  children: React.ReactNode;
}

const SegmentationContext = createContext<SegmentationContextType | undefined>(undefined);

export function SegmentationProvider({ children }: SegmentationProviderProps) {
  const { data: categories, isLoading: isCategoriesLoading } = useQuery<Category[]>({
    queryKey: [QUERY_KEYS.CATEGORIES],
    queryFn: getCategories,
    staleTime: QUERY_STALE_TIMES.SEGMENTATION,
  });

  const topicsQueries = useQueries({
    queries:
      categories?.map((category) => ({
        queryKey: [QUERY_KEYS.TOPICS, category.id],
        queryFn: () => getTopics(category.id),
        staleTime: QUERY_STALE_TIMES.SEGMENTATION,
      })) || [],
  });

  const allTopics: Topic[] = topicsQueries.flatMap((query) => query.data ?? []);

  const tagsQueries = useQueries({
    queries:
      allTopics.map((topic) => ({
        queryKey: [QUERY_KEYS.TAGS, topic.id],
        queryFn: () => getTags(topic.categoryId, topic.id),
        staleTime: QUERY_STALE_TIMES.SEGMENTATION,
      })) || [],
  });

  const allTags: Tag[] = tagsQueries.flatMap((query) => query.data ?? []);

  const segmentation: Segmentation = useMemo(() => {
    if (!categories) return { categories: [] };

    return {
      categories: categories.map((category) => ({
        ...category,
        topics: allTopics
          .filter((topic) => topic.categoryId === category.id)
          .map((topic) => ({
            ...topic,
            tags: allTags.filter((tag) => tag.topicId === topic.id),
          })),
      })),
    };
  }, [categories, allTopics, allTags]);

  const isLoading =
    isCategoriesLoading ||
    topicsQueries.some((query) => query.isLoading) ||
    tagsQueries.some((query) => query.isLoading);

  return (
    <SegmentationContext.Provider value={{ segmentation, isLoading }}>
      {children}
    </SegmentationContext.Provider>
  );
}

export function useSegmentationContext() {
  const context = useContext(SegmentationContext);
  if (!context) {
    throw new Error("useSegmentationContext must be used within a SegmentationProvider");
  }
  return context;
}
