import { createReducer } from '@reduxjs/toolkit';
import { FullOffer, Offer, Offers } from '../types/offers';
import { loadOfferId, getCurrentOffer, loadOffers, requireAuthorization } from './action';
import { AuthorizationStatus } from '../const';

type InitialState = {
  offers: Offers;
  fullOffer: FullOffer | null;
  currentOfferId: Offer['id'] | null;
  authorizationStatus: AuthorizationStatus;
};

const initialState: InitialState = {
  offers: [],
  fullOffer: null,
  currentOfferId: null,
  authorizationStatus: AuthorizationStatus.Unknown,
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
    });
});

export {reducer};
