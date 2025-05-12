import { lazyLoadings } from "@richaadgigi/stylexui";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Securitymeetsstyle = () => {
  useEffect(() => {
    lazyLoadings();
  }, []);

  return (
    <>  
      <section className="xui-d-flex xui-fw-wrap xui-flex-jc-center xui-flex-ai-center xui-gap-20px xui-p-0 xui-m-0">
        <div className="xui-w-400 xui-h-100 xui-font-sz-[18px] xui-opacity-6 xui-letter-spacing-half xui-m-0 xui-p-0">
          <p>
            With <strong>Bliz</strong>, <strong>security meets style</strong>. From trained drivers to high-end cars, every ride is built to keep you <strong>safe and comfortable</strong>.
          </p>
        </div>

        <div className="xui-w-400 xui-h-100 xui-font-sz-[18px] xui-opacity-6 xui-letter-spacing-half xui-m-0 xui-p-0">
          <p>
            We go beyond transport. <strong>Bliz</strong> makes sure you <strong>trust every ride</strong>—with cutting-edge safety and premium features.
          </p>
        </div>
      </section>

      <div className="xui-d-flex xui-text-al-center xui-flex-jc-center xui-flex-ai-center xui-font-sz-[20px] xui-opacity-6 xui-letter-spacing-half xui-m-0 xui-p-0">
        <p>
          At <strong>Bliz</strong>, your journey is our promise: <strong>secure, smooth, and elevated</strong>.
        </p>
      </div>
    </>
  );
};

export default Securitymeetsstyle;
