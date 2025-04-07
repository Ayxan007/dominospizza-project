interface PizzaCardProps {
  pizzaImg: string;
  favoritesImg?: string;
  popularImg?: string;
  title: string;
  text: string;
  price: string;
  azeManatLogo: string;
  startTitle: string; 
  onClick?: () => void; 
}

function PizzaCard({ pizzaImg, favoritesImg, popularImg, title, text , price, azeManatLogo, startTitle, onClick }: PizzaCardProps) {
  return (
    <div className="pizza-card" onClick={onClick}> 
      <div className="card-img">
        <img className="pr-pizza" src={pizzaImg} />
        {favoritesImg && <img className="lv-img" src={favoritesImg} />}
        {popularImg && <img className="fv-img" src={popularImg} />}
      </div>
      <div className="card-title">
         <h2>{title}</h2>
      </div>
      <div className="card-text">
        <p>{text}</p>
      </div>
      <div className="card-price">
        <div className="pizza-price">{price} <img src={azeManatLogo} /></div>
        <div className='start-text'>{startTitle}</div>
      </div>
    </div>
  );
}


export default PizzaCard;
