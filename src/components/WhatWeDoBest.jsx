import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Link } from "react-router-dom";
import ServicesSlide from "./ServicesSlide";

const WhatWeDoBest = () => {
    return (
        <>
        <section className="xui-py-3 xui-lg-py-5">
            <div className="xui-container xui-text-center">
                <h2 className='xui-font-sz-[24px] xui-lg-font-sz-[56px]'>Our services</h2>
                <p className='xui-font-sz-[18px] xui-opacity-6 xui-lg-w-fluid-50 xui-mx-auto xui-mt-1'>We bring you Premium and Comfortable Chauffeur Service.</p>
            </div>
            <div className="xui-mt-2 xui-lg-mt-4">
                <Swiper
                    slidesPerView={1.2}
                    spaceBetween={20}
                    slidesOffsetBefore={20}
                    slidesOffsetAfter={20}
                    breakpoints={{
                        576: {
                            slidesOffsetBefore: 25,
                            slidesOffsetAfter: 25,
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesOffsetBefore: 50,
                            slidesOffsetAfter: 50
                        },
                        1024: {
                            slidesPerView: 3.8,
                            spaceBetween: 20,
                            slidesOffsetBefore: 75,
                            slidesOffsetAfter: 75
                        },
                        1440: {
                            slidesOffsetBefore: 100,
                            slidesOffsetAfter: 100
                        }
                    }}
                >
                    <SwiperSlide>
                        <ServicesSlide heading={'Airport Transfers'} description={'Stress-free pickup and drop-off for all flights.'} image={'/static/images/cards/lady-arriving-from-the-airport.png'} link={'/'} button={'Get Started'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesSlide heading={'City & State Travel'} description={'Comfortable rides between cities and states.'} image={'/static/images/cards/couples-preparing-their-bags-for-a-trip.png'} link={'/'} button={'Get Started'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesSlide heading={'Car Rentals'} description={'Quality vehicles for your travel needs.'} image={'/static/images/cards/portrait-young-woman-with-afro-dreadlocks-posing-with-car.png'} link={'/'} button={'Get Started'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesSlide heading={'Logistics'} description={'Reliable pickup and delivery services.'} image={'/static/images/cards/order-arrangement-car-trunk.png'} link={'/'} button={'Get Started'} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
        </>
    );
};

export default WhatWeDoBest;