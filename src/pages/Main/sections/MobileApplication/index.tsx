import "./index.css";
import decoration from "../../../../assets/img/brush-splash.32c4bd0e.webp";
import GooglePlay from "../../../../assets/img/download (7).png";
import AppStore from "../../../../assets/img/Download_on_the_App_Store_RGB_blk.svg.png";
import AppGallery from "../../../../assets/img/app-gallery.ff54aa0a.png";
import DominosBanner from "../../../../assets/img/dominos-banner-download-app.9f944170.webp";

function MobileApplication() {
  return (
    <div className="container">
      <div className="common">
        <div className="application-text">
          <div className="text-mb">
            <h5>DOMINO'S MOBİL TƏTBİQİ</h5>
          </div>
          <div className="text-free">
            <p>TƏTBİQLƏ TEZ VƏ PULSUZ ÇATDIRILMA</p>
          </div>
          <div className="decoration-img">
            <img src={decoration} />
          </div>
          <div className="text-book">
            <p>
              Sevimli pizzanızı seçin, online sifariş edin. Bu indi Domino’s
              tətbiqi iıə mümkündür! Siz online olaraq öz pizzanızın
              inqridientlərini, xəmir tipini, çörəkləri, qəlyanaltıları,
              sousları və içkiləri mobil tətbiqdən seçib sifariş edə BiLƏRSiNiZ.
              Zəngin pizza çeşidləri və ən yaxşı dad Azərbaycanda!{" "}
            </p>
          </div>
          <div className="downloading-advert">
            <a
              href="https://play.google.com/store/apps/details?id=com.dominospizza.az"
              target="#blank"
            >
              <img src={GooglePlay} width="200px" className="gray-image" />
            </a>
            <a
              href="https://apps.apple.com/us/app/dominos-pizza-azerbaijan/id1535012493"
              target="#blank"
            >
              <img src={AppStore} width="165px" className="gray-image" />
            </a>
            <a
              href="https://appgallery.huawei.com/app/C104470921"
              target="#blank"
            >
              <img src={AppGallery} width="180px" className="gray-image" />
            </a>
          </div>
        </div>
        <div className="application-img">
          <img src={DominosBanner} />
        </div>
      </div>
    </div>
  );
}

export default MobileApplication;
