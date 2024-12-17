import { MedeashareHttpClient } from '@api/client/MedeashareHttpClient';
import { TBookOverview } from '@customTypes/response/overview/BookOverview';
import Nullable from '@customTypes/utils/Nullable';
import { AxiosError } from 'axios';

const booksUrl = '/books';

/**
 * Get all popular books
 * @param genreId used to filter books
 * @param bookType used to filter books
 * @returns all popular books
 */
export const getAllPopular = (
  genreId: Nullable<number>,
  bookType: Nullable<string>
): Promise<readonly TBookOverview[]> =>
  MedeashareHttpClient.get(`${booksUrl}/popular`, { params: { genreId, type: bookType } })
    .then((res) => {
      return res.data;
    })
    .catch((err: AxiosError) => {
      console.log('error', err.request);
    });

/**
 * Get all recommended books for connected user
 * @param genreId used to filter books
 * @param bookType used to filter books
 * @returns all recommended books for connected user
 */
export const getAllRecommended = (
  genreId: Nullable<number>,
  bookType: Nullable<string>
): Promise<readonly TBookOverview[]> =>
  MedeashareHttpClient.get(`${booksUrl}/recommended`, { params: { genreId, bookType } })
    .then((res) => {
      return res.data;
    })
    .catch((err: AxiosError) => {
      console.log('error', err.request);
    });

/**
 * Get all recently consulted books for connected user
 * @param genreId used to filter books
 * @param bookType used to filter books
 * @returns all recently consulted for connected user
 */
export const getAllRecentlyConsulted = (
  genreId: Nullable<number>,
  bookType: Nullable<string>
): Promise<readonly TBookOverview[]> =>
  MedeashareHttpClient.get(`${booksUrl}/recently-consulted`, { params: { genreId, bookType } })
    .then((res) => {
      return res.data;
    })
    .catch((err: AxiosError) => {
      console.log('error', err.request);
    });
