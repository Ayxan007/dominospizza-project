import React from "react";
import DrinkCard from "./DrinkCard";

interface Variation {
  label: string;
  img: string;
  price: string;
}

interface Drink {
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

interface DrinkCategoryProps {
  category: Drink[];
}

const DrinkCategory: React.FC<DrinkCategoryProps> = ({ category }) => {
  return (
    <>
      {category.map((drink, index) => (
        <div className="drink-card-wrapper" key={index}>
          <DrinkCard
            drinkImg={drink.drinkImg}
            favoritesImg={drink.favoritesImg}
            popularImg={drink.popularImg}
            oneChange={drink.oneChange}
            twoChange={drink.twoChange}
            threeChange={drink.threeChange}
            title={drink.title}
            price={drink.price}
            azeManatLogo={drink.azeManatLogo}
            startBtn={drink.startBtn}
          />
        </div>
      ))}
    </>
  );
};

export default DrinkCategory;
