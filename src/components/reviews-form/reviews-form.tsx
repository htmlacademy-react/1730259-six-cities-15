import { ChangeEvent, memo, useCallback, useEffect, useState } from 'react';
import MemoizedReviewsRaitingStars from '../reviews-raiting-stars/reviews-raiting-stars';
import { MAX_VALUE_REVIEW_LENGHT, MIN_VALUE_REVIEW_LENGHT, STAR_NAME } from '../../const';

function ReviewsForm(): JSX.Element {
  const [isChecked, setIsChecked] = useState('0');
  const [value, setValue] = useState('');
  const [isSubmitActive, setIsSubmitActive] = useState(false);

  const handleChangeChecked = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.name === STAR_NAME) {
      setIsChecked(target.value);
    }
  }, []);

  const handleTextariaInputChange = useCallback(({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(target.value);
  }, []);

  useEffect(() => {
    setIsSubmitActive(isChecked === '0' || value.length < MIN_VALUE_REVIEW_LENGHT || value.length > MAX_VALUE_REVIEW_LENGHT);
  }, [isChecked, value.length]);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <MemoizedReviewsRaitingStars
        isChecked={isChecked}
        handleChangeChecked={handleChangeChecked}
      />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={value}
        onChange={(evt) => handleTextariaInputChange(evt)}
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitActive}>Submit</button>
      </div>
    </form>
  );
}

const MemoizedReviewsForm = memo(ReviewsForm);

export default MemoizedReviewsForm;
