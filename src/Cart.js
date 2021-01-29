import React from 'react';
import "./Cart.css";
import CartProduct from './CartProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";

const Checkout = () => {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout-container">
            <div className="checkout-left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="ad" className="checkout-ad"/>
                <div>
                    <h2 className="checkout-title">Your shopping basket</h2>
                </div>
                {basket.map(item => (
                    <CartProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
            <div className="checkout-right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;