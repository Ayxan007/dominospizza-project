import Navbar from "../Main/sections/Navbar";
import SaladCategory from "./SaladCategory";  
import SaladData from "./SaladData";  
import './index.css'

function Salad() {
  return (
    <div className="container">
       <Navbar/>
      <div className="salad">
      <SaladCategory category={SaladData} />  
      </div>
    </div>
  );
}

export default Salad;
