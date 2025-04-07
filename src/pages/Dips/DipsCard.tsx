interface DipsCardProps {
    dipsImg: string;
    favoritesImg: string;
    title: string;
    price: string;
    azeManatLogo: string;
    startBtn: string;
  }
  
  function DipsCard({ dipsImg, favoritesImg ,  title,  price, azeManatLogo, startBtn }: DipsCardProps) {
    return (
      <div className="dips-card">
        <div className="card-img-dips">
          <img className="pr-dips" src={dipsImg} alt="salad" />
          <img className="lv-img-dips" src={favoritesImg} alt="Favorite" />
        </div>
        <div className="card-title-dips">
          <h2>{title}</h2>
        </div>
        <div className="card-price-dips">
          <div className="dips-price">
            {price} <img src={azeManatLogo} alt="AZN" />
          </div>
          <div className="btn">
          <button className="startBtnDips">{startBtn}</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default DipsCard;
  