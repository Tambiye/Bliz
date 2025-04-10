import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <h2 className="about-title">About Bliz Transport & Logistics</h2>
        <p className="about-subtitle">
          Bliz is a car rental and chauffeur service company committed to providing practical and affordable transport solutions. We cater to a wide range of needs, including weddings, airport pickups, deliveries, and more.
        </p>
        <p className="about-description">
          Our fleet consists of well-maintained, road-ready vehicles designed to serve both individuals and businesses. With a focus on reliability, punctuality, and comfort, our chauffeur services ensure you get to your destination smoothly and on time.
        </p>
        <p className="about-description">
          At Bliz, we believe in offering straightforward, dependable transport services—without the luxury price tag.
        </p>
      </section>
      
      <section className="tracker-section">
        <h3 className="tracker-title">Track Your Shipment</h3>
        <p className="tracker-subtitle">Find the status of your in-transit shipment</p>
        
        <form className="tracker-form">
          <label htmlFor="tracking-number" className="sr-only">Enter Tracking Number</label>
          <input 
            type="text" 
            id="tracking-number"
            placeholder="Enter tracking number" 
            className="tracker-input" 
          />
          <button type="submit" className="tracker-button">Track</button>
        </form>
      </section>
    </div>
  );
};

export default AboutUs;
