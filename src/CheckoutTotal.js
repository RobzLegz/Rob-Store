import React from 'react';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import "./CheckoutTotal.css";

const CheckoutTotal = () => {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkoutTotal">
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
        </div>
    )
}

export default CheckoutTotal
