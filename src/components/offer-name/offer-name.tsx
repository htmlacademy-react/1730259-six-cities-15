import FavoritButton from '../favorit-button/favorit-button';

type OfferNameProps = {
  title: string;
  isFavorite: boolean;
}

function OfferName({title, isFavorite}: OfferNameProps): JSX.Element {
  return (
    <div className="offer__name-wrapper">
      <h1 className="offer__name">
        {title}
      </h1>
      <FavoritButton className='offer' iconWidth='31' iconHeight='33' isFavorite={isFavorite} />
    </div>
  );
}

export default OfferName;
