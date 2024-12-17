import { MedeashareHttpClient } from '@api/client/MedeashareHttpClient';
import { TGenreDTO } from '@customTypes/response/referenceData/GenreDTO';
import Nullable from '@customTypes/utils/Nullable';
import { AxiosError } from 'axios';

const genreUrl = '/genres';

/**
 * Get all media genres depending on media type
 * @returns all media genres depending on media type
 */
export const getGenresByMediaTypeOrByBookType = (
  mediaType: Nullable<string>,
  bookType: Nullable<string>
): Promise<readonly TGenreDTO[]> =>
  MedeashareHttpClient.get(`${genreUrl}`, { params: { mediaType, bookType } })
    .then((res) => {
      return res.data;
    })
    .catch((err: AxiosError) => {
      console.log('error', err.request);
    });
