import MemoizedLogo from '../logo/logo';
import { AppRoute } from '../../const';
import MemoizedHeaderNav from '../header-nav/header-nav';
import { memo } from 'react';

type HeaderProps = {
  pathname: AppRoute;
}

function Header({pathname}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <MemoizedLogo pathname={pathname} />
          </div>
          {pathname !== AppRoute.Login && <MemoizedHeaderNav />}
        </div>
      </div>
    </header>
  );
}

const MemoizedHeader = memo(Header);

export default MemoizedHeader;
