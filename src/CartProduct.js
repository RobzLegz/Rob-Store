import React from 'react';
import "./CartProduct.css"
import { useStateValue } from './StateProvider';

const CartProduct = ({id, title, price, rating, image, size}) => {

    const [{basket}, dispatch] = useStateValue();

    const removeBasketItem = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    };

    return (
        <div className="cart-product-container">
            <img src={image} alt="checkout image" className="cart-image"/>
            <div className="cart-product-info">
                <p className="cart-product-title">{title}</p>
                <p className="cart-product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className="cart-product-price">
                    <small>size:</small>
                    <strong>{size}</strong>
                </p>
                <div className="checkout-product-rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeBasketItem}>Remove from Cart</button>
            </div>
            
        </div>
    )
}

export default CartProduct
