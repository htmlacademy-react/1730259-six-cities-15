import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logOutAction } from '../../store/api-actions';
import { memo, useCallback, useMemo } from 'react';
import { getAuthorizationStatus, getUserData } from '../../store/user-process/user-process.selectors';
import { getFavoritsData } from '../../store/favorite-process/favorite-process.selectors';

function HeaderNav(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteOffers = useAppSelector(getFavoritsData);
  const userData = useAppSelector(getUserData);

  const isAuth = useMemo(() => authorizationStatus === AuthorizationStatus.Auth, [authorizationStatus]);
  const userAvatar = useMemo(() => userData?.avatarUrl ?? '../img/avatar.svg', [userData?.avatarUrl]);
  const userEmail = useMemo(() => userData?.email, [userData?.email]);
  const favoriteCount = useMemo(() => favoriteOffers.length, [favoriteOffers.length]);

  const handleClickLogout = useCallback((evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    evt.preventDefault();
    dispatch(logOutAction());
  }, [dispatch]);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={isAuth ? AppRoute.Favorites : AppRoute.Login}>
            <div className="header__avatar-wrapper user__avatar-wrapper"
              style={{
                backgroundImage: `url(${userAvatar})`,
                borderRadius: '50%'
              }}
            >
            </div>
            {
              isAuth
                ?
                <>
                  <span className="header__user-name user__name">{userEmail}</span>
                  <span className="header__favorite-count">{favoriteCount}</span>
                </>
                :
                <span className="header__login">Sign in</span>
            }
          </Link>
        </li>
        {
          isAuth &&
            <li className="header__nav-item">
              <a className="header__nav-link" href='#todo' onClick={handleClickLogout}>
                <span className="header__signout">Sign out</span>
              </a>
            </li>
        }
      </ul>
    </nav>
  );
}

const MemoizedHeaderNav = memo(HeaderNav);

export default MemoizedHeaderNav;
