import '../App.scss';
import React from 'react';
import {
    Link,
  } from "react-router-dom";
import '../index.scss';

function Menu() {
  return (
    <div className="menu">
        <nav
            role="navigation"
            aria-label="Main menu"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
        >
            <ul>
                <li><Link itemProp="url" to="/">Home</Link></li>
                <li><Link itemProp="url" to="/about">About</Link></li>
                <li><Link itemProp="url" to="/login">Login</Link></li>
            </ul>
        </nav>
    </div> 
    
  );
}

export default Menu;
