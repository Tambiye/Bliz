import React from 'react';

const BookNow = () => {
    return (
        <div className="book-now-wrapper">
            <div className="min-h-screen ">
                <div className="bg-white">


                    <div></div>

                    <div><div>Make Travel Effortless with Our Interstate Rides</div>
                        Book clean, comfortable rides driven by trusted pros—across cities, across states.

                    </div>
                    <h2 className="text-2xl">Book Your Trip</h2>
                    <form className="space-y-6">
                        <div className="grid">
                            <div>
                                <label htmlFor="names" className="block">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="names"
                                    placeholder="John Doe"
                                    className="mt-1 "
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block ">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="olivia@untitledui.com"
                                    className="mt-1"
                                />
                            </div>
                        </div>

                        <div className="grid">
                            <div>
                                <label className="block ">
                                    Travelling From
                                </label>
                                <select className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none">
                                    <option value="placeholder">Departure</option>
                                    {states.map((state, index) => (
                                        <option key={index} value={state}>{state}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Travelling To
                                </label>
                                <select className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none">
                                    <option value="placeholder">Arrival</option>
                                    {states.map((state, index) => (
                                        <option key={index} value={state}>{state}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                                Select a Date
                            </label>
                            <input
                                type="date"
                                id="date"
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                            />
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-purple-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-purple-700 transition duration-300"
                            >
                                Proceed
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const states = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
    "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa",
    "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger",
    "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
];

export default BookNow;
