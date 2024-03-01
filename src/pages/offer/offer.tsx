import { Helmet } from 'react-helmet-async';
import FavoritButton from '../../components/favorit-button/favorit-button';
import Map from '../../components/map/map';
// import PlaceCard from '../../components/place-card/place-card';
import Premium from '../../components/premium/premium';
import RaitingStars from '../../components/raiting-stars/raiting-stars';
import { Navigate, useParams } from 'react-router-dom';
import { FullOffer } from '../../types/offers';
import { AppRoute } from '../../const';
import { capitalize } from '../../utils/utils';
import cn from 'classnames';
import { Reviews } from '../../types/reviews';
import OfferReviews from '../../components/offer-reviews/offer-reviews';

type OfferProps = {
  fullOffers: FullOffer[];
  reviews: Reviews;
}

function Offer({fullOffers, reviews}: OfferProps): JSX.Element {
  const {id} = useParams();
  const [offer] = fullOffers.filter((item) => String(item.id) === String(id));

  if (!offer) {
    return <Navigate to={AppRoute.PageNotFound} replace />;
  }

  const {
    images, isPremium, title, isFavorite,
    rating, type, bedrooms, maxAdults, price,
    goods, host, description
  } = offer;

  return (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {
              images.map((image) => (
                <div key={String(image)} className="offer__image-wrapper">
                  <img className="offer__image" src={image} alt="Photo studio" />
                </div>
              ))
            }
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {isPremium ? <Premium className='offer__mark' /> : null}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {title}
              </h1>
              <FavoritButton className='offer' iconWidth='31' iconHeight='33' isFavorite={isFavorite} />
            </div>
            <div className="offer__rating rating">
              <RaitingStars className='offer__stars' rating={rating} />
              <span className="offer__rating-value rating__value">{rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {capitalize(type)}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {bedrooms} {bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
              </li>
              <li className="offer__feature offer__feature--adults">
                Max {maxAdults} {maxAdults > 1 ? 'adults' : 'adult'}
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {
                  goods.map((good) => (
                    <li key={good} className="offer__inside-item">
                      {good}
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div
                  className={
                    cn(
                      'offer__avatar-wrapper user__avatar-wrapper',
                      {'offer__avatar-wrapper--pro': host.isPro}
                    )
                  }
                >
                  <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="offer__user-name">
                  {host.name}
                </span>
                {
                  host.isPro
                    ?
                    <span className="offer__user-status">
                      Pro
                    </span>
                    :
                    null
                }
              </div>
              <div className="offer__description">
                {
                  Array.isArray(description)
                    ?
                    description.map((item) => <p key={item} className="offer__text">{item}</p>)
                    :
                    <p className="offer__text">{description}</p>
                }

              </div>
            </div>
            <OfferReviews reviews={reviews} />
          </div>
        </div>
        <Map className='offer' />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          {/* <div className="near-places__list places__list">
            <PlaceCard className='near-places' />
            <PlaceCard className='near-places' />
            <PlaceCard className='near-places' />
          </div> */}
        </section>
      </div>
    </main>
  );
}

export default Offer;
