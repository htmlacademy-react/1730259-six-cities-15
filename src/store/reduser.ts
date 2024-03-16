import { createReducer } from '@reduxjs/toolkit';
import { FullOffer, Offer, Offers } from '../types/offers';
import { loadOfferId, getCurrentOffer, loadOffers, requireAuthorization, loadReviews, loadNearbyOffers, loadFavoriteOffers, loadUserData } from './action';
import { AuthorizationStatus } from '../const';
import { Reviews } from '../types/reviews';
import { UserData } from '../types/user-data';

type InitialState = {
  offers: Offers;
  fullOffer: FullOffer | null;
  currentOfferId: Offer['id'] | null;
  authorizationStatus: AuthorizationStatus;
  reviews: Reviews;
  nearbyOffers: Offers;
  favoriteOffers: Offers;
  userData: UserData | null;
};

const initialState: InitialState = {
  offers: [],
  fullOffer: null,
  currentOfferId: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  reviews: [],
  nearbyOffers: [],
  favoriteOffers: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOfferId, (state, action) => {
      state.fullOffer = action.payload;
    })
    .addCase(getCurrentOffer, (state, action) => {
      state.currentOfferId = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    });
});

export {reducer};
