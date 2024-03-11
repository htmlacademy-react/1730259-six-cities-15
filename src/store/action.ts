import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';
import { FullOffer, Offer, Offers } from '../types/offers';

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export const updateOffers = createAction<Offers>('offers/updateOffers');

export const getCurrentOffer = createAction<null | Offer['id']>('offers/getCurrentOffer');

export const getOfferId = createAction<FullOffer[]>('offers/getOfferId');
