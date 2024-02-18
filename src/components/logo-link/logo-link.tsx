import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';

type LogoLinkProps = {
  isFooter?: boolean;
  isMain: boolean;
  children: JSX.Element;
  classLink: string;
}

function LogoLink({isFooter, isMain, classLink, children}: LogoLinkProps): JSX.Element {

  if (isMain && !isFooter) {
    return (
      <a className={classLink}>
        {children}
      </a>
    );
  }

  return (
    <Link
      to={AppRoute.Root}
      className={classLink}
    >
      {children}
    </Link>
  );
}

export default LogoLink;
