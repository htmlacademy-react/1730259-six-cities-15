import { useMemo } from 'react';
import { AuthorizationStatus, MAX_REVIEWS_COUNT } from '../../const';
import { useAppSelector } from '../../hooks';
import { Reviews } from '../../types/reviews';
import MemoizedReviewsForm from '../reviews-form/reviews-form';
import ReviewsItem from '../reviews-item/reviews-item';
import { Offer } from '../../types/offers';

type OfferReviewsProps = {
  reviews: Reviews;
  id: Offer['id'];
}

function OfferReviews({reviews, id}: OfferReviewsProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const sortingReviws = useMemo(() => (
    reviews
      .slice()
      .sort(
        (reviewFirst, reviewSecond) => new Date(reviewFirst.date).getTime() - new Date(reviewSecond.date).getTime()
      )
      .reverse()
      .slice(0, MAX_REVIEWS_COUNT)
  ), [reviews]);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          sortingReviws &&
          sortingReviws.length > 0 &&
          sortingReviws.map((review) => <ReviewsItem key={review.id} review={review} />)
        }
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && <MemoizedReviewsForm id={id} />}
    </section>
  );
}

export default OfferReviews;
