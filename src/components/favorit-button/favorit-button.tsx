import cn from 'classnames';

type FavoritButtonProps = {
  className: string;
  iconWidth: string;
  iconHeight: string;
  isFavorite: boolean;
}

function FavoritButton({className, iconWidth, iconHeight, isFavorite}: FavoritButtonProps): JSX.Element {
  return (
    <button
      className={
        cn(
          `${className}__bookmark-button button`,
          {[`${className}__bookmark-button--active`]: isFavorite}
        )
      }
      type="button"
    >
      <svg
        className={`${className}__bookmark-icon`}
        width={iconWidth}
        height={iconHeight}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default FavoritButton;
