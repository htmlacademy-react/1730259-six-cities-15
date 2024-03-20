import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Status } from '../../const';
import { FavoriteProcess } from '../../types/state';
import { fetchFavoriteOffersAction } from '../api-actions';

const initialState: FavoriteProcess = {
  favoriteOffers: [],
  favoriteOffersLoadingStatus: Status.Idle,
};

export const favoritesData = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.favoriteOffersLoadingStatus = Status.Loading;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.favoriteOffersLoadingStatus = Status.Success;
      })
      .addCase(fetchFavoriteOffersAction.rejected, (state) => {
        state.favoriteOffersLoadingStatus = Status.Failed;
      });
  },
});
