import { AxiosInstance } from 'axios';
import { store } from '../store';
import { AuthorizationStatus, Status } from '../const';
import { UserData } from './user-data';
import { FullOffer, Offer, Offers } from './offers';
import { Reviews } from './reviews';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type Extra = {
  // dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

// export type UserProcess = Pick<State, 'authorizationStatus' | 'userData'>;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
}

export type OffersProcess = {
  offers: Offers;
  offersLoadingStatus: Status;
  fullOffer: FullOffer | null;
  fullOfferLoadingStatus: Status;
  currentOfferId: Offer['id'] | null;
  nearByOffers: Offers;
  nearByOffersLoadingStatus: Status;
}

export type FavoriteProcess = {
  favoriteOffers: Offers;
  favoriteOffersLoadingStatus: Status;
}

export type ReviewProcess = {
  reviews: Reviews;
  reviewsLoadingStatus: Status;
}
