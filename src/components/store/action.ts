import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offers';

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export const updateOffers = createAction('offers/updateOffers');
export const setCurrentOffer = createAction(
  'offers/setCurrentOffer',
  (currentOfferId: null | Offer['id']) => ({payload: currentOfferId})
);

export const getOfferId = createAction('offers/getOfferId');
