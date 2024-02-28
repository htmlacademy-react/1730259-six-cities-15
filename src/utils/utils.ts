import { SortType } from '../const';
import { Offers } from '../types/offers';

export const capitalize = (item: string | null): string | null => item !== null ? item.charAt(0).toUpperCase() + item.substring(1) : null;

export function getRandomArrayItem<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}

export const getCurrentOffers = (location: string, offers: Offers): Offers => offers.filter((offer) => location.toLowerCase() === offer.city.name.toLowerCase());

export const convertRatingToPercentage = (item: number) => `${String(Math.round(item) / 0.05)}%`;

export const sortingType = {
  [SortType.Popular]: (offers: Offers) => [...offers],
  [SortType.HightPrice]: (offers: Offers) => offers.slice().sort((offerFirst, offerSecond) => offerSecond.price - offerFirst.price),
  [SortType.LowPrice]: (offers: Offers) => offers.slice().sort((offerFirst, offerSecond) => offerFirst.price - offerSecond.price),
  [SortType.Rating]: (offers: Offers) => offers.slice().sort((offerFirst, offerSecond) => offerSecond.rating - offerFirst.rating)
};
