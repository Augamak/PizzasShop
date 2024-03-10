import { CardsComponent } from "../components/constants/CardComponent";
import { ShopContext } from "../App";
import { useContext, useState } from "react";
import { Cards } from "../components/constants/PizzasData";
import Buttons from "../components/Buttons";

export const Menu = () => {
    
    const { pizza } = useContext(ShopContext)
    const [item, setItems] = useState(Cards)
    const menuItems = [... new Set(Cards.map((val) => val.category))]
    const filterItems = (cat) => {
        const newItems = Cards.filter((newval) => newval.category === cat)
        setItems(newItems)
    }

    return (
        <>
            <div className="menu-container">
                <h1 className="menu-text">Menu</h1>
                <Buttons 
                    menuItems = {menuItems}
                    filterItems={filterItems}
                    setItems={setItems}
                />
                <div className="pizzas-cards">
                    {pizza.map((product) => {
                        return <CardsComponent key={product.model} product={product} />
                    })}
                </div>
                <div className="most-popular">
                    <h2>MOST POPULAR PIZZA</h2>
                </div>

            </div>
            
            
        </>    
    );
};

export default Menu;