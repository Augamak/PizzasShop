import { MainLayout } from "./layouts/MainLayout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import AddNewPizza from "./pages/AddNewPizza";



export const App =() => {
 

  return (
    <>
    
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />}/>
          <Route path="menu" element={<Menu />}/>
          <Route path="/events" element={<Events />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/addNewPizza" element={<AddNewPizza/>} />
        </Route>
      </Routes>
   
      
    </>
  )
}


