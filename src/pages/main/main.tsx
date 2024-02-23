import Map from '../../components/map/map';
import PlaceCard from '../../components/place-card/place-card';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import Tabs from '../../components/tabs/tabs';
import { useSearchParams } from 'react-router-dom';
import { CITY, Cities, DEFAULT_CITY, DEFAULT_SORT, SORT_TYPE, SortType } from '../../const';
import { capitalize } from '../../utils/utils';
import { useEffect } from 'react';

type MainProps = {
  offersCount: number;
}

function Main({offersCount}: MainProps): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const cityQuery = searchParams.get(CITY) as Cities;
  const sortTypeQuery = searchParams.get(SORT_TYPE) as SortType;

  const handleClickTabsItem = (cityName: Cities) => {
    setSearchParams({ city: cityName, sortType: sortTypeQuery }); // Updated to include SortType in setSearchParams
  };

  const handleSortTypeChange = (sortType: SortType) => {
    setSearchParams({ city: cityQuery, sortType: sortType }); // Update SortType in URL
  };

  useEffect(() => {
    if (!cityQuery || !sortTypeQuery) {
      setSearchParams({
        city: DEFAULT_CITY,
        sortType: DEFAULT_SORT
      });
    }

  }, [cityQuery, setSearchParams, sortTypeQuery]);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs onChangeCurrentTabs={handleClickTabsItem} currentCity={cityQuery} />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offersCount} places to stay in {capitalize(cityQuery)}</b>
            <PlacesSorting currentSort={sortTypeQuery} onChangeSort={handleSortTypeChange} />
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
