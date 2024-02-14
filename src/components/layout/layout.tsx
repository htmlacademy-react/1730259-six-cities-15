import cn from 'classnames';
import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import Header from '../header/header';

function Layout(): JSX.Element {
  const { pathname } = useLocation();

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
