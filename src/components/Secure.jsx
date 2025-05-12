import { lazyLoadings } from "@richaadgigi/stylexui";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Secure = () => {
    useEffect(() => {
      lazyLoadings();
    }, []);
    return (
      <>  <section className="xui-d-flex xui-flex-jc-center xui-pt-6  xui-flex-ai-center xui-flex-col ">

      <div className="xui-fluid-50">
    <div className="xui-w-400 xui-h-100 xui-font-w-700 xui-font-sz-[48px] xui-text-[var(--deep-blue)]">
      Secure
    </div>
    <div className="xui-w-400  xui-h-100 xui-font-sz-[18px] xui-opacity-6 xui-letter-spacing-half">
      With <strong className="xui-text-[var(--vibrant-orange)]">Bliz</strong>, luxury is more than comfort —
      it's the seamless experience, thoughtful details, and premium quality that define every mile.
    </div>
  
   
  </div>
  <div className="xui-fluid-50">
    
  
  <div className="xui-w-400 xui-h-100 xui-font-sz-[18px] xui-opacity-6 xui-letter-spacing-half">
      At <strong className="xui-text-[var(--vibrant-orange)]">Bliz</strong>, security is our foundation.
      Every journey begins with peace of mind, backed by state-of-the-art protection and unwavering trust.
    </div>
    <div className=" xui-w-400  xui-h-100 xui-font-w-700 xui-font-sz-[48px] xui-text-[var(--vibrant-orange)]">
      Luxury
    </div>
    </div>
    <div className="xui-d-flex xui-jc-center xui-pt-6 xui-mt-30px">
    <img
      src="/pexels/pexels-gustavo-fring-6817000.jpg"
      alt="Bliz transport luxury vehicle"
      className=" xui-h-500 xui-object-center xui-rounded-[20px]"
    />
  </div>
  
  </section>
        </>
    );
  };
  
  export default Secure;