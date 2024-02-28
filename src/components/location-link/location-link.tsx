import { Link, useSearchParams } from 'react-router-dom';
import { capitalize } from '../../utils/utils';
import cn from 'classnames';
import { AppRoute, CITY, Cities, DEFAULT_SORT, SORT_TYPE, SortType } from '../../const';

type LocationLinkProps = {
  isTabs?: boolean;
  city: keyof typeof Cities | Cities;
  isActive?: boolean;
}

function LocationLink({city, isActive, isTabs}: LocationLinkProps):JSX.Element {
  const [searchParams] = useSearchParams();
  const currentSort = searchParams.get(SORT_TYPE) as SortType;

  return (
    <Link
      className={
        cn('locations__item-link',
          {'tabs__item': isTabs},
          {'tabs__item--active': isActive}
        )
      }
      to={{pathname: AppRoute.Root, search: `?${CITY}=${city}&${SORT_TYPE}=${isTabs ? currentSort : DEFAULT_SORT}`}}
    >
      <span>{capitalize(city)}</span>
    </Link>
  );
}

export default LocationLink;
