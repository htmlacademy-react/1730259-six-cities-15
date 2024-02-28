import { ChangeEvent, useCallback, useState } from 'react';
import LocationItem from '../../components/location-item/location-item';
import { getRandomArrayItem } from '../../utils/utils';
import { Cities } from '../../const';
import { Helmet } from 'react-helmet-async';

function Login():JSX.Element {
  const [randomCity,] = useState(getRandomArrayItem<Cities>(Object.values(Cities)));
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  });

  const handleFieldChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setLoginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  return (
    <main className="page__main page__main--login">
      <Helmet>
        <title>6 cities: authorization</title>
      </Helmet>
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post">
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                onChange={(evt) => handleFieldChange(evt)}
                value={loginFormData.email}
                required
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                onChange={(evt) => handleFieldChange(evt)}
                value={loginFormData.password}
                required
              />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <LocationItem city={randomCity} />
        </section>
      </div>
    </main>
  );
}

export default Login;
