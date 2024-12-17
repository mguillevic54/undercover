import { findByTmdbId, getAllPopular, getAllRecentlyConsulted, getAllRecommended } from '@api/media/MovieAPI';
import { TMovieDTO } from '@customTypes/response/MovieDTO';
import { TScreenPlayOverview } from '@customTypes/response/overview/ScreenPlayOverview';
import Nullable from '@customTypes/utils/Nullable';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { movieQKey } from 'src/utils/constants/ReactQueryKeys';

export const usePopularMovieQuery = (
  genreId?: Nullable<number>,
  options?: UseQueryOptions<Readonly<TScreenPlayOverview[]>>
) =>
  useQuery({
    ...options,
    queryKey: movieQKey.popular(genreId),
    queryFn: () => getAllPopular(genreId)
  });

export const useRecommendedMovieQuery = (
  genreId?: Nullable<number>,
  options?: UseQueryOptions<Readonly<TScreenPlayOverview[]>>
) =>
  useQuery({
    ...options,
    queryKey: movieQKey.recommended(genreId),
    queryFn: () => getAllRecommended(genreId)
  });

export const useRecentlyConsultedMovieQuery = (
  genreId?: Nullable<number>,
  options?: UseQueryOptions<Readonly<TScreenPlayOverview[]>>
) =>
  useQuery({
    ...options,
    queryKey: movieQKey.recentlyConsulted(genreId),
    queryFn: () => getAllRecentlyConsulted(genreId)
  });

export const useMovieQuery = (tmdbId: number, options?: UseQueryOptions<Readonly<TMovieDTO>>) =>
  useQuery({
    ...options,
    queryKey: movieQKey.detail(tmdbId),
    queryFn: () => findByTmdbId(tmdbId)
  });
