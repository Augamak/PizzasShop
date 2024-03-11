import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ShopContext } from "../App";


const Header = () => {
    const {cart} = useContext(ShopContext)
    const [cartOpen, setCartOpen] = useState(false)

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
                    <img className="cart" src="./assets/images/Cart.png" alt="cart" onClick={() => setCartOpen(!cartOpen)}/>
                    <div className="quantity-product">{cart.itemsAmount}</div>
                    {cartOpen && (
                        <div className="shop-cart">
                            <div>
                                <img src={ cart.image} />
                            </div>
                            <div className="quantity-product-cart">{cart.itemsAmount}</div>
                            <div className="quantity-product-cart">{cart.totalPrice} $</div>
                        </div>    
                    )}
                    
                </div>
            </div>
            
        </div>
    );
};

export default Header;