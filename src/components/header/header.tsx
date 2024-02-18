import { useLocation, Location } from 'react-router-dom';
import Logo from '../logo/logo';
import { AppRoute } from '../../const';
import HeaderNav from '../header-nav/header-nav';

interface MyLocation extends Location {
  pathname: AppRoute;
}

function Header(): JSX.Element {
  const { pathname } = useLocation() as MyLocation;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {pathname !== AppRoute.Login ? <HeaderNav /> : null}
        </div>
      </div>
    </header>
  );
}

export default Header;
