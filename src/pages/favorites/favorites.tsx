import Logo from '../../components/logo/logo';
import { Helmet } from 'react-helmet-async';
import { City, Offers } from '../../types/offers';
import cn from 'classnames';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import FavoritesList from '../../components/favorites-list/favorites-list';
import { useAppSelector } from '../../hooks';

function Favorites(): JSX.Element {
  const favoriteOffers = useAppSelector((store) => store.favoriteOffers);
  const favoritLocations = new Map<City['name'], Offers>();

  favoriteOffers.forEach((offer) => {
    const cityName = offer.city.name;
    if (favoritLocations.has(cityName)) {
      favoritLocations.get(cityName)?.push(offer);
    } else {
      favoritLocations.set(cityName, [offer]);
    }
  });

  const hasNoOffersFavoriteLength = !favoriteOffers.length;

  return (
    <>
      <Helmet>
        <title>6 cities: {hasNoOffersFavoriteLength ? 'favorites empty' : 'favorites'}</title>
      </Helmet>
      <main
        className={
          cn(
            'page__main page__main--favorites',
            {'page__main--favorites-empty': hasNoOffersFavoriteLength}
          )
        }
      >
        <div className="page__favorites-container container">
          <section
            className={
              cn(
                'favorites',
                {'favorites--empty': hasNoOffersFavoriteLength}
              )
            }
          >
            <h1
              className={
                cn(
                  {'favorites__title': !hasNoOffersFavoriteLength},
                  {'visually-hidden': hasNoOffersFavoriteLength}
                )
              }
            >
              {hasNoOffersFavoriteLength ? 'Favorites (empty)' : 'Saved listing'}
            </h1>
            {hasNoOffersFavoriteLength ? <FavoritesEmpty /> : <FavoritesList favoritLocations={favoritLocations} />}
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
