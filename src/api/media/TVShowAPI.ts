import { MedeashareHttpClient } from '@api/client/MedeashareHttpClient';
import { TScreenPlayOverview } from '@customTypes/response/overview/ScreenPlayOverview';
import Nullable from '@customTypes/utils/Nullable';
import { AxiosError } from 'axios';

const tvShowsUrl = '/tv-shows';

/**
 * Get all popular tv shows
 * @param genreId used to filter tv shows
 * @returns all popular tv shows
 */
export const getAllPopular = (genreId: Nullable<number>): Promise<readonly TScreenPlayOverview[]> =>
  MedeashareHttpClient.get(`${tvShowsUrl}/popular`, { params: { genreId } })
    .then((res) => {
      return res.data;
    })
    .catch((err: AxiosError) => {
      console.log('error', err.request);
    });

/**
 * Get all recommended tv shows for connected user
 * @param genreId used to filter tv shows
 * @returns all recommended tv shows for connected user
 */
export const getAllRecommended = (genreId: Nullable<number>): Promise<readonly TScreenPlayOverview[]> =>
  MedeashareHttpClient.get(`${tvShowsUrl}/recommended`, { params: { genreId } })
    .then((res) => {
      return res.data;
    })
    .catch((err: AxiosError) => {
      console.log('error', err.request);
    });

/**
 * Get all recently consulted tv shows for connected user
 * @param genreId used to filter tv shows
 * @returns all recently consulted for connected user
 */
export const getAllRecentlyConsulted = (genreId: Nullable<number>): Promise<readonly TScreenPlayOverview[]> =>
  MedeashareHttpClient.get(`${tvShowsUrl}/recently-consulted`, { params: { genreId } })
    .then((res) => {
      return res.data;
    })
    .catch((err: AxiosError) => {
      console.log('error', err.request);
    });
