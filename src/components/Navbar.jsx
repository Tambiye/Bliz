import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (

        <nav className="xui-container xui-navbar" xui-style="1">
            <div className="brand">
                <span><Link to="/">Bliz</Link></span>
            </div>
            <div className="links" xui-set="center">
                <div className="main">
                    <ul>
                        <li className={location.pathname === "/" ? "isActive" : ""}>
                            <Link to="/" onClick={toggleMenu}>Home</Link>
                        </li>
                        <li>
                            <Link to="/services" onClick={toggleMenu}>Services</Link>
                        </li>
                        <li><Link to="/about-us" onClick={toggleMenu}>About Us</Link></li>
                        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                         
                    </ul>
                </div>
                <div className="fixec"><Link to="/book-now" onClick={toggleMenu} className="book-btn">Book Now</Link>

                </div>
            </div>
        </nav>


    );
};

export default Navbar;
