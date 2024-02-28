export enum AppRoute {
  Root = '/',
  Login = '/login',
  Offer = '/offer/',
  Favorites = '/favorites',
  PageNotFound = '/404',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Cities {
  Paris = 'paris',
  Cologne = 'cologne',
  Brussels = 'brussels',
  Amsterdam = 'amsterdam',
  Hamburg = 'hamburg',
  Dusseldorf = 'dusseldorf',
}

export const CITY = 'city';

export const DEFAULT_CITY = Cities.Paris;

export enum SortType {
  Popular = 'Popular',
  LowPrice = 'Price: low to high',
  HightPrice = 'Price: high to low',
  Rating = 'Top rated first'
}

export const DEFAULT_SORT = SortType.Popular;

export const SORT_TYPE = 'sortType';

export const STARS = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly',
] as const;

export const STAR_NAME = 'rating';

export const MIN_VALUE_REVIEW_LENGHT = 50;

export const MAX_VALUE_REVIEW_LENGHT = 300;

export const MAX_REVIEWS_COUNT = 10;
