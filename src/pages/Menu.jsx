import  Card  from "../components/constants/CardComponent";
import { useState } from "react";
import { Cards } from "../components/constants/PizzasData";
import Buttons from "../components/Buttons";

export const Menu = () => {
    
    const [item, setItems]= useState(Cards)
    const menuItems = [...new Set(Cards.map((val) => val.category ))]

    const filterItems = (cat) => {
    const newItems = Cards.filter((newval) => newval.category === cat)
    setItems(newItems)
  }
    return (
        <>
            <div className="menu-container">
                <h1 className="menu-text">Menu</h1>
                <Buttons menuItems = {menuItems} 
                filterItems={filterItems}
                setItems={setItems}
                />
                <Card item={item}/>
                <div className="most-popular">
                    <h2>MOST POPULAR PIZZA</h2>
                </div>
            </div>
        </>    
    );
};

export default Menu;