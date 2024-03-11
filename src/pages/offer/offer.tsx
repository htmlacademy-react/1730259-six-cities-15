import { Helmet } from 'react-helmet-async';
import Map from '../../components/map/map';
import PlaceCard from '../../components/place-card/place-card';
import Premium from '../../components/premium/premium';
import { useNavigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Reviews } from '../../types/reviews';
import OfferReviews from '../../components/offer-reviews/offer-reviews';
import { offers } from '../../mocks/offers';
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

type OfferProps = {
  reviews: Reviews;
}

function Offer({reviews}: OfferProps): JSX.Element {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const fullOffers = useAppSelector((state) => state.fullOffer);
  const [offer] = fullOffers.filter((item) => String(item.id) === String(id));

  useEffect(() => {
    if (!offer) {
      return navigate(AppRoute.Root, { replace: true });
    }

    dispatch(getCurrentOffer(id as string));
  }, [dispatch, id, navigate, offer]);

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
            <OfferReviews reviews={reviews} />
          </div>
        </div>
        <Map className='offer' offers={offers} />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {
              offers.slice(0, 3).map((nearOffer) => <PlaceCard key={nearOffer.id} className='near-places' offer={nearOffer} />)
            }
          </div>
        </section>
      </div>
    </main>
  );
}

export default Offer;
