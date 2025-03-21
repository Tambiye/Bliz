import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxesPacking, faTruckFast, faClock, faGlobe } from "@fortawesome/free-solid-svg-icons";

const Home = () => (
    <div >
        <div className="home-container">
            <div className="hero-section">
                <div className="tagline"><span>Bliz </span><br /> Move freely.<br /> Anytime. Anywhere.</div>
                <h1>Bliz is your all-in-one transport and logistics platform—fast, safe, and hassle-free</h1>


            </div>
        </div>


        <div className="band"></div>
        <div className="service-page">
            <h1 className='heading-for-services'>What You Can Count On.</h1>


            <section className="service-container">
                <div className="service-item">
                    <div className="service-text">
                        <h3>Travel Safely & Comfortably Across 36 States!</h3>
                        <p>Experience the ultimate in luxury and convenience with our premium transportation service! Sit back, unwind, and let us handle the journey while you enjoy a seamless, stress-free ride. We prioritize your safety, comfort, and efficiency, ensuring every trip is nothing short of exceptional. With top-of-the-line vehicles, expert drivers, and real-time tracking, we guarantee a smooth and secure travel experience across all 36 states. Wherever you’re headed, travel with confidence—because your comfort is our top priority!</p>
                    </div>
                    <img className="service-image"
                        src="https://img.freepik.com/free-photo/close-up-parent-securing-son-safety-belt_23-2149039174.jpg?t=st=1742566437~exp=1742570037~hmac=fa5b67392829e34a3177b2a4389d24fef2a3952fee972743a34811c3bf929cb3&w=1380"
                        alt="Travel safely and comfortably across 36 states"
                    />

                </div>

                <div className="service-item">
                    <img className="service-image"
                        src="https://img.freepik.com/free-photo/young-african-woman-recommending-online-shopping-while-holding-card-smartphone_181624-43346.jpg?t=st=1742565755~exp=1742569355~hmac=85f4c766a6310a641dc2a2e04d065e8e5e8ad087065dbd8a00a24457b72a1e53&w=1380"
                        alt="Affordable first-class travel service"
                    />
                    <div className="service-text">
                        <h3>First-Class Comfort at Economy Prices!</h3>
                        <p>Indulge in luxury travel without breaking the bank! Our transportation service delivers plush seating, refreshing air-conditioned comfort, and effortlessly smooth rides—all at an unbeatable price. No hidden fees, no inflated fares—just top-tier service at a budget-friendly rate. Travel smart, save more, and enjoy comfort like never before!</p>
                    </div>
                </div>

                <div className="service-item">
                    <div className="service-text">
                        <h3>FastTrack Ground Service – Speedy Delivery to 36 States!</h3>
                        <p>Need fast and dependable shipping? Our Expedited Ground Service guarantees swift, secure deliveries across 36 states with optimized routes and real-time tracking. Stay informed, stay confident—your packages arrive on time, every time!</p>
                    </div>
                    <img className="service-image"
                        src="https://img.freepik.com/free-photo/african-american-young-man-take-away-delivery-concept_1194-589322.jpg?t=st=1742566114~exp=1742569714~hmac=4a24a5d4ceb8cdc291233bda19f47c45817a156169cc6c79fe8a90c5377caabc&w=1380"
                        alt="FastTrack Ground Service ensuring speedy delivery"
                    />

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
