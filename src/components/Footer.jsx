import React from 'react';
import { LogoFacebook, LogoTwitter, LogoInstagram } from "@carbon/icons-react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo"> <img className='xui-img-150' src="/brand/logo.svg" alt="logo" /></div>
            <div className="footer-content">


                <div className="footer-section">
                    <h2><p> Quick links</p></h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/AboutUs">About Us</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h2><p>Contact Us</p></h2>
                    <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
                    <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
                    <p>Address: 123 Main St, City, Country</p>
                </div>

                
            </div>

           


            <div className="footer-icons">

                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <LogoFacebook size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <LogoTwitter size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <LogoInstagram size={24} />
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Bliz Transport & Logistics. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
