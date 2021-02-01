import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import CheckoutTotal from './CheckoutTotal';
import DoneIcon from '@material-ui/icons/Done';

const Checkout = () => {

    const [{basket}, dispatch] = useStateValue();

    const clearBasket = () => {
        dispatch({
            type: "CLEAR_BASKET",
        })
    }

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <CheckoutTotal />
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
            <button onClick={clearBasket} className="payButton"><DoneIcon />Order</button>
            <Link className="linkToShop" to="/">
                <button><ShoppingCartOutlinedIcon />Continue Shopping</button>
            </Link>
        </div>
    )
}

export default Checkout
