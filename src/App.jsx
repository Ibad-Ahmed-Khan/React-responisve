import logo from "./logo.svg";
import "./App.css";
import { Nav } from "./components/nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shop } from "./pages/shop/Shop";
import { Cart } from "./pages/cart/Cart";

function App() {
  return (
    <div className="App">
      <div className="parent">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
