import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { FullOffer, Offer, Offers } from '../types/offers';

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export const loadOffers = createAction<Offers>('offers/loadOffers');

export const getCurrentOffer = createAction<null | Offer['id']>('offers/getCurrentOffer');

export const loadOfferId = createAction<FullOffer[]>('offers/loadOfferId');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
