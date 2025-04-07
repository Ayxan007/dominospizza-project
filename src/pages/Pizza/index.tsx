import Navbar from "../Main/sections/Navbar";
import { usePizzaModal } from "./hooks/usePizzaModal";
import { useCategoryScroll } from "./hooks/useCategoryScroll";
import "./index.css";
import PizzaCategory from "./PizzaCategory";
import pizzaData from "./PizzaData";
import PizzaModal from "./PizzaModal";

function Pizza() {
  const { selectedPizza, isModalOpen, openModal, closeModal } = usePizzaModal();
  const { activeCategory, scrollToCategory, categoryRefs } = useCategoryScroll();

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="pizza-title">
          {(Object.keys(categoryRefs) as (keyof typeof pizzaData)[]).map((key) => (
            <div
              key={key}
              onClick={() => scrollToCategory(key)}
              className={`pizza-text ${activeCategory === key ? "active" : ""}`}
            >
              <span>{key.toUpperCase()}</span>
            </div>
          ))}
        </div>
        <div className="pizza">
          {(Object.keys(categoryRefs) as (keyof typeof pizzaData)[]).map((key) => (
            <div key={key} ref={categoryRefs[key]}>
              <PizzaCategory
                category={pizzaData[key]}
                categoryName={`${key} common`}
                onCardClick={openModal}
              />
            </div>
          ))}
        </div>
      </div>
      <PizzaModal selectedPizza={selectedPizza} isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}

export default Pizza;
