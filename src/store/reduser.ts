import { createReducer } from '@reduxjs/toolkit';
import { FullOffer, Offer, Offers } from '../types/offers';
import { loadOfferId, getCurrentOffer, loadOffers, requireAuthorization, loadReviews, loadNearbyOffers } from './action';
import { AuthorizationStatus } from '../const';
import { Reviews } from '../types/reviews';

type InitialState = {
  offers: Offers;
  fullOffer: FullOffer | null;
  currentOfferId: Offer['id'] | null;
  authorizationStatus: AuthorizationStatus;
  reviews: Reviews;
  nearbyOffers: Offers;
};

const initialState: InitialState = {
  offers: [],
  fullOffer: null,
  currentOfferId: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  reviews: [],
  nearbyOffers: [],
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
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    });
});

export {reducer};
