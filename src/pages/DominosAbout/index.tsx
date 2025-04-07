import dominosAbout from '../../assets/img/download (27).png'
import aboutUs from '../../assets/img/about-us-az.2e6080be.png'
import Navbar from '../Main/sections/Navbar';
import './index.css'

function DominosAbout(){
    return(
        <>
        <Navbar/>
        <div className="container">
            <div className="about-header">
                <img src={dominosAbout}  />
            </div>
            <div className="about-us">
                <img src={aboutUs}  />
            </div>
        </div>
        </>
    )
}

export default DominosAbout;