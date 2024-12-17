import { TGenreDTO } from '@customTypes/response/referenceData/GenreDTO';
import { TOverview } from './overview/Overview';

export interface TMediaDTO extends TOverview {
  description: string;
  releaseDate: string;
  genres: TGenreDTO[];
}
