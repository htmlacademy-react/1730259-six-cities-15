type LogoProps = {
  isFooter?: boolean;
}

function Logo({isFooter}: LogoProps): JSX.Element {
  return (
    <img
      className={isFooter ? 'footer__logo' : 'header__logo'}
      src="img/logo.svg"
      alt="6 cities logo"
      width={isFooter ? '64' : '81'}
      height={isFooter ? '33' : '41'}
    />
  );
}

export default Logo;
