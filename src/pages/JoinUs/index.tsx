import Navbar from "../Main/sections/Navbar";
import joinLogo from "../../assets/img/download (33).png";
import "./index.css";

function Join() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="join-head">
          <img src={joinLogo} />
        </div>
        <div className="join-forms">
          <div className="join">
            <label>AD</label>
            <input type="text" className="join-input" />
          </div>
          <div className="join">
            <label>SOYAD</label>
            <input type="text" className="join-input" />
          </div>
          <div className="join">
            <label>MOBIL</label>
            <input type="text" className="join-input" />
          </div>
          <div className="join">
            <label>E-POÇT</label>
            <input type="text" className="join-input" />
          </div>
          <div className="join">
            <label>DOĞUM TARIXI</label>
            <input type="date" className="join-input" />
          </div>
          <div className="join seperate">
            <label>CINS</label>
            <div className="common-join">
              <div className="option-join">
                <input type="radio" name="gender" className="opt-scale" />
                <p>KİŞİ</p>
              </div>
              <div className="option-join">
                <input type="radio" name="gender" className="opt-scale" />
                <p>QADIN</p>
              </div>
            </div>
          </div>
          <div className="join seperate">
            <label>AİLƏ VƏZİYYƏTİ</label>
            <div className="common-join">
              <div className="option-join">
                <input type="radio" name="gender" className="opt-scale" />
                <p>SUBAY</p>
              </div>
              <div className="option-join">
                <input type="radio" name="gender" className="opt-scale" />
                <p>EVLİ</p>
              </div>
            </div>
          </div>
          <div className="join">
            <label>ŞƏHƏR</label>
            <select className="join-input seperate-pd">
              <option>Şəhərinizi seçin</option>
              <option>Bakı</option>
              <option>Sumqayıt</option>
              <option>Xırdalan</option>
              <option>Gəncə</option>
            </select>
          </div>
          <div className="join">
            <label>TƏHSİL</label>
            <select className="join-input seperate-pd">
              <option>Təhsilinizi seçin</option>
              <option>Ali təhsil</option>
              <option>Orta təhsil</option>
            </select>
          </div>
          <div className="join seperate">
            <label>DİL</label>
            <div className="language">
              <h4>AZƏRİ</h4>
              <input type="radio" name="aze" />
              <p>ƏSAS</p>
              <input type="radio" name="aze" />
              <p>ORTA</p>
              <input type="radio" name="aze" />
              <p>SƏLİS</p>
              <input type="radio" name="aze" />
              <p>DOĞMA</p>
            </div>
            <div className="language">
              <h4>İNGİLİS</h4>
              <input type="radio" name="eng" />
              <p>ƏSAS</p>
              <input type="radio" name="eng" />
              <p>ORTA</p>
              <input type="radio" name="eng" />
              <p>SƏLİS</p>
              <input type="radio" name="eng" />
              <p>DOĞMA</p>
            </div>
            <div className="language">
              <h4>RUS</h4>
              <input type="radio" name="rus" />
              <p>ƏSAS</p>
              <input type="radio" name="rus" />
              <p>ORTA</p>
              <input type="radio" name="rus" />
              <p>SƏLİS</p>
              <input type="radio" name="rus" />
              <p>DOĞMA</p>
            </div>
          </div>
          <div className="join seperate">
            <label>KOMPÜTER BACARIQLARI</label>
            <div className="common-join quadrangle">
              <input type="radio" name="comp" />
              <p>EXCEL</p>
              <input type="radio" name="comp" />
              <p>WORD</p>
              <input type="radio" name="comp" />
              <p>POWERPOINT</p>
              <input type="radio" name="comp" />
              <p>OUTLOOK</p>
            </div>
          </div>
        </div>
        <table className="join-table">
          <thead>
            <tr>
              <th className="table-head">VƏZİFƏ</th>
              <th className="table-head">Şirkət Adı</th>
              <th className="table-head">Başlama tarixi</th>
              <th className="table-head">Bitmə vaxtı</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="table-body">
                <div>
                  <input type="text" placeholder="İş yerinizi daxil edin" />
                </div>
              </td>
              <td className="table-body">
                <div>
                  <input type="text" placeholder="Şirkət adını daxil edin" />
                </div>
              </td>
              <td className="table-body">
                <div>
                  <input type="date" />
                </div>
              </td>
              <td className="table-body">
                <div>
                  <input type="date" />
                </div>
              </td>
            </tr>
            <p className="add-experience">Başqa bir təcrübə əlavə edin</p>
          </tbody>
        </table>
        <div className="add-work">
          <div className="work-task">
            <label className="forms-name">VƏZİFƏ</label>
            <select className="inputs-some">
              <option>Müraciət etdiyiniz vəzifəni seçin</option>
              <option>Ərazi meneceri</option>
              <option>Restoran meneceri</option>
              <option>Növbə meneceri</option>
              <option>Pizza Maker</option>
              <option>Kuryer</option>
              <option>Sürücü</option>
              <option>Ofislə əlaqəli vəzifələr</option>
              <option>Digər</option>
            </select>
          </div>
          <div className="resume">
            <label htmlFor="file-upload" className="custom-file-upload">
              Resume əlavə edin
            </label>
            <input id="file-upload" type="file" />
          </div>
        </div>
        <div className="end-btn">
          <button>
            <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path>
            </svg>
            TƏSDİQ ET
          </button>
        </div>
      </div>
    </>
  );
}

export default Join;
