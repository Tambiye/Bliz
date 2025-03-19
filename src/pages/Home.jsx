import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxesPacking, faTruckFast, faClock, faGlobe } from "@fortawesome/free-solid-svg-icons";

const Home = () => (
    <div >
        <div className="home-container">
            <div className="hero-section">
                <h1>Welcome to Bliz Transport</h1>
                <div className="tagline">Safe on Air, Land, and Sea.</div>
                <p>
                    Bliz Transport is a trusted global logistics and transportation company,
                    committed to delivering safe, efficient, and reliable services. Whether you're
                    shipping goods across borders or traveling to new destinations, we provide seamless
                    transport solutions by air, land, and sea. Our experienced team ensures every journey
                    is smooth, secure, and on time.
                </p>
            </div>
        </div>




        {/* <div className="highlight">
                <FontAwesomeIcon icon={faHandHoldingDollar} size="3x" className="icon" />
                <h2>Affordable Pricing Tailored to You</h2>
                <div className="icon-text">
                    At Bliz Transport, quality service doesn’t have to come at a high cost.
                    Our pricing is designed with your needs in mind—offering budget-friendly
                    solutions without compromising on reliability. We provide exceptional value
                    while maintaining top-tier service standards.

                </div>
            </div> */}

        {/* <div className="highlight">
                <FontAwesomeIcon icon={faUserShield} size="3x" className="icon" />
                <h2>Safe. Secure. Reliable.</h2>
                <div className="icon-text">
                    Whether you're shipping goods or traveling with us, your safety and trust
                    are our top priorities. With advanced security measures, real-time tracking,
                    and a team of dedicated professionals, we guarantee a smooth and secure
                    journey—on land, air, or sea.

                </div>
            </div> */}




        <div className="service-heading">
            Our Services</div>
        <div className="services-container">

            <div className="service freight">
                <h2>Reliable Freight & Logistics</h2>
                From small packages to large cargo, we handle it all with precision and care.
                Our efficient freight solutions ensure timely deliveries, keeping your business moving without delays.
            </div>

            <div className="service passenger">
                <h2>Safe & Comfortable Travel</h2>
                We don’t just move goods—we move people too! Whether it’s a short city ride or
                a long-distance journey, our modern fleet guarantees comfort, safety, and affordability.
            </div>

            <div className="service global">
                <h2>Worldwide Connectivity</h2>
                Air, land, or sea—we connect you to destinations around the world. Our
                seamless international shipping ensures hassle-free transport, wherever you need to go.
            </div>
        </div>


        <div className="who-we-are">
            <div className='who-we-are-text'>
                <div className='who-we-are-heading'>Who We Are</div>
                At Bliz Transport & Logistics,
                we are committed to delivering top-tier transport and 
                shipping solutions worldwide. With a skilled team and a focus on
                cost-effective logistics, we ensure s
                eamless, efficient, and reliable services tailored to your needs.
                </div>
            <div className="who-we-are-mini-container">
                
                    <div className="who-we-are-mini">
                    <FontAwesomeIcon icon={faBoxesPacking} className="icon" />
                        <h2>Safe Packing</h2>
                        Ensuring your goods are secure and compliant with regulations.
                    </div>
                    <div className="who-we-are-mini">
                    <FontAwesomeIcon icon={faClock} className="icon" />

                        <h2>In-Time Delivery</h2>
                        Timely and efficient transportation, keeping your schedule on track.
                    </div>
                    <div className="who-we-are-mini">
                    <FontAwesomeIcon icon={faGlobe} className="icon" />
                        <h2>Ship Everywhere</h2>
                        Global and local transport solutions tailored to your needs.
                    </div>
                    <div className="who-we-are-mini">
                    <FontAwesomeIcon icon={faTruckFast} className="icon" />
                        <h2>Fastest Shipping</h2>
                        Speedy logistics with top-notch reliability and efficiency.
                    </div>
                
            </div>
        </div>
        <div className="cta">
            <div className="contact"> Contact Us</div>
            Ready to get started? Contact us today!
        <div className="cta-button">Contact Us</div>
        </div>

    </div>
);

export default Home;
