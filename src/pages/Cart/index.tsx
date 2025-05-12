import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../../pages/Pizza/cartSlice";
import Navbar from "../Main/sections/Navbar";
import cartLogo from "../../assets/img/download (38).png";
import emptyCart from "../../assets/img/empty-cart.0edefb64.webp";
import dominosLogo from "../../assets/img/download (39).png";
import deliveryLogo from "../../assets/img/download (41).png";
import notSelectedLogo from "../../assets/img/download (42).png";
import selectedLogo from "../../assets/img/download (43).png";
import openLogo from "../../assets/img/download (44).png";
import closeLogo from "../../assets/img/download (45).png";
import opportunitiesCola from "../../assets/img/classic500ml (1).png";
import opportunitiesCiken from "../../assets/img/Strips-3pcs-600x600-T-min (1).png";
import opportunitiesBite from "../../assets/img/Cheese Bite (1).png";
import "./index.css";

interface RootState {
  cart: {
    cart: CartItem[];
  };
}

interface CartItem {
  id: string;
  title: string;
  size: string;
  pastry: string;
  side?: string | null;
  ingredients?: Record<string, string>;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  image: string;
  price: number;
}

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openBoxIndex, setOpenBoxIndex] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [deliveryTime, setDeliveryTime] = useState<"now" | "later" | null>(
    null
  );
  const [showOptions, setShowOptions] = useState(false);
  const [noteText, setNoteText] = useState("");

  const boxes = [
    "Xidmət növü",
    "Çatdırılma zamanı",
    "Çatdırılma ünvanı",
    "Şöbə məlumatları",
    "Qeyd",
    "Ödəniş üsulu seçin",
  ];

  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const totalAmount = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);

  const toggleBox = (index: number) => {
    setOpenBoxIndex(openBoxIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="cart-logo">
          <img src={cartLogo} alt="Cart" />
        </div>
        <div className="cart">
          {cartItems.length === 0 ? (
            <div className="cart-main">
              <img src={emptyCart} alt="Empty cart" />
              <h1>sizin səbətiniz boşdur</h1>
            </div>
          ) : (
            <div className="add-pizza">
              {cartItems.map((item) => (
                <div className="pizza-cart" key={item.id}>
                  <div
                    onClick={() =>
                      dispatch(
                        removeFromCart({
                          id: item.id,
                          size: item.size,
                          pastry: item.pastry,
                        })
                      )
                    }
                    className="close-button"
                  >
                    <svg
                      width="30px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
                        fill="#000000"
                      ></path>
                    </svg>
                  </div>
                  <div className="pizza-img">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="pizza-about">
                    <div className="cart-title">
                      <p>{item.title}</p>
                    </div>
                    <div className="cart-text">
                      <p>{item.size}</p>
                      <p>{item.pastry}</p>
                    </div>
                    <div className="cart-ingredients">
                      <p>
                        {Object.entries(item.ingredients || {})

                          .map(([name, value]) => value && `${name} (${value})`)
                          .filter(Boolean)
                          .join(", ")}
                      </p>
                    </div>
                    <div className="cart-buttom">
                      <div className="number-btn">
                        <button
                          className="red-math"
                          onClick={() =>
                            dispatch(
                              decreaseQuantity({
                                id: item.id,
                                size: item.size,
                                pastry: item.pastry,
                              })
                            )
                          }
                        >
                          -
                        </button>
                        <span className="value">{item.quantity}</span>
                        <button
                          className="red-math"
                          onClick={() =>
                            dispatch(
                              increaseQuantity({
                                id: item.id,
                                size: item.size,
                                pastry: item.pastry,
                              })
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                      <div className="total">
                        <p>{item.totalPrice} ₼</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="cart-left">
            {boxes.map((box, index) => (
              <div className="boxs-container" key={index}>
                <div
                  className="boxs"
                  onClick={() => toggleBox(index)}
                  style={{
                    backgroundColor:
                      openBoxIndex === index ? "#0078AC" : "#EAEAEA",
                    borderBottom:
                      openBoxIndex === index ? "none" : "1px solid #000",
                  }}
                >
                  <h4
                    style={{
                      color: openBoxIndex === index ? "#FFF" : "#A4A4A4",
                    }}
                  >
                    {box}
                  </h4>
                </div>
                {openBoxIndex === index && box === "Xidmət növü" && (
                  <div className="open-boxs center">
                    <button
                      className="btn"
                      onClick={() => setSelectedService("pickup")}
                      style={{
                        backgroundColor:
                          selectedService === "pickup" ? "red" : "#FFF",
                        color:
                          selectedService === "pickup" ? "#FFF" : "#A4A4A4",
                      }}
                    >
                      <img src={dominosLogo} alt="Pickup" />
                      Özünlə apar
                    </button>
                    <button
                      className="btn"
                      onClick={() => setSelectedService("delivery")}
                      style={{
                        backgroundColor:
                          selectedService === "delivery" ? "red" : "#FFF",
                        color:
                          selectedService === "delivery" ? "#FFF" : "#A4A4A4",
                      }}
                    >
                      <img src={deliveryLogo} alt="Delivery" />
                      Çatdırılma
                    </button>
                  </div>
                )}
                {openBoxIndex === index && box === "Çatdırılma zamanı" && (
                  <div className="open-boxs buttom">
                    <div className="select-container">
                      <div
                        className="now-before"
                        onClick={() => setDeliveryTime("now")}
                      >
                        <img
                          src={
                            deliveryTime === "now"
                              ? selectedLogo
                              : notSelectedLogo
                          }
                          alt="Now"
                        />
                        <h4>İndi</h4>
                      </div>
                      <div
                        className="now-before"
                        onClick={() => setDeliveryTime("later")}
                      >
                        <img
                          src={
                            deliveryTime === "later"
                              ? selectedLogo
                              : notSelectedLogo
                          }
                          alt="Later"
                        />
                        <h4>Sonra</h4>
                      </div>
                    </div>
                    {deliveryTime === "later" && <input type="date" />}
                  </div>
                )}
                {openBoxIndex === index && box === "Çatdırılma ünvanı" && (
                  <div className="open-boxs center">
                    <input
                      type="text"
                      placeholder="Ünvanı daxil edin"
                      onFocus={() => setShowOptions(true)}
                      onBlur={() =>
                        setTimeout(() => setShowOptions(false), 200)
                      }
                    />
                    {showOptions && (
                      <div className="options-box">No options</div>
                    )}
                  </div>
                )}
                {openBoxIndex === index && box === "Şöbə məlumatları" && (
                  <div className="open-boxs">
                    <p>Ən Yaxın Şöbə 0.00 KM uzaq</p>
                    <table className="branch-table">
                      <thead>
                        <tr>
                          <th>Ünvan</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Şöbə Adı</td>
                          <td>
                            <img src={openLogo} className="icon" alt="Open" />{" "}
                            Açıq — 10:00
                          </td>
                        </tr>
                        <tr>
                          <td>Əlaqə Nömrəsi</td>
                          <td>
                            <img src={closeLogo} className="icon" alt="Close" />{" "}
                            Bağlı — 05:00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
                {openBoxIndex === index && box === "Qeyd" && (
                  <div className="open-boxs center">
                    <input
                      type="text"
                      placeholder="Qeyd əlavə edin"
                      value={noteText}
                      onChange={(e) => setNoteText(e.target.value)}
                    />
                  </div>
                )}
              </div>
            ))}
            <button
              className="buttom-search-btn"
              onClick={() => navigate("/pizza")}
            >
              MENUNU ARAŞDIRIN
            </button>
          </div>
        </div>

        <div className="opportunities">
          <div className="opportunities-header">
            <p>BU FÜRSƏTİ QAÇITMAYIN</p>
          </div>
          <div className="opportunities-main">
            <div className="opportunities-cart">
              {[
                {
                  img: opportunitiesCola,
                  title: "COCA-COLA",
                  desc: "500 ML",
                  price: "2.50 ₼",
                },
                {
                  img: opportunitiesCiken,
                  title: "ÇİKEN STRIPS (3 ƏDƏD)",
                  price: "4.20 ₼",
                },
                {
                  img: opportunitiesBite,
                  title: "PENDIRLI BITE",
                  price: "2.50 ₼",
                },
              ].map((item, i) => (
                <div className="carts" key={i}>
                  <div className="opportunities-img">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="opportunities-title">
                    <p className="bold">{item.title}</p>
                    {item.desc && <p>{item.desc}</p>}
                  </div>
                  <div className="opportunities-price">
                    <p>{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="separator-line"></div>
        <div className="promo-kod">
          <div className="promo-title">
            <p>PROMO KOD ƏLAVƏ EDİN</p>
          </div>
          <div className="promo-main">
            <input type="text" />
            <button>ƏLAVƏ EDİN</button>
          </div>
        </div>

        <div className="separator-line"></div>
        <div className="cart-total-price">
          <p>ÜMUMİ {totalAmount} ₼</p>
        </div>
        <div className="cart-full-remove">
          <button onClick={() => dispatch(clearCart())}>SƏBƏTİ BOŞALDIN</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
