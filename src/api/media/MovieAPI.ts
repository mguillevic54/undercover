import { MedeashareHttpClient } from '@api/client/MedeashareHttpClient';
import { TMovieDTO } from '@customTypes/response/MovieDTO';
import { TScreenPlayOverview } from '@customTypes/response/overview/ScreenPlayOverview';
import Nullable from '@customTypes/utils/Nullable';
import { AxiosError } from 'axios';

const moviesUrl = '/movies';

/**
 * Get all popular movies
 * @param genreId used to filter movies
 * @returns all popular movies
 */
export const getAllPopular = (genreId: Nullable<number>): Promise<readonly TScreenPlayOverview[]> =>
  MedeashareHttpClient.get(`${moviesUrl}/popular`, { params: { genreId } })
    .then((res) => {
      return res.data;
    })
    .catch((err: AxiosError) => {
      console.log('error', err.request);
    });

/**
 * Get all recommended movies for connected user
 * @param genreId used to filter movies
 * @returns all recommended movies for connected user
 */
export const getAllRecommended = (genreId: Nullable<number>): Promise<readonly TScreenPlayOverview[]> =>
  MedeashareHttpClient.get(`${moviesUrl}/recommended`, { params: { genreId } })
    .then((res) => {
      return res.data;
    })
    .catch((err: AxiosError) => {
      console.log('error', err.request);
    });

/**
 * Get all recently consulted movies for connected user
 * @param genreId used to filter movies
 * @returns all recently consulted for connected user
 */
export const getAllRecentlyConsulted = (genreId: Nullable<number>): Promise<readonly TScreenPlayOverview[]> =>
  MedeashareHttpClient.get(`${moviesUrl}/recently-consulted`, { params: { genreId } })
    .then((res) => {
      return res.data;
    })
    .catch((err: AxiosError) => {
      console.log('error', err.request);
    });

/**
 * Find movie by tmdb id
 * @param tmdbId of the movie
 * @returns the movie
 */
export const findByTmdbId = (tmdbId: number): Promise<TMovieDTO> =>
  MedeashareHttpClient.get(`${moviesUrl}/${tmdbId}`)
    .then((res) => {
      return res.data;
    })
    .catch((err: AxiosError) => {
      console.log('error', err.request);
    });
