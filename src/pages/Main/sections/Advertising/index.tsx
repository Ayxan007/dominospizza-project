import { useEffect, useState } from "react";
import "./index.css";
import Pizza from "../../../../assets/img/Pizzas1360x350.jpg.png";
import nightDeliver from "../../../../assets/img/1360.350-min.png";
import chocolateCake from "../../../../assets/img/Sufle-AZ-1360x350-(4)-min.png";
import sixPersonPleasure from "../../../../assets/img/6-neferlik-hezz-1360x350-aze-min w.png";
import comboMenu from "../../../../assets/img/KomboMenu-1360x350-az-min.png";

function Advertising() {
  const images = [Pizza, nightDeliver, chocolateCake, sixPersonPleasure, comboMenu];
  const [currentImage, setCurrentImage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100 && !isChanging) {
          setIsChanging(true); 
          setTimeout(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
            setProgress(0); 
            setIsChanging(false); 
          }); 
          return prev;
        }
        return prev < 100 ? prev + 1 : prev; 
      });
    }, 80);

    return () => clearInterval(interval);
  }, [images, isChanging]);

  const handleNext = () => {
    if (!isChanging) {
      setIsChanging(true);
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      setProgress(0);
      setTimeout(() => setIsChanging(false), 100);
    }
  };

  const handlePrev = () => {
    if (!isChanging) {
      setIsChanging(true);
      setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
      setProgress(0);
      setTimeout(() => setIsChanging(false), 100);
    }
  };

  return (
    <div className="container">
      <div className="slider-container">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>

        <svg className="svg-left slider-svg" viewBox="0 0 50 50" onClick={handlePrev}>
          <polygon points="5,25 45,5 45,45" fill="red" />
        </svg>

        <img src={images[currentImage]} alt="Slideshow" className="slider-image" />

        <svg className="svg-right slider-svg" viewBox="0 0 50 50" onClick={handleNext}>
          <polygon points="5,5 45,25 5,45" fill="red" />
        </svg>
      </div>
    </div>
  );
}

export default Advertising;
