import { Cities } from '../../const';
import LocationItem from '../../components/location-item/location-item';
import Logo from '../../components/logo/logo';
import PlaceCard from '../../components/place-card/place-card';
import { Helmet } from 'react-helmet-async';

function Favorites(): JSX.Element {
  return (
    <>
      <Helmet>
        {/* <title>6 cities: favorites empty</title> */}
        <title>6 cities: favorites</title>
      </Helmet>
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
