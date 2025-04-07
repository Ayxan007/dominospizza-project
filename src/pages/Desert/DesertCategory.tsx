import React from "react";
import DesertCard from "./DesertCard"; 

interface Desert {
  desertImg: string;
  favoritesImg: string;
  popularImg?: string;
  title: string;
  price: string;
  azeManatLogo: string;
  startBtn: string;
}

interface DesertCategoryProps {
  category: Desert[];
}

const DesertCategory: React.FC<DesertCategoryProps> = ({ category }) => {
  return (
    <>
      {category.map((desert, index) => (
        <div className="desert-card-wrapper" key={index}>
          <DesertCard
            desertImg={desert.desertImg}
            favoritesImg={desert.favoritesImg}
            popularImg={desert.popularImg}
            title={desert.title}
            price={desert.price}
            azeManatLogo={desert.azeManatLogo}
            startBtn={desert.startBtn}
          />
        </div>
      ))}
    </>
  );
};

export default DesertCategory;
