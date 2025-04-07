import "./index.css";
import { Link } from "react-router-dom";
import loginLogo from "../../assets/img/logo-login.e55d00f5.png";
import pizzaLogo from "../../assets/img/download.png";
import listLogo from "../../assets/img/download (22).png";
import stepLogo from "../../assets/img/door-step.fd210d29.png";
import pointLogo from "../../assets/img/earn-points.d292715a.png";

function Login() {
  return (
    <div className="container">
      <div className="login-image">
        <div className="textBtn">
          <Link to="/">
            <p>DAXIL OLMADAN KEÇ</p>
          </Link>
        </div>
        <div className="dominos-login">
          <div className="login-logo">
            <img src={loginLogo} />
          </div>
          <div className="login-head">
            <h1 className="login-head-text">
              XÜSUSİ YENİ FÜRSƏTLƏR ÜÇÜN GİRİŞ EDİN
            </h1>
          </div>
          <div className="web-login">
            <ul className="four-login">
              <li>
                <img src={pizzaLogo} />
                <p>
                  ƏLA <br />
                  YEMƏK
                </p>
              </li>
              <li>
                <img src={listLogo} />
                <p>
                  ƏLA <br />
                  TƏKLİFLƏR
                </p>
              </li>
              <li>
                <img src={stepLogo} />
                <p>
                  {" "}
                  3 ADDIMDA
                  <br /> SİFARİŞ
                </p>
              </li>
              <li>
                <img src={pointLogo} />
                <p>
                  Xal Qazan, <br />
                  Pulsuz Pizza əldə et
                </p>
              </li>
            </ul>
          </div>
            <div className="mobile-feild">
            <input />
            </div>
          <div className="from-text">
            <p>qeydiyyatdan keçmək və ya daxil olmaq üçün mobil nömrənizi&nbsp;daxil&nbsp;edin</p>
            </div>
            <div className="login-btn">
              <button>DAVAM ETMƏK</button>
            </div>
            <div className="login-term">
              <span>'Davam etmak' düymasina basmaqla tətbiqin <span className="underline">istifadə şərtləri</span>  və <br /> <span className="underline">məxfilik siyasəti</span> ilə razılaşırsınız.</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
