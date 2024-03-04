import { useLocation } from 'react-router-dom';
import Logo from '../logo/logo';
import { AppRoute } from '../../const';
import HeaderNav from '../header-nav/header-nav';
import { MyLocation } from '../../types/my-location';

function Header(): JSX.Element {
  const { pathname } = useLocation() as MyLocation;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {pathname !== AppRoute.Login && <HeaderNav />}
        </div>
      </div>
    </header>
  );
}

export default Header;
