import React from 'react';

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Your Safety. Our Priority.</h1>
          <p>Bliz ensures luxury and peace of mind with every mile you ride.</p>
        </div>
        <img
          src="/pexels/pexels-ronailson-1978125.jpg"
          alt="Bliz transport"
          className="about-hero-image"
        />
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <h2>Our Philosophy</h2>
        <p>
          At <strong>Bliz</strong>, we blend security, comfort, and luxury into every ride.
          We believe your journey should be flawless — from first click to final destination.
        </p>
      </section>

      {/* Pillars */}
      <section className="about-pillars">
        <div className="pillar">
          <h3>Security</h3>
          <p>
            From trained drivers to state-of-the-art technology, your safety is the foundation of every journey.
          </p>
        </div>
        <div className="pillar">
          <h3>Luxury</h3>
          <p>
            Ride in style and comfort with premium vehicles and attentive service that elevates your experience.
          </p>
        </div>
        <div className="pillar">
          <h3>Trust</h3>
          <p>
            We go beyond transport — we deliver confidence and care, every step of the way.
          </p>
        </div>
      </section>

      {/* Impact Image or Testimonial Section */}
      <section className="about-impact">
        <img
          src="/pexels/pexels-gustavo-fring-6817000.jpg"
          alt="Bliz luxury vehicle"
          className="impact-image"
        />
        <blockquote>
          "Every trip with Bliz is smooth, safe, and simply unforgettable."
        </blockquote>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <p>Join thousands who trust Bliz for their journeys every day.</p>
        <button>Book Your Ride</button>
      </section>
    </>
  );
};

export default AboutUs;
