import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import "./Header.css";
import { useStateValue } from './StateProvider';

const Header = () => {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="header">
            <Link to="/">
                <h1 className="logo">Rob Store</h1>
            </Link>
            <div className="header-boxes">
                <Link to="/cart">
                    <div className="header-box">
                        <div><small>Cart</small></div>
                        <div>
                            <div className="carticon">
                                <ShoppingBasketIcon />
                                <span className="header-cart-count">{basket?.length}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
