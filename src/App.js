import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  HashRouter,
  Navigate,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import NavPages from "./components/NavPages";

function App() {
  return (
    <HashRouter>
      <NavPages />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart /> } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productlist" element={<ProductList />} />
      </Routes>
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Product /> */}
      {/* <ProductList /> */}
      {/* <Cart /> */}
    </HashRouter>
  );
}

export default App;
