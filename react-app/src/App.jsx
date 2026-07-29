

import{Routes,Route} from "react-router";
// import "./App.css";
// import "./Navbar.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import SingleProduct from "./pages/SingleProduct";
import UseState from "./Practice/UseState";



function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />

         

  <Route path="/single-product/:brand/:id" element={<SingleProduct />} />



        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/UseState" element={<UseState/>} />
        
      </Routes>
    </>
  );
}

export default App;
