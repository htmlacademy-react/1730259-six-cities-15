import { useSearchParams } from 'react-router-dom';
import { CITY, Cities, DEFAULT_CITY, SortType } from '../../const';
import LocationItem from '../location-item/location-item';
import { useEffect } from 'react';

function Tabs(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const cityQuery = searchParams.get(CITY);
  const handleClickTabsItem = (cityName: Cities) => setSearchParams({city: cityName});

  useEffect(() => {
    if (!cityQuery) {
      setSearchParams({
        city: DEFAULT_CITY,
        sortType: SortType.Popular
      });
    }
  }, [cityQuery, setSearchParams]);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            Object.values(Cities).map(
              (city) => <LocationItem key={city} isTabs city={city} isActive={cityQuery === city} onChangeCurrentTabs={handleClickTabsItem} />
            )
          }
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
