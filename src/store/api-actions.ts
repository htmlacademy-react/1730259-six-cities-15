import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { FullOffer, Offer, Offers } from '../types/offers';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { loadFavoriteOffers, loadNearbyOffers, loadOfferId, loadOffers, loadReviews, setUserData, requireAuthorization, setDataLoadingStatus, redirectToRoute } from './action';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { NewReview, Review, Reviews } from '../types/reviews';
import { UpdateFavoriteStatus } from '../types/update-favorite-status';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(setDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const fetchOfferIdAction = createAsyncThunk<void, Offer['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferId',
  async (id: Offer['id'], {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<FullOffer>(`${APIRoute.Offers}/${id}`);
    dispatch(loadOfferId(data));
    dispatch(setDataLoadingStatus(false));
  },
);

export const fetchOfferReviewsAction = createAsyncThunk<void, Offer['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferReviews',
  async (id: Offer['id'], {dispatch, extra: api}) => {
    const {data} = await api.get<Reviews>(`${APIRoute.Reviews}/${id}`);
    dispatch(loadReviews(data));
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<void, Offer['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferReviews',
  async (id: Offer['id'], {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(`${APIRoute.Offers}/${id}/${APIRoute.Nearby}`);
    dispatch(loadNearbyOffers(data));
  },
);

export const addReviewAction = createAsyncThunk<Review, NewReview, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/setNewReview',
  async ({id, comment, rating}, {extra: api}) => {
    const {data} = await api.post<Review>(`${APIRoute.Reviews}/${id}`, {comment, rating});
    return data;
  },
);

export const fetchFavoriteOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Favorite);
    dispatch(loadFavoriteOffers(data));
  },
);

export const updateFavoriteOffersAction = createAsyncThunk<Offers, UpdateFavoriteStatus, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/updateFavoriteOffers',
  async ({id, status}, {extra: api}) => {
    const {data} = await api.post<Offers>(`${APIRoute.Favorite}/${id}/${status}`);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/fetchCheckAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserData(data));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setUserData(null));
  }
);
