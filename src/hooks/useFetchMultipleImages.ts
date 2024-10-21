import { useQueries } from '@tanstack/react-query';
import { fetchImage } from '../utils/fetchImage';

export const useFetchMultipleImages = (folderPaths: string[]) => {
  return useQueries({
    queries: folderPaths.map((folderPath) => ({
      queryKey: ['images', folderPath],
      queryFn: () => fetchImage(folderPath),
      staleTime: Infinity,
    })),
  });
};
