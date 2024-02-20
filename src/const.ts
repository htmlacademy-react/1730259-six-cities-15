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

export const OFFERS_COUNT = 312;
