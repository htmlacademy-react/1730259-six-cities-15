import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateFavoriteOffersAction } from '../../store/api-actions';
import { Offer } from '../../types/offers';
import { AppRoute, AuthorizationStatus, Status } from '../../const';
import { useNavigate } from 'react-router-dom';
import { memo, useState } from 'react';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { getFavoriteUpdateOffersLoadingStatus } from '../../store/favorite-process/favorite-process.selectors';

type FavoritButtonProps = {
  id: Offer['id'];
  className: string;
  iconWidth: string;
  iconHeight: string;
  isFavorite: boolean;
}

function FavoritButton({id, className, iconWidth, iconHeight, isFavorite}: FavoritButtonProps): JSX.Element {
  const [favoriteStatus, setFavoriteStatus] = useState(isFavorite);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const udateFavoritLoadingStatus = useAppSelector(getFavoriteUpdateOffersLoadingStatus);
  const isDisabled = udateFavoritLoadingStatus === Status.Loading;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleFavoritButtonClick = () => {
    if (!isAuthorized) {
      return navigate(AppRoute.Login, {replace: true});
    }

    setFavoriteStatus((prevState) => !prevState);

    dispatch(updateFavoriteOffersAction({
      id,
      status: Number(!favoriteStatus)
    }));
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
      disabled={isDisabled}
    >
      <svg
        className={`${className}__bookmark-icon`}
        width={iconWidth}
        height={iconHeight}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

const MemoizedFavoritButton = memo(FavoritButton);

export default MemoizedFavoritButton;
