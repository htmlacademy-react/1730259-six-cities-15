import { AuthorizationStatus, MAX_REVIEWS_COUNT } from '../../const';
import { getAuthorizationStatus } from '../../mocks/get-authorization-status';
import { Reviews } from '../../types/reviews';
import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsItem from '../reviews-item/reviews-item';

type OfferReviewsProps ={
  reviews: Reviews;
}

function OfferReviews({reviews}: OfferReviewsProps): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews
            .sort(
              (reviewFirst, reviewSecond) => new Date(reviewFirst.date).getTime() - new Date(reviewSecond.date).getTime()
            )
            .reverse()
            .slice(0, MAX_REVIEWS_COUNT)
            .map((review) => <ReviewsItem key={review.id} review={review} />)
        }
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewsForm />}
    </section>
  );
}

export default OfferReviews;
