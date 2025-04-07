interface SaladCardProps {
    saladImg: string;
    favoritesImg: string;
    title: string;
    price: string;
    azeManatLogo: string;
    startBtn: string;
  }
  
  function SaladCard({ saladImg, favoritesImg ,  title,  price, azeManatLogo, startBtn }: SaladCardProps) {
    return (
      <div className="salad-card">
        <div className="card-img-salad">
          <img className="pr-salad" src={saladImg} alt="salad" />
          <img className="lv-img-chicken" src={favoritesImg} alt="Favorite" />
        </div>
        <div className="card-title-salad">
          <h2>{title}</h2>
        </div>
        <div className="card-price-salad">
          <div className="salad-price">
            {price} <img src={azeManatLogo} alt="AZN" />
          </div>
          <button className="startBtnSalad">{startBtn}</button>
        </div>
      </div>
    );
  }
  
  export default SaladCard;
  