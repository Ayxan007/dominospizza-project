import Navbar from "../Main/sections/Navbar";
import DrinkCategory from "./DrinkCategory";  
import DrinkData from "./DrinkData";  
import './index.css'

function Drink() {
  return (
    <div className="container">
       <Navbar/>
      <div className="drink">
      <DrinkCategory category={DrinkData} />  
      </div>
    </div>
  );
}

export default Drink;
