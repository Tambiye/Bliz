import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showBg, setShowBg] = useState(false);
    const location = useLocation();

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            setShowBg(scrollPosition > 50);
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`bliz-navbar xui-text-white xui-navbar xui-container ${showBg ? 'bliz-navbar-show xui-navbar-blurred' : ''}`} xui-style="1">
            <div className="brand">
                <Link className="xui-text-dc-none xui-text-inherit xui-d-inline-flex xui-flex-ai-center" to="/">
                    <img className='xui-img-150' src="/brand/logo.svg" alt="logo" />


                </Link>
            </div>
            <div className="links" xui-set="center">
                <div className="main">
                    <ul>
                        <li className={location.pathname === "/" ? "isActive" : ""}>
                            <Link className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-90 xui-text-inherit" to="/" onClick={handleClick}>
                                <span className="xui-opacity-9">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-90 xui-text-inherit" to="/services" onClick={handleClick}>
                                <span className="xui-opacity-9">Services</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-90 xui-text-inherit" to="/about-us" onClick={handleClick}>
                                <span className="xui-opacity-9">About Us</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-90 xui-text-inherit" to="/contact" onClick={handleClick}>
                                <span className="xui-opacity-9">Contact</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="fixed">
                    <Link to="/book-now" onClick={handleClick} className="book-btn">
                        Book Now
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
