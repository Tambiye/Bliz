import React from 'react';

const Services = () => {
    return (<>
        <div className="service-main-heading">
            Our Services</div>
        <div className="services-main-subtext">
            <p>We bring you <span>Premium</span> and <span>Comfortable</span> rides. Everything made for your satisfaction.</p></div>
        <div className="services-main-container">



            <section className="service-main-container">
                <div className="service-main-item">
                    <img className="service-main-image"
                        src="https://images.pexels.com/photos/5717578/pexels-photo-5717578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2jpeg"

                        alt="Smiley woman having coffee and looking at smartphone from her car"
                    />

                    <div className="service-main-text">
                        <h2>Airport Service</h2>
                        Step off the plane and into luxury with Bliz.
                        Our premium airport pick-up service guarantees a smooth and stress-free
                        ride from the airport to your destination.

                    </div>

                </div>

                <div className="service-main-item">
                    <div className="service-main-text">
                        <h2>Wedding Car Hire</h2>
                        Make an unforgettable entrance on your big day with our premium wedding car hire service.

                        Arrive in style, leave in grandeur—because your wedding day deserves nothing less than perfection.
                    </div>

                    <img className="service-main-image"
                        src="https://img.freepik.com/free-photo/low-angle-people-celebrating-wedding-nature_23-2150639513.jpg?t=st=1743721695~exp=1743725295~hmac=d09d6a82def25a6425313336a1f5bbfab9d041764bd84817060d3e839edb94fe&w=1000"
                        alt="People celebrating a wedding in nature"
                    />

                </div>

                <div className="service-main-item">
                    <img className="service-main-image"
                        src="https://images.pexels.com/photos/8425027/pexels-photo-8425027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Businesswoman getting into a taxi cab"

                    />


                    <div className="service-main-text">
                        <h2>Chauffeur Service</h2>
                        Elevate your experience with a personal chauffeur at your service.
                        for business, leisure, or a special occasion, enjoy a seamless ride in absolute comfort.
                    </div>
                </div>

                <div className="service-main-item">
                    <div className="service-main-text">
                        <h2>Car Rental</h2>
                        Rent a reliable car that's clean and in great condition, ready for you to drive yourself.

                        Whether you need a car for a day or a longer trip,
                        we provide flexible rental options to make your journey easier and hassle-free.
                    </div>

                    <img className="service-main-image"
                        src="https://img.freepik.com/free-photo/stylish-black-woman-car-salon_1157-21421.jpg?t=st=1743722974~exp=1743726574~hmac=a6f72ae0bc89d2606905861ccf489bde73050a97610c429d8d4d2dbfb5f2f52f&w=1000"
                        alt="Stylish black woman in a car salon"
                    />

                </div>

                <div className="service-main-item">
                    <img className="service-main-image"
                        src="https://img.freepik.com/free-photo/close-up-delivery-person-with-parcel_23-2149095903.jpg?t=st=1743723506~exp=1743727106~hmac=5a3909e9de2f70755e572f114253698536c2f87aa3340f9918d7f7085cf44e4f&w=1100"
                        alt="Delivery person with parcel"
                    />

                    <div className="service-main-text">
                        <h2>Express Delivery</h2>
                        Whether it’s a last-minute gift or an important document,
                        our express delivery service guarantees swift, secure, and hassle-free shipping,
                        right to your doorstep.
                    </div>

                </div>

                <div className="service-main-item">
                    <div className="service-main-text">
                        <h2>Interstate Travel</h2>
                        Enjoy safe and comfortable travel across states with our clean vehicles and professional, vetted drivers.
                    </div>

                    <img className="service-main-image"
                        src="https://images.pexels.com/photos/8052230/pexels-photo-8052230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Passenger ready for interstate travel"
                    />
                </div>
                


            </section>
            <div className="process-container">
                <h2 className="process-heading">How It Works</h2>
                <p className="process-subtext">Follow these simple steps to get started with our premium service.</p>

                <div className="process-steps">
                    <div className="step-box">
                        <h3>1. Browse Services</h3>
                        <p>Explore and choose the service that fits your needs best.</p>
                    </div>

                    <div className="arrow">➔</div>

                    <div className="step-box">
                        <h3>2. Book Appointment</h3>
                        <p>Schedule your service easily through our online system.</p>
                    </div>

                    <div className="arrow">➔</div>

                    <div className="step-box">
                        <h3>3. Consult with Expert</h3>
                        <p>Speak with our specialists to finalize your details.</p>
                    </div>

                    <div className="arrow">➔</div>

                    <div className="step-box">
                        <h3>4. Get Service</h3>
                        <p>Relax and enjoy your premium service experience!</p>
                    </div>
                </div>
            </div>


        </div></>
    );
};

export default Services;