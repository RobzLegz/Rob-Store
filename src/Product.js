import React from 'react';
import "./Product.css";

const Product = ({id, title, price, rating, image, size}) => {
    return (
        <div className="product-container">
            <div className="product-info">
                <p>{title}</p>
                <div className="price-size-container">
                    <p className="product-price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <p className="product-price">
                        <small>size:</small>
                        <strong className="sizenumber">{size}</strong>
                    </p>
                </div>
                <div className="product-rating">
                    <p>quality:</p>
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))} 
                </div>
            </div>
            <img src={image} alt="product image" className="product-image"/>
            <button className="cart-button-add">Add to Cart</button>
        </div>
    )
}

export default Product;
