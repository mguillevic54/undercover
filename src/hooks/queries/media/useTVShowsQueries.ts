import { getAllPopular, getAllRecentlyConsulted, getAllRecommended } from '@api/media/TVShowAPI';
import { TScreenPlayOverview } from '@customTypes/response/overview/ScreenPlayOverview';
import Nullable from '@customTypes/utils/Nullable';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { tvShowQKey } from 'src/utils/constants/ReactQueryKeys';

export const usePopularTVShowQuery = (
  genreId?: Nullable<number>,
  options?: UseQueryOptions<Readonly<TScreenPlayOverview[]>>
) =>
  useQuery({
    ...options,
    queryKey: tvShowQKey.popular(genreId),
    queryFn: () => getAllPopular(genreId)
  });

export const useRecommendedTVShowQuery = (
  genreId?: Nullable<number>,
  options?: UseQueryOptions<Readonly<TScreenPlayOverview[]>>
) =>
  useQuery({
    ...options,
    queryKey: tvShowQKey.recommended(genreId),
    queryFn: () => getAllRecommended(genreId)
  });

export const useRecentlyConsultedTVShowQuery = (
  genreId?: Nullable<number>,
  options?: UseQueryOptions<Readonly<TScreenPlayOverview[]>>
) =>
  useQuery({
    ...options,
    queryKey: tvShowQKey.recentlyConsulted(genreId),
    queryFn: () => getAllRecentlyConsulted(genreId)
  });
