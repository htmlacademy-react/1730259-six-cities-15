import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../../mocks/offers';
import { FullOffer, Offer, Offers } from '../../types/offers';
import { getOfferId, setCurrentOffer, updateOffers } from './action';
import { fullOffers } from '../../mocks/full-offers';

type InitialState = {
  offers: Offers;
  fullOffer: FullOffer[];
  currentOfferId: Offer['id'] | null;
};

const initialState: InitialState = {
  offers: offers,
  fullOffer: fullOffers,
  currentOfferId: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateOffers, (state) => {
      state.offers = offers;
    })
    .addCase(getOfferId, (state) => {
      state.fullOffer = fullOffers;
    })
    .addCase(setCurrentOffer, (state, action) => {
      state.currentOfferId = action.payload;
    })
});

export {reducer};
