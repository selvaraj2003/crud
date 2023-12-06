import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import ShowProducts from "./components/ShowProducts";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Navbar1 from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar1 />
        <Routes>
          <Route path="/" element={<ShowProducts />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/update/:id/" element={<UpdateProduct />} />
          <Route path="/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
