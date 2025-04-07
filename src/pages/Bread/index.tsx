import Navbar from "../Main/sections/Navbar";
import BreadCategory from "./BreadCategory";
import BrendData from "./BreadData";
import './index.css'

function Bread() {
  return (
    <div className="container">
      <Navbar/>
      <div className="bread">
        <BreadCategory category={BrendData}  />
      </div>
    </div>
  );
}

export default Bread;
