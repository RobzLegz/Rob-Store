import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

const Subtotal = () => {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal-container">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Total ({basket?.length} items): <strong>{value}</strong></p>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} 
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button className="checkout-button">Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;
