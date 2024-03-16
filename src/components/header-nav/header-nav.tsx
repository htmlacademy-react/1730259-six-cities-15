import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

function HeaderNav(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const favoriteOffers = useAppSelector((state) => state.favoriteOffers);
  const userData = useAppSelector((state) => state.userData);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  const handleClickLogout = (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={isAuth ? AppRoute.Favorites : AppRoute.Login}>
            <div className="header__avatar-wrapper user__avatar-wrapper"
              style={{
                backgroundImage: `url(${userData?.avatarUrl ?? '../img/avatar.svg'})`,
                borderRadius: '50%'
              }}
            >
            </div>
            {
              isAuth
                ?
                <>
                  <span className="header__user-name user__name">{userData?.email}</span>
                  <span className="header__favorite-count">{favoriteOffers.length}</span>
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

export default HeaderNav;
