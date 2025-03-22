
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faXTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons"


const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
            <div>Bliz Transport & Logistics</div>
                <div className="footer-section">
                    
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/contact">Tracking</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: info@example.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Address: 123 Main St, City, Country</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                    <a href="#"> <FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="#"> <FontAwesomeIcon icon={faXTwitter} /></a>
                    <a href="#"> <FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;