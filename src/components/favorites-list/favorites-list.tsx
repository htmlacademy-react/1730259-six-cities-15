import { City, Offers } from '../../types/offers';
import MemoizedLocationItem from '../location-item/location-item';
import PlaceCard from '../place-card/place-card';

type FavoritesListProps = {
  favoritLocations: Map<City['name'], Offers>;
}

function FavoritesList({favoritLocations}:FavoritesListProps): JSX.Element {
  return (
    <ul className="favorites__list">
      {
        Array.from(favoritLocations.keys()).map((city) => (
          <li key={String(city)} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <MemoizedLocationItem city={city} />
            </div>
            <div className="favorites__places">
              {
                favoritLocations.get(city)
                  ?.map((offer) => <PlaceCard key={offer.id} className='favorites' offer={offer} isSmall />)
              }
            </div>
          </li>
        ))
      }
    </ul>
  );
}

export default FavoritesList;
