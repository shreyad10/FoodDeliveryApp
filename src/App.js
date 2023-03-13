import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { Login } from "./pages/login/login";
import { ShopContextProvider } from "./context/shop-context";
import { Checkout } from "./pages/cart/checkout";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path= "/shop" element={<Shop/>} />
          <Route path="/checkout" element={<Checkout/>} />

        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
