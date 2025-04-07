import Navbar from "../Main/sections/Navbar";
import suggestionsaImage from "../../assets/img/download (31).png";
import "./index.css";

function Suggestions() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="suggestions-head">
          <img src={suggestionsaImage} />
        </div>
        <div className="suggestions">
          <div className="forms">
            <label className="forms-name">AD</label>
            <input className="inputs-some" type="text" />
          </div>
          <div className="forms">
            <label className="forms-name">SOYAD</label>
            <input className="inputs-some" type="text" />
          </div>
          <div className="forms">
            <label className="forms-name">ELEKTRON POÇT</label>
            <input className="inputs-some" type="text" />
          </div>
          <div className="forms">
            <label className="forms-name">MOBİL NÖMRƏ</label>
            <input className="inputs-some" type="text" />
          </div>
          <div className="forms">
            <label className="forms-name">SİFARİŞ NÖMRƏSİ</label>
            <input className="inputs-some" type="text" />
          </div>
          <div className="forms">
            <label className="forms-name">SİZİN MESAJINIZ</label>
            <input className="inputs-seperate" type="text" />
          </div>
        </div>
        <div className="message-send">
          <button>
            <svg
              className="send-svg"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
              <path fill="none" d="M0 0h24v24H0z"></path>
            </svg>
            <span>MESAJ GÖNDƏRİN</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Suggestions;
