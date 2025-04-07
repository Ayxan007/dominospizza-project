import { useState } from "react";
import "./index.css";

interface Variation {
  label: string;
  img: string;
  price: string;
}

interface DrinkCardProps {
  drinkImg: string;
  favoritesImg?: string;
  popularImg?: string;
  oneChange: Variation;
  twoChange: Variation;
  threeChange?: Variation;
  title: string;
  price: string;
  azeManatLogo: string;
  startBtn: string;
}

function DrinkCard({
  favoritesImg,
  popularImg,
  oneChange,
  twoChange,
  threeChange,
  title,
  azeManatLogo,
  startBtn,
}: DrinkCardProps) {
  const defaultVariation = threeChange ? twoChange : oneChange;

  const [currentImg, setCurrentImg] = useState(defaultVariation.img);
  const [currentPrice, setCurrentPrice] = useState(defaultVariation.price);
  const [selected, setSelected] = useState(defaultVariation.label);

  const handleClick = (variation: Variation) => {
    setCurrentImg(variation.img);
    setCurrentPrice(variation.price);
    setSelected(variation.label);
  };

  return (
    <div className="drink-card">
      <div className="card-img-drink">
        <img className="pr-drink" src={currentImg} alt={title} />
        {favoritesImg && <img className="lv-img-drink" src={favoritesImg} alt="favorite" />}
        {popularImg && <img className="fv-img-drink" src={popularImg} alt="popular" />}
      </div>

      <div className="card-title-drink">
        <h2>{title}</h2>
      </div>

      <div className="drink-changeBtn">
        <button
          className={`changeBtn ${selected === oneChange.label ? "selected" : ""}`}
          onClick={() => handleClick(oneChange)}
        >
          {oneChange.label}
        </button>
        <button
          className={`changeBtn ${selected === twoChange.label ? "selected" : ""}`}
          onClick={() => handleClick(twoChange)}
        >
          {twoChange.label}
        </button>
        {threeChange && (
          <button
            className={`changeBtn ${selected === threeChange.label ? "selected" : ""}`}
            onClick={() => handleClick(threeChange)}
          >
            {threeChange.label}
          </button>
        )}
      </div>

      <div className="card-price-drink">
        <div className="drink-price">
          {currentPrice} <img src={azeManatLogo} alt="manat" />
        </div>
        <button className="startBtnDrink">{startBtn}</button>
      </div>
    </div>
  );
}

export default DrinkCard;
