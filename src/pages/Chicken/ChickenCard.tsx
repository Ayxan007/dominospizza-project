interface ChickenCardProps {
  newLogo?: string
    chickenImg: string;
    favoritesImg: string;
    title: string;
    text: string;
    price: string;
    azeManatLogo: string;
    startBtn: string;
  }
  
  function ChickenCard({ newLogo , chickenImg, favoritesImg, title, text, price, azeManatLogo, startBtn }: ChickenCardProps) {
    return (
      <div className="chicken-card">
       {newLogo && (
        <div className="corner-ribbon">
          <p className="ribbon-text">{newLogo}</p>
        </div>
      )}
        <div className="card-img-chicken">
          <img className="pr-chicken" src={chickenImg} alt="Chicken" />
          <img className="lv-img-chicken" src={favoritesImg} alt="Favorite" />
        </div>
        <div className="card-title-chicken">
          <h2>{title}</h2>
        </div>
        <div className="card-text-chicken">
          <p>{text}</p>
        </div>
        <div className="card-price-chicken">
          <div className="chicken-price">
            {price} <img src={azeManatLogo} alt="AZN" />
          </div>
          <button className="startBtnChicken">{startBtn}</button>
        </div>
      </div>
    );
  }
  
  export default ChickenCard;
  