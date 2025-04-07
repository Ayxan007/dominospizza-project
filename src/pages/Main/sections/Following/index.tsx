import "./index.css";
import Follow from "../../../../assets/img/mobile-store-tracking-banner.2c6882d7.webp";

function Following() {
  return (
    <div className="container">
      <div className="follow">
        <div className="following-text">
          <div className="follow">
            <h5>İZLƏMƏ</h5>
          </div>
          <div className="order">
            <p>SİFARİŞİN İZLƏNMƏSİ BARMAĞINIZIN UCUNDADIR</p>
          </div>
          <div className="order-text">
            <p>
              BÜTÜN QEYRİ-MÜƏYYƏNLİKLƏRDƏN QURTULUN. İNDİ SİFARİŞİNİZİN ƏVVƏLDƏN
              AXIRA QƏDƏR İZLƏYİN. DOMİNO'S PİZZANIN YENİ MOBİL TƏTBİQİNİ
              ENDİRİN VƏ İZLƏMƏ XİDMƏTİNİ ƏLDƏ EDİN.{" "}
            </p>
          </div>
          <div className="just-follow">
            <button className="follow-btn">
              <svg
                width={30}
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                <path fill="none" d="M0 0h24v24H0z"></path>
              </svg>
              <span>İNDİ İZLƏYİN</span>
            </button>
          </div>
        </div>
        <div className="following-img">
          <img src={Follow} />
        </div>
      </div>
    </div>
  );
}

export default Following;
