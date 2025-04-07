import "./Footer.css";
import halalLogo from "../../assets/img/11.b1cc55e6.png";
import deliveryLogo from "../../assets/img/30deq-catdirilma-zemaneti-AZ.304b9dda.png";
import fullLogo from "../../assets/img/download (8).png";
import happyLogo from "../../assets/img/download (9).png";
import googlePlay from "../../assets/img/download (7).png";
import appStore from "../../assets/img/Download_on_the_App_Store_RGB_blk.svg.png";
import appGallery from "../../assets/img/app-gallery.ff54aa0a.png";
import facebook from "../../assets/img/download (11).png";
import instagram from "../../assets/img/download (12).png";
import youtube from "../../assets/img/download (13).png";
import visa from "../../assets/img/download (14).png";
import masterCard from "../../assets/img/download (15).png";
import freeDelivery from "../../assets/img/download (16).png";
import paymentDelivery from "../../assets/img/download (17).png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container full">
      <div className="footer-head">
        <div className="logo-list">
          <img src={halalLogo} />
        </div>
        <div className="logo-list">
          <img src={deliveryLogo} />
        </div>
        <div className="logo-list">
          <img src={fullLogo} />
        </div>
        <div className="logo-list">
          <img src={happyLogo} />
        </div>
      </div>
      <div className="information">
        <div className="info-list">
          <Link to="/dominos-about">
            Domino's Haqqında
            <span className="vl"></span>
            </Link>
        </div>
        <div className="info-list">
          <Link to="/suggestions">
            Təkliflər və şikayətlər
            <span className="vl"></span>
            </Link>
        </div>
        <div className="info-list">
        <Link to="/service-order">
            Xidmət və Sifariş şərtləri
            <span className="vl"></span>
           </Link>
        </div>
        <div className="info-list">
          <Link to="/privacy-policy">
            Gizlilik Siyasəti
            <span className="vl"></span>
          </Link>
        </div>
        <div className="info-list">
          <Link to="/contact">
            Əlaqə
            <span className="vl"></span>
          </Link>
        </div>
        <div className="info-list">
          <Link to="/join-us">
          Bizə qoşul
          </Link>
        </div>
      </div>
      <div className="network">
        <div className="stores">
          <a
            href="https://play.google.com/store/apps/details?id=com.dominospizza.az"
            target="#blank"
          >
            <img src={googlePlay} height={55} width={113} className="gray-image"/>
          </a>
          <a
            href="https://apps.apple.com/us/app/dominos-pizza-azerbaijan/id1535012493"
            target="#blank"
          >
          <img src={appStore} height={38} width={100} className="gray-image" />
          </a>
          <a
            href="https://appgallery.huawei.com/app/C104470921"
            target="#blank"
          >
          <img src={appGallery} height={38} width={100} className="gray-image"/>
          </a>
        </div>
        <span className="v2"></span>
        <div className="social">
            <a href="https://www.facebook.com/Dominos.Azerbaijan/"
            target="#blank"
            >
          <img src={facebook} className="gray-image" width={20}/>
          </a>
          <a href="https://www.instagram.com/dominos_az/"
          target="#blank">
          <img src={instagram} className="gray-image"  width={20}/>
          </a>
          <a href="https://www.youtube.com/channel/UCZByvwhybrwYHLZUaf3L2hw"
          target="#blank"
          >
          <img src={youtube} className="gray-image"  width={25}/>
          </a>
        </div>
        <span className="v2"></span>
        <div className="cards">
          <img src={visa} className="gray-image" width={70}/>
          <img src={masterCard} className="gray-image"  width={70}/>
          <img src={freeDelivery} className="gray-image"  width={70}/>
          <img src={paymentDelivery} className="gray-image"  width={70}/>
        </div>
      </div>
      <div className="footer">
        <span className="footer-text">
        © 2019-2025<a href="http://www.hitech-prime.com/" target="#blank">&nbsp;HiTech Prime Private Limited</a> &nbsp;All rights reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;
