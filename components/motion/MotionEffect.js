"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MotionEffect = ({
  children,
  effect,
  anchorPlacement,
  duration,
  delay,
  className,
}) => {
  useEffect(() => {
    console.log("Initializing AOS");
    AOS.init();
    AOS.refresh();

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div
      data-aos={effect}
      data-aos-duration={duration}
      data-aos-delay={0}
      data-aos-anchor-placement={anchorPlacement}
      className={className}
    >
      {children}
    </div>
  );
};

export default MotionEffect;
