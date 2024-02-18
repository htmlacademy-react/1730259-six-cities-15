import { AppRoute } from '../../const';
import { useLocation, Location, Link } from 'react-router-dom';

interface MyLocation extends Location {
  pathname: AppRoute;
}

type LogoLinkProps = {
  isFooter?: boolean;
  children: JSX.Element;
}

function LogoLink({isFooter, children}: LogoLinkProps): JSX.Element {
  const {pathname} = useLocation() as MyLocation;

  if (pathname === AppRoute.Root && !isFooter) {
    return (
      <a className='header__logo-link header__logo-link--active'>
        {children}
      </a>
    );
  }

  return (
    <Link
      to={AppRoute.Root}
      className={isFooter ? 'footer__logo-link' : 'header__logo-link'}
    >
      {children}
    </Link>
  );
}

export default LogoLink;
