import { getAllRecentlyConsulted, getAllRecommended } from '@api/media/MediaAPI';
import { TMediaOverview } from '@customTypes/response/overview/MediaOverview';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { mediaQKey } from 'src/utils/constants/ReactQueryKeys';

export const useRecommendedMediaQuery = (options?: UseQueryOptions<Readonly<TMediaOverview[]>>) =>
  useQuery({
    ...options,
    queryKey: mediaQKey.recommended(),
    queryFn: () => getAllRecommended()
  });

export const useRecentlyConsultedMediaQuery = (options?: UseQueryOptions<Readonly<TMediaOverview[]>>) =>
  useQuery({
    ...options,
    queryKey: mediaQKey.recentlyConsulted(),
    queryFn: () => getAllRecentlyConsulted()
  });
