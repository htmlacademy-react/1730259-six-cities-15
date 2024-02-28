import { Cities } from '../../const';
import LocationItem from '../location-item/location-item';

type TabsProps = {
  currentCity: Cities;
}

function Tabs({currentCity}: TabsProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            Object.values(Cities).map(
              (city) => <LocationItem key={city} isTabs city={city} isActive={currentCity === city} />
            )
          }
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
