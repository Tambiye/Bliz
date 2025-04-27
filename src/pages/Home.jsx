import React from 'react';
import { Link } from 'react-router-dom';
import '@richaadgigi/stylexui/css/xui.min.css';
import { Location, Time, Globe, DeliveryTruck } from "@carbon/icons-react";
import HomeHeader from '../components/HomeHeader';
import WhatWeDoBest from '../components/WhatWeDoBest';
import ShippingAndRentals from '../components/ShippingAndRentals';

const Home = () => (
    <>
    <HomeHeader />
    <WhatWeDoBest />
    <ShippingAndRentals />
    <div>

        <div className="cost-known">
            <div className="cost-heading">
                <h2 className="cost-known-heading">Shipping & Rentals</h2>
                <p className="cost-known-subtext">
                    Get a clear idea of your travel costs with our transparent pricing.
                </p>
            </div>

            <div className="info-container">
                <div className="shipping-container">
                    <img
                        src="https://images.pexels.com/photos/6869042/pexels-photo-6869042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Shipping"
                        className="shipping-image"
                    />
                    <div className="shipping-info">
                        <h2>Shipping</h2>
                        <div className="shipping-details">
                            <p>Under 5 Kilometers = ₦10,000</p>
                            <p>5 - 10 Kilometers = ₦15,000</p>
                            <p>10 - 20 Kilometers = ₦20,000</p>
                            <p>20 - 30 Kilometers = ₦25,000</p>
                        </div>
                        <div className="book-subtext">
                            <Link to="/book-now" className="booking-btn">
                                Ship Now
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="rental-container">
                    <img
                        src="https://images.pexels.com/photos/14719372/pexels-photo-14719372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Rental"
                        className="rental-image"
                    />
                    <div className="booking-info">
                        <h2>Rental</h2>
                        <div className="booking-details">
                            <p>An Hour = ₦15,000 + Fueling</p>
                            <p>Full Day (10 Hours) = ₦80,000 + Fueling</p>
                            <p>Full Day (24 Hours) = ₦150,000 + Fueling</p>
                            <p>Weekend (48 Hours) = ₦300,000 + Fueling</p>
                        </div>
                        <div className="book-subtext">
                            <Link to="/book-now" className="booking-btn">
                                Reserve Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="interstate-container">
            <h2 className="interstate-heading">Interstate Travel</h2>
            <p className="interstate-description">
                Enjoy safe, comfortable travel across states with our reliable fleet and vetted drivers.
            </p>

            <div className="interstate-details">
                <div className="interstate-route">
                    <img
                        src="https://images.pexels.com/photos/29922683/pexels-photo-29922683/free-photo-of-eko-bridge-in-lagos-nigeria-captured-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Eko Bridge in Lagos, Nigeria in black and white"
                        className="bridge-image"
                    />

                    <br />Lagos <br /> ₦300,000 + Fueling <br /> <div className="book-subtext">
                        <Link to="/book-now" className="booking-btn">
                            Book Now
                        </Link>
                    </div></div>
                <div className="interstate-route">
                    <img
                        src="https://images.pexels.com/photos/31524884/pexels-photo-31524884/free-photo-of-scenic-hilltop-view-in-enugu-nigeria.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Scenic hilltop view in Enugu, Nigeria"
                        className="enugu-image"
                    />
                    <br />Enugu <br />₦100,000 + Fueling<br /> <div className="book-subtext">
                        <Link to="/book-now" className="booking-btn">
                            Book Now
                        </Link>
                    </div></div>
                <div className="interstate-route">
                    <img
                        src="https://images.pexels.com/photos/30287670/pexels-photo-30287670/free-photo-of-serene-wooden-boat-on-calm-river-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Serene wooden boat on calm river waters"
                        className="boat-image"
                    />
                    <br />Bayelsa <br /> ₦80,000 + Fueling<br /> <div className="book-subtext">
                        <Link to="/book-now" className="booking-btn">
                            Book Now
                        </Link>
                    </div></div>
            </div>
        </div>






        <div className="service-page">


            <h1 className='heading-for-services'>What You Can Count On</h1>

            <section className="service-container">
                <div className="service-item">
                    <div className="service-text">
                        <h3>Safe & Comfy Rides</h3>
                        <p>Enjoy stress-free travel in premium vehicles with pro drivers and real-time tracking.</p>
                    </div>
                    <img
                        className="service-image"
                        src="https://images.pexels.com/photos/4606338/pexels-photo-4606338.jpeg"
                        alt="Travel safely and comfortably across 36 states"
                    />

                </div>

                <div className="service-item">
                    <img
                        className="service-image"
                        src="https://images.pexels.com/photos/7085769/pexels-photo-7085769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Budget Price for your travel needs"
                    />


                    <div className="service-text">
                        <h3>Budget Price</h3>
                        <p>Ride in style with AC, smooth seats, and zero hidden fees.</p>
                    </div>
                </div>

                <div className="service-item">
                    <div className="service-text">
                        <h3>FastTrack Delivery</h3>
                        <p>Quick, secure shipping with real-time tracking—on time, every time.</p>
                    </div>
                    <img
                        className="service-image"
                        src="https://images.pexels.com/photos/6969842/pexels-photo-6969842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="FastTrack Delivery"
                    />

                </div>
            </section>
        </div>

        <section
            className="why-bliz-section"
            style={{
                backgroundImage: "url('https://images.pexels.com/photos/17519357/pexels-photo-17519357/free-photo-of-silver-toyota-4-runner.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                padding: "60px 20px",
                height: "700px",
                color: "#fff",
            }}
        >
            <div className="why-bliz-content">
                <h2 className="why-bliz-heading">Why You Should Use Bliz</h2>
                <ul className="why-bliz-list">
                    <li>✔ Top-tier security for every trip</li>
                    <li>✔ Vetted and professional drivers</li>
                    <li>✔ Spotless, well-maintained vehicles</li>
                    <li>✔ Comfortable interiors designed for long rides</li>
                    <li>✔ Tinted windows for privacy and sun protection</li>
                    <li>✔ Fast and secure shipping</li>
                </ul>
            </div>
            <div className='learn'><Link className="learn-btn" to="/about-us">
                Learn more 	&#x279C;
            </Link></div>



        </section>








        {/* <section className='how-to-book'>
            <h2 className='how-to-book-heading'>How to Book</h2>
            <div className='how-to-book-steps'>
                <div className='step'>
                    <div className='step-number'>1</div>
                    <div className='step-text'>
                        <h2>Choose your service</h2>
                        <p>Pick the ride or package that fits your travel needs.</p>
                    </div>
                </div>
                <div className='step'>
                    <div className='step-number'>2</div>
                    <div className='step-text'>
                        <h2>Fill in your travel details</h2>
                        <p>Enter your pickup point, destination, date, and time.</p>
                    </div>
                </div>
                <div className='step'>
                    <div className='step-number'>3</div>
                    <div className='step-text'>
                        <h2>Confirm and enjoy your ride</h2>
                        <p>Review the details, confirm your booking, and you're all set!</p>
                    </div>
                </div>
            </div>
        </section> */}



        <div className='booking-conditions'>

            <h2 className='bookingCon-heading'><strong>Booking Conditions</strong></h2>
            <p className="guideline-intro">
                Please review the following rental guidelines for a smooth and stress-free experience.
            </p>

            <section className="rental-guidelines">


                <div className="guideline-row">
                    <div className="guideline-image">
                        <img
                            src="https://images.pexels.com/photos/5448160/pexels-photo-5448160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Map Illustration"
                        />
                    </div>
                    <div className="guideline-text">
                        <li><strong>Interstate rentals only.</strong></li>
                        <p>This service is available only for travel between states, not for local or within-city trips.</p>
                    </div>
                </div>

                <div className="guideline-row">
                    <div className="guideline-image">
                        <img
                            src="https://images.pexels.com/photos/4606350/pexels-photo-4606350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Dedicated Vehicle Service"
                        />
                    </div>
                    <div className="guideline-text">
                        <li>Includes a driver and dedicated vehicle.</li>
                        <p>Every booking comes with a professional driver and vehicle reserved just for you.</p>
                    </div>
                </div>

                <div className="guideline-row">
                    <div className="guideline-image">
                        <img
                            src="https://images.pexels.com/photos/18911015/pexels-photo-18911015/free-photo-of-a-clock-on-a-white-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Hourglass Illustration"
                        />
                    </div>
                    <div className="guideline-text">
                        <li>Minimum rental: 10 hours.</li>
                        <p>Trips must be booked for at least 10 hours to qualify for our rental service.</p>
                    </div>
                </div>

                <div className="guideline-row">
                    <div className="guideline-image">
                        <img
                            src="https://images.pexels.com/photos/4173092/pexels-photo-4173092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Luggage Capacity"
                        />
                    </div>
                    <div className="guideline-text">
                        <li>Max 4 passengers, 2 suitcases & 1 carry-on.</li>
                        <p>To ensure comfort and safety, luggage and seating are limited to standard sedan capacity.</p>
                    </div>
                </div>

                <div className="guideline-row">
                    <div className="guideline-image">
                        <img
                            src="https://images.pexels.com/photos/2881027/pexels-photo-2881027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Wait Time"
                        />
                    </div>
                    <div className="guideline-text">
                        <li>Driver waits max 15 mins after pick-up time.</li>
                        <p>Please be on time—drivers can only wait up to 15 minutes beyond the scheduled time.</p>
                    </div>
                </div>

                <div className="guideline-row">
                    <div className="guideline-image">
                        <img
                            src="https://images.pexels.com/photos/6200716/pexels-photo-6200716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Child's Seat"
                        />
                    </div>
                    <div className="guideline-text">
                        <li>Extra charge for child seats.</li>
                        <p>If you need a child or infant car seat, let us know in advance—an extra fee will apply.</p>
                    </div>
                </div>
            </section>


        </div>






    </div>
    </>
);

export default Home;
