import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    console.log(location);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Bliz Transport & Logistics
                </Link>

                {/* <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div> */}
                <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
                    <li className={location.pathname === "/" ? "isActive" : ""}>
                        <Link to="/" onClick={toggleMenu}>Home</Link>
                    </li>
                    <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
                    <li><Link to="/tracking" onClick={toggleMenu}>Track Shipment</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
