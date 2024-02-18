type RaitingStarsProps = {
  className?: string;
}

function RaitingStars({className}: RaitingStarsProps): JSX.Element {
  return (
    <div className={`${className} rating__stars`}>
      <span style={{width: '80%'}}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
}

export default RaitingStars;
