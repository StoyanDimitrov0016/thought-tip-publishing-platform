import { useMutation, useQueryClient } from "@tanstack/react-query";

interface UseToggleProps {
  resourceId: string;
  performAction: () => Promise<void>;
  undoAction: () => Promise<void>;
  initialState: boolean;
  hasField: string;
  canField: string;
  invalidationKeys: string[][];
  actionsPath?: string[];
}

function getNestedValue(obj: any, path: string[]) {
  return path.reduce((acc, key) => (acc && acc[key] ? acc[key] : undefined), obj);
}

function setNestedValue(obj: any, path: string[], updatedValue: any) {
  if (!obj) return obj;
  const newObj = { ...obj };
  let current: any = newObj;
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    current[key] = { ...current[key] };
    current = current[key];
  }
  current[path[path.length - 1]] = updatedValue;
  return newObj;
}

export default function useToggle({
  resourceId,
  performAction,
  undoAction,
  initialState,
  hasField,
  canField,
  invalidationKeys,
  actionsPath = ["actions"],
}: UseToggleProps) {
  const queryClient = useQueryClient();
  const mutationFn = initialState ? undoAction : performAction;

  return useMutation({
    mutationFn,
    onMutate: async () => {
      console.log("⚡ Full Query Cache Before Mutation:");
      console.log(queryClient.getQueryCache().getAll());

      await Promise.all(
        invalidationKeys.map((key) => queryClient.cancelQueries({ queryKey: key }))
      );

      const prevSnapshotMap = new Map<string[], unknown>();

      invalidationKeys.forEach((key, index) => {
        console.log(`🔍 Checking Key [${index}]:`, key);

        // ✅ Find the first matching query
        const matchingQueries = queryClient.getQueriesData({ queryKey: key, exact: false });

        console.log(
          `🔍 Matching Queries for [${index}]:`,
          JSON.stringify(matchingQueries, null, 2)
        );

        if (matchingQueries.length > 0) {
          prevSnapshotMap.set(key, matchingQueries[0][1]); // Take first matching result
        }
      });

      invalidationKeys.forEach((key, index) => {
        console.log(`🔍 Checking Cached Data for Key [${index}]:`, queryClient.getQueryData(key));

        queryClient.setQueryData(key, (oldData: any) => {
          if (!Array.isArray(oldData)) return oldData;

          return oldData.map((resource) => {
            if (resource.id === resourceId) {
              console.log("🔄 Updating Resource:", resource);
              const actions = getNestedValue(resource, actionsPath);
              if (!actions) return resource;

              const updatedActions = {
                ...actions,
                [canField]: !actions[canField],
                [hasField]: !actions[hasField],
              };

              return setNestedValue(resource, actionsPath, updatedActions);
            }
            return resource;
          });
        });
      });

      return { prevSnapshotMap };
    },

    onError: (_, __, context) => {
      console.log("❌ Error Occurred - Restoring Previous State:", context?.prevSnapshotMap);

      if (context?.prevSnapshotMap) {
        context.prevSnapshotMap.forEach((data, key) => {
          if (data !== undefined) {
            queryClient.setQueryData(key, data);
          }
        });
      }
    },

    onSettled: () => {
      console.log("✅ Mutation Settled - Invalidating Queries...");
      invalidationKeys.forEach((key) => queryClient.invalidateQueries({ queryKey: key }));
    },
  });
}
