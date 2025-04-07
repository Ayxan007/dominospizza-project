import React from "react";
import SaladCard from "./SaladCard"; 

interface Salad {
  saladImg: string;
  favoritesImg: string;
  title: string;
  price: string;
  azeManatLogo: string;
  startBtn: string;
}

interface SaladCategoryProps {
  category: Salad[];
}

const SaladCategory: React.FC<SaladCategoryProps> = ({ category }) => {
  return (
    <>
      {category.map((salad, index) => (
        <div className="salad-card-wrapper" key={index}>
          <SaladCard
            saladImg={salad.saladImg}
            favoritesImg={salad.favoritesImg}
            title={salad.title}
            price={salad.price}
            azeManatLogo={salad.azeManatLogo}
            startBtn={salad.startBtn}
          />
        </div>
      ))}
    </>
  );
};

export default SaladCategory;
