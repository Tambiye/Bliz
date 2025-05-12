import React from 'react';

const states = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
    "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa",
    "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger",
    "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
];

const BookNow = () => {
    return (
        <>
            <div className="booking-section">
                <h1>Book Us</h1>
                <p><span className="highlight-booking">Bliz</span> is your partner for your next trip.</p>
                <p>We are here to make your travel experience as smooth as possible.</p>
                <p className="highlight-booking">Kindly pick the appropriate form for the service you require from Bliz below.</p>
            </div>

            <h2 className="text-yourtrip">Book Your Trip!!!</h2>

            <div className="book-now-container">

                {/* Within State Booking */}
                <div className="booking-box within-state">
                    <div className="tab ">Within State Rides</div>

                    <form className="form">
                        <input type="text" placeholder="Pick Up Address" />
                        <input type="text" placeholder="Drop Off Address" />
                        <input type="text" placeholder="One Way" />
                        <input
                            type="text"
                            placeholder="DD/MM/YYYY"
                            pattern="\d{2}/\d{2}/\d{4}"
                            title="Enter date in DD/MM/YYYY format"
                            required
                        />
                        <label>
                            Time:
                            <div className="time-select">
                                <select>
                                    {Array.from({ length: 24 }, (_, i) => (
                                        <option key={i} value={i.toString().padStart(2, '0')}>
                                            {i.toString().padStart(2, '0')}
                                        </option>
                                    ))}
                                </select>
                                <select>
                                    {['00', '15', '30', '45'].map((min, i) => (
                                        <option key={i} value={min}>{min}</option>
                                    ))}
                                </select>
                            </div>
                        </label>
                        <button type="submit" className="proceed-button">Proceed</button>
                    </form>
                </div>

                {/* Interstate Booking */}
                <div className="booking-box interstate">
                    <h2 className="tab">Interstate Rides</h2>
                    <form className="form">
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email" />
                        <select>
                            <option value="">Travelling From</option>
                            {states.map((state, index) => (
                                <option key={index} value={state}>{state}</option>
                            ))}
                        </select>
                        <select>
                            <option value="">Travelling To</option>
                            {states.map((state, index) => (
                                <option key={index} value={state}>{state}</option>
                            ))}
                        </select>
                        <input
                            type="text"
                            placeholder="DD/MM/YYYY"
                            pattern="\d{2}/\d{2}/\d{4}"
                            title="Enter date in DD/MM/YYYY format"
                            required
                        />
                        <button type="submit" className="proceed-button">Proceed</button>
                    </form>
                </div>

                {/* Delivery Booking */}
                <div className="booking-box delivery">
                    <form className="form">
                        <h2 className="tab">Delivery Form</h2>
                        <input type="text" placeholder="Sender's Name" required  />
                        <input type="text" placeholder="Pickup Address" required />
                        <input type="tel" placeholder="Sender's Phone Number" required  />
                        <input type="text" placeholder="Receiver's Name" required  />
                        <input type="text" placeholder="Delivery Address" required />
                        <input type="tel" placeholder="Receiver's Phone Number" required  />
                        <button type="submit" className="proceed-button">Proceed</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookNow;
