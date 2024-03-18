import { memo } from 'react';
import { Cities } from '../../const';
import LocationItemWrapper from '../location-item-wrapper/location-item-wrapper';
import LocationLink from '../location-link/location-link';

type LocationItemProps = {
  isTabs?: boolean;
  city: keyof typeof Cities | Cities;
}

function LocationItem({isTabs, city}: LocationItemProps): JSX.Element {
    return (
    <LocationItemWrapper isTabs={isTabs}>
      <LocationLink isTabs={isTabs} city={city} />
    </LocationItemWrapper>
  );
}

const MemoizedLocationItem = memo(LocationItem);

export default MemoizedLocationItem;
