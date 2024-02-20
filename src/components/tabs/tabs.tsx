import { Cities, DEFAULT_CITIES } from '../../const';
import LocationItem from '../location-item/location-item';

function Tabs(): JSX.Element {
  const location = DEFAULT_CITIES;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(Cities).map((city) => <LocationItem key={city} isTabs city={city} isActive={location === city} />)}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
