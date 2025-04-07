import { useState } from "react";

export const usePizzaModal = () => {
  const [selectedPizza, setSelectedPizza] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (pizza: any) => {
    setSelectedPizza(pizza);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return { selectedPizza, isModalOpen, openModal, closeModal };
};
