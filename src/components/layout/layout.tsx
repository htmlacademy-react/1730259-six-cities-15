import cn from 'classnames';
import { Outlet, useLocation, Location } from 'react-router-dom';
import { AppRoute } from '../../const';
import Header from '../header/header';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import { useAppSelector } from '../../hooks';

interface MyLocation extends Location {
  pathname: AppRoute;
}

function Layout(): JSX.Element {
  const { pathname } = useLocation() as MyLocation;
  const favoriteOffers = useAppSelector((store) => store.favoriteOffers);

  return (
    <div
      className={
        cn('page',
          {'page--gray page--main' : pathname === AppRoute.Root},
          {'page--gray page--login': pathname === AppRoute.Login},
          {'page--favorites-empty': pathname === AppRoute.Favorites && !favoriteOffers.length},
        )
      }
    >
      <ScrollToTop />
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
