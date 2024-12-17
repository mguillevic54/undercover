import Nullable from '@customTypes/utils/Nullable';

/* Media types */
export const mediaTypeQKey = {
  mainKey: 'media-type',
  list: () => [mediaTypeQKey.mainKey, 'list']
} as const;

/* Genres */
export const genreQKey = {
  mainKey: 'genre',
  list: (mediaType: string) => [genreQKey.mainKey, mediaType, 'list'],
  bookTypeList: (bookType: string) => [genreQKey.mainKey, bookType, 'bookTypeList']
} as const;

/* Book types */
export const bookTypeQKey = {
  mainKey: 'book-type',
  list: () => [bookTypeQKey.mainKey, 'list']
} as const;

/* Media */
export const mediaQKey = {
  mainKey: 'media',
  recommended: () => [mediaQKey.mainKey, 'recommended'],
  recentlyConsulted: () => [mediaQKey.mainKey, 'recently-consulted']
} as const;

/* Movies */
export const movieQKey = {
  mainKey: 'movie',
  detail: (id: number) => [movieQKey.mainKey, id, 'detail'],
  popular: (genreId: Nullable<number>) => [movieQKey.mainKey, genreId, 'popular'],
  recommended: (genreId: Nullable<number>) => [movieQKey.mainKey, genreId, 'recommended'],
  recentlyConsulted: (genreId: Nullable<number>) => [movieQKey.mainKey, genreId, 'recently-consulted']
} as const;

/* TV SHows */
export const tvShowQKey = {
  mainKey: 'tv-show',
  popular: (genreId: Nullable<number>) => [tvShowQKey.mainKey, genreId, 'popular'],
  recommended: (genreId: Nullable<number>) => [tvShowQKey.mainKey, genreId, 'recommended'],
  recentlyConsulted: (genreId: Nullable<number>) => [tvShowQKey.mainKey, genreId, 'recently-consulted']
} as const;

/* Books */
export const bookQKey = {
  mainKey: 'book',
  popular: (genreId: Nullable<number>, type: Nullable<string>) => [bookQKey.mainKey, genreId, type, 'popular'],
  recommended: (genreId: Nullable<number>, type: Nullable<string>) => [bookQKey.mainKey, genreId, type, 'recommended'],
  recentlyConsulted: (genreId: Nullable<number>, type: Nullable<string>) => [
    bookQKey.mainKey,
    genreId,
    type,
    'recently-consulted'
  ],
  newComics: (genreId: Nullable<number>) => [bookQKey.mainKey, genreId, 'new-comics'],
  newManga: (genreId: Nullable<number>) => [bookQKey.mainKey, genreId, 'new-manga'],
  newNovels: (genreId: Nullable<number>) => [bookQKey.mainKey, genreId, 'new-novels'],
  newYoungAdultNovels: (genreId: Nullable<number>) => [bookQKey.mainKey, genreId, 'new-young-adult-novels'],
  newLiteraryCriticism: (genreId: Nullable<number>) => [bookQKey.mainKey, genreId, 'new-literary-criticism']
} as const;
