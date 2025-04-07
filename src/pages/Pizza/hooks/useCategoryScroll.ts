import { useEffect, useRef, useState } from "react";
import pizzaData from "../PizzaData";

type PizzaCategoryKey = keyof typeof pizzaData;

export const useCategoryScroll = () => {
  const [activeCategory, setActiveCategory] = useState<PizzaCategoryKey>("premium");

  const categoryRefs: Record<PizzaCategoryKey, React.RefObject<HTMLDivElement>> = {
    premium: useRef<HTMLDivElement>(null),
    special: useRef<HTMLDivElement>(null),
    favorit: useRef<HTMLDivElement>(null),
    halfToHalf: useRef<HTMLDivElement>(null),
    createPizza: useRef<HTMLDivElement>(null),
  };

  const scrollToCategory = (category: PizzaCategoryKey) => {
    setActiveCategory(category);
    categoryRefs[category]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      let closestCategory: PizzaCategoryKey = "premium";
      let closestDistance = window.innerHeight;

      (Object.keys(categoryRefs) as PizzaCategoryKey[]).forEach((key) => {
        const ref = categoryRefs[key]?.current;
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const distance = Math.abs(rect.top - window.innerHeight / 3);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestCategory = key;
          }
        }
      });

      setActiveCategory(closestCategory);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { activeCategory, scrollToCategory, categoryRefs };
};
