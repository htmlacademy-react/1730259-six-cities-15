import { AppRoute } from '../../const';
import { useLocation, Link } from 'react-router-dom';

type LogoLinkProps = {
  isFooter?: boolean;
  children: JSX.Element;
}

function LogoLink({isFooter, children}: LogoLinkProps): JSX.Element {
  const {pathname} = useLocation();

  if (pathname === AppRoute.Root as string && !isFooter) {
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
