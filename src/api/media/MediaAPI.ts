import { MedeashareHttpClient } from '@api/client/MedeashareHttpClient';
import { TMediaOverview } from '@customTypes/response/overview/MediaOverview';
import { AxiosError } from 'axios';

const mediaUrl = '/media';

/**
 * Get all recommended media for connected user
 * @returns all recommended media for connected user
 */
export const getAllRecommended = (): Promise<readonly TMediaOverview[]> =>
  MedeashareHttpClient.get(`${mediaUrl}/recommended`)
    .then((res) => {
      return res.data;
    })
    .catch((err: AxiosError) => {
      console.log('error', err.request);
    });

/**
 * Get all recently consulted media for connected user
 * @returns all recently consulted for connected user
 */
export const getAllRecentlyConsulted = (): Promise<readonly TMediaOverview[]> =>
  MedeashareHttpClient.get(`${mediaUrl}/recently-consulted`)
    .then((res) => {
      return res.data;
    })
    .catch((err: AxiosError) => {
      console.log('error', err.request);
    });
