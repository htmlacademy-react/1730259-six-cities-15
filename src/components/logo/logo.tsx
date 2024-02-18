import { useLocation, Location } from 'react-router-dom';
import LogoLink from '../logo-link/logo-link';
import { AppRoute } from '../../const';
import classNames from 'classnames';
import LogoImage from '../logo-image/logo-image';

type LogoProps = {
  isFooter?: boolean;
}

interface MyLocation extends Location {
  pathname: AppRoute;
}

function Logo({isFooter}: LogoProps): JSX.Element {
  const {pathname} = useLocation() as MyLocation;
  const isMain = pathname === AppRoute.Root;

  return (
    <LogoLink
      isFooter={isFooter}
      isMain={isMain}
      classLink={classNames(
        {'footer__logo-link': isFooter},
        {'header__logo-link': !isFooter},
        {'header__logo-link--active' : isMain}
      )}
    >
      <LogoImage
        classImage={isFooter ? 'footer__logo' : 'header__logo'}
        imageWidth={isFooter ? '64' : '81'}
        imageHeight={isFooter ? '33' : '41'}
      />
    </LogoLink>
  );
}

export default Logo;
