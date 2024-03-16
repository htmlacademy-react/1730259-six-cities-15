import { Helmet } from 'react-helmet-async';
import Map from '../../components/map/map';
import PlaceCard from '../../components/place-card/place-card';
import Premium from '../../components/premium/premium';
import { Navigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import OfferReviews from '../../components/offer-reviews/offer-reviews';
import OfferHost from '../../components/offer-host/offer-host';
import OfferGalery from '../../components/offer-galery/offer-galery';
import OfferInside from '../../components/offer-inside/offer-inside';
import OfferPrice from '../../components/offer-price/offer-price';
import OfferFeatures from '../../components/offer-features/offer-features';
import OfferRating from '../../components/offer-rating/offer-rating';
import OfferName from '../../components/offer-name/offer-name';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { getCurrentOffer } from '../../store/action';
import { fetchNearbyOffersAction, fetchOfferIdAction, fetchOfferReviewsAction } from '../../store/api-actions';

function Offer(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const offer = useAppSelector((state) => state.fullOffer);
  const reviews = useAppSelector((state) => state.reviews);
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers).slice(0, 3);

  useEffect(() => {
    if (id) {
      dispatch(getCurrentOffer(id));
      dispatch(fetchOfferIdAction(id));
      dispatch(fetchOfferReviewsAction(id));
      dispatch(fetchNearbyOffersAction(id));
    }
    console.log(offer);
    console.log(reviews);
    console.log('nearbyOffers', nearbyOffers.length);
  },[dispatch, id]);

  if (!offer) {
    return <Navigate to={AppRoute.PageNotFound} replace />;
  }

  const {
    images, isPremium, title,
    isFavorite, rating, type,
    bedrooms, maxAdults, price,
    goods, host, description
  } = offer;

  return (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>
      <section className="offer">
        <OfferGalery images={images} />
        <div className="offer__container container">
          <div className="offer__wrapper">
            {isPremium && <Premium className='offer__mark' />}
            <OfferName title={title} isFavorite={isFavorite} />
            <OfferRating rating={rating} />
            <OfferFeatures type={type} bedrooms={bedrooms} maxAdults={maxAdults} />
            <OfferPrice price={price} />
            <OfferInside goods={goods} />
            <OfferHost host={host} description={description} />
            {id && <OfferReviews reviews={reviews} id={id} />}
          </div>
        </div>
        <Map className='offer' offers={nearbyOffers} />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {
              nearbyOffers.length > 0 && nearbyOffers.map((nearbyOffer) => <PlaceCard key={nearbyOffer.id} className='near-places' offer={nearbyOffer} />)
            }
          </div>
        </section>
      </div>
    </main>
  );
}

export default Offer;
