import React from 'react';
import "./Home.css";
import Product from './Product';
import HomeImage from "./resources/homeheaderimgcomerce.jpg";
import AdidasSneakers from "./resources/FW6690_53be.jpg";
import DcSneakers from "./resources/Tonik+Sneakers.jpg";
import BlueVans from "./resources/vans-UA_Old_Skool-Nautical_Blue-1.jpg";

const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                <img src={HomeImage} alt="homeimage" className="home-background-image"/>
                <div className="product-row">
                    <Product
                        id="346463646"
                        title="DC TONIK SNEAKERS"
                        price={11.99}
                        size={43}
                        rating={4}
                        image={DcSneakers}
                    />
                    <Product
                        id="64436564"
                        title="ADIDAS GRAND COURT SE"
                        price={19.99}
                        size={44}
                        rating={3}
                        image={AdidasSneakers}
                    />
                    <Product
                        id="2733786438"
                        title="BLUE OLD SCHOOL VANS"
                        price={5.00}
                        size={43}
                        rating={1}
                        image={BlueVans}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
