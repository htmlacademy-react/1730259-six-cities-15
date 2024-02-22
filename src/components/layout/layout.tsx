import cn from 'classnames';
import { Outlet, useLocation, Location } from 'react-router-dom';
import { AppRoute } from '../../const';
import Header from '../header/header';

interface MyLocation extends Location {
  pathname: AppRoute;
}

function Layout(): JSX.Element {
  const { pathname } = useLocation() as MyLocation;

  return (
    <div
      className={
        cn('page',
          {'page--gray page--main' : pathname === AppRoute.Root},
          {'page--gray page--login': pathname === AppRoute.Login},
        )
      }
    >
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
