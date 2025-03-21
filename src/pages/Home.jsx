import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxesPacking, faTruckFast, faClock, faGlobe } from "@fortawesome/free-solid-svg-icons";

const Home = () => (
    <div >
        <div className="home-container">
            <div className="hero-section">
                <div className="tagline"><span>Bliz </span><br /> Move freely.<br /> Anytime. Anywhere.</div>
                <h1>Bliz is your all-in-one transport and logistics platform—fast, safe, and hassle-free</h1>

                {/* <p>
                    Bliz Transport is a trusted global logistics and transportation company,
                    committed to delivering safe, efficient, and reliable services. Whether you're
                    shipping goods across borders or traveling to new destinations, we provide seamless
                    transport solutions by air, land, and sea. Our experienced team ensures every journey
                    is smooth, secure, and on time.
                </p> */}
            </div>
        </div>


        <div className="band"></div>
        <div className="service-page">
            <h1 className='heading-for-services'>Our Services</h1>


            <section className="safe-travel">

                <img className="image-container"
                    src="https://plus.unsplash.com/premium_photo-1677419807331-072575b7f26d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Travel safely and comfortably across 36 states"
                />

                <div className="text-container">
                    <h3>Travel Safely & Comfortably Across 36 States!</h3>
                    Sit back, relax, and enjoy a smooth, stress-free journey with our
                    premium transportation service! We prioritize safety, comfort,
                    and efficiency, ensuring every trip is a pleasant experience. With
                    modern vehicles, professional drivers, and real-time tracking,
                    we guarantee a secure and enjoyable ride across 36 states.
                    Travel with confidence—your comfort is our priority!
                </div>
            </section>
            <section className="affordable-travel">

                <img className="image-container"
                    src="https://plus.unsplash.com/premium_photo-1681760172383-533fca9d8903?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Affordable first-class travel service"
                />


                <div className="text-container">
                    <h3>First-Class Comfort at Economy Prices!</h3>
                    Enjoy luxury travel without the luxury price tag!
                    Our transportation service offers seating, air-conditioned comfort,
                    and smooth rides—all at a budget-friendly rate
                    No hidden costs, no overpriced tickets—just exceptional value for your journey.
                    Travel smart, travel affordably, and experience comfort like never before!

                </div>

            </section>

            <section className="expedited-service">

                <img className="image-container"
                    src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVsaXZlcnl8ZW58MHx8MHx8fDA%3D"
                    alt="FastTrack Ground Service ensuring speedy delivery"
                />

                <div className="text-container">
                    <h3>FastTrack Ground Service – Speedy Delivery to 36 States!</h3>
                    Need quick and reliable shipping? Our Expedited Ground Service ensures
                    fast and secure delivery to 36 states with optimized
                    routes and real-time tracking. Get your packages where they need to be—
                    on time, every time!
                </div>
            </section>




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
