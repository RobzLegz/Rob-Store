import React from 'react';
import "./Cart.css";
import CartProduct from './CartProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";
import CartHeaderImg from "./resources/grailify-wzgqLjz09jA-unsplash.jpg";

const Cart = () => {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="cart-container">
            <div className="cart-left">
                <img src={CartHeaderImg} alt="cart header image" className="cart-header-img"/>
                <h2 className="cart-title">Your Shopping Cart</h2>
                <div className="cart-left-products">
                    {basket.map(item => (
                        <CartProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            size={item.size}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="cart-right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Cart;