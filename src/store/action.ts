import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { FullOffer, Offer, Offers } from '../types/offers';
import { Reviews } from '../types/reviews';
import { UserData } from '../types/user-data';

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setUserData = createAction<UserData | null>('user/loadUserData');

export const loadOffers = createAction<Offers>('offers/loadOffers');

export const getCurrentOffer = createAction<Offer['id'] | null>('offers/getCurrentOffer');

export const loadOfferId = createAction<FullOffer | null>('offers/loadOfferId');

export const loadFavoriteOffers = createAction<Offers>('offers/loadFavoriteOffers');

export const loadReviews = createAction<Reviews>('offers/loadReviews');

export const loadNearbyOffers = createAction<Offers>('offers/loadNearbyOffers');

export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');
