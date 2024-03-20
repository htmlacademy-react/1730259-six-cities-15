import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';
// import { Offer } from '../types/offers';

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

// export const getCurrentOffer = createAction<Offer['id'] | null>('offers/getCurrentOffer');

