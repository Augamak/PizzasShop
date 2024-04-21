import React from "react";
import { Cards } from "./constants/PizzasData";

function Buttons ({menuItems, filterPizzas, setPizzaCards}) {
    return (
            <div className="menu-categories">
                <button className="categories-text"
                onClick={() => setPizzaCards(Cards)}>
                        Show All
                    </button>
                {
                menuItems.map((val, idx) => (
                    <button key={idx} className="categories-text"
                    onClick={() => filterPizzas(val)}>
                        {val}
                    </button>
                    ))
                }
                 
            </div>   
    )
}

export default Buttons