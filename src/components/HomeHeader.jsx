import { lazyLoadings } from "@richaadgigi/stylexui";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HomeHeader = () => {
    useEffect(() => {
        lazyLoadings();
    }, []);
    return (
        <>
        <header className='xui-container xui-py-3 xui-lg-py-8 xui-xl-py-10'>
            <div className='xui-text-center'>
                <h1 className='xui-font-sz-[24px] xui-lg-font-sz-[64px]'>Move freely.<br /> <span className='xui-text-[var(--vibrant-orange)]'>Anytime</span>. <span className='xui-text-[var(--deep-blue)]'>Anywhere</span>.</h1>
                <p className='xui-font-sz-[20px] xui-opacity-6 xui-lg-w-fluid-50 xui-mx-auto xui-mt-1-half'>Bliz is your all-in-one transport and logistics platform—fast, safe, and hassle-free</p>
                <Link to={"/"} className='xui-btn xui-mt-2 xui-font-sz-[16px] xui-bg-[var(--deep-blue)] xui-text-white'>Try it out now</Link>
            </div>
        </header>
        <section className='xui-overflow-x-hidden'>
            <img src="/static/images/banners/gac-gs3-car-in-front-of-a-park-compressed.png" alt="GAC GS3 car in front of a park" width={1920} height={1080} className='xui-w-fluid-100 xui-h-600 xui-img-lazy' style={{objectPosition: 'bottom'}} xui-img-src='/static/images/banners/gac-gs3-car-in-front-of-a-park.png' />
        </section>
        </>
    );
};

export default HomeHeader;