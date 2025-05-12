import { lazyLoadings } from "@richaadgigi/stylexui";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Philosophy = () => {
  useEffect(() => {
    lazyLoadings();
  }, []);
  return (
    <><section className="xui-d-flex xui-flex-jc-center  xui-flex-ai-center xui-m-4">
      <div className="xui-w-fluid-30 xui-p-1-half xui-h-500">
        <h2 className="xui-font-sz-[24px]  xui-text-[var(--deep-blue)] xui-lg-font-sz-[56px]">Our <br />Philosophy</h2>
        <p className="xui-letter-spacing-half xui-h-200 xui-w-550 xui-font-sz-[18px] xui-opacity-6 ">
          At <strong className="xui-text-[var(--vibrant-orange)] xui-font-sz-[24px]">Bliz</strong>, we believe that every journey should be a flawless blend of
          <strong className="xui-text-[var(--deep-blue)] xui-font-sz-[24px] "> security, luxury, and peace of mind</strong>. <br />Our philosophy is simple:
          <strong className="xui-text-[var(--deep-blue)] xui-font-sz-[24px]"> your safety is our highest priority</strong>, and your comfort is our promise.
        </p>
      </div>
      <div className="xui-w-fluid-70 xui-mt-20px ">
        <img
          src="/pexels/pexels-ronailson-1978125.jpg"
          alt="Transport vehicle from Pexels"

          className='xui-w-fluid-100 xui-h-500 xui-object-fit-contain'
        />

      </div>

      
    </section>

    


    </>
  );
};

export default Philosophy;