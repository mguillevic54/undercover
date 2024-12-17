import { getGenresByMediaTypeOrByBookType } from '@api/referenceData/GenreAPI';
import { TGenreDTO } from '@customTypes/response/referenceData/GenreDTO';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { genreQKey } from 'src/utils/constants/ReactQueryKeys';

/* Query options */

const cacheOptions = { cacheTime: Infinity, staleTime: Infinity };

/* Query hooks */

export const useGenresQuery = (mediaType: string, options?: UseQueryOptions<Readonly<TGenreDTO[]>>) =>
  useQuery({
    ...options,
    queryKey: genreQKey.list(mediaType),
    queryFn: () => getGenresByMediaTypeOrByBookType(mediaType, null),
    ...cacheOptions
  });

export const useGenresByBookTypeQuery = (bookType: string, options?: UseQueryOptions<Readonly<TGenreDTO[]>>) =>
  useQuery({
    ...options,
    queryKey: genreQKey.bookTypeList(bookType),
    queryFn: () => getGenresByMediaTypeOrByBookType(null, bookType),
    ...cacheOptions
  });
