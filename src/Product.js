import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

const Product = ({id, title, price, rating, image, size, stock}) => {

    const [{basket}, dispatch] = useStateValue();

    const addToCart = () => {
        const fullProduct = document.querySelector(".product-container");
        stock --;
        if(stock <= 0){
            fullProduct.classList.add("outOfStock");
        }
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                size: size,
                stock: stock,
            },
        });
    }

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
            <button onClick={addToCart} className="cart-button-add">Add to Cart</button>
        </div>
    )
}

export default Product;
