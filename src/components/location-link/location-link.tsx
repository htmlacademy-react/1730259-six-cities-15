import { Link } from 'react-router-dom';
import { capitalize } from '../../utils/utils';
import cn from 'classnames';
import { AppRoute } from '../../const';

type LocationLinkProps = {
  isTabs?: boolean;
  city: string;
  isActive?: boolean;
}

function LocationLink({city, isActive, isTabs}: LocationLinkProps):JSX.Element {
  return (
    <Link
      className={
        cn('locations__item-link',
          {'tabs__item': isTabs},
          {'tabs__item--active': isActive}
        )
      }
      to={isTabs ? '#todo' : AppRoute.Root}
      onClick={(event) => {
        event.preventDefault();
      }}
    >
      <span>{capitalize(city)}</span>
    </Link>
  );
}

export default LocationLink;
