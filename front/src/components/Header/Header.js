import React from 'react';
import {Link} from "react-router-dom";
import './Header.css'

const Header = (props) => {
    return (
        <div className="header">
            <Link to="/" classname="header-title">MUSIC</Link>
            <div className="authorization">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>
    );
};

export default Header;