import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutHandler } from "../store/slices/login";


const Header = () => {
    const [cartOpen, setCartOpen] = useState(false)
    const { isLoggedIn } = useSelector((state) => state.user);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { items, totalPrice } = useSelector ((state) => state.cart)
    console.log(typeof totalPrice)
    const products = useSelector((state) => state.cart.items)


    const logoutManager = () => {
        dispatch(logoutHandler())
        navigate("/")
    }

    const loginManager = () => {
        navigate("login")
    }


    return (
        <div className="header-container">
            <a href="#" className="logo">pizzashop</a>
            <div className="header-links">
                <Link className="header-style" to="/">Home</Link>
                <Link className="header-style" to="/menu">Menu</Link>
                {
                    isLoggedIn && 
                    <Link className="header-style" to="/addNewPizza">Add new pizza</Link>
                }
                <Link className="header-style" to="/events">Events</Link>
                <Link className="header-style" to="/about">About Us</Link>
            </div>
            <div className="header-right">
                { isLoggedIn ? 
                    <button className="header-button" to="/login" onClick={logoutManager}>Log out</button> :
                    <button className="header-button" to="/login" onClick={loginManager}>Log in</button>
                }
                
                <div className="cart-block">
                    <img className="cart" src="./assets/images/Cart.png" alt="cart" onClick={() => setCartOpen(!cartOpen)}/>
                    <div className="cart-items">{items.length}</div>
                    <div className="cart-items">{totalPrice}</div>
                    <div className="quantity-product"></div>
                    {cartOpen && (
                        <div className="shop-cart">
                            {
                                products.map((val, idy) => (
                                    <div className="cart-style" key={idy}>
                                            <div className="cart-items">
                                                <img style={{width: '100px', height: '100px'}}  src={val.image} alt="" />
                                            </div>
                                            <div className="cart-items">{val.name}</div>
                                            
                                    </div>
                                ))
                            }
                            <div className="cart-items">{totalPrice}</div>
                            
                        </div>    
                    )}

                   
                </div>
            </div>
            
        </div>
    );
};

export default Header;