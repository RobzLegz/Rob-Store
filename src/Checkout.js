import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

const Checkout = () => {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout-container">
            <div className="checkoutProducts">
                <h2 className="cart-title">Checkout</h2>
                <div className="allCheckoutProducts">
                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            size={item.size}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Checkout
