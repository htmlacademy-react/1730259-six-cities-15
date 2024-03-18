import { memo, useMemo } from 'react';
import { Cities } from '../../const';
import LocationItemWrapper from '../location-item-wrapper/location-item-wrapper';
import LocationLink from '../location-link/location-link';

type LocationItemProps = {
  isTabs?: boolean;
  city: keyof typeof Cities | Cities;
  currentCity?: Cities;
}

function LocationItem({isTabs, currentCity, city}: LocationItemProps): JSX.Element {
  const isActive = useMemo(() => currentCity === city, [currentCity, city]);

  return (
    <LocationItemWrapper isTabs={isTabs}>
      <LocationLink isTabs={isTabs} isActive={isActive} city={city} />
    </LocationItemWrapper>
  );
}

const MemoizedLocationItem = memo(LocationItem);

export default MemoizedLocationItem;
