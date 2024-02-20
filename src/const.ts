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
  PARIS = 'paris',
  COLONGE = 'cologne',
  BRUSSELS = 'brussels',
  AMSTERDAM = 'amsterdam',
  HAMBURG = 'hamburg',
  DUSSELDORF = 'dusseldorf',
}

export const DEFAULT_CITIES = Cities.PARIS;

export enum SortType {
  Popular = 'Popular',
  LowPrice = 'Price: low to high',
  HightPrice = 'Price: high to low',
  Rating = 'Top rated first'
}

export const DEFAULT_SORT = SortType.Popular;

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

export const OFFERS_COUNT = 312;
