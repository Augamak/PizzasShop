import { Link } from "react-router-dom";
import { ShopContext } from "../App";
import { useContext } from "react";


const Header = () => {
    const {cart} = useContext(ShopContext)
    console.log(cart)
    return (
        <div className="header-container">
            <a href="#" className="logo">pizzashop</a>
            <div className="header-links">
                <Link className="header-style" to="/">Home</Link>
                <Link className="header-style" to="/menu">Menu</Link>
                <Link className="header-style" to="/events">Events</Link>
                <Link className="header-style" to="/about">About Us</Link>
            </div>
            <div className="header-right">
                <Link className="header-button" to="/login">Log in</Link>
                <div className="cart-block">
                    <img className="cart" src="./assets/images/Cart.png" alt="cart" />
                    <div className="quantity-product">{cart.itemsAmount}</div>
                </div>
            </div>
            
        </div>
    );
};

export default Header;