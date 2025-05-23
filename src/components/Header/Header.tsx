import './Header.css';
import { Link } from "react-router-dom";
import logo from '../../assets/img/download (23).png';
import { useSelector } from 'react-redux';
import departments from '../../assets/img/download (1).png';
import following from '../../assets/img/download (2).png';
import flagAze from '../../assets/img/download (3).png';
import loginLogo from '../../assets/img/download (4).png';
import basket from '../../assets/img/cart-icon.d8fa61ee (1).webp';
import { RootState } from "../../pages/Pizza/store";

function Header() {

     const cartItems = useSelector((state: RootState) => state.cart.cart);

    return (
        <div className="container">
            <div className="dominos-navbar">
                <div className="dominos-logo">
                    <Link to="/">
                    <img src={logo} alt="Domino's logo" />
                    </Link>
                </div>
                <div className="navbar-about">
                    <div>
                        <Link to="/stores">
                        <img src={departments} alt="Domino's departments" />
                        <p>Şöbələr</p>
                        </Link>
                    </div>
                    <div>
                        <img src={following} alt="Domino's following" />
                        <p>İzləmə</p>
                    </div>
                    <div>
                        <img src={flagAze} alt="Azerbaijan flag" />
                        <p>AZE</p>
                    </div>
                    <div>
                        <Link to="/login">
                        <img src={loginLogo} alt="Domino's login" />
                        <p>Daxil ol</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/my-cart">
                        <img src={basket} alt="Domino's basket" />
                        <p>Səbət</p>
    {cartItems.length > 0 && (
      <span className="cart-count">{cartItems.length}</span>
    )}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
