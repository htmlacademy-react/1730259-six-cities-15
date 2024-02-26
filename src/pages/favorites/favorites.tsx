import { Cities } from '../../const';
import LocationItem from '../../components/location-item/location-item';
import Logo from '../../components/logo/logo';
import PlaceCard from '../../components/place-card/place-card';
import { Helmet } from 'react-helmet-async';
import { Offers } from '../../types/offers';

type FavoritesProps = {
  offersFavorite: Offers;
}

function Favorites({offersFavorite}: FavoritesProps): JSX.Element {
  const favoritLocations = new Map<string, Offers>();

  offersFavorite.filter((offer) => offer.isFavorite).map((offer) => favoritLocations.set(offer.city.name, {...offer}));

  return (
    <>
      <Helmet>
        <title>6 cities: {!offersFavorite.length ? 'favorites empty' : 'favorites'}</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                Array.from(favoritLocations.keys()).map((city) => (
                  <li key={String(city)} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <LocationItem city={city} />
                    </div>
                    <div className="favorites__places">
                      {
                        Object.entries(favoritLocations.get(city)).map((offer) => <PlaceCard key={offer.id} className='favorites' offer={offer} />)
                      }
                    </div>
                  </li>
                ))
              }
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Logo isFooter />
      </footer>
    </>
  );
}

export default Favorites;
