import { offers } from './offers';

export const getOffersFavorites = () => offers.filter((offer) => offer.isFavorite);
