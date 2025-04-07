interface BreadCardProps {
  breadImg: string;
  favoritesImg: string;
  popularImg?: string;
  title: string;
  text: string;
  price: string;
  azeManatLogo: string;
  startBtn: string;
}

function BreadCard({ breadImg, favoritesImg, popularImg, title, text, price, azeManatLogo, startBtn }: BreadCardProps) {
  return (
    <div className="bread-card">
      <div className="card-img-bread">
        <img className="pr-bread" src={breadImg} alt="Bread" />
        <img className="lv-img-bread" src={favoritesImg} alt="Favorite" />
        {popularImg && <img className="fv-img-bread" src={popularImg} alt="Popular" />}
      </div>
      <div className="card-title-bread">
        <h2>{title}</h2>
      </div>
      <div className="card-text-bread">
        <p>{text}</p>
      </div>
      <div className="card-price-bread">
        <div className="bread-price">
          {price} <img src={azeManatLogo} alt="AZN" />
        </div>
        <button className="startBtnBread">{startBtn}</button>
      </div>
    </div>
  );
}

export default BreadCard;
