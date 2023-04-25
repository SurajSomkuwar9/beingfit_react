import React from 'react';

const NavMenuToggle = () => {

    const handleMenuToggle = () => {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.add('show-menu');
    }

    const handleMenuClose = () => {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show-menu');
    }

    const handleLinkClick = () => {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show-menu');
    }

    return (
        <div>
            <button id="nav-toggle" onClick={handleMenuToggle}>Toggle Menu</button>
            <button id="nav-close" onClick={handleMenuClose}>Close Menu</button>
            <ul id="nav-menu">
                <li><a href="#" className="nav__link" onClick={handleLinkClick}>Home</a></li>
                <li><a href="#" className="nav__link" onClick={handleLinkClick}>About</a></li>
                <li><a href="#" className="nav__link" onClick={handleLinkClick}>Services</a></li>
                <li><a href="#" className="nav__link" onClick={handleLinkClick}>Contact</a></li>
            </ul>
        </div>
    );
}

export default NavMenuToggle;