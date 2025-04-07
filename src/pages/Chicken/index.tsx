import Navbar from "../Main/sections/Navbar";
import ChickenCategory from "./ChickenCategory";  
import ChickenData from "./ChickenData";  
import './index.css'

function Chicken() {
  return (
    <div className="container">
       <Navbar/>
      <div className="chicken">
      <ChickenCategory category={ChickenData} />  
      </div>
    </div>
  );
}

export default Chicken;
