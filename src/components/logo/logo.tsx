type LogoProps = {
  isHeader?: boolean;
}

function Logo({isHeader = true}: LogoProps): JSX.Element {
  return (
    <img
      className={isHeader ? 'header__logo' : 'footer__logo'}
      src="img/logo.svg"
      alt="6 cities logo"
      width={isHeader ? '81' : '64'}
      height={isHeader ? '41' : '33'}
    />
  );
}

export default Logo;
