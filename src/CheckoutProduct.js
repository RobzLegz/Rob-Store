import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({id, title, price, rating, image, size}) => {

    const [{basket}, dispatch] = useStateValue();

    const removeBasketItem = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    };

    return (
        <div className="checkout-product-container">
            <img src={image} alt="cart image" className="checkoutImage"/>
            <div className="cart-product-info">
                <p className="cart-product-title">{title}</p>
                <div className="size-price-container-cart">
                    <p className="cart-product-price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <p className="cart-product-price">
                        <small>size:</small>
                        <strong>{size}</strong>
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default CheckoutProduct;
