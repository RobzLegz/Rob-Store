import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <div className="checkoutProducts">
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
            <Link className="linkToShop" to="/">
                <button><ShoppingCartOutlinedIcon />Continue Shopping</button>
            </Link>
        </div>
    )
}

export default Checkout
