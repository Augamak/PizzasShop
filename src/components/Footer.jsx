import { Link } from "react-router-dom";

const Footer = () => {
   
    return (
        <div className="footer-container">
            <div className="footer-names">
                <div className="footer-logo">
                    <a href="#" className="logo">pizzashop</a>
                    
                </div>
                <div className="footer-links">
                    <Link className="footer-style" to="/">Home
                        <p className="footer-home-links">To Order</p>
                        <p className="footer-home-links">About us</p>
                        <p className="footer-home-links">Events</p>
                        <Link className="footer-home-links" to="/menu">Menu</Link>
                    </Link>
                    
                    <Link className="footer-style" to="/events">Events
                        <p className="footer-home-links">3 Pizza 1 Free Coffee</p>
                        <p className="footer-home-links">2 Pizza for 1 Price</p>
                        <p className="footer-home-links">Kitchen Tour</p>
                    </Link>
                    <Link className="footer-style" to="/menu">Menu
                        <p className="footer-home-links">Show All</p>
                        <p className="footer-home-links">Seaproducts</p>
                        <p className="footer-home-links">Vegan</p>
                        <p className="footer-home-links">Meat</p>
                    </Link>
                    <Link className="footer-style" to="/about">About Us
                        <p className="footer-home-links">Our history</p>
                        <p className="footer-home-links">Why We?</p>
                    </Link>
                </div>
            </div>
           
            <div className="footer-botton">
                    <div className="footer-number">
                        <p className="footer-number">+7 (937) 333-55-33</p>
                    </div>
                    <div>
                        <img style={{cursor: "pointer"}} src="./assets/images/instaTwiterFb.png" alt="cart" />
                        
                    </div>
            </div>
            
        </div>
    );
};

export default Footer;
