import  Card  from "../components/constants/PizzasCard";
import { useState } from "react";
import { Cards } from "../components/constants/PizzasData";
import Buttons from "../components/Buttons";

export const Menu = () => {
    
    const [pizzaCards, setPizzaCards]= useState(Cards)
    const menuItems = [...new Set(Cards.map((card) => card.category ))]

    const filterPizzas = (cat) => {
    const newItems = Cards.filter((newval) => newval.category === cat)
    setPizzaCards(newItems)
  }
    return (
        <>
            <div className="menu-container">
                <h1 className="menu-text">Menu</h1>
                <Buttons menuItems = {menuItems} 
                filterPizzas={filterPizzas}
                setPizzaCards={setPizzaCards}
                />
                <div className="pizzas-cards">
                    {pizzaCards.map((pizzaCard) => {
                        return <Card key={pizzaCard.id} card={pizzaCard} />
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