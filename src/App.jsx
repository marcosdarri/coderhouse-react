import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components//NavBar/NavBar";
import CartWidjet from "./components/CartWidjet/CartWidjet";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";


export default function App() {
 
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar>
          <CartWidjet />
        </NavBar>
        <h2>Las ofertas de la semana</h2>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/detalle" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
  
      
    </BrowserRouter>
  );
}
