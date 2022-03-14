import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css";

export default function Navigation() {
    return (
        <>

            <nav className='nav'>

                <ul>
                <NavLink to="/" activeClassName="is_active"style={{ textDecoration: 'none'}} exact><li>Home</li></NavLink>
                <NavLink to="/products" activeClassName="is_active" style={{ textDecoration: 'none'}} exact><li>Products</li></NavLink>
                <NavLink to="/contactus" activeClassName="is_active" style={{ textDecoration: 'none'}} exact><li>Contact Us</li></NavLink>
                <NavLink to="/aboutus" activeClassName="is_active"style={{ textDecoration: 'none'}} exact><li>About Us</li></NavLink>

                </ul>
            </nav>

        </>
    );
};


