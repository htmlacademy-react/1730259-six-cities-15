import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteOffersAction, updateFavoriteOffersAction } from '../../store/api-actions';
import { Offer } from '../../types/offers';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

type FavoritButtonProps = {
  id: Offer['id'];
  className: string;
  iconWidth: string;
  iconHeight: string;
  isFavorite: boolean;
}

function FavoritButton({id, className, iconWidth, iconHeight, isFavorite}: FavoritButtonProps): JSX.Element {
  const [favoriteStatus, setFavoriteStatus] = useState(isFavorite);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const status = isFavorite ? 0 : 1;

  const handleFavoritButtonClick = () => {
    if (!isAuthorized) {
      return navigate(AppRoute.Login, {replace: true});
    }
    setFavoriteStatus((prevState) => !prevState);

    dispatch(updateFavoriteOffersAction({id, status}))
      .then(() => dispatch(fetchFavoriteOffersAction()));
  };

  return (
    <button
      className={
        cn(
          `${className}__bookmark-button button`,
          {[`${className}__bookmark-button--active`]: favoriteStatus}
        )
      }
      type="button"
      onClick={handleFavoritButtonClick}
    >
      <svg
        className={`${className}__bookmark-icon`}
        width={iconWidth}
        height={iconHeight}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{favoriteStatus ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default FavoritButton;
