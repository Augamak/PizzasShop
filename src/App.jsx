import { MainLayout } from "./layouts/MainLayout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";
import Menu from "./pages/Menu";
import { Cards } from "./components/constants/PizzasData";
import { createContext, useState } from "react";

export const ShopContext = createContext('')

export const App =() => {
  const [item, setItems] = useState(Cards)
  const [cart, setCart] = useState({
    image: '',
    itemsAmount: 0,
    totalPrice: 0.0,
  })

  const ctxObject = {
    cart,
    setCart,
    item,
    setItems,
  }

  return (
    <>
    <ShopContext.Provider value={ctxObject}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />}/>
          <Route path="menu" element={<Menu />}/>
          <Route path="/events" element={<Events />}/>
          <Route path="/about" element={<About />}/>
        </Route>
      </Routes>
    </ShopContext.Provider>
      
    </>
  )
}


