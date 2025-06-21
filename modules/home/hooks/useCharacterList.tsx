import { useInfiniteQuery } from "@tanstack/react-query";
import { getCharacters } from "../services";

export const useCharacterList = () => {
  /**
   * WIP: The time was over to make the infinite scroll!
   */
  const query = useInfiniteQuery({
    queryKey: ["character-list"],
    queryFn: async ({ pageParam = "/character" }) => {
      return await getCharacters(pageParam);
    },
    initialPageParam: "/character",
    getNextPageParam: (lastPage) => lastPage.nextPageUrl ?? undefined,
  });

  const flattenedData = query.data?.pages?.flatMap((page) => page.data) ?? [];

  return {
    data: flattenedData ?? [],
    fetchNextPage: query.fetchNextPage,
    hasNextPage: query.hasNextPage,
    isFetchingNextPage: query.isFetchingNextPage,
    isLoading: query.isLoading || query.isFetchingNextPage,
  };
};
