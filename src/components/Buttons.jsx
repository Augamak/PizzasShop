import React from "react";
import { Cards } from "./constants/PizzasData";

function Buttons ({menuItems, filterItems, setItems}) {
    return (
            <div className="menu-categories">
                <button className="categories-text"
                onClick={() => setItems(Cards)}>
                        Show All
                    </button>
                {
                menuItems.map((val, idx) => (
                    <button key={idx} className="categories-text"
                    onClick={() => filterItems(val)}>
                        {val}
                    </button>
                    ))
                }
                 
            </div>   
    )
}

export default Buttons