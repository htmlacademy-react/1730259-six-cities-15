import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

function HeaderNav(): JSX.Element {
  const authorizationStatus = AuthorizationStatus.Auth;

  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={isAuth ? AppRoute.Favorites : AppRoute.Login}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {
              isAuth
                ?
                <>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  <span className="header__favorite-count">3</span>
                </>
                :
                <span className="header__login">Sign in</span>
            }
          </Link>
        </li>
        {
          isAuth
            ?
            <li className="header__nav-item">
              <Link className="header__nav-link" to={AppRoute.Root}>
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
            :
            null
        }
      </ul>
    </nav>
  );
}

export default HeaderNav;
