import { useLocation } from 'react-router-dom';
import Logo from '../logo/logo';
import { AppRoute } from '../../const';
import HeaderNav from '../header-nav/header-nav';

function Header(): JSX.Element {
  const { pathname } = useLocation();
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <Logo />
            </a>
          </div>
          {pathname !== AppRoute.Login ? <HeaderNav /> : ''}
        </div>
      </div>
    </header>
  );
}

export default Header;
