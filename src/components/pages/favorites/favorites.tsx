import { Cities } from '../../../const';
import LocationItem from '../../location-item/location-item';
import Logo from '../../logo/logo';
import PlaceCard from '../../place-card/place-card';

function Favorites(): JSX.Element {
  return (
    <>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <LocationItem city={Cities.Amsterdam} />
                </div>
                <div className="favorites__places">
                  <PlaceCard className='favorites' />
                  <PlaceCard className='favorites' />
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <LocationItem city={Cities.Cologne} />
                </div>
                <div className="favorites__places">
                  <PlaceCard className='favorites' />
                </div>
              </li>
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
