import "./index.css";
import { Link } from "react-router-dom";
import Pizza from "../../../../assets/img/icon2p.png";
import Bread from "../../../../assets/img/icon2hdjfds.png";
import Chicken from "../../../../assets/img/icon2ch.png";
import Salad from "../../../../assets/img/icon2skjd.png";
import Drinks from "../../../../assets/img/icon2dfd.png";
import Dips from "../../../../assets/img/icon2dd.png";
import Desserts from "../../../../assets/img/iconi.png";
import Offers from '../../../../assets/img/red-percentage.46a29810.webp'
import { useState } from "react";

function Navbar() {
  const [animation, setAnimation] = useState("blink");
  return (
    <div className="container">
      <div className="navbar">
        <ul className="ul-navbar">
          <li
           className={animation}
           onMouseEnter={() => setAnimation("slide")} 
           onMouseLeave={() => setAnimation("scale")} 
          >
          <Link to="/offers">
            <img src={Offers} />
            <p>Kampaniyalar</p>
            </Link>
          </li>
          <li>
            <Link to="/pizza">
              <img src={Pizza} />
              <p>Pizza</p>
            </Link>
          </li>
          <li>
            <Link to="/bread">
            <img src={Bread} />
            <p>Çörək</p>
            </Link>
          </li>
          <li>
          <Link to="/chicken">
            <img src={Chicken} />
            <p>Toyuq</p>
            </Link>
          </li>
          <li>
            <Link to="/salad">
            <img src={Salad} />
            <p>Salat</p>
            </Link>
          </li>
          <li>
          <Link to="/drink">
            <img src={Drinks} />
            <p>İçki</p>
            </Link>
          </li>
          <li>
          <Link to="/dips">
            <img src={Dips} />
            <p>Sous</p>
            </Link>
          </li>
          <li>
          <Link to="/desert">
            <img src={Desserts} />
            <p>Şirniyyat</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
