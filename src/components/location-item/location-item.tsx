import { Cities } from '../../const';
import LocationItemWrapper from '../location-item-wrapper/location-item-wrapper';
import LocationLink from '../location-link/location-link';

type LocationItemProps = {
  isTabs?: boolean;
  city: keyof typeof Cities;
  isActive?: boolean;
  onChangeCurrentTabs?: (city: keyof typeof Cities) => void;
}

function LocationItem({isTabs, isActive, city, onChangeCurrentTabs}: LocationItemProps): JSX.Element {
  return (
    <LocationItemWrapper isTabs={isTabs}>
      <LocationLink isTabs={isTabs} isActive={isActive} city={city} onChangeCurrentTabs={onChangeCurrentTabs} />
    </LocationItemWrapper>
  );
}

export default LocationItem;
