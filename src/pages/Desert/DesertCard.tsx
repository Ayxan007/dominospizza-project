interface DesertCardProps {
    desertImg: string;
    favoritesImg: string;
    popularImg?: string;
    title: string;
    price: string;
    azeManatLogo: string;
    startBtn: string;
  }
  
  function DesertCard({ desertImg, favoritesImg , popularImg,  title,  price, azeManatLogo, startBtn }: DesertCardProps) {
    return (
      <div className="desert-card">
        <div className="card-img-desert">
          <img className="pr-desert" src={desertImg} alt="desert" />
          <img className="lv-img-desert" src={favoritesImg} alt="Favorite" />
          {popularImg && <img className="fv-img-desert" src={popularImg} />}
        </div>
        <div className="card-title-desert">
          <h2>{title}</h2>
        </div>
        <div className="card-price-desert">
          <div className="desert-price">
            {price} <img src={azeManatLogo} alt="AZN" />
          </div>
          <button className="startBtnDesert">{startBtn}</button>
        </div>
      </div>
    );
  }
  
  export default DesertCard;
  