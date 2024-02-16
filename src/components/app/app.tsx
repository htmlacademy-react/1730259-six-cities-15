import Login from '../pages/login/login';
import { HelmetProvider } from 'react-helmet-async';
import Main from '../pages/main/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Layout from '../layout/layout';
import PageNotFound from '../pages/page-not-found/page-not-found';
import Favorites from '../pages/favorites/favorites';
import Offer from '../pages/offer/offer';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />}>
            <Route index element={<Main />} />
            <Route path={AppRoute.Login} element={<Login />} />
            <Route path={`${AppRoute.Offer}:id`} element={<Offer />} />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                  <Favorites />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
