const Home = () => {
    return (
        <>
            <div className="home-container">
                <div className="first-block">
                    <h1 className="home-pizza">The Fastest <img src="./public/assets/images/Vector 2.png" alt="vector" /> Pizza <img src="./assets/images/Lightning 2.png" alt=""/>Delivery</h1>
                    <div className="home-text">We will deliver juicy pizza for your family in 30 minutes, if the courier is late - pizza is free!</div>
                    <div>
                        <p className="home-text">Cooking process:</p>
                        <img className="home-img" src="./public/assets/images/shourav-sheikh.png" alt="shourav" />
                        
                    </div>
                    <div className="home-buttons">
                        <button className="button-one">To order</button>
                        <button className="button-two">Pizza-Menu</button>
                    </div>
                </div>
                <div className="second-block">
                    <div>
                        <img src="./public/assets/images/shourav.png" alt="" />
                    </div>
                </div>
            </div>
        </>    
    );
};

export default Home;