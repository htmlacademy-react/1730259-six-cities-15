import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { reviews } from './mocks/reviews';
import { Provider } from 'react-redux';
import { store } from './components/store';
import { getOfferId, updateOffers } from './components/store/action';
import { offers } from './mocks/offers';
import { fullOffers } from './mocks/full-offers';

store.dispatch(updateOffers(offers));
store.dispatch(getOfferId(fullOffers));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store} >
      <App reviews={reviews} />
    </Provider>
  </React.StrictMode>
);
