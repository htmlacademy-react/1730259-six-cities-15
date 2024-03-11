import RaitingStars from '../raiting-stars/raiting-stars';

type OfferRatingProps ={
  rating: number;
}

function OfferRating({rating}: OfferRatingProps): JSX.Element {
  return (
    <div className="offer__rating rating">
      <RaitingStars className='offer__stars' rating={rating} />
      <span className="offer__rating-value rating__value">{rating}</span>
    </div>
  );
}

export default OfferRating;
