import { TOverview } from './Overview';

export interface TBookOverview extends TOverview {
  googleBooksId: number;
  bookType: string;
}
