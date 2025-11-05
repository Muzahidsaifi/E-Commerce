
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Cart from "./Pages/Cart";
import LoginSigup from "./Pages/LoginSigup";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assest/banner_mens.png";
import women_banner from "./Components/Assest/banner_women.png";
import kids_banner from "./Components/Assest/banner_kids.png";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="mens" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="womens" />} />
          <Route path="/kids"element={<ShopCategory banner={kids_banner} category="kids" />}/>
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSigup />} />
        </Routes>
        <Footer />
     
      </BrowserRouter>
    </>
  );
}
export default App;
