import React from 'react';

const Services = () => {
    return (
        <div className="service-page">
            <h1 className='heading-for-services'>Our Services</h1>


            <section className="safe-travel">
                <figure className="image-container">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1677419807331-072575b7f26d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Travel safely and comfortably across 36 states"
                    />
                </figure>
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
                <figure className="image-container">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1681760172383-533fca9d8903?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Affordable first-class travel service"
                    />
                </figure>
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
                <figure className="image-container">
                    <img
                        src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVsaXZlcnl8ZW58MHx8MHx8fDA%3D"
                        alt="FastTrack Ground Service ensuring speedy delivery"
                    />
                </figure>
                <div className="text-container">
                    <h3>FastTrack Ground Service – Speedy Delivery to 36 States!</h3>
                    Need quick and reliable shipping? Our Expedited Ground Service ensures
                    fast and secure delivery to 36 states with optimized
                    routes and real-time tracking. Get your packages where they need to be—
                    on time, every time!
                </div>
            </section>



           
        </div>
    );
};

export default Services;