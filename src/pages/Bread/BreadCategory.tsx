import React from "react";
import BreadCard from "./BreadCard";

interface Bread {
  breadImg: string;
  favoritesImg: string;
  popularImg?: string;
  title: string;
  text: string;
  price: string;
  azeManatLogo: string;
  startBtn: string;
}

interface BreadCategoryProps {
  category: Bread[]; 
}

const BreadCategory: React.FC<BreadCategoryProps> = ({ category }) => {
  return (
    <>
      {category.map((bread, index) => (
        <div className="bread-card-wrapper" key={index}> 
          <BreadCard
            breadImg={bread.breadImg}
            favoritesImg={bread.favoritesImg}
            popularImg={bread.popularImg}
            title={bread.title}
            text={bread.text}
            price={bread.price}
            azeManatLogo={bread.azeManatLogo}
            startBtn={bread.startBtn}
          />
        </div>
      ))}
    </>
  );
};

export default BreadCategory;
