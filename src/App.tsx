import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./pages/Main/Main";
import "./App.css";
import Pizza from "./pages/Pizza";
import Chicken from "./pages/Chicken";
import Bread from "./pages/Bread";
import Salad from "./pages/Salad";
import Dips from "./pages/Dips";
import Desert from "./pages/Desert";
import Drink from "./pages/Drink";
import Offer from "./pages/Offers";
import Stores from "./pages/Stores";
import Login from "./pages/Login";
import MainLayout from "./components/MainLayout";
import DominosAbout from "./pages/DominosAbout";
import ServiceOrder from "./pages/ServiceOrder";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Suggestions from "./pages/Suggestions";
import Contact from "./pages/Contact";
import Join from "./pages/JoinUs";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" />
      <Routes>
      <Route element={<MainLayout/>}>
       <Route path="/" element={<Main/>}/>
       <Route path="/pizza" element={<Pizza/>} />
       <Route path="/bread" element={<Bread/>} />
       <Route path="/chicken" element={<Chicken/>}/>
       <Route path="/salad" element={<Salad/>}/>
       <Route path="/dips" element={<Dips/>}/>
       <Route path="/desert" element={<Desert/>}/>
       <Route path="/drink" element={<Drink/>}/>
       <Route path="/offers" element={<Offer/>}/>
       <Route path="/dominos-about" element={<DominosAbout/>}/>
       <Route path="/stores" element={<Stores/>}/>
       <Route path="/service-order" element={<ServiceOrder/>}/>
       <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
       <Route path="/suggestions" element={<Suggestions/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/join-us" element={<Join/>}/>
       <Route path="/my-cart" element={<Cart/>}/>
       </Route>
       <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
