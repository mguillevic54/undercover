import { TOverview } from './Overview';

export interface TMediaOverview extends TOverview {
  tmdbId?: number;
  googleBooksId?: string;
}
