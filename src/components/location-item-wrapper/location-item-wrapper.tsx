type LocationItemWrapperProps = {
  isTabs?: boolean;
  children: JSX.Element;
}

function LocationItemWrapper({isTabs, children}: LocationItemWrapperProps): JSX.Element {
  if (isTabs) {
    return (
      <li className="locations__item">
        {children}
      </li>
    );
  }

  return (
    <div className="locations__item">
      {children}
    </div>
  );
}

export default LocationItemWrapper;
