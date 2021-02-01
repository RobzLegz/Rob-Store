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
                <h2>Used Clothes</h2>
                <div className="product-row">
                    <Product
                        id="346463646"
                        title="DC TONIK SNEAKERS"
                        price={11.99}
                        size={43}
                        rating={4}
                        image={DcSneakers}
                        stock={1}
                    />
                    <Product
                        id="64436564"
                        title="ADIDAS GRAND COURT SE"
                        price={19.99}
                        size={44}
                        rating={3}
                        image={AdidasSneakers}   
                        stock={1}                     
                    />
                    <Product
                        id="2733786438"
                        title="BLUE OLD SCHOOL VANS"
                        price={5.00}
                        size={43}
                        rating={1}
                        image={BlueVans}  
                        stock={1}                     
                    />
                </div>
                <h2>Brand New</h2>
                <div className="product-row">
                    <Product 
                        id="67463795439"
                        title="Adidas Originals"
                        price={100}
                        size={44}
                        rating={5}
                        image="https://picture.bestsecret.com/static/images/1307/image_31698055_10_352x429_3.jpg"
                        stock={2}
                    />
                    <Product 
                        id="6748979876595439"
                        title="Adidas Originals"
                        price={100}
                        size={44}
                        rating={5}
                        image="https://picture.bestsecret.com/static/images/1280/image_31751991_10_620x757_0.jpg"
                        stock={2}
                    />
                    <Product 
                        id="671235439"
                        title="Adidas Originals"
                        price={120}
                        size={45}
                        rating={5}
                        image="https://picture.bestsecret.com/static/images/1301/image_31722854_10_352x429_3.jpg"
                        stock={2}
                    />
                </div>
                <div className="product-row">
                    <Product 
                        id="875487695"
                        title="Brave Soul"
                        price={20.99}
                        size="M"
                        rating={5}
                        image="https://picture.bestsecret.com/static/images/1424/image_31903989_29_620x757_0.jpg"
                        stock={10}
                    />
                    <Product 
                        id="239643454"
                        title="Brave Soul"
                        price={20.99}
                        size="M"
                        rating={4}
                        image="https://picture.bestsecret.com/static/images/1425/image_31903989_81_620x757_0.jpg"
                        stock={10}
                    />
                    <Product 
                        id="12094365"
                        title="Ellesse"
                        price={20}
                        size="M"
                        rating={4}
                        image="https://picture.bestsecret.com/static/images/1417/image_31904350_20_620x757_0.jpg"
                        stock={10}
                    />
                </div>
                <div className="product-row">
                    <Product 
                        id="956403457"
                        title="Happy Socks"
                        price={15.99}
                        size="EU 41-46"
                        rating={5}
                        image="https://picture.bestsecret.com/static/images/1424/image_31892839_10_620x757_0.jpg"
                        stock={10}
                    />
                    <Product 
                        id="0978372455320"
                        title="Happy Socks"
                        price={15.99}
                        size="EU 36-40"
                        rating={5}
                        image="https://picture.bestsecret.com/static/images/1415/image_31106883_40_620x757_0.jpg"
                        stock={10}
                    />
                    <Product 
                        id="00000002783284"
                        title="Happy Socks"
                        price={15.99}
                        size="EU 36-40"
                        rating={5}
                        image="https://picture.bestsecret.com/static/images/679/image_30966566_30_620x757_0.jpg"
                        stock={10}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
