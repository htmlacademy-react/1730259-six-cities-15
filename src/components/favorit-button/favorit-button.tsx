type FavoritButtonProps = {
  className: string;
  iconWidth: string;
  iconHeight: string;
}

function FavoritButton({className, iconWidth, iconHeight}: FavoritButtonProps): JSX.Element {
  return (
    <button
      className={`${className}__bookmark-button ${className}__bookmark-button--active button`}
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
