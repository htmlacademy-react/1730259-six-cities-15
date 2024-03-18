import { memo } from 'react';
import { Cities } from '../../const';
import MemoizedLocationItem from '../location-item/location-item';

function Tabs(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            Object.values(Cities).map(
              (city) => <MemoizedLocationItem key={city} isTabs city={city} />
            )
          }
        </ul>
      </section>
    </div>
  );
}

const MemoizedTabs = memo(Tabs);

export default MemoizedTabs;
