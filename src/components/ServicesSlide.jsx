import React from 'react';
import { Link } from 'react-router-dom';

const ServicesSlide = (props) => {
    const { heading, description, image, link, button } = props;
    return (
        <>
        <div class={`xui-bg-blend-overlay xui-overlay-1 xui-p-1 xui-md-p-1-half xui-md-pb-[280px] xui-bg-size-cover xui-bg-position-center xui-bg-img-[url(${image})]`}>
            <h2 className="xui-font-sz-[28px]">{heading}</h2>
            <p className="xui-font-sz-[17px] xui-mt-half xui-line-height-1-half xui-w-fluid-90">{description}</p>
            <Link to={link} className='xui-btn xui-mt-2 xui-font-sz-[14px] xui-bg-[var(--vibrant-orange)] xui-text-white'>{button}</Link>
        </div>
        </>
    );
};

export default ServicesSlide;