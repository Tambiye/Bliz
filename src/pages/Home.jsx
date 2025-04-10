import React from 'react';
import { Location, Time, Globe, DeliveryTruck } from "@carbon/icons-react";

const Home = () => (
    <div>
        <div className="home-container">
            <div className="hero-section">
                <div className="tagline"><span>Bliz </span><br /> Move freely.<br /> Anytime. Anywhere.</div>
                <h1>Bliz is your all-in-one transport and logistics platform—fast, safe, and hassle-free</h1>
            </div>
        </div>
        <div
            className="xui-bg-light xui-w-full xui-h-500 xui-bg-size-cover"
            style={{
                backgroundImage: "url('https://images.pexels.com/photos/18029645/pexels-photo-18029645/free-photo-of-three-toyota-land-cruiser.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed"
            }}
        >
        </div>


        <div>
            <div className="homepage-service-heading">Our services</div>
            <div className="homepage-service-subtext">
                <p>We bring you <span>Premium</span> and <span>Comfortable</span></p>
                <p className="chauffer-service">Chauffeur Service.</p>
            </div>
        </div>




        <div className="block-services">

            <div className="service airport-transfers city-bg">
                <div className="text-overlay">
                    <h2 className="highlight">Airport Transfers</h2>
                    <p className="highlight small">Stress-free pickup and drop-off for all flights.</p>
                </div>
            </div>

            <div className="service intercity-travel travel-bg">
                <div className="text-overlay">
                    <h2 className="highlight">City & State Travel</h2>
                    <p className="highlight small">Comfortable rides between cities and states.</p>
                </div>
            </div>

            <div className="service car-rental rental-bg">
                <div className="text-overlay">
                    <h2 className="highlight">Car Rentals</h2>
                    <p className="highlight small">Quality vehicles for your travel needs.</p>
                </div>
            </div>

            <div className="service logistics delivery-bg">
                <div className="text-overlay">
                    <h2 className="highlight">Logistics</h2>
                    <p className="highlight small">Reliable pickup and delivery services.</p>
                </div>
            </div>

        </div>

        <div className="cost-known">

            <div class="shipping-info">
                <h2>Shipping</h2>
                <div class="shipping-details">
                    <p>Under 5 Kilometers = ₦10,000</p>
                </div>
            </div>

            <div class="booking-info">
                <h2>Booking</h2>
                <div class="booking-details">
                    <p>An Hour = ₦15,000</p>
                    <p>Full Day (10 Hours) = ₦80,000 + Fueling</p>
                </div>
            </div>

            <div class="interstate-info">
                <h2>Interstate </h2>
                <div class="interstate-details">
                    &nbsp;Lagos&nbsp;&nbsp;&nbsp;&nbsp; =&nbsp; ₦300,000 &nbsp; + Fueling<br />
                    &nbsp;Enugu&nbsp;&nbsp;&nbsp;&nbsp; = &nbsp;₦100,000 &nbsp;&nbsp;+ Fueling<br />
                    Bayelsa&nbsp;&nbsp; = &nbsp;₦  80,000 &nbsp;&nbsp;&nbsp;&nbsp;+ Fueling
                </div>
            </div>
        </div>




        <div className="service-page">


            <h1 className='heading-for-services'>What You Can Count On.</h1>

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
        <section className='clean-cars'><div className='safe-clean'>Clean, comfortable  cars and highly vetted drivers.</div>
            <div className='vetted'>We take pride in offering clean, comfortable cars for every ride, paired with highly vetted drivers who are committed to your safety and comfort. Whether you're heading out
                for a quick trip or a long journey, we ensure a smooth, enjoyable experience from start to finish.</div></section>
        <div className='booking-conditions'>

            <h2 className='bookingCon-heading'><strong>Booking Conditions</strong></h2>

            <section className="rental-guidelines">
                <div className="guideline-row">
                    <div className="guideline-image">

                        <img
                            src="https://images.pexels.com/photos/5448160/pexels-photo-5448160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Map Illustration"
                        />


                    </div>
                    <div className="guideline-text">
                        <li><strong>Rental Service:</strong> Only interstate.</li>
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
                        <li>For safety and convenience, every booking includes a dedicated vehicle and driver.</li>

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
                        <li>Rental service is available for a minimum of 10 hours.</li>
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
                        <li>Maximum capacity per sedan is 4 passengers, with a total luggage limit of 2 suitcases plus 1 carry-on bag.

                        </li>
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
                        <li>Your driver will wait for a maximum of 15 minutes after your scheduled pick-up time.</li>
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
                        <li>Additional charges apply if a larger vehicle or child or infant car seat is required.</li>
                    </div>
                </div>
            </section>

        </div>






    </div>
);

export default Home;
