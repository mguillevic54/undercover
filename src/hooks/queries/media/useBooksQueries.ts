import { getAllPopular, getAllRecentlyConsulted, getAllRecommended } from '@api/media/BookAPI';
import { TBookOverview } from '@customTypes/response/overview/BookOverview';
import Nullable from '@customTypes/utils/Nullable';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { bookQKey } from 'src/utils/constants/ReactQueryKeys';

export const usePopularBookQuery = (
  genreId?: Nullable<number>,
  type?: Nullable<string>,
  options?: UseQueryOptions<Readonly<TBookOverview[]>>
) =>
  useQuery({
    ...options,
    queryKey: bookQKey.popular(genreId, type),
    queryFn: () => getAllPopular(genreId, type)
  });

export const useRecommendedBookQuery = (
  genreId?: Nullable<number>,
  type?: Nullable<string>,
  options?: UseQueryOptions<Readonly<TBookOverview[]>>
) =>
  useQuery({
    ...options,
    queryKey: bookQKey.recommended(genreId, type),
    queryFn: () => getAllRecommended(genreId, type)
  });

export const useRecentlyConsultedBookQuery = (
  genreId?: Nullable<number>,
  type?: Nullable<string>,
  options?: UseQueryOptions<Readonly<TBookOverview[]>>
) =>
  useQuery({
    ...options,
    queryKey: bookQKey.recentlyConsulted(genreId, type),
    queryFn: () => getAllRecentlyConsulted(genreId, type)
  });
