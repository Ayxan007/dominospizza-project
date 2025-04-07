import Navbar from "../Main/sections/Navbar";
import DesertCategory from "./DesertCategory";  
import DesertData from "./DesertData";  
import './index.css'

function Desert() {
  return (
    <div className="container">
       <Navbar/>
      <div className="desert">
      <DesertCategory category={DesertData} />  
      </div>
    </div>
  );
}

export default Desert;
