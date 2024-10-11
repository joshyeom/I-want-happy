import { useQuery } from '@tanstack/react-query';
import { fetchImage } from '../utils/fetchImage';

export const useFetchImages = (folderPath: string) => {
  return useQuery({
    queryKey: ['images', folderPath],
    queryFn: () => fetchImage(folderPath),
    staleTime: Infinity,
  });
};
