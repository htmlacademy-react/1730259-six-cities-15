import { memo } from 'react';
import { ApartmentType } from '../../types/offers';
import { capitalize } from '../../utils/utils';

type OfferFeaturesProps = {
  type: ApartmentType;
  bedrooms: number;
  maxAdults: number;
}

function OfferFeatures({type, bedrooms, maxAdults}: OfferFeaturesProps): JSX.Element {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {capitalize(type)}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms} {bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
      </li>
      <li className="offer__feature offer__feature--adults">
      Max {maxAdults} {maxAdults > 1 ? 'adults' : 'adult'}
      </li>
    </ul>
  );
}

const MemoizedOfferFeatures = memo(OfferFeatures);

export default MemoizedOfferFeatures;
