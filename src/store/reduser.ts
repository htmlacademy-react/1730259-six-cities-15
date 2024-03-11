import { createReducer } from '@reduxjs/toolkit';
import { FullOffer, Offer, Offers } from '../types/offers';
import { getOfferId, getCurrentOffer, updateOffers } from './action';

type InitialState = {
  offers: Offers;
  fullOffer: FullOffer[];
  currentOfferId: Offer['id'] | null;
};

const initialState: InitialState = {
  offers: [],
  fullOffer: [],
  currentOfferId: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(getOfferId, (state, action) => {
      state.fullOffer = action.payload;
    })
    .addCase(getCurrentOffer, (state, action) => {
      state.currentOfferId = action.payload;
    });
});

export {reducer};
