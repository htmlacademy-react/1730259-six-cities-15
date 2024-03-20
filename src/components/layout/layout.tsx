import cn from 'classnames';
import { Outlet, useLocation, Location } from 'react-router-dom';
import { AppRoute } from '../../const';
import MemoizedHeader from '../header/header';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import { useAppSelector } from '../../hooks';
import { getFavoritsData } from '../../store/favorite-process/favorite-process.selectors';

interface MyLocation extends Location {
  pathname: AppRoute;
}

function Layout(): JSX.Element {
  const { pathname } = useLocation() as MyLocation;
  const favoriteOffers = useAppSelector(getFavoritsData);

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
      <MemoizedHeader pathname={pathname} />
      <Outlet />
    </div>
  );
}

export default Layout;
