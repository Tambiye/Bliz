import React from 'react';

const Services = () => {
    return (<>
        <div className="service-heading">
            Our Services</div>
        <div className="services-container">

            <div className="service freight">
                <img
                    src="https://files.oaiusercontent.com/file-VLjpCM2z4rq7ZMunne48Dv?se=2025-03-21T15%3A53%3A24Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Ded5132fb-1da6-423d-906b-eb020e2a359f.webp&sig=KJK8WaT/gC75VMQAUFHxpHon/ysynhciwkpWMrrbD70%3D"
                    alt="Professional logistics service handling shipments with efficiency"
                    style={{ width: "300px", height: "300px" }}
                />

                <h2>Reliable Freight & Logistics</h2>
                From small packages to large cargo, we handle it all with precision and care.
                Our efficient freight solutions ensure timely deliveries, keeping your business moving without delays.
            </div>

            <div className="service passenger">
                <img
                    src="https://cdn.pixabay.com/photo/2019/05/17/14/47/bus-4209838_1280.jpg"
                    alt="Black passengers enjoying a comfortable and cheerful bus ride"
                    style={{ width: "300px", height: "300px" }}
                />


                <h2>Safe & Comfortable Travel</h2>
                We don’t just move goods—we move people too! Whether it’s a short city ride or
                a long-distance journey, our modern fleet guarantees comfort, safety, and affordability.
            </div>

            <div className="service global">
                <img
                    src="https://cdn.pixabay.com/photo/2018/09/19/12/37/ecommerce-3688436_1280.jpg"
                    alt="E-commerce and online shopping concept"
                    style={{ width: "300px", height: "300px" }}
                />

                <h2>Worldwide Connectivity</h2>
                Air, land, or sea—we connect you to destinations around the world. Our
                seamless international shipping ensures hassle-free transport, wherever you need to go.
            </div>
        </div></>
    );
};

export default Services;