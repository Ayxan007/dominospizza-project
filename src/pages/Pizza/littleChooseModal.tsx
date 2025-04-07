import React, { useState } from "react";
import unconfirmed from "../../assets/img/download (37).png";
import confirmed from "../../assets/img/download (36).png";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  ingredient: string;
  onSelect: (ingredient: string, size: string) => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  ingredient,
  onSelect,
}) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSelect = (size: string) => {
    setSelectedSize(size); 
    onSelect(ingredient, size);
    
    setTimeout(() => {
      onClose();
    }, 200);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="little-m-title">
          <h2>{ingredient}</h2>
        </div>
        <div className="toppings grid">
          <div className="chooses" onClick={() => handleSelect("LT")}>
            <img src={selectedSize === "LT" ? confirmed : unconfirmed} />
            <p>Layt</p>
            <p>+0 azn</p>
          </div>
          <div className="chooses" onClick={() => handleSelect("")}>
            <img src={selectedSize === "" ? confirmed : unconfirmed} />
            <p>Standart</p>
            <p>+0 azn</p>
          </div>
          <div className="chooses" onClick={() => handleSelect("EX +3azn")}>
            <img src={selectedSize === "EX" ? confirmed : unconfirmed} />
            <p>Ekstra</p>
            <p>+3 azn</p>
          </div>
          <div className="chooses" onClick={() => handleSelect("2X +6azn")}>
            <img src={selectedSize === "2X" ? confirmed : unconfirmed} />
            <p>Dabl</p>
            <p>+6 azn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal