import React from "react";
import DipsCard from "./DipsCard"; 

interface Dips {
  dipsImg: string;
  favoritesImg: string;
  title: string;
  price: string;
  azeManatLogo: string;
  startBtn: string;
}

interface DipsCategoryProps {
  category: Dips[];
}

const DipsCategory: React.FC<DipsCategoryProps> = ({ category }) => {
  return (
    <>
      {category.map((dips, index) => (
        <div className="dips-card-wrapper" key={index}>
          <DipsCard
            dipsImg={dips.dipsImg}
            favoritesImg={dips.favoritesImg}
            title={dips.title}
            price={dips.price}
            azeManatLogo={dips.azeManatLogo}
            startBtn={dips.startBtn}
          />
        </div>
      ))}
    </>
  );
};

export default DipsCategory;
