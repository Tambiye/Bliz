
import React from 'react';

const Contact = () => {
    return (
        <form className="contact-form">
            <div className="form-group">
                <label>Name:<span className="required">*</span></label>
                <input type="text" placeholder="Your Name" required />
            </div>

            <div className="form-group">
                <label>E-mail:<span className="required">*</span></label>
                <input type="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
                <label>Company:<span className="required">*</span></label>
                <input type="text" placeholder="Company Name" required />
            </div>

            <div className="form-group">
                <label>Message<span className="required">*</span></label>
                <textarea placeholder="Your message" required></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
        </form>
    );
};



export default Contact;
