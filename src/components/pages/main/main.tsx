import { DEFAULT_CITIES } from '../../../const';
import Map from '../../map/map';
import PlaceCard from '../../place-card/place-card';
import PlacesSorting from '../../places-sorting/places-sorting';
import Tabs from '../../tabs/tabs';

type MainProps = {
  offersCount: number;
}

function Main({offersCount}: MainProps): JSX.Element {
  const location = DEFAULT_CITIES;

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offersCount} places to stay in {location}</b>
            <PlacesSorting />
            <div className="cities__places-list places__list tabs__content">
              <PlaceCard className='cities' />
              <PlaceCard className='cities' />
              <PlaceCard className='cities' />
              <PlaceCard className='cities' />
              <PlaceCard className='cities' />
              <PlaceCard className='cities' />
            </div>
          </section>
          <div className="cities__right-section">
            <Map className='cities' />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
