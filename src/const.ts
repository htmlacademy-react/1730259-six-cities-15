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

export enum MouseEvent {
  MouseEnter = 'mouseenter',
  MouseLeave = 'mouseleave'
}

export enum LoginCredentials {
  Email = 'email',
  Password = 'password'
}

export const LeafletParameters = {
  TILE_LAYER: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const URL_MARKER_CURRENT = '/img/pin-active.svg';

export const EMAIL_REG_EXP = /^[a-zA-Zа-яёА-ЯЁ0-9]+([._-][a-zA-Zа-яёА-ЯЁ0-9]+)*@[a-zA-Zа-яёА-ЯЁ0-9]+([.-][a-zA-Zа-яёА-ЯЁ0-9]+)*\.[a-zA-Zа-яёА-ЯЁ]{2,6}$/;
export const PASSWORD_REG_EXP = /^(?=.*[A-Za-zА-Яа-я])(?=.*\d)[A-Za-zА-Яа-я\d]{2,}$/;

export const STAR_NAME = 'rating';

export const MIN_VALUE_REVIEW_LENGHT = 50;

export const MAX_VALUE_REVIEW_LENGHT = 300;

export const MAX_REVIEWS_COUNT = 10;

export const MAX_IMAGES_OFFER = 6;

export const SCROLL_CLASS_NAME = 'cities';

export enum NameSpace {
  User = 'USER',
  Offers = 'OFFERS',
  City = 'CITY',
  Reviews = 'REVIEWS',
  Favorites = 'FAVORITES',
}

export enum Status {
  Idle = 'Idle',
  Loading = 'Loading',
  Success = 'Success',
  Failed = 'Failed',
}

export const BASE_URL = 'https://15.design.htmlacademy.pro';

export const REQUEST_TIMEOUT = 5000;
