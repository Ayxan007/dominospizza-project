import React from "react";
import ChickenCard from "./ChickenCard"; 

interface Chicken {
  newLogo?: string,
  chickenImg: string;
  favoritesImg: string;
  title: string;
  text: string;
  price: string;
  azeManatLogo: string;
  startBtn: string;
}

interface ChickenCategoryProps {
  category: Chicken[];
}

const ChickenCategory: React.FC<ChickenCategoryProps> = ({ category }) => {
  return (
    <>
      {category.map((chicken, index) => (
        <div className="chicken-card-wrapper" key={index}>
          <ChickenCard
            newLogo={chicken.newLogo}
            chickenImg={chicken.chickenImg}
            favoritesImg={chicken.favoritesImg}
            title={chicken.title}
            text={chicken.text}
            price={chicken.price}
            azeManatLogo={chicken.azeManatLogo}
            startBtn={chicken.startBtn}
          />
        </div>
      ))}
    </>
  );
};

export default ChickenCategory;
