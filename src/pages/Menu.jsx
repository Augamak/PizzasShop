import { CardsComponent } from "../components/constants/CardComponent";
import { ShopContext } from "../App";
import { useContext } from "react";

export const Menu = () => {
    
    const { pizza } = useContext(ShopContext)
  
    

    return (
        <>
            <div className="menu-container">
                <h1 className="menu-text">Menu</h1>
                <ul className="menu-categories">
                    <li className="categories-text">Show All</li>
                    <li className="categories-text">Meat</li>
                    <li className="categories-text">Vegetarian</li>
                    <li className="categories-text">Sea Products</li>
                    <li className="categories-text">Mushroom</li>
                </ul>
                <div className="pizzas-cards">
                    {pizza.map((product) => {
                        return <CardsComponent key={product.model} product={product} />
                    })}
                </div>
            </div>
            
            
        </>    
    );
};

export default Menu;