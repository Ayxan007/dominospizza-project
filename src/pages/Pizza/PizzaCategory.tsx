import PizzaCard from "./PizzaCard";

interface Pizza {
    pizzaImg: string;
    favoritesImg?: string;
    popularImg?: string;
    title: string;
    text: string;
    price: string;
    azeManatLogo: string;
    startTitle: string;
  }

interface PizzaCategoryProps {
    category: Pizza[]; 
    onCardClick: (pizza: any) => void;
    categoryName: string;
  }
  
  const PizzaCategory: React.FC<PizzaCategoryProps> = ({ category, categoryName , onCardClick}) => {
    return (
        <div className={`${categoryName}`}>
        {category.map((pizza: Pizza, index) => (
          <PizzaCard 
            key={index}
            pizzaImg={pizza.pizzaImg}
            favoritesImg={pizza.favoritesImg}
            popularImg={pizza.popularImg}
            title={pizza.title}
            text={pizza.text}
            price={pizza.price}
            azeManatLogo={pizza.azeManatLogo}
            startTitle={pizza.startTitle}
            onClick={() => onCardClick && onCardClick(pizza)} // ✅ Burda var
          />
        ))}
      </div>
    );
  };
  
  export default PizzaCategory;