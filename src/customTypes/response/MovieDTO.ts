import { TMediaDTO } from './MediaDTO';
import { TCelebrityOverview } from './overview/CelebrityOverview';
import { TScreenPlayOverview } from './overview/ScreenPlayOverview';

export interface TMovieDTO extends TMediaDTO {
  tmdbId: number;
  duration: number;
  cast: TCelebrityOverview[];
  crew: TCelebrityOverview[];
  sagaMovies: TScreenPlayOverview[];
}
