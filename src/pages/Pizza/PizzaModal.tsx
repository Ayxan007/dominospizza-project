import { useState } from "react";
import modalAznLogo from "../../assets/img/download (34).png";
import blueAznlogo from "../../assets/img/download (35).png";
import confirmed from "../../assets/img/download (36).png";
import unconfirmed from "../../assets/img/download (37).png";
import Modal from "./littleChooseModal";

interface SizeSlice {
  name: string;
  img: string;
  value: number | string; 
}

interface PizzaModalProps {
  selectedPizza: any;
  isModalOpen: boolean;
  closeModal: () => void;
}

interface Side {
  sideTitle: string;
  sideImg: string;
}

interface Pastry {
  pastryTitle: string;
  pastryImg: string;
}

const PizzaModal = ({
  selectedPizza,
  isModalOpen,
  closeModal,
}: PizzaModalProps) => {
  if (!isModalOpen || !selectedPizza) return null;

  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSide, setSelectedSide] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState<{
    [key: string]: string;
  }>({});
  const [selectedSize, setSelectedSize] = useState<SizeSlice>(
    selectedPizza.sizes?.[0] || { name: "", img: "", value: "" }
  );
  const [selectedPastry, setSelectedPastry] = useState<string>("Klassik xəmir");

  const sizePrice = parseFloat(selectedSize.value.toString());
  const pastryPrice = selectedPastry.includes("İkiqat xəmir") ? 4 : 0;

  const sidePrices: { [key: string]: number } = {
    "Mozzarella Kənar +3.5": 3.5,
    "Kolbasa Kənar +3.5": 3.5,
    "Parmezan Kənar +2.5": 2.5,
    "Sarımsaq Souslu Kənar +2.5": 2.5,
  };

  const selectedSidePrice = selectedPastry === "Klassik xəmir" && selectedSide
    ? sidePrices[selectedSide]
    : 0;

  const toppingPrice = Object.values(selectedIngredients).reduce(
    (acc, value) => {
      if (value === "EX +3azn") return acc + 3;
      if (value === "2X +6azn") return acc + 6;
      return acc;
    },
    0
  );

  const adjustedPrice = sizePrice + pastryPrice + toppingPrice + selectedSidePrice;

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const openModal = (ingredient: string) => {
    setSelectedIngredient(ingredient);
    setModalOpen(true);
  };

  const handleIngredientSelect = (ingredient: string, size: string) => {
    setSelectedIngredients((prev) => ({ ...prev, [ingredient]: size }));
  };

  return (
    <>
      <div className="overlay show" onClick={closeModal}></div>
      <div className="modal show">
        <div className="modal-close" onClick={closeModal}>
          X
        </div>
        <div className="modal-flex">
          <div className="modal-img">
            <img src={selectedPizza.modalPizzaImg} alt={selectedPizza.title} />
          </div>
          <div className="modal-about">
            <div className="modal-title">
              <h1>{selectedPizza.title}</h1>
            </div>
            <div className="modal-text">
              <p>{selectedPizza.text}</p>
            </div>
            <div className="bottom-flex">
              <div className="number-btn">
                <button className="red-math" onClick={decreaseQuantity}>
                  <span>-</span>
                </button>
                <button className="value">
                  <span>{quantity}</span>
                </button>
                <button className="red-math" onClick={increaseQuantity}>
                  <span>+</span>
                </button>
              </div>
              <div className="modal-price">
                <span>
                  {(adjustedPrice * quantity).toFixed(2)}{" "}
                  <img src={blueAznlogo} alt="currency" />
                </span>
              </div>
              <div className="modal-basket-add">
                <button>SƏBƏTƏ ƏLAVƏ ET</button>
              </div>
            </div>
            <div className="size-title">
              <p>Ölçü seçin</p>
            </div>
            <div className="size-choose">
              {selectedPizza.sizes?.map((size: SizeSlice) => (
                <div
                  key={size.name}
                  className={`size-option ${selectedSize.name === size.name ? "selected" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  <div className="size-img">
                    <img src={size.img} />
                  </div>
                  <div className="size-text">
                    <p>{size.name}</p>
                    <span>
                      {size.value} <img src={modalAznLogo} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="pastry-title">
              <p>XƏMİR SEÇİN</p>
            </div>
            <div className="pastry-choose">
              {selectedPizza.pastry?.map((option: Pastry, index: number) => (
                <div
                  key={index}
                  className={`pastry-option ${selectedPastry === option.pastryTitle ? "selected" : ""}`}
                  onClick={() => setSelectedPastry(option.pastryTitle)}
                >
                  <div className="pastry-text">
                    <p>{option.pastryTitle}</p>
                  </div>
                  <div className="pastry-img">
                    <img src={option.pastryImg} />
                  </div>
                </div>
              ))}
            </div>
            {selectedPastry === "Klassik xəmir" && (
              <>
                <div className="side-title">
                  <p>KƏNAR SEÇİN</p>
                </div>
                <div className="side-choose">
                  {selectedPizza.side.map((option: Side, index: number) => (
                    <div
                      key={index}
                      className={`side-option ${selectedSide === option.sideTitle ? "selected" : ""}`}
                      onClick={() => setSelectedSide(option.sideTitle)}
                    >
                      <div className="side-img">
                        <img src={option.sideImg} />
                        <p className="side-text">{option.sideTitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            <div className="toppings">
              <div className="title">
                <p>Standard İnqridientlər</p>
              </div>
              <div className="modal-chooses">
                {["Steak", "Meatballs", "Pastrami", "Mozzarella Cheese", "Pepperoni", "Pizza Sauce"]
                  .map((ingredient) => (
                    <div
                      key={ingredient}
                      className="chooses"
                      onClick={() => openModal(ingredient)}
                    >
                      <img src={confirmed} />
                      <p>{ingredient} {selectedIngredients[ingredient]}</p>
                    </div>
                ))}
              </div>
            </div>
            <div className="toppings">
              <div className="title">
                <p>Əlavə inqridientlər</p>
              </div>
              <div className="modal-chooses">
                {["Çeddar Pendiri", "Parmesan Pendiri", "Feta Pendiri", "Sosiska", "Kub Sucuk", "Dilim Sucuk", 
                  "Manqal Sucuk", "Mal Əti Vetçinasi", "Hisə verilmiş Toyuq", "Dana Dönər Əti", "Ton Balığı", 
                  "Toyuq Dilimləri", "Mayonez", "BBQ Sous", "Közlənmiş Bibər", "Pul Bibər", "Jalapeno Bibər", 
                  "Yaşıl Bibər", "Göbələk", "Qara Zeytun", "Qarğıdalı", "Pomidor", "Ananas", "Soğan", "Küncüt", 
                  "Kəklikotu"]
                  .map((ingredient) => (
                    <div
                      key={ingredient}
                      className="chooses"
                      onClick={() => openModal(ingredient)}
                    >
                      <img src={selectedIngredients[ingredient] ? confirmed : unconfirmed} />
                      <p>{ingredient} {selectedIngredients[ingredient] && `(${selectedIngredients[ingredient]})`}</p>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          ingredient={selectedIngredient}
          onSelect={handleIngredientSelect}
        />                                                                                                                                                                                                                               
      </div>
    </>
  );
};

export default PizzaModal; 