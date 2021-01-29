import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <h1 className="logo">Rob Store</h1>
            </Link>
            <div className="header-boxes">
                <div className="header-box">
                    <small>Hello Guest</small>
                    <p>Login</p>
                </div>
                <Link to="/cart">
                    <div className="header-box">
                        <small>Cart</small>
                        
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
