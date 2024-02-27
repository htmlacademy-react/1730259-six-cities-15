import { Link } from 'react-router-dom';
import { capitalize } from '../../utils/utils';
import cn from 'classnames';
import { AppRoute, CITY, Cities, DEFAULT_SORT, SORT_TYPE } from '../../const';

type LocationLinkProps = {
  isTabs?: boolean;
  city: keyof typeof Cities | Cities;
  isActive?: boolean;
  onChangeCurrentTabs?: (city: keyof typeof Cities | Cities) => void;
}

function LocationLink({city, isActive, isTabs, onChangeCurrentTabs}: LocationLinkProps):JSX.Element {
  return (
    <Link
      className={
        cn('locations__item-link',
          {'tabs__item': isTabs},
          {'tabs__item--active': isActive}
        )
      }
      to={isTabs ? '#todo' : {pathname: AppRoute.Root, search: `?${CITY}=${city}&${SORT_TYPE}=${DEFAULT_SORT}`}}
      onClick={
        onChangeCurrentTabs && ((evt) => {
          evt.preventDefault();
          onChangeCurrentTabs(city);
        })
      }
    >
      <span>{capitalize(city)}</span>
    </Link>
  );
}

export default LocationLink;
