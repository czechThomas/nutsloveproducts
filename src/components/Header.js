import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    hamburgerMenu = () => {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
            hamburger.classList.toggle("active");
	        navMenu.classList.toggle("active");
    };
    hamburgerMenuOut = () => {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
            hamburger.classList.remove("active");
	        navMenu.classList.remove("active");
    };
    render () {
        return (
            <div className='nav-body'>
                <nav className='navbar'>
                    <div className='nav-logo'>
                        <a href='/#'><img alt ='logo' src={`images/Logo.png`} /></a>
                    </div>
                    <div className='nav-complete-menu'>
                        <ul className='nav-menu'>
                            <li className='nav-item'>
                                <a href='/#' className='nav-link' onClick={this.hamburgerMenuOut}>Healthy recipes</a>
                            </li>
                            <li className='nav-item'>
                                <a href='/#' className='nav-link' onClick={this.hamburgerMenuOut}>Peanut Butter</a>
                            </li>
                            <li className='nav-item'>
                                <a href='/#' className='nav-link' onClick={this.hamburgerMenuOut}>About</a>
                            </li>
                            <li className='nav-item'>
                                <a href='/#' className='nav-link' onClick={this.hamburgerMenuOut}>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="hamburger" onClick={this.hamburgerMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>			
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
