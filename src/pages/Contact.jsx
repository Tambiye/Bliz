
import React from 'react';

const Contact = () => {
    return (<><div class="contact-container">
        <div class="contact-info">
          <h1>Contact Us</h1>
          <p>If you have any questions or inquiries, please feel free to reach out to us using the form.</p>
          <p>We will get back to you as soon as possible.</p>
          <p>We look forward to hearing from you!</p>
          <p>For immediate assistance, you can also reach us at:</p>
        </div>
      
        <form class="contact-form">
          <div class="form-field">
            <label>Name:<span class="required">*</span></label>
            <input type="text" placeholder="Your Name" required />
          </div>
      
          <div class="form-field">
            <label>E-mail:<span class="required">*</span></label>
            <input type="email" placeholder="Your Email" required />
          </div>
      
          <div class="form-field">
            <label>Phone Number:<span class="required">*</span></label>
            <input type="text" placeholder="Phone Number" required />
          </div>
            <div class="form-field">
                <label>Address:<span class="required">*</span></label>
                <input type="text" placeholder="Address" required /></div>
      
          <div class="form-field">
            <label>Message:<span class="required">*</span></label>
            <textarea placeholder="Your message" required></textarea>
          </div>
      
          <button type="submit" class="form-submit">Send Message</button>
        </form>
      </div>
      
    </>
    );
};



export default Contact;
