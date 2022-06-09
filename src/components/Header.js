import React from 'react';
import './Header.css';
import logo from './../logo.png';
import { Link } from 'react-router-dom';

const Header = (props) => (
    <div className="Header">
        <div className="Header-container">
            
            <div>
                <img src={logo} className="Header-logo" alt="logo" />
            </div>
            {/*<div className="right">
                <Link to="/account"><i class="fas fa-solid fa-ellipsis-vertical"></i></Link>
            </div> */}
            
        </div>
    </div>
);

export default Header;