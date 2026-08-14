
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
import UseEffect from "./Practice/UseEffect";
import FakeStoreProducts from "./Practice/FakeStoreProducts";
import UseMemo from "./Practice/UseMemo";
import UseCallback from "./Practice/UseCallback";
import UseRef from "./Practice/UseRef";
import UseReducer from "./Practice/UseReducer";
import ContextCounter from "./Practice/ContextCounter";
import Theme from "./Practice/Theme";
import ReduxCounter from "./Practice/ReduxCounter";


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
        <Route path="/UseEffect" element={< UseEffect/>} />
       <Route path="/FakeStoreProducts"element={<FakeStoreProducts/>}/>
        <Route path="/useMemo" element={<UseMemo />} />
          <Route path="/UseCallback" element={<UseCallback/>}/>
          <Route path="/UseRef" element={<UseRef/>}/>
      <Route path="/UseReducer" element={<UseReducer/>}/>
  <Route path="/ContextCounter" element={<ContextCounter/>}/>

<Route path="/theme" element={<Theme />} />
<Route path="/ReduxCounter" element={<ReduxCounter/>}/>

      </Routes>
    </>
  );
}

export default App;
