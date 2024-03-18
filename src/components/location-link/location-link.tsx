import { Link, useSearchParams } from 'react-router-dom';
import { capitalize } from '../../utils/utils';
import cn from 'classnames';
import { AppRoute, CITY, Cities, DEFAULT_SORT, SORT_TYPE, SortType } from '../../const';
import { useMemo } from 'react';

type LocationLinkProps = {
  isTabs?: boolean;
  city: keyof typeof Cities | Cities;
}

function LocationLink({city, isTabs}: LocationLinkProps):JSX.Element {
  const [searchParams] = useSearchParams();
  const { [SORT_TYPE]: currentSort, [CITY]: sityQwery } = Object.fromEntries(searchParams) as { [SORT_TYPE]: SortType; [CITY]: Cities };

  const isActive = useMemo(() => sityQwery === city, [sityQwery, city]);

  return (
    <Link
      className={
        cn(
          'locations__item-link',
          {'tabs__item': isTabs},
          {'tabs__item--active': isActive}
        )
      }
      to={`${AppRoute.Root}?${CITY}=${city}&${SORT_TYPE}=${isTabs ? currentSort : DEFAULT_SORT}`}
    >
      <span>{capitalize(city)}</span>
    </Link>
  );
}

export default LocationLink;
