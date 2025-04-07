import Navbar from "../Main/sections/Navbar";
import DipsCategory from "./DipsCategory";  
import DipsData from "./DipsData";  
import './index.css'

function Dips() {
  return (
    <div className="container">
       <Navbar/>
      <div className="dips">
      <DipsCategory category={DipsData} />  
      </div>
    </div>
  );
}

export default Dips;
