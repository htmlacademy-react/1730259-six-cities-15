import { Fragment, ChangeEvent, memo } from 'react';
import { STARS } from '../../const';

type ReviewsRaitingStarsProps = {
  isChecked: string;
  handleChangeChecked: ({ target }: ChangeEvent<HTMLInputElement>) => void;
}

function ReviewsRaitingStars({isChecked, handleChangeChecked}: ReviewsRaitingStarsProps): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {
        STARS.map((title, index) => (
          <Fragment key={title}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={STARS.length - index}
              id={`${STARS.length - index}-stars`}
              checked={isChecked === `${STARS.length - index}`}
              type="radio"
              onChange={handleChangeChecked}
            />
            <label
              htmlFor={`${STARS.length - index}-stars`}
              className="reviews__rating-label form__rating-label"
              title={title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))
      }
    </div>
  );
}

const MemoizedReviewsRaitingStars = memo(ReviewsRaitingStars);

export default MemoizedReviewsRaitingStars;
