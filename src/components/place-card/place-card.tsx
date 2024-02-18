import Premium from '../premium/premium';
import FavoritButton from '../favorit-button/favorit-button';
import RaitingStars from '../raiting-stars/raiting-stars';

type PlaceCardProps ={
  className: string;
}

function PlaceCard({className}: PlaceCardProps): JSX.Element {
  return (
    <article
      className={`${className}__card place-card`}
    >
      <Premium className={'place-card__mark'} />

      <div
        className={`${className}__image-wrapper place-card__image-wrapper`}
      >
        <a href="#">
          <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;120</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <FavoritButton className='place-card' iconWidth='18' iconHeight='19' />

        </div>
        <div className="place-card__rating rating">
          <RaitingStars className='place-card__stars' />
        </div>
        <h2 className="place-card__name">
          <a href="#">Beautiful &amp; luxurious apartment at great location</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}

export default PlaceCard;
