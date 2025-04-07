import "./index.css";
import Navbar from "../Main/sections/Navbar";
import ContactLogo from '../../assets/img/download (32).png'

function Contact() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="contact-head">
        <img src={ContactLogo} />
      </div>
      <div className="contact">
        <div className="contact-common">
          <label>AD</label>
          <input type="text" className="contact-forms" placeholder="AD" />
        </div>
        <div className="contact-common">
          <label>SOYAD</label>
          <input type="text" className="contact-forms" placeholder="SOYAD" />
        </div>
        <div className="contact-common">
          <label>ELEKTRON POÇT</label>
          <input type="text" className="contact-forms" placeholder="ELEKTRON POÇT" />
        </div>
        <div className="contact-common">
          <label>MOBİL NÖMRƏ</label>
          <input type="text" className="contact-forms" placeholder="MOBİL NÖMRƏ" />
        </div>
        <div className="contact-common">
          <label>SİZİN MESAJINIZ</label>
          <input type="text" className="contact-forms-seperate" placeholder="SİZİN MESAJINIZ"/>
        </div>
      </div>
      <div className="send">
        <button>
            <span><svg className="send-svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg></span>
            GÖNDƏRMƏK
        </button>
      </div>
    </div>
    </>
  );
}

export default Contact;
