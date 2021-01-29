import React from 'react';
import "./Header.css";


const Header = () => {
    return (
        <div className="header">
            <h1 className="logo">Rob Store</h1>
            <div className="header-boxes">
                <div className="header-box">
                    <small>Hello Guest</small>
                    <p>Login</p>
                </div>
                <div className="header-box">
                    <small>Cart</small>
                    <div className="cart-container">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
