import { Link } from 'react-router-dom';
import { capitalize } from '../../utils/utils';
import cn from 'classnames';
import { AppRoute, Cities } from '../../const';

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
      to={isTabs ? '#todo' : AppRoute.Root}
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
