import { Link } from "react-router-dom";


const Header = () => {
    
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
                <div>
                    <img className="cart" src="./assets/images/Cart.png" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Header;